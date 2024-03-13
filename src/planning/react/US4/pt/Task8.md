# 4.8 Melhoria do componente `Home` para integrar componentes `ListOptions`

## Descrição:

Melhorar o componente `Home` para integrar duas instâncias do componente `ListOptions`. Uma instância mostrará uma lista de gêneros de filmes usando o método `getMovieGenres` e a função `formatGenresToOptions`. A outra instância mostrará uma lista estática das opções de ordenação do endpoint `/discover/movie`.

Cada vez que o usuário selecionar uma opção da lista de gêneros, o valor do parâmetro de consulta `genreId` da URL deve ser atualizado com o `value` da opção selecionada.

Cada vez que o usuário selecionar uma opção da lista de ordenação, o valor do parâmetro de consulta `sortBy` da URL deve ser atualizado com o `value` da opção selecionada.

Cada vez que os parâmetros de consulta `genreId` e `sortBy` mudarem, chame o método `getMovies` apropriadamente para filtrar e ordenar a lista de filmes. Utilize o hook `useSearchParams` para extrair e rastrear os parâmetros de consulta da URL.  

## Critérios de aceitação:

- [ ] Integração com `ListOptions`:

     - [ ] Integrar duas instâncias do componente `ListOptions` dentro do componente `Home`.

     - [ ] Uma instância deve mostrar uma lista de gêneros de filmes usando a função `getMovieGenres`, do serviço de API e a função `formatGenresToOptions`.

     - [ ] A outra instância deve mostrar uma lista estática das opções de ordenação do endpoint `/discover/movie`.

- [ ] Atualização de parâmetros de consulta:

     - [ ] Quando o usuário selecionar uma opção da lista de gêneros, atualizar o valor do parâmetro de consulta `genreId` da URL com o `value` da opção selecionada.

     - [ ] Quando o usuário selecionar uma opção da lista de ordenação, atualizar o valor do parâmetro de consulta `sortBy` da URL com o `value` da opção selecionada.

- [ ] Chamadas de serviço:

     - [ ] Utilize o hook `useSearchParams` para extrair e rastrear os parâmetros de consulta da URL.

     - [ ] Chamar o método `getMovies` apropriadamente sempre que os parâmetros de consulta `genreId` e `sortBy` mudarem.  

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o componente `Home` atualizado, cobrindo cenários como seleção de gêneros, seleção de ordenação e validação de chamadas de serviço.

## Definição de Pronto:

- [ ] Duas instâncias do componente `ListOptions` estão integradas dentro do componente `Home`.

- [ ] A seleção de uma opção da lista de gêneros altera o parâmetro de consulta `genreId` da URL e aciona chamadas para o serviço `getMovies` para incluir a opção de filtragem selecionada.

- [ ] A seleção de uma opção da lista de ordenação altera o parâmetro de consulta `sortBy` da URL e aciona chamadas para o serviço `getMovies` para incluir a opção de ordenação selecionada.

- [ ] Os testes unitários para o componente `Home` atualizado são aprovados com sucesso e cobrem vários cenários.
