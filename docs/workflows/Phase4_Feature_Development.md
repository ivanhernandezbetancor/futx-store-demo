# FASE 4: FEATURE DEVELOPMENT

## 🎯 Objetivo de la Fase
Desarrollar las funcionalidades principales del backend y frontend de FUTX STORE mediante sprints iterativos, integrando servicios críticos (pagos, emails, inventario).

## 📦 Entregables Específicos
1. Backend APIs (Auth, CRUD de productos, órdenes, gestión de inventario, integración Stripe).
2. Frontend Screens (Home, PDP, Cart, Checkout flow, User Dashboard).
3. Suite de tests automatizados básica (Integración y E2E).

## 🤖 Prompts para Ejecutar (Copiar y Pegar)

**Prompt 4.1: Backend Features (Sprint 1 y 2)**
```text
@code-review Implementa lógica de backend para los siguientes flujos de FUTX STORE, asumiendo el stack de Prisma+Express/Next:
1. Endpoint de Checkout: Recibe ítems del carrito, verifica stock en tiempo real, crea Payment Intent de Stripe.
2. Webhook de Stripe: Confirma pago, descuenta inventario definitivo, cambia estado de la orden a 'Pagado' y lanza trigger para Email de Confirmación.
Asegura manejo de errores y casos límite (ej. falla de pago, o inventario agotado durante checkout).
```

**Prompt 4.2: Frontend Features (Sprint 1 y 2)**
```text
@frontend-design Escribe los componentes React/Vue principales para el flujo de compra de FUTX STORE:
1. `ProductCard`: Muestra foto, precio rebajado, estado de stock (Urgencia) e ícono de añadir rápido.
2. `CartDrawer`: Carrito lateral dinámico. Muestra ítems, calcula total, indica cuánto falta para envío gratis (upsell).
3. `CheckoutFlow`: Maneja los estados de Datos de Envío y Pago, integrando Stripe Elements. 
Usa llamadas asíncronas seguras y maneja estados de carga (Loading/Error/Success).
```

**Prompt 4.3: Integration Testing**
```text
@code-review Crea un test End-to-End (E2E) con Playwright o Cypress para el Happy Path crítico de FUTX STORE:
1. Usuario entra a Home.
2. Busca y navega a una camiseta retro.
3. Añade al carrito y procede a checkout.
4. Rellena datos y completa pago con tarjeta de prueba.
5. Verifica que llega a la página de éxito.
```

## ✅ Checklist de Completitud
- [ ] Autenticación de usuarios funcional.
- [ ] Catálogo renderizando datos de la BD.
- [ ] Flujo de carrito y checkout completo e integrado con Stripe.
- [ ] Inventario sincronizado en tiempo real.
- [ ] Test E2E del happy path pasando correctamente.

## ⚠️ Riesgos y Mitigación
- **Riesgo:** Bugs en el checkout bloquean la compra.
- **Mitigación:** TDD riguroso en los endpoints de pago y tests E2E automatizados.
- **Riesgo:** Desconexión entre diseño y frontend.
- **Mitigación:** Revisiones cruzadas semanales entre devs y diseño.

## 📅 Timeline Realista
- **Duración:** 14 Días (Semanas 2 y 3)
- Semana 2: Core Auth, Catálogo, Carrito.
- Semana 3: Orders, Payments (Stripe), Correos transaccionales, Testing.
