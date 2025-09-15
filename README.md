# 🛡️ Reto Técnico RIMAC - Cotizador de Seguros

Este proyecto es una solución al reto técnico de RIMAC, que consiste en un cotizador de seguros desarrollado con **React + Vite**, aplicando buenas prácticas de diseño, performance y testing.

---

## 🚀 Demo

🔗 Deployment: (https://rimac-frontend-challenge-psi.vercel.app/)

---

## 📦 Tech Stack

- React 18 + Vite
- SCSS Modules
- Vitest + React Testing Library
- ESLint + Prettier
- Vercel (para despliegue)

---

## 🧩 Estructura del Proyecto

```
/src
  /components      → Header, Stepper, UserTypeSelector, PlansList, Summary, etc.
  /pages           → PlansPage.jsx (pantalla principal)
  /services        → api.js (mock de consumo de datos)
  /styles          → SCSS modularizado con variables y reutilización
```

---

## 🧪 Testing

- Pruebas unitarias completas con cobertura a componentes clave.
- Uso de `@testing-library/react` + `vitest`.
- Mock de servicios para pruebas aisladas.

---

## 🧼 Clean Code & Performance

- Uso de `React.memo` y funciones puras.
- Separación de lógica en hooks y props controladas.
- Optimizaciones de renderizado condicional.

---

## ✨ Mejora técnica y UX

- Diseño responsive validado en iPhone SE y pantallas grandes.
- Código SCSS limpio, con variables centralizadas en `_variables.scss`.
- Carga condicional de componentes (como `Summary` solo si hay plan seleccionado).
- Errores controlados con `try/catch` y fallback UI amigable.

---

## 🧠 Cómo ejecutar localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/siberia0310/rimac-frontend-challenge

# 2. Instala dependencias
npm install

# 3. Corre la app
npm run dev

# 4. Corre las pruebas
npm run test
```

---

## 👩‍💻 Autora

Desarrollado por **Siberia González** como parte del proceso de selección técnica para RIMAC Seguros.

---