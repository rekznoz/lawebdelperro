# Estructura del Proyecto

---

## Estructura de carpetas

- ``public/``: Carpeta donde se encuentran los archivos estáticos del proyecto.
- ``src/``: Carpeta donde se encuentra el código fuente del proyecto.
    - `assets/`: Carpeta donde se encuentran los archivos estáticos del proyecto.
    - `components/`: Carpeta donde se encuentran los componentes de la aplicación.
    - `css/`: Carpeta donde se encuentran los estilos de la aplicación.
    - `layouts/`: Carpeta donde se encuentran los layouts de la aplicación.
    - `pages/`: Carpeta donde se encuentran las páginas de la aplicación.
    - `router/`: Carpeta donde se encuentran las rutas de la aplicación.

---

## Configuración de Rutas en React

La configuración de rutas utiliza `createBrowserRouter` para definir la estructura de la aplicación a la hora de la redirecicon de los enlaces de la misma pagina.

### Rutas Principales

#### `/` (Raíz)
- **Pagina Principal**: `Principal`
- **Fallback de Suspense**: `Loading`
- **Pagina para Errores**: `Error`
- **Subrutas**:
    - **`index` (Inicio)**:
        - Pagina: `Inicio`
        - Descripción: Página principal.
    - **`/razas`**:
        - Pagina: `ListaRazas`
        - Descripción: Página que muestra una lista de razas disponibles.
    - **`/razas/:id`**:
        - Pagina: `Raza`
        - Descripción: Página que muestra los detalles de una raza específica. El parámetro `:id` es el identificador de raza.
    - **`/nosotros`**:
        - Pagina: `Nosotros`
        - Descripción: Página de información sobre el equipo del proyecto.
    - **`/contacto`**:
        - Pagina: `Contacto`
        - Descripción: Página para que los usuarios puedan contactar con el equipo.

---

## Desarrollo hasta este punto

- Se ha creado la estructura de carpetas del proyecto.
- Se ha configurado las rutas principales de la aplicación.
- Se ha representado las estructuras y contenedores de las páginas principales.
- Se ha creado el Componente `Navbar` para la navegación de la aplicación.
- Se ha creado el Componente `Footer` para el pie de página de la aplicación.
- Se ha creado el Componente `Loading` para mostrar un icono de carga.
- Se ha creado la pagina `Contacto` para que los usuarios puedan contactar con el equipo.
- El formulario de `Contacto` se valida correctamente refeljando los errores en los campos.
