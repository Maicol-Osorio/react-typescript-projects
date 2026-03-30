# 🛒 Carrito de compras con TypeScript - React App

## 📌 Descripción

Este proyecto es una evolución del carrito de compras desarrollado previamente en React, el cual ha sido **migrado completamente a TypeScript** con el objetivo de mejorar la calidad, mantenibilidad y escalabilidad del código.

La aplicación permite gestionar un carrito de compras de guitarras, incluyendo funcionalidades como agregar productos, modificar cantidades, eliminar elementos y calcular el total a pagar, todo con un tipado fuerte que reduce errores y mejora la experiencia de desarrollo.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://guitar-shopping.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Migrar una aplicación de React a TypeScript
- Aplicar tipado estático en componentes y lógica
- Mejorar la calidad y seguridad del código
- Comprender el uso de types, interfaces y utility types
- Implementar buenas prácticas en proyectos con TypeScript

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **CSS**
- 🧠 **React Hooks**
  - `useState`
  - `useEffect`
  - `useMemo`
- 💾 **LocalStorage**

---

## ⚙️ Funcionalidades Principales

### 🛍️ Catálogo de Productos
- Visualización de guitarras disponibles
- Renderizado dinámico con tipado seguro

### 🛒 Carrito de Compras
- Agregar productos al carrito
- Validación de existencia de productos
- Incremento automático de cantidades
- Eliminación de productos
- Limpieza completa del carrito

### 🧮 Cálculo de Totales
- Cálculo automático del total
- Optimización con `useMemo`

### 💾 Persistencia
- Guardado en LocalStorage
- Recuperación de datos al recargar la aplicación

---

## 🧩 Implementación con TypeScript

### 🔹 Tipado de Datos

Se definieron tipos e interfaces para estructurar correctamente la información:

- Tipos para productos (guitarras)
- Tipos para elementos del carrito
- Tipos para IDs
- Tipado de Props en componentes

### 🔹 Uso de Interfaces y Types

- Definición de contratos claros para los datos
- Reutilización de tipos en toda la aplicación
- Separación de tipos en archivos independientes

### 🔹 Extensión de Types

- Herencia de tipos para evitar duplicación de código
- Composición de estructuras más complejas

### 🔹 Utility Types

Uso de utilidades como:

- `Pick`
- `Omit`

Para manipular y reutilizar tipos de forma eficiente

---

## 🧠 Beneficios de usar TypeScript

- 🛡️ Detección temprana de errores
- 📖 Código más legible y mantenible
- 🤝 Mejor trabajo en equipo
- 🔍 Autocompletado y ayuda del editor
- 📈 Escalabilidad del proyecto

---

## 🧩 Conceptos Aplicados

- Tipos primitivos en TypeScript
- Types vs Interfaces
- Tipado de Props
- Tipado de estados
- Tipado de funciones
- Separación de tipos en archivos
- Extensión de tipos
- Utility Types

---

## 🚀 Instalación y Ejecución

```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev