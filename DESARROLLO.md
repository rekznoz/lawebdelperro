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
    - **Página**: `Nosotros`
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

---