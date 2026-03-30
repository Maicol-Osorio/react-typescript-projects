# 💸 Budget Control App - React + TypeScript + Context API

## 📌 Descripción

**Budget Control App** es una aplicación web desarrollada con **React, TypeScript y TailwindCSS** que permite gestionar un presupuesto personal de forma interactiva.

El usuario puede definir un presupuesto inicial, registrar gastos, editarlos o eliminarlos, visualizar el dinero disponible y analizar el estado financiero mediante una gráfica interactiva.

La aplicación utiliza una arquitectura basada en **useReducer y Context API**, permitiendo un manejo global del estado de forma organizada, escalable y mantenible.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://butget-control.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Implementar estado global con Context API
- Manejar lógica compleja con useReducer
- Aplicar TypeScript en una aplicación real
- Crear una interfaz moderna con TailwindCSS
- Gestionar datos dinámicos y persistentes

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **React Hooks**
  - `useReducer`
  - `useContext`
  - `useMemo`
- 🌐 **Context API**
- 💾 **LocalStorage**
- 🧩 **Headless UI** (modales)
- 📊 **React Circular Progressbar** (barra progresiva)

---

## ⚙️ Funcionalidades Principales

### 💰 Gestión de Presupuesto
- Definir presupuesto inicial
- Validación del presupuesto
- Visualización de disponible y gastado
- Prevención de sobregiro

### 🧾 Gestión de Gastos
- Agregar nuevos gastos
- Editar gastos existentes
- Eliminar gastos (interacción swipe)
- Asignar categoría a cada gasto
- Seleccionar fecha con calendario

### 📊 Visualización de Datos
- Cálculo de:
  - Presupuesto total
  - Gastos realizados
  - Dinero disponible
- Gráfica circular interactiva
- Indicadores visuales del estado financiero

### 🔍 Filtros
- Filtrar gastos por categoría
- Visualización dinámica de resultados

### 🪟 Interfaz de Usuario
- Modal para agregar/editar gastos
- Alertas de validación
- Interacción táctil (swipe)

### 💾 Persistencia
- Guardado de presupuesto y gastos en LocalStorage
- Recuperación automática al recargar

---

## 🧩 Arquitectura de la Aplicación

### 🔹 useReducer

Se utiliza para:

- Manejar el estado global de presupuesto y gastos
- Definir acciones claras y predecibles
- Centralizar la lógica de negocio

### 🔹 Context API

Permite:

- Compartir el estado global en toda la aplicación
- Evitar prop drilling
- Acceder fácilmente al estado mediante un custom hook

### 🔹 Custom Hook

Se crea un hook para:

- Acceder al contexto
- Ejecutar acciones del reducer
- Simplificar el uso del estado global

---

## 🧠 Conceptos Aplicados

- useReducer en React
- Context API
- Hooks personalizados
- Tipado con TypeScript
- Interfaces y Types
- Manejo de formularios
- Renderizado condicional
- Persistencia con LocalStorage
- UI moderna con TailwindCSS
- Manejo de eventos complejos (swipe, modales)

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev