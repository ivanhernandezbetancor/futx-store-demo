# FASE 3: BACKEND ARCHITECTURE & SETUP

## 🎯 Objetivo de la Fase
Establecer la base tecnológica de FUTX STORE, incluyendo diseño de base de datos, arquitectura de APIs, entorno de desarrollo y pipelines de CI/CD.

## 📦 Entregables Específicos
1. Esquema de Base de Datos (ERD).
2. Especificación de Endpoints API.
3. Estructura de repositorio y variables de entorno inicializadas.
4. Configuración básica de CI/CD (GitHub Actions/Hooks).

## 🤖 Prompts para Ejecutar (Copiar y Pegar)

**Prompt 3.1: Architecture & Database Design**
```text
@code-review Eres arquitecto de software senior. Diseña la base de datos (PostgreSQL + Prisma) y arquitectura para el MVP de FUTX STORE (Node.js/Express o Next.js API Routes).
Requisitos: Catálogo de productos, control de stock preciso, carritos, órdenes, y usuarios.
Genera:
1. Modelos de Prisma detallados (Users, Products, Orders, OrderItems, Cart, Reviews).
2. Listado de Endpoints REST principales.
3. Estrategia de autenticación recomendada (JWT).
```

**Prompt 3.2: Project Setup & DevOps**
```text
@code-review Define la estructura de carpetas ideal para este proyecto full-stack.
Genera:
1. Árbol de directorios del proyecto.
2. Contenido del `.env.example` necesario (Base de datos, Stripe, SendGrid, etc).
3. Pasos de configuración inicial del entorno de desarrollo.
4. Un archivo `.github/workflows/main.yml` básico para CI (Lint, Test, Build).
```

## ✅ Checklist de Completitud
- [ ] Repositorio creado con estructura base.
- [ ] Modelos de BD definidos y primera migración lista.
- [ ] Endpoints API documentados.
- [ ] Variables de entorno bien definidas en `.env.example`.

## ⚠️ Riesgos y Mitigación
- **Riesgo:** Problemas de escalabilidad futura de la base de datos.
- **Mitigación:** Modelado relacional estricto con índices correctos desde el principio.
- **Riesgo:** Condiciones de carrera en control de stock de productos muy limitados.
- **Mitigación:** Uso de bloqueos o transacciones atómicas al confirmar la orden.

## 📅 Timeline Realista
- **Duración:** 2 Días (Semana 1, Paralelo a Diseño)
- Día 3: Arquitectura y Modelado de Base de Datos.
- Día 4: Inicialización del repositorio y configuración de DevOps.
