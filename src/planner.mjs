import { Octokit, } from "octokit";
import fs from 'node:fs/promises';
import path from 'path';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { Command, Option } from 'commander';
const program = new Command();

program
  .name('movie-challenge-planner')
  .description('CLI to create planning for Movie Challenge as Github Project')
  .addOption(new Option('-c, --cohort <value>', 'Laboratoria cohort (DEVXXX or SAPXXX)').makeOptionMandatory())
  .addOption(new Option('-t, --token <value>', 'Github Personal Access Token').makeOptionMandatory())
  .addOption(new Option('-l, --lang <value>', 'Language for planning').makeOptionMandatory().choices(['es', 'pt']))
  .addOption(new Option('-f, --framework <value>', 'Framework for planning').makeOptionMandatory().choices(['react', 'angular']))
  .addOption(new Option('-us, --user-story <number>', 'User story to plan').makeOptionMandatory().choices(['1', '2', '3', '4', '5']))
  .addOption(new Option('-d, --delay <number>', 'Delay in seconds between Github API requests').default(3, 'three seconds'))  

program.parse();

const options = program.opts();

const { cohort, token, lang, framework, userStory, delay, dryRun } = options;
const ORGANIZATION_NAME = `Laboratoria`;
const BASE_REPO_NAME = `${cohort}-movie-challenge-fw`;
const NEW_REPO_NAME = BASE_REPO_NAME;
const PROJECT_NAME = NEW_REPO_NAME;

const octokit = new Octokit({ auth: token });

async function getOwner() {
  const query = `
    query {
      viewer {
        id
        login
      }
    }
  `;

  const result = await graphqlRequest(query);
  return { id: result.viewer.id, login: result.viewer.login };
}

async function getProjects(login, projectName) {
  const condition = `is:open ${projectName}`;
  const query = `
    query getProjects ($login: String!, $condition: String!) {
      user (login: $login) {
        projectsV2 (first: 1, query: $condition) {
          nodes {
            id
          }
        }
      }
    }
  `;
  const variables = {
    login,
    condition
  };
  try {
    const result = await graphqlRequest(query, variables);    
    return result?.user?.projectsV2?.nodes?.[0]?.id;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

async function getRepository(repoName, ownerLogin, milestoneTitle) {
  const conditionMilestone = `${milestoneTitle}`;
  const query = `
    query getRepository ($name: String!, $owner: String!, $condition: String){
      repository (name: $name, owner: $owner) {
        id,
        milestones(first: 100, query: $condition){
          nodes {
            id
            number
            issues(first: 100){
              nodes {
                id
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    name: repoName,
    owner: ownerLogin,
    condition: conditionMilestone,
  };
  try {
    const result = await graphqlRequest(query, variables);
    return result?.repository;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

async function forkRepository(ownerLogin) {
  const result = await octokit.request(`POST /repos/${ORGANIZATION_NAME}/${BASE_REPO_NAME}/forks`, {
    owner: ownerLogin,
    repo: BASE_REPO_NAME,
  });
  return result.data.node_id;
}

async function createRepository(name) {
  const mutation = `
      mutation CreateRepository($name: String!) {
        createRepository(input: { name: $name, visibility: PUBLIC }) {
          repository {
            id
          }
        }
      }
    `;

  const variables = {
    name,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.createRepository.repository.id;
}

async function deleteRepository(ownerLogin, repositoryName) {
  const result = await octokit.rest.repos.delete({
    owner: ownerLogin,
    repo: repositoryName
  });
  return result;
}

async function enableRepositoryIssues(repositoryId) {
  const mutation = `
    mutation enableRepositoryIssues($repositoryId: ID!) {
      updateRepository(input: { repositoryId: $repositoryId, hasIssuesEnabled: true }) {
        repository {
          id
        }
      }
    }
  `;

  const variables = {
    repositoryId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.updateRepository.repository.id;
}

async function createProject(title, ownerId, repositoryId) {
  const mutation = `
    mutation CreateProjectV2($title: String!, $ownerId: ID!, $repositoryId: ID) {
        createProjectV2(input: { title: $title, ownerId: $ownerId, repositoryId: $repositoryId }) {
        projectV2 {
          id
        }
      }
    }
  `;

  const variables = {
    title,
    ownerId,
    repositoryId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.createProjectV2.projectV2.id;
}

async function setProjectToPublic(projectId) {
  const mutation = `
    mutation UpdateProjectV2($projectId: ID!) {
        updateProjectV2(input: { projectId: $projectId, public: true }) {
        projectV2 {
          id
        }
      }
    }
  `;

  const variables = {
    projectId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.updateProjectV2.projectV2.id;
}

async function deleteProject(ownerId, projectId) {
  const mutation = `
    mutation deleteProject($clientMutationId: String, $projectId: ID!) {
      deleteProjectV2(input: { clientMutationId: $clientMutationId, projectId: $projectId }) {
        projectV2 {
          id
        }
      }
    }
  `;

  const variables = {
    ownerId,
    projectId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.deleteProjectV2.projectV2.id;
}

async function createMilestone(ownerLogin, repositoryName, title, description) {
  const result = //await octokit.rest.milestones.create({
    await octokit.request("POST /repos/{owner}/{repo}/milestones", {
      owner: ownerLogin,
      repo: repositoryName,
      title,
      description
    });
  return result.data.node_id;
}

async function deleteMilestone(ownerLogin, repositoryName, milestoneNumber) {
  const result = //await octokit.rest.milestones.create({
    await octokit.request("DELETE /repos/{owner}/{repo}/milestones/{milestone_number}", {
      owner: ownerLogin,
      repo: repositoryName,
      milestone_number: milestoneNumber
    });
  return result;
}

async function getMilestone(ownerLogin, repositoryName, title) {
  const result = await octokit.request(`GET /repos/${ownerLogin}/${repositoryName}/milestones`, {
    owner: ownerLogin,
    repo: repositoryName,
  });
  const milestones = result.data ?? [];
  return milestones.find(milestone => milestone.title === title);
}

async function createIssue(repositoryId, milestoneId, title, body,) {
  const mutation = `
    mutation CreateIssue($body: String, $repositoryId: ID!, $milestoneId: ID, $title: String!) {
      createIssue(input: { body: $body, repositoryId: $repositoryId, milestoneId: $milestoneId, title: $title }) {
        issue {
          id
        }
      }
    }
  `;

  const variables = {
    title,
    body,
    repositoryId,
    milestoneId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.createIssue.issue.id;
}

async function deleteIssue(issueId) {
  const mutation = `
    mutation DeleteIssue($issueId: ID!) {
      deleteIssue(input: { issueId: $issueId }) {
        clientMutationId
      }
    }
  `;

  const variables = {
    issueId
  };

  const result = await graphqlRequest(mutation, variables);
  return result.clientMutationId;
}

async function linkIssueToProject(issueId, projectId) {
  const mutation = `
    mutation linkIssueToProject($projectId: ID!, $contentId: ID!) {
      addProjectV2ItemById(input: { projectId: $projectId, contentId: $contentId }) {
        item {
          id
        }
      }
    }
  `;

  const variables = {
    contentId: issueId,
    projectId,
  };

  const result = await graphqlRequest(mutation, variables);
  return result.addProjectV2ItemById.item.id;
}

async function graphqlRequest(mutation, variables = {}) {
  try {
    const result = await octokit.graphql(
      mutation, variables);
    return result;
  } catch (error) {
    console.error('GraphQL request failed:', error.message);
    process.exit(1);
  }
}

function confirmAction(message) {
  return inquirer.prompt({
    type: 'confirm',
    name: 'isConfirmed',
    message: message,
  });
}

async function extractInfoFromFile(filePath) {
  const text = await fs.readFile(filePath, { encoding: 'utf8' });
  const indexOfFirst = text.indexOf('\n');
  const title = text.substring(0, indexOfFirst).replace('# ', '');
  const description = text.substring(indexOfFirst + 1);

  return [title, description];
}

const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

// Main Script
async function main() {

  const { id: ownerId, login: ownerLogin } = await getOwner();
  console.log('User ID:', ownerId);

  //Fork repo
  try {
    const repositoryId = await forkRepository(ownerLogin);
    console.log('Fork ID:', repositoryId);
    await sleep(delay);

    const clientMutationId = await enableRepositoryIssues(repositoryId);
    console.log('Issues enabled in Repo:', clientMutationId);
    await sleep(delay);

    //Check if project is already created  
    
    let projectId = await getProjects(ownerLogin, PROJECT_NAME);    
    if (!projectId) {
      //Create project
      projectId = await createProject(PROJECT_NAME, ownerId, repositoryId);
      console.log('Project created with ID:', projectId);
      await sleep(delay);
      //Update project to public
      await setProjectToPublic(projectId);
      console.log('Project is now public:', projectId);
      await sleep(delay);
    }
    else {
      console.log('Project ID:', projectId);
    }
    await sleep(delay);

    //Process files
    const BASE_DIR = './planning';

    const initialPath = path.join(__dirname, BASE_DIR, framework);
    const userStoryFolder = `US${userStory}`;
    //process HU File
    const filePath = path.join(initialPath, userStoryFolder, lang, `US${userStory}.md`);
    try {
      const [title, description] = await extractInfoFromFile(filePath);

      //Check if milestone is already created  
      let milestone = await getMilestone(ownerLogin, NEW_REPO_NAME, title);
      if (milestone?.node_id) {
        const { isConfirmed } = await confirmAction(`Milestone already exists. Do you want to delete it?`);
        if (!isConfirmed) {
          console.log('Aborted. Exiting...');
          process.exit(-1);
        }

        await deleteMilestone(ownerLogin, NEW_REPO_NAME, milestone.number);
        console.log(`Milestone deleted: ${milestone.number}`);
        for (const issue of milestone?.issues?.nodes ?? []) {
          await deleteIssue(issue.id);
          console.log(`Issue deleted: ${issue.id}`);
        }
      }

      const milestoneId = await createMilestone(ownerLogin, NEW_REPO_NAME, title, description);
      console.log('Milestone created with ID:', milestoneId);

      //process tasks files
      const taskFiles = await fs.readdir(path.join(initialPath, userStoryFolder, lang));
      for (const taskFile of taskFiles) {
        if (taskFile.startsWith('Task')) {
          const filePath = path.join(initialPath, userStoryFolder, lang, taskFile);
          try {
            const [title, description] = await extractInfoFromFile(filePath);

            const issueId = await createIssue(repositoryId, milestoneId, title, description);
            console.log('Issue created with ID:', issueId);
            await sleep(delay);

            const itemId = await linkIssueToProject(issueId, projectId);
            console.log('Item created with ID:', itemId);
            await sleep(delay);

          } catch (err) {
            console.error(`Unexpected error processing ${filePath}`);
            console.error(err);
          }
        }
      }

      console.log('Execution is finished');

    } catch (err) {
      console.error(`Unexpected error processing ${filePath}`);
      console.error(err);
    }
  }
  catch (error) {
    console.error(error);
  }
}

await main();
