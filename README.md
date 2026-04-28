# Backend de Autenticación con JWT

API desarrollada con **Node.js** y **Express** que permite el registro y autenticación de usuarios mediante **JSON Web Tokens (JWT)**, incluyendo protección de rutas.

---

## 🚀 Funcionalidades

- Registro de usuarios  
- Inicio de sesión (login)  
- Generación de tokens JWT  
- Protección de rutas con middleware  
- Validación de credenciales  
- Manejo básico de errores  

---

## 🛠️ Tecnologías

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- JSON Web Token (jsonwebtoken)  
- Bcrypt  

---

## 📦 Instalación

1. Clonar el repositorio:

    git clone https://github.com/Neftali-10/backend-auth-jwt.git  
    cd backend-auth-jwt  

2. Instalar dependencias:

    npm install  

---

## ⚙️ Configuración

Crear un archivo `.env` en la raíz del proyecto con lo siguiente:

    MONGODB_URI=tu_cadena_de_conexion  
    JWT_SECRET=tu_secreto  
    PORT=3000  

Nota: No subas tu archivo `.env` al repositorio. Usa tus propias credenciales.

---

## ▶️ Ejecución

Modo desarrollo:

    npm run dev  

Modo producción:

    npm start  

---

## 🔐 Endpoints principales

- POST /register → Registro de usuario  
- POST /login → Inicio de sesión  
- GET /user → Obtener usuario actual (requiere autenticación)  

---

## 📂 Estructura del proyecto

    src/
     ├── auth/
     │   ├── auth.controller.ts
     │   ├── auth.service.ts
     ├── users/
     │   ├── user.controller.ts
     │   ├── user.service.ts
     ├── middlewares/
     │   ├── auth.middleware.ts
     ├── jwt.ts
     ├── router.ts

---

## 📌 Notas

Este proyecto fue basado en una implementación previa y posteriormente mejorado con autenticación JWT y una estructura modular.

---

## 👨‍💻 Autor

Neftali Andrade  
Email: neftaliandrade004@gmail.com
