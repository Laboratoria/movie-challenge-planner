# 3.3 Mejorar el componente `Home` para soporte de paginación

## Descripción:

Mejorar el componente `Home` para admitir la paginación utilizando el componente `Pagination`. Integre el componente `Pagination` usando el _prop_ `onSelectPage`. Cada vez que el usuario hace clic en un botón de página, actualice el valor del _query param_ `currentPage` de la URL a la nueva página. Además, llame al servicio `getMovies` cada vez que cambie el _query param_ `currentPage`. Utilice el hook `useQuery` para extraer y rastrear los parámetros de consulta de la URL.

## Criterios de aceptación:

- [ ] Integración de componentes de paginación:

     - [ ] Integre el componente `Pagination` dentro del componente `Inicio` usando la propiedad `onSelectPage`.

- [ ] UseQuery Hook:

     - [ ] Utilice el hook `useQuery` para extraer y rastrear los parámetros de consulta de la URL.

- [ ] Manejo de clicks en los botones de página:

     - [ ] Cuando el usuario haga clic en un botón de página, cambie el _query param_ `currentPage` de la URL a la nueva página.

     - [ ] Llame el método `getMovies` cada vez que cambie el parámetro de consulta `currentPage`.

- [ ] Pruebas unitarias:

     - [ ] Escriba pruebas unitarias para el componente `Home` mejorado, que abarquen escenarios como clics en botones de página, cambios de parámetros de URL y llamadas de servicio exitosas.

## Definición de Hecho:

- [ ] El componente `Pagination` está integrado dentro del componente `Home` usando el propr `onSelectPage`.

- [ ] El hook `useQuery` se utiliza para extraer y rastrear los parámetros de consulta de la URL.

- [ ] Los clics en el botón de página cambian el _query param_`currentPage` a la nueva página y activan llamadas al servicio `getMovies`.

- [ ] Las pruebas unitarias para el componente `Home` mejorado se superan con éxito y cubren varios escenarios de paginación.
