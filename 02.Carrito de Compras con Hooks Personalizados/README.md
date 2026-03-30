# 🛒 Carrito de compras con Hooks Personalizados - React App

## 📌 Descripción

Este proyecto es una evolución del carrito de compras desarrollado previamente, en el cual se implementa una mejora clave: la creación y uso de un **Hook personalizado (`useCart`)** para encapsular y reutilizar la lógica del carrito.

La aplicación permite gestionar productos, agregar elementos al carrito, modificar cantidades, eliminar artículos y calcular el total a pagar, todo utilizando una arquitectura más limpia y escalable gracias a la abstracción de lógica en un Hook personalizado.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://guitar-shopping.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Comprender las ventajas de los Hooks personalizados
- Separar la lógica de negocio de los componentes
- Mejorar la reutilización del código
- Aplicar buenas prácticas en React
- Refactorizar una aplicación existente

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🟨 **JavaScript (ES6+)**
- 🎨 **CSS**
- 🧠 **React Hooks**
  - `useState`
  - `useEffect`
  - `useMemo`
  - 🆕 **Custom Hook (`useCart`)**
- 💾 **LocalStorage**

---

## ⚙️ Funcionalidades Principales

### 🛍️ Gestión de Productos
- Visualización de productos disponibles
- Renderizado dinámico

### 🛒 Carrito de Compras
- Agregar productos
- Validar si un producto ya existe
- Incrementar cantidades automáticamente
- Eliminar productos
- Vaciar el carrito

### 🧮 Cálculo de Totales
- Cálculo automático del total
- Optimización con `useMemo`

### 💾 Persistencia
- Guardado en LocalStorage
- Recuperación automática al recargar

---

## 🧩 Uso de Hooks Personalizados

### 🔹 ¿Qué es `useCart`?

`useCart` es un Hook personalizado que encapsula toda la lógica del carrito de compras, permitiendo:

- Centralizar el estado del carrito
- Reutilizar lógica en diferentes componentes
- Mantener componentes más limpios y enfocados en UI

### 🔹 Responsabilidades del Hook

- Manejo del estado del carrito
- Agregar productos
- Eliminar productos
- Actualizar cantidades
- Calcular el total
- Sincronizar con LocalStorage

---

## 🧠 Beneficios de esta Implementación

- 🔁 Reutilización de lógica
- 🧼 Código más limpio y organizado
- 📦 Separación de responsabilidades
- 📈 Mayor escalabilidad
- 🛠️ Mantenimiento más sencillo

---

## 🧩 Conceptos de React Aplicados

- Hooks personalizados
- Separación de lógica y presentación
- Manejo avanzado del estado
- Props
- Renderizado dinámico
- Optimización con `useMemo`
- Persistencia de datos

---

## 🚀 Instalación y Ejecución

```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev