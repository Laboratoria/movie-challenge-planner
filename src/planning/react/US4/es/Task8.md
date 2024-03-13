# 4.8 Mejorar el componente `Home` para integrar componentes `ListOptions`

## Descripción:

Mejorar el componente `Home` para integrar dos instancias del componente `ListOptions`. Una instancia mostrará una lista de géneros de películas usando el método `getMovieGenres` y la otra mostrará una lista estática de las opciones de ordenamiento del endpoint `/discover/movie`.

Cada vez que el usuario seleccione una opción del listado de géneros se debe actualizar el valor del _query param_ `genreId` de la URL con el `value` de la opción seleccionada.  

Cada vez que el usuario seleccione una opción del listado de ordenamiento se debe actualizar el valor del _query param_ `sortBy` de la URL con el `value` de la opción seleccionada.

Cada vez que cambien los _query params_ `genreId` y `sortBy`, llamar al método `getMovies` apropiadamente para filtrar y ordenar la lista de películas. Utilice el hook `useSearchParams` para extraer y rastrear los parámetros de consulta de la URL.  

## Criterios de aceptación:

- [ ] Integración con `ListOptions`:

     - [ ] Integrar dos instancias del componente `ListOptions` dentro del componente `Home`.

     - [ ] Una instancia debería mostrar una lista de géneros de películas utilizando el servicio `getMovieGenres` y la función `formatGenresToOptions`.

     - [ ] La otra instancia debería mostrar una lista estática de las opciones de ordenamiento del endpoint `/discover/movie`.

- [ ] Actualización de _query params_:

     - [ ] Cuando el usuario seleccione una opción del listado de géneros, actualizar el valor del _query param_ `genreId` de la URL con el `value` de la opción seleccionada.  

     - [ ] Cuando el usuario seleccione una opción del listado de ordenamiento, actualizar el valor del _query param_ `sortBy` de la URL con el `value` de la opción seleccionada.

- [ ] Llamadas de servicio:

     - [ ] Utilice el hook `useSearchParams` para extraer y rastrear los parámetros de consulta de la URL.

     - [ ] Llame la función `getMovies` apropiadamente cada vez que cambie el parámetro de consulta `genreId` y `sortBy`.

- [ ] Pruebas unitarias:

     - [ ] Escribir pruebas unitarias para el componente `Home`actualizado, que abarquen escenarios como la selección de géneros, la selección de ordenamiento y la validación de llamadas de servicio.

## Definición de Hecho:

- [ ] Dos instancias del componente `ListOptions` están integradas dentro del componente `Home`.

- [ ] La selección de una opción del listado de géneros cambia el _query param_ `genreId`de la URL y activan llamadas al servicio `getMovies` para incluir la opcion de filtrado seleccionada.

- [ ] La selección de una opción del listado de ordenamientos cambian el _query param_ `sortBy`de la URL y activan llamadas al servicio `getMovies` para incluir la opcion de ordenamiento seleccionada.

- [ ] Las pruebas unitarias para el componente `Home` actualizado se superan con éxito y cubren varios escenarios.
