# Estructura del Proyecto

---

## 📁 Estructura de Carpetas

```
public/          // Archivos estáticos del proyecto
src/             // Código fuente del proyecto
├── assets/      // Archivos estáticos personalizados (imágenes, fuentes, etc.)
├── components/  // Componentes reutilizables de la aplicación
├── css/         // Estilos de la aplicación
├── layouts/     // Diseños principales para la estructura de la aplicación
├── pages/       // Páginas principales de la aplicación
└── router/      // Configuración y manejo de rutas
```

---

## 🚀 Configuración de Rutas en React

Se utiliza **`createBrowserRouter`** para gestionar las rutas y definir la estructura de navegación de la aplicación.

### 🌐 Rutas Principales

#### `/` (Raíz)

- **Página Principal**: `Principal`
- **Fallback de Suspense**: `Loading`
- **Página para Errores**: `Error`

---

### 🔗 Subrutas

1. **`index` (Inicio)**
    - **Página**: `Inicio`
    - **Descripción**: Página principal.

2. **`/razas`**
    - **Página**: `ListaRazas`
    - **Descripción**: Lista de razas disponibles.

3. **`/razas/:id`**
    - **Página**: `Raza`
    - **Descripción**: Detalles de una raza específica.  
      **Nota**: `:id` representa el identificador único de la raza.

4. **`/nosotros`**
    - **Página**: `Personalidad`
    - **Descripción**: Información sobre el equipo detrás del proyecto.

5. **`/contacto`**
    - **Página**: `Contacto`
    - **Descripción**: Formulario para que los usuarios puedan contactar al equipo.

---

## ✨ Desarrollo hasta este Punto

1. **Estructura del Proyecto**:

2. **Rutas Principales**:
    - Configuración inicial de navegación usando `createBrowserRouter`.

3. **Páginas Base**:
    - Estructuras y contenedores para las páginas principales.

4. **Componentes Clave**:
    - **`Navbar`**: Navegación superior.
    - **`Footer`**: Pie de página.
    - **`Loading`**: Indicador visual para la carga de contenido.

5. **Página de Contacto**:
    - Diseño y funcionalidad para que los usuarios contacten al equipo.
    - **Validación**: Implementación de validación en los campos del formulario.
        - Muestra errores visuales en caso de datos incorrectos.

6. **Login y Registro**:
    - **`Login`**: Modal de inicio de sesión.
    - **`Registro`**: Modal de creación de cuenta.

7. **Autenticacion con Firebase**:
    - **`Firebase`**: Configuración y manejo de autenticación.
    - **`Contexto de Usuario`**: Almacenamiento de datos de usuario autenticado.

8. **Integracion de la API**:
    - **`API`**: Conexión y obtención de datos de la API.
    - **`Suspense y Lazy`**: Uso de React Suspense y Lazy para la carga de datos.

9. **Integracion de Lista de Razas**:
    - **`ListaRazas`**: Componente para mostrar la lista de razas disponibles.
    - **`Paginacion`**: Implementación de paginación para la lista de razas.
    - **`Filtro de Razas`**: Barra de búsqueda y filtros varios para las razas.

10. **Visualizacion de Detalles de Raza**:
    - **`Raza`**: Página para mostrar los detalles de una raza específica.
    - **`Galeria`**: Componente para mostrar imágenes de la raza.

11. **Manejo de Errores**: 
    - **`Error`**: Página para mostrar errores en la aplicación.
    - **`Error de busqueda`**: Página para mostrar errores en la búsqueda de razas.

12. **Protección de Rutas**: 
    - **`Proteccion de Rutas`**: Implementación de protección de rutas privadas.

13. **Validacion de Formularios**:
    - **`Validacion de Formularios`**: Validación de formularios en la página de contacto.
    - **`Formik y Yup`**: Uso de librerías para simplificar la validación.

14. **Mejoras de Estilo**:
    - **`Estilos`**: Mejoras en la apariencia y diseño de la aplicación.
    - **`Animaciones`**: Agregado de animaciones y transiciones.
    - **`Responsive`**: Ajustes para una mejor visualización en dispositivos móviles.
    - **`Tema Oscuro`**: Implementación de un tema oscuro para la aplicación.

15. **Perfiles de Usuario**:
    - **`Perfil de Usuario`**: Página para mostrar y editar la información del usuario.
    - **`Actualización de Perfil`**: Funcionalidad para actualizar la información del usuario.

16. **Favoritos**: 
    - **`Favoritos`**: Página para mostrar las razas favoritas del usuario.
    - **`Agregar a Favoritos`**: Funcionalidad para agregar y quitar razas de favoritos.

17. **Perfiles publicos de usuario y favoritos**:
    - **`Perfiles Publicos`**: Página para mostrar la información de un usuario.
    - **`Favoritos Publicos`**: Página para mostrar las razas favoritas de un usuario.

18. **Test de personalidad**:
    - **`Test de Personalidad`**: Página para realizar un test de `personalidad` para saber que raza de perro es la ideal.
    - **`Resultados del Test`**: Página para mostrar los resultados del test.

19. **Pagina de Inicio**:
    - **`Pagina de Inicio`**: Página de inicio con información general sobre el proyecto.
    - **`Animaciones`**: Agregado de animaciones y transiciones.

20. **Carrusel de Imagenes**:
    - **`Carrusel`**: Componente para mostrar imágenes en un carrusel.
    - **`Animaciones`**: Agregado de animaciones y transiciones.

---