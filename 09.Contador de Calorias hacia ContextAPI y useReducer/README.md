# 🔥 Calorie Tracker con Context API - React + TypeScript

## 📌 Descripción

Este proyecto es la evolución final de la aplicación **Calorie Tracker & Exercise App**, en la cual se realiza una **migración hacia Context API** para manejar el estado global de forma más eficiente y escalable.

La aplicación permite registrar calorías consumidas y quemadas, gestionar actividades (crear, editar y eliminar), y visualizar el balance calórico en tiempo real, utilizando una arquitectura basada en **useReducer + Context API**.

---

## 🌐 Demo

👉 https://calorie-and-exercises.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Implementar estado global con Context API
- Integrar useReducer dentro del contexto
- Eliminar el prop drilling
- Mejorar la escalabilidad de la aplicación
- Aplicar buenas prácticas en React con TypeScript

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **React Hooks**
  - `useReducer`
  - `useContext`
  - `useEffect`
- 🌐 **Context API**
- 💾 **LocalStorage**

---

## ⚙️ Funcionalidades Principales

### 🍽️ Registro de Actividades
- Agregar comidas (calorías consumidas)
- Agregar ejercicios (calorías quemadas)
- Diferenciación entre tipos de actividad

### ✏️ Gestión de Actividades
- Editar actividades existentes
- Eliminar actividades
- Validación de formularios
- Generación de IDs únicos

### 🧮 Cálculo de Calorías
- Calorías consumidas
- Calorías quemadas
- Balance calórico total

### 🔄 Estado Global
- Manejo centralizado con Context API
- Uso de reducer para lógica compleja
- Acceso global al estado desde cualquier componente

### 💾 Persistencia
- Guardado en LocalStorage
- Recuperación automática al recargar

---

## 🧩 Arquitectura de la Aplicación

### 🔹 useReducer + Context API

Se utiliza esta combinación para:

- Centralizar el estado global
- Manejar múltiples acciones de forma estructurada
- Separar lógica de negocio de la UI

### 🔹 Custom Hook

Se implementa un hook personalizado para:

- Acceder fácilmente al contexto
- Ejecutar acciones del reducer
- Simplificar el uso del estado global

---

## 🧠 Conceptos Aplicados

- Context API en React
- useReducer avanzado
- Tipado con TypeScript
- Manejo de estado global
- Hooks personalizados
- Renderizado dinámico
- Persistencia con LocalStorage

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev