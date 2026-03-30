# 🏥 Patient Manager - React + TypeScript + Zustand

## 📌 Descripción

**Patient Manager** es una aplicación web desarrollada con **React, TypeScript y TailwindCSS** que permite gestionar pacientes de manera eficiente.

El usuario puede registrar pacientes mediante un formulario validado, visualizar la lista de pacientes, editar su información y eliminarlos. La aplicación utiliza **Zustand** para el manejo global del estado y **React Hook Form** para la gestión eficiente de formularios.

Además, se implementan notificaciones con **React-Toastify** y persistencia de datos mediante **LocalStorage**.

---

## 🌐 Demo

Puedes probar la aplicación aquí:  
👉 https://manager-patient.netlify.app/

---

## 🎯 Objetivos del Proyecto

- Implementar Zustand como alternativa a Context API y Redux
- Manejar formularios con React Hook Form
- Aplicar validación y tipado con TypeScript
- Crear una aplicación CRUD completa
- Mejorar la experiencia de usuario con notificaciones

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React**
- 🔷 **TypeScript**
- 🎨 **TailwindCSS**
- 🧠 **Zustand** (estado global)
- 📝 **React Hook Form**
- 🔔 **React-Toastify**
- 💾 **LocalStorage**

---

## ⚙️ Funcionalidades Principales

### 🧾 Gestión de Pacientes
- Registrar nuevos pacientes
- Editar información existente
- Eliminar pacientes
- Listar todos los pacientes

### 📝 Formularios Avanzados
- Manejo eficiente con React Hook Form
- Validación de campos
- Mensajes de error personalizados

### 🔄 Estado Global con Zustand
- Manejo centralizado del estado
- Acciones para CRUD de pacientes
- Integración con Redux DevTools

### 🔔 Notificaciones
- Alertas visuales con React-Toastify
- Feedback al usuario en acciones importantes

### 💾 Persistencia
- Guardado automático en LocalStorage
- Recuperación de datos al recargar

---

## 🧩 Arquitectura de la Aplicación

### 🔹 Zustand

Se utiliza para:

- Manejar el estado global de pacientes
- Definir acciones (crear, editar, eliminar)
- Simplificar el manejo del estado sin boilerplate

### 🔹 React Hook Form

Permite:

- Manejar formularios de forma eficiente
- Reducir re-renderizados
- Validar datos fácilmente

---

## 🧠 Conceptos Aplicados

- Zustand (estado global moderno)
- React Hook Form
- Tipado con TypeScript
- Formularios controlados
- Validación de datos
- CRUD completo
- Persistencia con LocalStorage
- Manejo de notificaciones

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Maicol-Osorio/react-typescript-projects.git
cd react-typescript-projects
npm install
npm run dev