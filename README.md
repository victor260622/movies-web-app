# 🎬 Movie App

Aplicación en **Nuxt 3** para consultar detalles de películas usando la API de **OMDb**.  
Permite buscar títulos, ver información detallada (año, director, género, ratings, etc.) y explorar películas de manera rápida y sencilla.

---

## 📑 Tabla de Contenidos
- [Instalación](#-instalación)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Uso](#-uso)
- [Características](#-características)

---

##  Instalación

### Requisitos previos
- Node.js >= 18
- npm, yarn o pnpm

### Pasos

# Clonar el repositorio
git clone git@github.com:victor260622/movies-web-app.git

# Entrar al proyecto
cd movie-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Formatear los archivos
npm run format


### Estructura del proyecto

movie-app/
├─ components/       # Componentes reutilizables (UI, layouts, etc.)
├─ pages/            # Rutas principales (movies, search, etc.)
├─ composables/      # Lógica compartida (fetch, helpers)
├─ types/            # Tipados de TypeScript
├─ middleware/       # Middlewares de navegación
├─ public/           # Recursos estáticos
├─ server/           # Backend endpoints y fetchs
└─ nuxt.config.ts    # Configuración principal de Nuxt


##  Uso
  #  Rutas públicas (no requieren token)
    / → Página principal.

    /login → Formulario de inicio de sesión.

    /signup → Registro de nuevos usuarios.

  #  Rutas protegidas (requieren inicio de sesión)
    /movies → Lista de películas disponibles.

    /:imdbId → Detalles de una película específica.

  #  Flujo de uso
    Regístrate en /signup para crear tu cuenta. 

    Inicia sesión en /login para obtener tu token.

    Una vez autenticado, podrás acceder a /movies y /:imdbId.

#  Características
     -  Detalles completos de cada película (año, director, género, ratings).

     -  UI responsiva con TailwindCSS.

     - Integración con la API de OMDb.

     - Autenticación con JWT para proteger rutas.

     - Configuración mediante variables de entorno.