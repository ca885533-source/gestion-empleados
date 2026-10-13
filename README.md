# Gestión de Empleados

Aplicación para gestionar empleados. Tiene un backend en Node.js con Express y MongoDB (Mongoose), y un front-end en Angular.

## Requisitos

- Node.js y npm
- MongoDB en ejecución (local o remoto)

## Instalación

Desde la carpeta raíz del proyecto:

```bash
npm install
cd front-end
npm install
```

## Ejecución

Backend (desde la raíz):

```bash
npm run dev
```

Front-end (desde la carpeta `front-end`):

```bash
npm start
```

El front-end queda disponible en http://localhost:4200.

## Estructura

- `index.js`: servidor Express
- `database.js`: conexión a MongoDB
- `models/`: modelos de datos
- `routes/`: rutas de la API
- `front-end/`: aplicación Angular
