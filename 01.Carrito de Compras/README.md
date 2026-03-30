# 🎸 Carrito de compras - React App

## 📌 Descripción

**Carrito de compras** es una aplicación web desarrollada con **React** que simula un sistema de compras en línea enfocado en la venta de guitarras.

El proyecto permite a los usuarios explorar un catálogo de productos, agregar artículos al carrito, gestionar cantidades y visualizar el total a pagar. Además, implementa persistencia de datos mediante **LocalStorage**, garantizando que el carrito no se pierda al recargar la página.

Este proyecto fue desarrollado como práctica para afianzar conceptos fundamentales de React y el manejo del estado en aplicaciones modernas.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://guitar-shopping.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Aplicar los fundamentos de React en un proyecto real
- Comprender el manejo del estado con Hooks
- Implementar lógica de carrito de compras
- Trabajar con renderizado dinámico de datos
- Persistir información en el navegador
- Optimizar el rendimiento de la aplicación

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React** – Librería principal para la construcción de la interfaz
- 🟨 **JavaScript (ES6+)** – Lógica de la aplicación
- 🎨 **CSS** – Estilos personalizados
- 🧠 **React Hooks**
  - `useState` – Manejo del estado
  - `useEffect` – Efectos secundarios
  - `useMemo` – Optimización del rendimiento
- 💾 **LocalStorage** – Persistencia del carrito

---

## ⚙️ Funcionalidades Principales

### 🛍️ Catálogo de Productos
- Visualización de guitarras disponibles
- Renderizado dinámico a partir de datos

### 🛒 Carrito de Compras
- Agregar productos al carrito
- Evitar duplicados mediante validación
- Incrementar cantidad si el producto ya existe
- Eliminar productos del carrito
- Vaciar completamente el carrito

### 🧮 Cálculo de Totales
- Cálculo automático del total a pagar
- Uso de estado derivado para mantener consistencia

### 💾 Persistencia de Datos
- Guardado automático del carrito en LocalStorage
- Recuperación de datos al recargar la aplicación

### ⚡ Optimización
- Uso de `useMemo` para mejorar el rendimiento en cálculos

### 🔄 Interfaz Dinámica
- Detección de carrito vacío
- Actualización en tiempo real de la UI

---

## 🧩 Conceptos de React Aplicados

Este proyecto cubre los siguientes conceptos clave:

- Componentes reutilizables
- JSX (JavaScript XML)
- Props (comunicación entre componentes)
- State (manejo del estado)
- Hooks en React
- Reglas de los Hooks
- Renderizado condicional
- Renderizado de listas con `.map()`
- Manejo de eventos en JSX
- State derivado
- Separación de lógica y presentación

---

## 🚀 Instalación

```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev