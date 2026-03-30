# 🛒 Carrito de compras con useReducer - React App

## 📌 Descripción

Este proyecto es una evolución del carrito de compras desarrollado previamente en React, en el cual se realiza una **migración de un Custom Hook (`useCart`) a `useReducer`** para mejorar la gestión del estado en una aplicación más compleja.

La aplicación permite agregar productos, gestionar cantidades, eliminar artículos y calcular el total a pagar, utilizando una arquitectura basada en reducers que facilita la escalabilidad y el mantenimiento del código.

---

## 🌐 Demo

👉 https://guitar-shopping.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Migrar lógica de un Custom Hook a `useReducer`
- Centralizar la gestión del estado
- Implementar un flujo basado en acciones (`dispatch`)
- Mejorar la escalabilidad del proyecto
- Aplicar buenas prácticas en React

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🟨 **JavaScript (ES6+)**
- 🎨 **CSS**
- 🧠 **React Hooks**
  - `useReducer`
  - `useEffect`
  - `useMemo`
- 💾 **LocalStorage**

---

## ⚙️ Funcionalidades Principales

### 🛍️ Catálogo de Productos
- Visualización de guitarras disponibles
- Renderizado dinámico

### 🛒 Carrito de Compras
- Agregar productos al carrito
- Evitar duplicados mediante lógica en el reducer
- Incrementar cantidades automáticamente
- Eliminar productos del carrito
- Vaciar el carrito

### 🧮 Cálculo de Totales
- Cálculo automático del total a pagar
- Optimización con `useMemo`

### 🔄 Gestión de Estado con useReducer
- Uso de un reducer centralizado
- Manejo de acciones mediante `dispatch`
- Separación clara de lógica

### 💾 Persistencia
- Guardado en LocalStorage
- Recuperación automática al recargar

---

## 🧩 Implementación con useReducer

### 🔹 ¿Por qué migrar a useReducer?

Se realizó esta migración debido a:

- Incremento en la complejidad del estado
- Necesidad de centralizar la lógica
- Mejor organización del código

### 🔹 Acciones Implementadas

- `add-to-cart`
- `remove-from-cart`
- `increase-quantity`
- `decrease-quantity` *(si aplica)*
- `clear-cart`

---

## 🧠 Beneficios de esta Implementación

- 📦 Estado centralizado
- 🧼 Código más organizado
- 🔁 Flujo predecible de datos
- 📈 Escalabilidad del proyecto
- 🛠️ Mejor mantenimiento

---

## 🧩 Conceptos Aplicados

- useReducer en React
- Acciones y reducers
- Manejo de estado complejo
- Renderizado dinámico
- Persistencia con LocalStorage
- Optimización con `useMemo`

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev