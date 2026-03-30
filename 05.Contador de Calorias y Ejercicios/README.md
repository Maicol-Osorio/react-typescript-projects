# 🔥 Calorie Tracker & Exercise App - React + useReducer

## 📌 Descripción

**Calorie Tracker & Exercise App** es una aplicación web desarrollada con **React, TypeScript y TailwindCSS** que permite llevar un control de calorías consumidas y quemadas a través de actividades diarias.

El usuario puede registrar comidas y ejercicios, editar o eliminar actividades, y visualizar el balance total de calorías en tiempo real. La aplicación utiliza `useReducer` para manejar un estado más complejo de forma estructurada y escalable.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://calorie-and-exercises.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Implementar `useReducer` para manejo avanzado del estado
- Gestionar múltiples acciones en una aplicación React
- Aplicar TypeScript en lógica compleja
- Crear una interfaz moderna con TailwindCSS
- Persistir datos en el navegador

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **React Hooks**
  - `useReducer`
  - `useState`
  - `useEffect`
- 💾 **LocalStorage**

---

## ⚙️ Funcionalidades Principales

### 🍽️ Registro de Actividades
- Agregar comidas (calorías consumidas)
- Agregar ejercicios (calorías quemadas)
- Diferenciación visual entre tipos de actividad

### ✏️ Gestión de Actividades
- Editar actividades existentes
- Eliminar actividades
- Validación de formularios
- Generación de IDs únicos

### 🧮 Cálculo de Calorías
- Total de calorías consumidas
- Total de calorías quemadas
- Cálculo del balance calórico

### 🔄 Estado Global con useReducer
- Manejo centralizado del estado
- Uso de acciones (`dispatch`)
- Separación clara de lógica

### 💾 Persistencia
- Guardado automático en LocalStorage
- Recuperación de datos al recargar

### 📊 Interfaz Dinámica
- Listado de actividades
- Mensaje cuando no hay datos
- Actualización en tiempo real

---

## 🧩 Implementación con useReducer

### 🔹 ¿Por qué useReducer?

Se utilizó `useReducer` en lugar de `useState` debido a:

- Manejo de múltiples estados relacionados
- Lógica más compleja
- Mejor organización del código

### 🔹 Acciones Implementadas

- `add-activity`
- `update-activity`
- `delete-activity`
- `set-active-id`
- `reset-app`

---

## 🧠 Conceptos Aplicados

- useReducer en React
- Manejo de acciones y dispatch
- Tipado con TypeScript
- Interfaces y Types
- Formularios controlados
- Renderizado condicional
- Persistencia con LocalStorage
- Separación de lógica y UI

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev