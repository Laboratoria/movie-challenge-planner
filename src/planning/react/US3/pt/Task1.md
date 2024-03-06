# 3.1 Melhore a função `getMovies` para paginação

## Descrição:

Melhore a função de serviço `getMovies` para suportar a paginação através da recepção de um objeto como parâmetro com a estrutura `{ filters: { page: number } }`. Isso permite obter dados da API com parâmetros de paginação.

Agora, a função deve retornar uma _Promise_ que resolve um objeto com a estrutura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[ ]}`. Isso é necessário para incluir na saída não apenas o array de filmes, mas também o número total de páginas.

## Critérios de aceitação:

- [ ] Estrutura de parâmetros:

    - [ ] Modificar a função `Home` para aceitar um parâmetro objeto.

    - [ ] O parâmetro deve ter uma propriedade chamada `filters` com a estrutura `{ filters: { page: number } }`.

- [ ] Modificação da solicitação da API:

    - [ ] Ajustar a solicitação da API dentro da função `getMovies` para incluir o parâmetro `page`.

- [ ] Paginação padrão:
    
    - [ ] Implementar um valor padrão para o parâmetro de página caso não seja fornecido. Por exemplo, estabelecer um valor padrão de 1.

- [ ] Modificação da estrutura de retorno:

    - [ ] Modificar o retorno da função `getMovies` para uma _Promise_ que resolve um objeto com a estrutura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[ ]}`.

- [ ] Testes unitários:
    
    - [ ] Escrever testes unitários para a função modificada `getMovies` para garantir que lide com a paginação corretamente.  
    
    - [ ] Incluir casos de teste para fornecer diferentes números de página e testar o comportamento da paginação padrão.

## Definição de Pronto:

- [ ] A função `getMovies` é modificada para aceitar um parâmetro objeto com a estrutura `{ filters: { page: number } }`.

- [ ] A solicitação da API dentro do método é ajustada para incluir o parâmetro `page`.

- [ ] Um valor padrão é implementado para o parâmetro de página.

- [ ] O retorno da função `getMovies` é modificado para uma _Promise_ que resolve um objeto com a estrutura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[ ]}`.

- [ ] Os testes unitários da função `getMovies` modificada são bem-sucedidos, cobrindo vários cenários de paginação.
