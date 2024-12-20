# 🐾 **LA WEB DEL PERRO**

[![Netlify Status](https://api.netlify.com/api/v1/badges/3d452d7e-d770-495b-9964-3d564cdd20b5/deploy-status)](https://webdelperro.netlify.app/)

[![Figmaland](https://img.shields.io/badge/Figma-Design-blue)](https://www.figma.com/design/GNzc7M927ho1K9Df5OIDRy/La-web-del-Perro-%3AD)

**La Web del Perro** es una aplicación web que proporciona información detallada sobre razas de perros, permitiendo a
los usuarios encontrar la raza ideal para sus necesidades. La aplicación incluye una lista interactiva de razas,
detalles específicos de cada raza y un test de personalidad para ayudar a los usuarios a seleccionar la raza más
adecuada.

---

## Enlaces internos

### [📚 Documentación General](./main)

### [⚙️ Mini-Guía de Instalación](INSTALACION.md)

### [✨ Funcionalidades Desarrolladas](FUNCIONALIDADES.md)

### [🛠️ Documento de Desarrollo](DESARROLLO.md)

### [🔗 Documento de Integración](INTEGRACION.md)

### [📊 Documento de Reflexion](REFLEXION.md)

---

### 📑 **Índice**

1. [💡 Idea de la Aplicación](#-idea-de-la-aplicación)
    - [🎯 Propósito](#-propósito)
    - [⚠️ Problema](#%EF%B8%8F-problema)
    - [💡 Solución](#-solución)

2. [👥 Audiencia Objetivo](#-audiencia-objetivo)
    - [🐶 Futuras Mascotas](#-mascotas-futuras)
    - [🏡 Propietarios](#-propietarios)
    - [💛 Amigos de los Animales](#-amigos-de-los-animales)
    - [🩺 Profesionales](#-profesionales)

3. [📊 Análisis de Mercado](#-análisis-de-mercado)

4. [🛠️ Funcionalidades](#%EF%B8%8F-funcionalidades)

5. [💻 Tecnologías](#-tecnologías)
    - [🌐 Frontend](#-frontend)
    - [📚 Información](#-información)
    - [🔧 Desarrollo](#-desarrollo)

6. [🗂️ Repositorio API](#%EF%B8%8F-repositorio-api)

---

# 💡 **Idea de la Aplicación**

## 🎯 **Propósito:**

La web tiene como objetivo dar acceso a las personas que les gusten los animales, donde puedan explorar y aprender sobre
las diferentes razas de perros, la web va a mostrar características de cada raza, descripciones, personalidad, tiempo de
vida, cuidados entre otra mucha información.

## ⚠️ **Problema:**

Actualmente hay muchas personas que estan interesadas en adoptar un
perro y no encuentran información fiable mas allá de todo el amasijo de datos
aleatorios que se pueden encontrar en la red.

También podría ser un problema de un aprendiz a veterinario que quiera
información sobre una raza concreta y no encuentra mas que datos sueltos
que tiene que verificar unos con otros.

## 💡 **Solución:**

Los usuarios de la web podrían tomar las decisiones de una forma mas
informada sobre la adopción futura o el cuidado de su mascota actual,
intentando en el camino promover una relación mas saludable entre mascota
y dueño, además dando esta información se fomenta un poco la adopción
responsable y se intenta bajar la tasa de abandono dando información antes
de realizar una adopción para evitar sorpresas con el tiempo.

---

# 👥 **Audiencia Objetivo**

## 🐶 **Mascotas Futuras**

Podrían ser personas que están buscando adoptar un perro y esta buscando información
sobre las diferentes razas antes de la adopción, la web podría ayudarle a entender y tener
conocimiento sobre las características y necesidades de la raza, haciendo facil que
encuentre uno que se adapte a su ritmo de vida.

## 🏡 **Propietarios**

Dueños actuales de perros que quieran mejorar la salud de su mascota o quieran adaptarse
mas a ellas, la web da acceso a conocimiento sobre el posible estilo de vida del perro, lo
que permitirá al propietario saber si va por buen camino o no en como ha manejado la
situación.

## 💛 **Amigos de los Animales**

Personas que simplemente quieren aprender o estan interesadas en aprender sobre los
perros, totalmente independiente de si tienen uno o no, es un público que se beneficiaria al
tener acceso a tal información ya que su objetivo es aprender de los canes.

## 🩺 **Profesionales**

Veterinarios, entrenadores, trabajadores de animales… estos profesionales pueden usar la
información como una herramienta educativa para informar a otras personas o para
informarse ellos en caso de tener dudas con las necesidades de una raza que les acabe de
llegar y no vean a menudo.

---

# 📊 **Análisis de Mercado**

Existen varias webs dedicadas a los perros, pero la mayoría se centran en la venta o promoción de productos y servicios,
y no ofrecen una fuente de información completa y fiable. Algunos ejemplos:

- La web **[Nutricionista de perros](https://nutricionistadeperros.com/blog-2/)** por ejemplo parece un blog donde para
  encontrar la informacion hay que buscarla a consciencia.
- **[Si mi perro hablara](https://simiperrohablara.com/)** parece tener buenos consejos pero es mas una venta de cursos
  oculta
- **[Ladridos](http://www.ladridos.es/)** es una web sobre una resvista de canes tiene mucha informacion util pero
  visualmente no es muy gustosa
- esta ultima **[Mascota y Salud](https://blog.mascotaysalud.com/)**, se parece a lo que yo quiero hacer, pero esta mas
  basada en las situaciones que puede tener un perro o enfermedades que en las razas en si.

---

# 🛠️ **Funcionalidades**

### 1. 🗂️ **Visualización de Información General**

- Mostrar una **tarjeta informativa** con los detalles esenciales de cada raza, incluyendo:
    - 🐕 **Nombre de la raza**
    - 🏅 **Grupo de raza**
    - 📋 **Breve descripción**
    - 📝 **Descripción completa**
    - 📈 **Popularidad**
    - 📏 **Altura y peso**
    - ⏳ **Esperanza de vida**

**Objetivo:** Proporcionar una visión general rápida y completa para los usuarios interesados en conocer las
características principales de la raza.

### 2. 🖼️ **Galería de Imágenes**

- Una **galería interactiva** para cada raza con diferentes tipos de imágenes:
    - 🏡 **Imágenes en interiores**: Para mostrar cómo se comportan los perros en espacios cerrados.
    - 🌳 **Imágenes en exteriores**: Para ver su apariencia en diferentes ambientes y actividades al aire libre.
    - 📸 **Imágenes de estudio**: Fotos detalladas para ver las características físicas del perro.


- Permitir a los usuarios **alternar entre versiones pequeñas y grandes** de las imágenes:
    - 🔍 **Vista previa**: Imágenes pequeñas para navegación rápida.
    - 📅 **Detalles completos**: Imágenes grandes para una vista más clara.

**Objetivo:** Facilitar la visualización detallada y variada de cada raza para que los usuarios puedan evaluar su
aspecto y personalidad.

### 3. 🔍 **Filtro y Comparador de Razas**

- Herramienta para **filtrar y comparar razas** basándose en diversas características:
    - 📏 **Características físicas**: Tamaño, peso, altura.
    - 🧠 **Comportamiento**: Nivel de energía, inteligencia, temperamento.
    - 🩺 **Cuidados necesarios**: Requisitos de salud, cepillado, necesidades de ejercicio.

**Objetivo:** Ayudar a los usuarios a encontrar la raza que mejor se adapta a sus necesidades o a comparar diferentes
opciones antes de tomar una decisión.

### 4. 📝 **Recomendaciones de Cuidado, Entrenamiento y Adaptabilidad**

- Ofrecer **consejos personalizados** para el cuidado y entrenamiento de la raza seleccionada:
    - 🏃 **Actividad física**: Cantidad de ejercicio que requiere la raza (baja, moderada, alta).
    - 🧴 **Frecuencia de cepillado**: Para ayudar en el mantenimiento del pelaje.
    - 🎓 **Dificultad para entrenar**: Indicador para aconsejar a los propietarios primerizos o experimentados.
    - 🏠 **Adaptabilidad**: Evaluación de la raza en diferentes contextos:
        - 👶 **Familias con niños pequeños**
        - 🏢 **Personas que viven en apartamentos**
        - 🌲 **Personas con acceso a espacios abiertos**

**Objetivo:** Guiar a los usuarios en el cuidado adecuado de su perro y proporcionar consejos específicos según las
características de la raza y las circunstancias del propietario.

### 5. 📚 **Favoritos**

- **Función de favoritos** para guardar las razas de perros favoritas y acceder a ellas fácilmente:
    - 📂 **Lista de favoritos**: Mostrar las razas guardadas en una sección especial.

**Objetivo:** Permitir a los usuarios marcar y organizar las razas que les interesan para futuras consultas y
comparaciones.

### 6. 📖 **Perfil de Usuario**

- **Creación de perfiles de usuario** para personalizar la experiencia y guardar preferencias:
    - 📝 **Información personal**: Nombre, correo electrónico, dirección, etc.

---

# 💻 **Tecnologías**

### 🌐 **Frontend**

- **[React](https://es.react.dev/):** Ideal para crear interfaces dinámicas y reutilizables.
- **[Vite](https://es.vitejs.dev/):** Proporciona un entorno de desarrollo rápido y eficiente.
- **[JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript):** Para la lógica del sitio, manejo de funciones
  y promesas.
- **[CSS Modular](https://developer.mozilla.org/es/docs/Web/CSS):** Para un diseño limpio y reutilizable.
- **[HTML5](https://developer.mozilla.org/es/docs/Web/HTML):** Estructura básica de la web y marcado semántico.

### 📚 **Información**

- **[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API):** Almacenamiento de datos estructurados
  en el navegador.
- **[Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API):** Para obtener datos de la API de forma
  asíncrona.
- **API:** Datos obtenidos de [Open Dog Registry](https://registry.dog/).

### 🔧 **Desarrollo**

- **[GitHub](https://github.com/):** Control de versiones y colaboración.
- **[WebStorm](https://www.jetbrains.com/es-es/webstorm/):** IDE especializado para desarrollo web.
- **[Netlify](https://www.netlify.com/):** Despliegue y alojamiento de la aplicación.
- **Navegadores:** Pruebas en diferentes navegadores para asegurar compatibilidad.

---

# 🗂️ **Repositorio API**

🔗 [Open Dog Registry en GitHub](https://github.com/chase-manning/open-dog-registry)

---