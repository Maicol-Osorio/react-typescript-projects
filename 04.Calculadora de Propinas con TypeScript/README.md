# 💰 Tip Calculator - React + TypeScript

## 📌 Descripción

**Tip Calculator** es una aplicación web desarrollada con **React, TypeScript y TailwindCSS** que permite calcular el total de una cuenta incluyendo propina.

El usuario puede seleccionar productos de un menú, agregarlos a una orden, gestionar cantidades, eliminar elementos y finalmente calcular el total junto con la propina seleccionada.

Este proyecto destaca por el uso de **tipado estático con TypeScript**, una interfaz moderna con **TailwindCSS** y la implementación de lógica reutilizable mediante Hooks personalizados.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://calculator-expenses.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Aplicar TypeScript en un proyecto real con React
- Implementar lógica de cálculo de consumo y propinas
- Crear interfaces modernas con TailwindCSS
- Manejar estado complejo de forma organizada
- Reforzar el uso de Hooks personalizados

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **React Hooks**
  - `useState`
  - `useMemo`
  - `useCallback`
- 🧩 **Custom Hook (`useOrder`)**

---

## ⚙️ Funcionalidades Principales

### 🍽️ Menú de Productos
- Listado dinámico de productos
- Selección de artículos para la orden

### 🛒 Gestión de Orden
- Agregar productos a la orden
- Evitar duplicados
- Incrementar cantidades automáticamente
- Eliminar productos
- Reiniciar la orden

### 🧮 Cálculo de Consumo
- Visualización del consumo total
- Formateo de precios
- Cálculo automático del subtotal

### 💸 Sistema de Propinas
- Selección de porcentaje de propina
- Cálculo dinámico del valor de la propina
- Actualización en tiempo real

### 💵 Total a Pagar
- Suma del consumo + propina
- Cálculo eficiente con `useMemo`

---

## 🧩 Uso de Hooks Personalizados

### 🔹 `useOrder`

Hook personalizado encargado de:

- Manejar el estado de la orden
- Agregar y eliminar productos
- Controlar cantidades
- Calcular totales
- Reiniciar la orden

---

## 🧠 Conceptos Aplicados

- Tipado con TypeScript
- Interfaces y Types
- Tipado de funciones y estado
- Hooks personalizados
- Manejo de eventos en React
- Renderizado dinámico
- Optimización con `useMemo`
- Uso de `useCallback` para funciones

---

## ⚡ Diferencias Clave Implementadas

- Uso de **TypeScript** para mayor seguridad
- Implementación de **TailwindCSS** para diseño moderno
- Comparación práctica entre `useMemo` y `useCallback`
- Mejor organización del estado con Hooks personalizados

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev