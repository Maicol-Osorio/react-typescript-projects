# 💰 Tip Calculator con useReducer - React + TypeScript

## 📌 Descripción

Este proyecto es una evolución de la aplicación **Tip Calculator**, en la cual se realiza una **migración de la lógica basada en Hooks personalizados (`useOrder`) a `useReducer`**, con el objetivo de mejorar la organización, escalabilidad y mantenimiento del estado.

La aplicación permite gestionar una orden de consumo, agregar productos, eliminar elementos, seleccionar un porcentaje de propina y calcular el total a pagar en tiempo real, utilizando una arquitectura basada en reducers.

---

## 🌐 Demo

👉 https://calculator-expenses.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Migrar lógica de un Custom Hook a `useReducer`
- Centralizar el manejo del estado de la aplicación
- Implementar acciones claras mediante `dispatch`
- Mejorar la escalabilidad del código
- Aplicar buenas prácticas en React con TypeScript

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **React Hooks**
  - `useReducer`
  - `useMemo`
  - `useCallback`
- 💾 **LocalStorage** *(si aplica)*

---

## ⚙️ Funcionalidades Principales

### 🍽️ Gestión de Orden
- Agregar productos a la orden
- Evitar duplicados
- Incrementar cantidades automáticamente
- Eliminar productos
- Reiniciar la orden

### 💸 Sistema de Propinas
- Selección de porcentaje de propina
- Almacenamiento del valor seleccionado en el estado
- Cálculo dinámico de la propina

### 🧮 Cálculo de Totales
- Subtotal de consumo
- Total de propina
- Total a pagar
- Optimización con `useMemo`

### 🔄 Estado con useReducer
- Manejo centralizado del estado
- Uso de acciones mediante `dispatch`
- Separación clara entre lógica y UI

---

## 🧩 Implementación con useReducer

### 🔹 ¿Por qué usar useReducer?

Se implementó `useReducer` debido a:

- Manejo de múltiples estados relacionados (orden + propina)
- Necesidad de lógica más estructurada
- Mejor escalabilidad en aplicaciones reales

### 🔹 Acciones Implementadas

- `add-item`
- `remove-item`
- `set-tip`
- `reset-order`

---

## 🧠 Beneficios de esta Arquitectura

- 📦 Estado centralizado
- 🔁 Flujo predecible de datos
- 🧼 Código más limpio
- 📈 Escalabilidad del proyecto
- 🛠️ Mayor facilidad de mantenimiento

---

## 🧩 Conceptos Aplicados

- useReducer en React
- Tipado de acciones con TypeScript
- Manejo de estado complejo
- Separación de lógica y presentación
- Optimización con `useMemo`
- Uso de `useCallback`

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev