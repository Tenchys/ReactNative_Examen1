# Examen 1 - Aplicación de Login con React Native

## Descripción del Proyecto

Esta es una aplicación móvil desarrollada con **React Native** y **Expo Router** que implementa un sistema de autenticación básico con navegación entre pantallas. La aplicación permite a los usuarios iniciar sesión con credenciales, navegar por la interfaz mediante pestañas (tabs) y gestionar su sesión de usuario.

## Características Principales

### Sistema de Autenticación

- Pantalla de login con validación de credenciales
- Contraseña predeterminada: `1234`
- Manejo de estado global mediante Context API
- Navegación protegida según estado de autenticación

### Interfaz de Usuario

- **Pantalla de Login**: Formulario con campos de email y contraseña
- **Pantalla Home**: Bienvenida con imagen decorativa (vaquita)
- **Pantalla de Perfil**: Muestra el nombre de usuario y permite cerrar sesión
- **Navegación por Tabs**: Dos pestañas principales (Home y Perfil) con íconos personalizados
- **Tema Oscuro**: Implementación del modo oscuro de React Navigation

### Componentes Reutilizables

- `EntradaTexto`: Input personalizado con soporte para diferentes tipos de teclado
- `Titulo`: Componente de texto estilizado para títulos
- `Parrafo`: Componente para textos de párrafo
- Íconos personalizados para la navegación

### 🔧 Tecnologías Utilizadas

- **React Native** (v0.81.5)
- **Expo** (~54.0.20)
- **Expo Router** (~6.0.13): Sistema de navegación basado en archivos
- **React Navigation**: Navegación por tabs y manejo de temas
- **TypeScript** (~5.9.2): Tipado estático
- **React Context API**: Manejo de estado global
- **React Hooks**: useState, useContext, useRouter

## Video DEMO

[text](https://youtu.be/NE7K5cfGsXE)

## Estructura del Proyecto

```
ReactNative_Examen1-main/
├── app/
│   ├── _layout.tsx              # Layout principal con ContextProvider
│   ├── index.tsx                # Pantalla de login
│   └── appLogin/
│       ├── _layout.tsx          # Layout con navegación por tabs
│       ├── home.tsx             # Pantalla de bienvenida
│       └── perfil.tsx           # Pantalla de perfil de usuario
├── components/
│   ├── EntradaTexto.tsx         # Componente de input de texto
│   ├── Titulo.tsx               # Componente de título
│   ├── Parrafo.tsx              # Componente de párrafo
│   └── ui/
│       └── icons.tsx            # Íconos personalizados
├── hooks/
│   └── globalContext.tsx        # Context API para estado global
├── styles/
│   ├── entradaStyle.tsx         # Estilos para inputs
│   ├── tituloStyles.tsx         # Estilos para títulos
│   └── indexStyles.tsx          # Estilos generales
├── assets/
│   └── images/                  # Imágenes y recursos
├── app.json                     # Configuración de Expo
├── package.json                 # Dependencias del proyecto
└── tsconfig.json                # Configuración de TypeScript
```

## Flujo de la Aplicación

1. **Pantalla de Login** (`app/index.tsx`):

   - El usuario ingresa su email y contraseña
   - Se valida que la contraseña sea "1234"
   - Si es correcta, se guarda el usuario en el contexto global y se navega a la zona autenticada
   - Si es incorrecta, se muestra una alerta

2. **Zona Autenticada** (`app/appLogin/`):

   - **Tab Home**: Muestra un mensaje de bienvenida con una imagen
   - **Tab Perfil**: Muestra el nombre del usuario y un botón para cerrar sesión

3. **Cerrar Sesión**:
   - Limpia el estado global del usuario
   - Redirige de vuelta a la pantalla de login

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Emulador de Android/iOS o dispositivo físico con Expo Go

### Pasos de Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd ReactNative_Examen1-main
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el proyecto:

```bash
npm start
```

### Comandos Disponibles

- `npm start`: Inicia el servidor de desarrollo de Expo
- `npm run android`: Ejecuta la app en Android
- `npm run ios`: Ejecuta la app en iOS
- `npm run web`: Ejecuta la app en navegador web
- `npm run lint`: Ejecuta el linter de código

## Credenciales de Prueba

Para probar la aplicación, utiliza las siguientes credenciales:

- **Usuario**: Cualquier email válido
- **Contraseña**: `1234`

## Características Técnicas Destacadas

### Context API para Estado Global

La aplicación utiliza React Context para mantener el estado del usuario a través de toda la aplicación, implementado en `hooks/globalContext.tsx`.

### Expo Router

Sistema de navegación basado en la estructura de archivos, similar a Next.js, que simplifica el enrutamiento y la navegación.

### TypeScript

Todo el código está escrito en TypeScript, proporcionando tipado estático y mejor experiencia de desarrollo.

### Safe Area Context

Manejo apropiado de las áreas seguras en dispositivos modernos (notch, barras de estado, etc.).

### Temas

Soporte para modo oscuro utilizando React Navigation themes.

## Autores

Este proyecto fue desarrollado por:

### Sebastián Rodriguez

### Benjamín Sanchez

### Hector Sanchez

---

## Posibles Mejoras Futuras

- [ ] Implementar autenticación real con backend
- [ ] Agregar persistencia de sesión (AsyncStorage)
- [ ] Implementar validación de formularios más robusta
- [ ] Añadir recuperación de contraseña
- [ ] Agregar registro de nuevos usuarios
- [ ] Implementar animaciones y transiciones
- [ ] Agregar modo claro/oscuro configurable
- [ ] Implementar tests unitarios y de integración
- [ ] Mejorar la seguridad de las credenciales

## Licencia

Este proyecto es un ejercicio académico desarrollado para fines educativos.

---
