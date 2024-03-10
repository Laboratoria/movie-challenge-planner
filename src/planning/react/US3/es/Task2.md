# 3.2 Desarrollar el componente React de paginación

## Descripción:

Crear un componente de React llamado `Pagination` para mostrar un control de paginación. El componente debe recibir el número de página actual y el número total de páginas como _props_. El componente ejecutar un callback cuando un usuario selecciona una nueva página.

## Criterios de aceptación:

- [ ] Creación de componentes:

     - [ ] Crear un archivo llamado `Pagination.tsx` dentro de la carpeta de _components_.

- [ ] _Props_:

     - [ ] Definir un _prop_ llamado `currentPage` de tipo _number_ para el número de página actual.

     - [ ] Definir un _prop_ llamado `totalPages` de tipo _number_ para el número total de páginas.

     - [ ] Definir un _prop_ llamado `onSelectPage` que se llamará cuando el usuario haga clic en el botón de nueva página.

- [ ] UI de paginación:

     - [ ] Mostrar un conjunto de botones de paginación según el número total de páginas.

     - [ ] Resaltar el botón correspondiente a la página actual.

- [ ] Manejo del evento Click:

     - [ ] Implementar el manejo de eventos de clic para los botones de paginación.

     - [ ] Llamar a `onSelectPage` con el número de página en el que se hizo clic.

- [ ] Deshabilitar la navegación para páginas no válidas:

     - [ ] Desactivar el botón "Anterior" si la página actual es la primera página.

     - [ ] Deshabilitar el botón "Siguiente" si la página actual es la última página.

- [ ] Pruebas unitarias:

     - [ ] Escribir pruebas unitarias para el componente `Pagination`, cubriendo escenarios como hacer clic en botones de paginación y validar cambios en la interfaz de usuario basados en diferentes accesorios.

## Definición de Hecho:

- [ ] El archivo `Pagination.tsx` se crea dentro de la carpeta de _components_.

- [ ] La interfaz de usuario de paginación se muestra con el botón resaltado correctamente según la página actual.

- [ ] Se implementa el manejo de eventos de clic para llamar a `onSelectPage` con el número de página en la que se hizo clic.

- [ ] Los botones de navegación están deshabilitados adecuadamente para la primera y la última página.

- [ ] Las pruebas unitarias para el componente `Pagination` se superan con éxito y cubren varios escenarios.
