# 3.2 Desenvolver o componente de paginação React

## Descrição:

Criar um componente React chamado `Pagination` para exibir um controle de paginação. O componente deve receber o número da página atual e o número total de páginas como _props_. O componente executa um callback quando um usuário seleciona uma nova página.

## Critérios de aceitação:

- [ ] Criação de componentes:

     - [ ] Criar um arquivo chamado `Pagination.tsx` dentro da pasta de _components_.

- [ ] _Props_:

     - [ ] Definir uma _prop_ chamada `currentPage` do tipo _number_ para o número da página atual.

     - [ ] Definir uma _prop_ chamada `totalPages` do tipo _number_ para o número total de páginas.

     - [ ] Definir uma _prop_ chamada `onSelectPage` que será chamada quando o usuário clicar no botão de nova página.

- [ ] UI de paginação:

     - [ ] Mostrar um conjunto de botões de paginação de acordo com o número total de páginas.

     - [ ] Destacar o botão correspondente à página atual.

- [ ] Manipulação do evento de clique:

     - [ ] Implementar a manipulação de eventos de clique para os botões de paginação.

     - [ ] Chamar `onSelectPage` com o número da página em que foi clicado.

- [ ] Desabilitar a navegação para páginas inválidas:

     - [ ] Desativar o botão "Anterior" se a página atual for a primeira página.

     - [ ] Desabilitar o botão "Próximo" se a página atual for a última página.

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o componente `Pagination`, cobrindo cenários como clicar em botões de paginação e validar alterações na interface do usuário com base em diferentes _props_.

## Definição de Pronto:

- [ ] O arquivo `Pagination.tsx` é criado dentro da pasta de _components_.

- [ ] A interface de usuário da paginação é exibida com o botão destacado corretamente de acordo com a página atual.

- [ ] A manipulação de eventos de clique é implementada para chamar `onSelectPage` com o número da página em que foi clicado.

- [ ] Os botões de navegação são desabilitados adequadamente para a primeira e última página.

- [ ] Os testes unitários para o componente `Pagination` são aprovados com sucesso e cobrem vários cenários.
