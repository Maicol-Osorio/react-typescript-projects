# 🌤️ Weather Finder - React + TypeScript + API

## 📌 Descripción

**Weather Finder** es una aplicación web desarrollada con **React y TypeScript** que permite consultar el clima en tiempo real de distintas ciudades del mundo.

El usuario puede ingresar una ciudad y un país mediante un formulario validado, y la aplicación realiza peticiones a una API externa para obtener la información climática actual. Los resultados se muestran dinámicamente en pantalla.

La aplicación implementa **hooks personalizados**, validación de datos con **Zod**, tipado avanzado y manejo de estados para ofrecer una experiencia fluida. Además, se utilizan **variables de entorno** para proteger la API Key.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://time-finder.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Consumir una API externa para obtener datos en tiempo real
- Crear hooks personalizados en React
- Validar datos con Zod
- Aplicar tipado seguro con TypeScript
- Manejar formularios y validaciones
- Implementar manejo de errores en UI
- Utilizar variables de entorno para proteger información sensible

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **CSS Modules**
- 🔎 **Fetch API**
- 🧠 **Custom Hooks**
- ✅ **Zod (validación de datos)**
- 🔐 **Variables de Entorno**

---

## ⚙️ Funcionalidades Principales

### 🌍 Consulta de Clima
- Buscar clima por ciudad y país
- Mostrar temperatura actual
- Visualizar condiciones climáticas
- Actualización dinámica de resultados

### 📝 Formularios Avanzados
- Validación de campos obligatorios
- Manejo de errores en inputs
- Prevención de consultas inválidas

### 🔄 Consumo de API
- Peticiones HTTP con Axios
- Manejo de respuestas asincrónicas
- Tipado de datos recibidos

### ⏳ Experiencia de Usuario
- Spinner de carga mientras se consulta
- Mensajes de error para ciudades no encontradas
- Reinicio del estado después de cada búsqueda

### 🔐 Seguridad
- Uso de variables de entorno para la API Key
- Separación de configuración sensible

---

## 🧩 Arquitectura de la Aplicación

### 🔹 Custom Hooks

Se utilizan para:

- Encapsular la lógica de consulta a la API
- Reutilizar lógica entre componentes
- Mantener el código limpio y escalable

### 🔹 Validación con Zod

Permite:

- Validar la estructura de los datos de la API
- Garantizar tipado seguro
- Evitar errores en tiempo de ejecución

---

## 🧠 Conceptos Aplicados

- Consumo de APIs con Axios
- Creación de Custom Hooks
- Tipado con TypeScript
- Validación de datos con Zod
- Manejo de estados en React
- Manejo de errores
- Variables de entorno
- Renderizado condicional

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev