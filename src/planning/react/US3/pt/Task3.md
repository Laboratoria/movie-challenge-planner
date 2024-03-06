# 3.3 Melhorar o componente `Home` para suporte de paginação

## Descrição:

Melhorar o componente `Home` para suportar a paginação utilizando o componente `Pagination`. Integre o componente `Pagination` usando a propriedade `onSelectPage`. Sempre que o usuário clicar em um botão de página, atualize o valor do _query param_ `currentPage` da URL para a nova página. Além disso, chame o serviço `getMovies` sempre que o _query param_ `currentPage` mudar. Utilize o hook `useQuery` para extrair e rastrear os parâmetros de consulta da URL.

## Critérios de aceitação:

- [ ] Integração de componentes de paginação:

     - [ ] Integre o componente `Pagination` dentro do componente `Início` usando a propriedade `onSelectPage`.

- [ ] Hook UseQuery:

     - [ ] Utilize o hook `useQuery` para extrair e rastrear os parâmetros de consulta da URL.

- [ ] Manipulação de cliques nos botões de página:

     - [ ] Quando o usuário clicar em um botão de página, mude o _query param_ `currentPage` da URL para a nova página.

     - [ ] Chame o método `getMovies` sempre que o parâmetro de consulta `currentPage` mudar.     

- [ ] Testes unitários:

     - [ ] Escreva testes unitários para o componente `Home` melhorado, que cubram cenários como cliques em botões de página, alterações nos parâmetros de URL e chamadas de serviço bem-sucedidas.

## Definição de Pronto:

- [ ] O componente `Pagination` está integrado dentro do componente `Home` usando a propriedade `onSelectPage`.

- [ ] O hook `useQuery` é utilizado para extrair e rastrear os parâmetros de consulta da URL.

- [ ] Os cliques nos botões de página alteram o _query param_`currentPage` para a nova página e acionam chamadas para o serviço `getMovies`.

- [ ] Os testes unitários para o componente `Home` melhorado são aprovados com sucesso e cobrem vários cenários de paginação.
