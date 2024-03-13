# 5.3 Melhorar componente `MovieCard` para redirecionar para `/movie/:id`

## Descrição:

Modificar o componente `MovieCard` para que, quando um usuário clicar em um filme, o aplicativo o redirecione para a URL `/movie/:id` para mostrar informações detalhadas sobre o filme selecionado. 

## Critérios de aceitação:

- [ ] Configuração de navegação:

     - [ ] Utilize o hook `useSearchParams` para habilitar a navegação para a URL `/movie/:id`.

- [ ] Testes unitários:

     - [ ] Escrever testes unitários para o componente `MovieCard` para garantir que ao clicar em um filme a navegação correta seja ativada e o componente `MovieDetail` seja exibido.

## Definição de Pronto:

- [ ] O hook `useSearchParams` é utilizado no componente `MovieCard` para habilitar a navegação para a URL `/movie/:id`.

- [ ] Os testes unitários para o componente `MovieCard` passam com sucesso e cobrem diversos cenários.
