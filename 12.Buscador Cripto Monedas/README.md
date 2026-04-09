# 💰 Crypto Price Tracker - React + TypeScript + Zustand

## 📌 Descripción

**Crypto Price Tracker** es una aplicación web desarrollada con **React y TypeScript** que permite consultar la cotización en tiempo real de distintas criptomonedas.

El usuario puede seleccionar una moneda y una criptomoneda desde un formulario validado, y la aplicación realiza peticiones a una API externa para obtener el precio actual. Los resultados se muestran dinámicamente en pantalla.

La aplicación implementa **Zustand para manejo de estado global**, validación de datos con **Zod**, y una arquitectura limpia separando la lógica de consumo de API.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://crypto-cu.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Consumir una API externa para obtener datos en tiempo real
- Implementar estado global con Zustand
- Validar datos con Zod
- Aplicar tipado seguro con TypeScript
- Manejar formularios y validaciones
- Separar lógica de negocio en módulos reutilizables
- Implementar manejo de errores en UI

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **CSS**
- 🧠 **Zustand (State Management)**
- 🔎 **Fetch API / Axios**
- ✅ **Zod (validación de datos)**
- 🛠️ **Redux DevTools (debug del estado)**

---

## ⚙️ Funcionalidades Principales

### 💱 Cotización de Criptomonedas
- Selección de moneda (USD, EUR, etc.)
- Selección de criptomonedas
- Consulta de precio en tiempo real
- Visualización del resultado de la cotización

### 📝 Formularios Avanzados
- Validación de campos obligatorios
- Prevención de consultas inválidas
- Manejo de errores en inputs

### 🔄 Consumo de API
- Peticiones HTTP a API de criptomonedas
- Manejo de respuestas asincrónicas
- Validación de datos con Zod

### 🧠 Manejo de Estado Global
- Uso de Zustand para almacenar datos
- Centralización del estado
- Debug con Redux DevTools

### ⏳ Experiencia de Usuario
- Spinner de carga durante consultas
- Renderizado dinámico de resultados
- Feedback visual para el usuario

---

## 🧩 Arquitectura de la Aplicación

### 🔹 Zustand Store

Se utiliza para:

- Gestionar el estado global de la aplicación
- Almacenar criptomonedas disponibles
- Guardar resultados de cotización
- Centralizar lógica de negocio

---

### 🔹 Validación con Zod

Permite:

- Validar la estructura de los datos de la API
- Garantizar tipado seguro
- Evitar errores en tiempo de ejecución

---

### 🔹 Separación de API

- Funciones de consulta separadas en archivos independientes
- Código más limpio y mantenible
- Reutilización de lógica

---

## 🧠 Conceptos Aplicados

- Consumo de APIs
- Manejo de estado global con Zustand
- Validación de datos con Zod
- Tipado con TypeScript
- Manejo de formularios en React
- Separación de lógica (arquitectura limpia)
- Manejo de estados asincrónicos
- Debugging con Redux DevTools
- Renderizado condicional

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev