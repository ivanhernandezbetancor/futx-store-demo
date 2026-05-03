# ANTIGRAVITY WORKFLOWS: SHIP A SAAS MVP
## Sistema de Orquestación para FUTX STORE

---

## 🎯 CONTEXTO DE LA APLICACIÓN

### Descripción de la App (1 Frase)
**FUTX STORE es una plataforma SaaS de ecommerce especializada en la venta de camisetas de fútbol retro, vintage y ediciones limitadas, con automatización de marketing, gestión de inventario y análisis de clientes.**

---

## 📋 COMPOSICIÓN DEL EQUIPO SENIOR

```
🧠 @brainstorming
   ├─ Generación de ideas innovadoras
   ├─ Validación de hipótesis de mercado
   ├─ Identificación de blockers
   └─ Pivot strategy si es necesario

🎨 @frontend-design
   ├─ UI/UX design system
   ├─ Componentes reutilizables
   ├─ Optimización de conversión
   └─ Responsive & accessibility

🔍 @code-review
   ├─ Estándares de código
   ├─ Performance optimization
   ├─ Security best practices
   ├─ Testing coverage
   └─ Deployment readiness
```

---

## 🚀 FLUJO: SHIP A SAAS MVP (4 SEMANAS)

### FASE 1: DISCOVERY & STRATEGY (Semana 1)
**Responsable Principal: @brainstorming**

#### Tarea 1.1: Market Validation
```
INPUT:
  • Descripción de la app
  • Público objetivo (coleccionistas, aficionados, hype beasts)
  • Propuesta de valor (precios bajos, envío gratis, 100% auténticas)
  
OUTPUT ESPERADO:
  ✓ Análisis de mercado (TAM, SAM, SOM)
  ✓ Validación de problema-solución fit
  ✓ 5 variaciones de propuesta de valor
  ✓ Métricas de éxito de MVP
  ✓ Riesgos y mitigación
  
PROMPT:
Eres analista estratégico senior. Valida el mercado para FUTX STORE:
- ¿Es viable el mercado de camisetas retro?
- ¿Cuál es el TAM (Total Addressable Market) en España?
- ¿Qué competencia existe?
- ¿Cuáles son los principales riesgos?
- ¿Qué métricas definen éxito en mes 1?

Proporciona análisis cuantitativo y cualitativo.
```

#### Tarea 1.2: MVP Scope Definition
```
INPUT:
  • Requisitos funcionales de FUTX STORE
  • Timeline de 4 semanas
  • Equipo de desarrollo (size TBD)
  
OUTPUT ESPERADO:
  ✓ User stories prioriz (MoSCoW)
  ✓ Feature list (Must/Should/Could/Won't)
  ✓ Data model diagram
  ✓ Architecture overview
  ✓ Tech stack recomendado
  ✓ Risk assessment
  
PROMPT:
Eres PM senior. Define scope MVP de FUTX STORE para 4 semanas:

FEATURES CANDIDATAS:
- Catálogo de productos (50+ SKUs)
- Carrito de compra
- Checkout (Stripe/PayPal)
- Email marketing automation
- Admin panel (gestión inventario)
- Analytics dashboard
- CMS para contenido
- SEO fundamentals
- Social media integration
- Customer support chat

CONSTRAINTS:
- Timeline: 4 semanas
- Equipo: 1-2 devs
- MVP must launch to customers

Proporciona:
1. Features imprescindibles (Must)
2. Features importantes (Should)
3. Features deseables (Could)
4. Features para Phase 2 (Won't)
5. Data model básico
6. Tech stack recomendado
7. Riesgos y plan B
```

#### Tarea 1.3: User Journey Mapping
```
OUTPUT ESPERADO:
  ✓ 5 user personas detalladas
  ✓ User journeys end-to-end
  ✓ Painpoints por persona
  ✓ Happy paths vs edge cases
  
PROMPT:
Define las 5 personas usuario principales para FUTX STORE:
1. El Coleccionista Serio (35-50, invierte 500€+/mes)
2. El Aficionado Nostálgico (40-60, compra ocasional)
3. El Hype Beast Joven (18-28, seguidor de tendencias)
4. El Inversor de Vintage (35-55, busca valor)
5. El Regalador Inteligente (25-40, ocasional pero alto ticket)

Para cada persona:
- Motivación de compra
- Pain points
- Buyer's journey completo
- Tasa de conversión esperada
- Valor de lifetime
```

---

### FASE 2: DESIGN SYSTEM & FRONTEND (Semana 1-2)
**Responsable Principal: @frontend-design**

#### Tarea 2.1: Design System Definition
```
INPUT:
  • Brand (FUTX STORE)
  • Colores: Verde #1a472a, Dorado #D4AF37, Rojo #E63946
  • Tipografía: Montserrat + Inter/Roboto
  
OUTPUT ESPERADO:
  ✓ Component library (Figma/Storybook)
  ✓ 50+ componentes reutilizables
  ✓ Design tokens (spacing, colors, typography)
  ✓ Accessibility guidelines (WCAG 2.1)
  ✓ Responsive breakpoints
  ✓ Dark/light mode (si aplica)
  
PROMPT:
Eres diseñador senior de UI/UX. Crea design system para FUTX STORE:

COMPONENTES CORE:
  Navigation
  ├─ Header (sticky)
  ├─ Menú hamburguesa (mobile)
  ├─ Breadcrumbs
  └─ Footer

  Product Display
  ├─ Product card
  ├─ Product detail page
  ├─ Image gallery (360°)
  ├─ Reviews widget
  └─ Recommendations

  Commerce
  ├─ Cart (floating + page)
  ├─ Checkout (multi-step)
  ├─ Payment form (Stripe/PayPal)
  ├─ Order confirmation
  └─ Order tracking

  Content
  ├─ Blog post
  ├─ FAQ accordion
  ├─ Testimonial
  ├─ CTA button (variations)
  └─ Alert/notification

ENTREGABLES:
1. Design tokens (JSON format)
2. Component specifications (dimensions, states, interactions)
3. Accessibility checklist (WCAG 2.1 AA)
4. Responsive behavior (320px, 768px, 1024px, 1440px)
5. Color system con contrast ratios
6. Typography scale
7. Spacing system
8. Animation guidelines
```

#### Tarea 2.2: Wireframes & Flows
```
OUTPUT ESPERADO:
  ✓ Wireframes de 8-10 páginas core
  ✓ User flows (compra, búsqueda, carrito abandonment)
  ✓ Interactive prototypes
  ✓ Conversion optimization hints
  
PÁGINAS A WIREFRAME:
  1. Homepage
  2. Category page
  3. Product detail
  4. Cart
  5. Checkout (step 1, 2, 3)
  6. Confirmation
  7. Dashboard (admin)
  8. User account
  
PROMPT:
Crea wireframes y flows detallados:
- Incluye call-to-action placements
- Destacar áreas críticas para conversión
- Mostrar cómo se adapta mobile vs desktop
- Incluir loading states y error states
- Indicar dónde va conten dinámico
```

#### Tarea 2.3: High-Fidelity Mockups (Key Pages)
```
OUTPUT ESPERADO:
  ✓ Mockups de Homepage
  ✓ Mockups de Product Detail
  ✓ Mockups de Checkout flow
  ✓ Mockups de Mobile (todas)
  ✓ Style guide completo
  
PROMPT:
Crea mockups high-fidelity para estas 3 páginas:
1. HOMEPAGE (con todo el contenido de conversión especificado antes)
2. PRODUCT DETAIL PAGE (con imágenes, reviews, cross-sell)
3. CHECKOUT PAGE (paso 1: carrito, paso 2: datos, paso 3: pago)

Aplica:
- Brand colors y tipografía
- Spacing consistente
- Micro-interactions (hover, active states)
- Loading animations
- Error messages
- Success states
- Mobile versions side-by-side
```

---

### FASE 3: BACKEND ARCHITECTURE & SETUP (Semana 1-2)
**Responsable Principal: @code-review**

#### Tarea 3.1: Architecture & Database Design
```
OUTPUT ESPERADO:
  ✓ System architecture diagram
  ✓ Database schema (ERD)
  ✓ API specification (OpenAPI/Swagger)
  ✓ Infrastructure diagram
  ✓ Security considerations
  ✓ Scalability roadmap
  
PROMPT:
Eres arquitecto de sistemas senior. Diseña stack técnico para FUTX STORE:

REQUISITOS:
- Stack: Node.js/Express (o Python/FastAPI)
- Database: PostgreSQL
- Frontend: React/Vue
- Hosting: AWS/Vercel/Railway
- Payment: Stripe API
- Email: SendGrid/Resend
- Storage: S3 para imágenes
- Analytics: Google Analytics 4

ENTREGABLES:
1. System architecture (monolith vs microservices - recomendación)
2. Database schema detallado:
   - Users
   - Products
   - Orders
   - OrderItems
   - Reviews
   - Inventory
   - Categories
   - Carts
   - Payments
   - EmailTemplates
   
3. API endpoints (CRUD operations):
   POST /api/products
   GET /api/products
   GET /api/products/:id
   POST /api/orders
   GET /api/orders/:id
   POST /api/payments
   etc.

4. Authentication strategy (JWT vs sessions)
5. Rate limiting & security
6. CDN strategy
7. Database backups
8. Monitoring & logging
```

#### Tarea 3.2: Project Setup & CI/CD
```
OUTPUT ESPERADO:
  ✓ Git repository structure
  ✓ Docker setup (local dev)
  ✓ Environment variables template
  ✓ Package.json / requirements.txt
  ✓ CI/CD pipeline (GitHub Actions)
  ✓ Deployment checklist
  
PROMPT:
Configura el proyecto completo:

1. Repo structure (folder organization)
2. Docker Compose (local development)
3. .env.example (all variables needed)
4. Package manager setup
5. Linting & formatting (ESLint, Prettier)
6. Pre-commit hooks
7. CI/CD pipeline:
   - Branch strategy (main, develop, feature/*)
   - Testing on every PR
   - Build & deploy on merge to main
   - Staging vs production
8. Deployment infrastructure setup
```

---

### FASE 4: FEATURE DEVELOPMENT (Semana 2-3)
**Responsable Principal: @code-review con @frontend-design**

#### Tarea 4.1: Backend Features (Sprint)
```
FEATURES A IMPLEMENTAR:
1. User authentication & registration
2. Product CRUD + image upload
3. Shopping cart logic
4. Order management
5. Payment processing (Stripe)
6. Email automation
7. Inventory tracking
8. Admin dashboard API

METODOLOGÍA:
Cada feature = 1 commit + 1 PR con:
- Tests (unit + integration)
- Code review checklist
- Performance considerations
- Security audit
- Documentation

PROMPT:
Implementa el backend en [tech stack]. 
Por cada feature:
1. Escribe tests primero (TDD)
2. Implementa feature
3. Crea API endpoint
4. Documenta en OpenAPI
5. Incluye error handling
6. Agrega logging
7. Considera edge cases

ORDEN DE PRIORIDAD:
Week 2:
- Auth (JWT/sessions)
- Product management
- Cart logic

Week 3:
- Orders + payments
- Email automation
- Admin panel basics
```

#### Tarea 4.2: Frontend Features (Sprint)
```
PÁGINAS A CONSTRUIR:
1. Homepage (con hero, categorías, productos destacados)
2. Product listing + filters
3. Product detail + reviews
4. Cart page
5. Checkout flow (3 steps)
6. Order confirmation
7. User account/dashboard
8. Admin dashboard

METODOLOGÍA:
- Component-based architecture
- Props-driven design system
- State management (Redux/Pinia/Context)
- Error boundaries
- Loading states
- Responsive first

PROMPT:
Implementa frontend en [React/Vue].
Estructura por carpeta:
/components
  /common
  /Product
  /Cart
  /Checkout
  /Admin
/pages
/services (API calls)
/store (state management)
/hooks (custom hooks)
/utils
/styles

Por cada página:
1. Usar componentes del design system
2. Conectar a backend (API calls)
3. Estado management (cart, auth, filters)
4. Error handling
5. Loading states
6. Mobile responsiveness
7. Tests (e2e con Cypress/Playwright)
```

#### Tarea 4.3: Integration Testing
```
OUTPUT ESPERADO:
  ✓ End-to-end test suite (Cypress/Playwright)
  ✓ API integration tests
  ✓ Component tests (React Testing Library)
  ✓ Test coverage report (>80%)
  
PROMPT:
Escribe tests automatizados:

USER FLOWS A TESTEAR:
1. Register → Login → Browse → Add to cart → Checkout → Pay
2. Search → Filter by price → Sort by date
3. Product detail → Reviews → Related products
4. Cart operations (add, remove, quantity, save for later)
5. Checkout validation (address, payment, promo codes)
6. Order confirmation + email

Crea tests para:
- Happy path (usuario completa compra)
- Edge cases (campos inválidos, sin inventario)
- Error states (fallo de pago, timeout)
- Accessibility (keyboard navigation, screen readers)
```

---

### FASE 5: OPTIMIZATION & HARDENING (Semana 3-4)
**Responsable Principal: @code-review**

#### Tarea 5.1: Performance Optimization
```
MÉTRICAS OBJETIVO:
- Lighthouse Score: >90
- Core Web Vitals (Green)
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- Time to First Byte < 600ms
- Build size < 500KB (gzipped)

OPTIMIZACIONES:
1. Code splitting + lazy loading
2. Image optimization (WebP, responsive sizes)
3. CSS/JS minification
4. Caching strategy
5. Database query optimization
6. API response caching
7. CDN setup

PROMPT:
Optimiza performance:
1. Frontend:
   - Code splitting por ruta
   - Tree shaking unused code
   - Lazy load imágenes
   - Optimize bundle size
   - Cache policy
   
2. Backend:
   - Database indexes
   - Query optimization
   - Response caching
   - Compression (gzip)
   - Rate limiting

3. Infrastructure:
   - CDN para assets
   - Database replication
   - Load balancing
   - Auto-scaling rules
```

#### Tarea 5.2: Security Hardening
```
CHECKLIST DE SEGURIDAD:
  ☐ HTTPS/TLS
  ☐ CSRF protection
  ☐ SQL injection prevention
  ☐ XSS protection
  ☐ Rate limiting
  ☐ Input validation
  ☐ Password hashing (bcrypt/argon2)
  ☐ Secrets management (.env, AWS Secrets Manager)
  ☐ API authentication (JWT con refresh tokens)
  ☐ CORS configuration
  ☐ Security headers (CSP, X-Frame-Options, etc.)
  ☐ Payment data encryption (PCI compliance)
  ☐ Logging de eventos críticos
  ☐ Dependency scanning (npm audit, snyk)

PROMPT:
Implementa security best practices:
1. Valida todos los inputs (frontend + backend)
2. Sanitiza outputs (previene XSS)
3. Usa variables de entorno para secrets
4. Implementa rate limiting
5. Setup security headers
6. Crea endpoint para reportar vulnerabilidades
7. Establece política de datos y GDPR compliance
8. Implementa logs de seguridad
9. Setup alerts para actividades sospechosas
```

#### Tarea 5.3: SEO & Analytics
```
OUTPUT ESPERADO:
  ✓ Meta tags en todas las páginas
  ✓ Sitemap.xml
  ✓ Robots.txt
  ✓ Structured data (Schema.org)
  ✓ Google Analytics 4 setup
  ✓ Conversion tracking
  ✓ Heatmap implementation
  
PROMPT:
Setup SEO y analytics:
1. Meta tags:
   - title (60 chars)
   - description (160 chars)
   - og:image, og:title, og:description
   - Canonical tags
   
2. Structured data:
   - Product schema
   - Organization schema
   - FAQPage schema
   
3. Analytics:
   - GA4 event tracking:
     - View product
     - Add to cart
     - Checkout started
     - Purchase completed
     - Form errors
   
4. Heatmaps:
   - Scroll depth
   - Click tracking
   - Form interaction
```

---

### FASE 6: LAUNCH PREPARATION (Semana 4)
**Responsable Principal: @brainstorming**

#### Tarea 6.1: Pre-launch Checklist
```
CATEGORÍA: TECHNICAL
  ☐ All tests passing (>80% coverage)
  ☐ Lighthouse score >90
  ☐ Performance baseline established
  ☐ Security audit passed
  ☐ Backup & restore tested
  ☐ Error handling implemented
  ☐ Logging working
  ☐ Monitoring alerts configured
  ☐ Database migrations tested
  ☐ API rate limits set

CATEGORÍA: CONTENT
  ☐ Homepage copy complete
  ☐ 50+ productos con descripciones
  ☐ FAQ populated
  ☐ Privacy policy ready
  ☐ Terms of service ready
  ☐ Contact info correct
  ☐ Support email configured
  ☐ Social media links added
  ☐ Blog seed content (3-5 posts)

CATEGORÍA: MARKETING
  ☐ Email templates ready
  ☐ Welcome email sequence setup
  ☐ Abandoned cart automation
  ☐ SMS templates (si aplica)
  ☐ Social media accounts created
  ☐ Landing page for ad campaigns
  ☐ Conversion pixels (GA, Facebook, etc.)
  ☐ Influencer outreach list
  ☐ PR template/media kit

CATEGORÍA: OPERACIONES
  ☐ Payment processing tested (Stripe)
  ☐ Email sending verified (SendGrid)
  ☐ Image hosting working
  ☐ Support system configured
  ☐ Analytics tracking verified
  ☐ Backup procedures documented
  ☐ Incident response plan
  ☐ Runbook para common issues
  ☐ Team training completed
  ☐ Customer onboarding materials

CATEGORÍA: LEGAL & COMPLIANCE
  ☐ GDPR compliance (si EU customers)
  ☐ PCI DSS compliance (pagos)
  ☐ Cookies policy
  ☐ Data retention policy
  ☐ Insurance review
  ☐ Terms of service reviewed

PROMPT:
Crea pre-launch checklist ejecutivo:
1. Prioriza por risk (critical, high, medium)
2. Asigna responsable por item
3. Estima esfuerzo (1h, 2h, 4h, 1d)
4. Crea timeline de rollout
5. Define success metrics día 1
```

#### Tarea 6.2: Launch Plan & Communications
```
OUTPUT ESPERADO:
  ✓ Launch timeline (hora específica)
  ✓ Go/No-go criteria
  ✓ Rollback plan
  ✓ Communication templates
  ✓ Customer support playbook
  ✓ Monitoring dashboard setup

PROMPT:
Diseña launch perfecto:

TIMELINE (Día del launch):
- T-24h: Final testing
- T-6h: Deploy a staging
- T-4h: Smoke tests
- T-2h: Team standby
- T-0: Deploy a production
- T+15min: Basic functionality verification
- T+1h: Team monitoring shift (24/7 coverage)

GO/NO-GO CRITERIA:
✓ All critical tests passing
✓ Lighthouse >85 (puede mejorar)
✓ No high-severity security issues
✓ Payment processing working
✓ Email sending verified

ROLLBACK PLAN:
- Si error crítico: revert a versión anterior
- Timeline: 15 minutos máximo
- Communication: notificar clientes

COMMUNICATIONS:
- Mensaje a team
- Mensaje a beta users
- Mensaje a waitlist
- Social media announcement
- Email a subscribers

MONITORING:
- Error rate
- Response time
- Conversion rate
- Payment success rate
- Customer support volume
```

#### Tarea 6.3: Post-Launch Analytics & Improvements (Semana 1)
```
OUTPUT ESPERADO:
  ✓ Day-1 metrics report
  ✓ Week-1 report
  ✓ Improvement prioritization
  ✓ Quick-fix list
  
MÉTRICAS A MONITOREAR:
- Traffic (sessions, users, sources)
- Engagement (bounce rate, time on site, pages per session)
- Conversion (product views → add to cart → purchase)
- Revenue (total, AOV, repeat rate)
- Performance (response time, error rate)
- UX (user feedback, scroll depth, click heat)
- Support (ticket volume, response time)

PROMPT:
Setup post-launch analytics:
1. Daily report (auto-generated)
2. Identify quick wins (low-hanging fruit improvements)
3. Establish metrics baseline
4. Create A/B testing plan
5. Setup alerts para anomalías
6. Plan para week 2 improvements
```

---

## 📊 WORKLOAD DISTRIBUTION TIMELINE

```
SEMANA 1
├─ Day 1-2: Discovery & Strategy (@brainstorming)
├─ Day 2-3: Design System (@frontend-design starts)
├─ Day 3: Backend Architecture (@code-review)
├─ Day 4-7: Parallel work
│  ├─ @frontend-design: Wireframes + mockups
│  ├─ @code-review: Project setup + core models
│  └─ @brainstorming: Marketing strategy

SEMANA 2
├─ Day 1-7: FEATURE SPRINT 1
│  ├─ Backend: Auth + Products (@code-review)
│  ├─ Frontend: Homepage + Product listing (@frontend-design)
│  └─ @brainstorming: Content creation + copywriting

SEMANA 3
├─ Day 1-7: FEATURE SPRINT 2
│  ├─ Backend: Orders + Payments (@code-review)
│  ├─ Frontend: Cart + Checkout (@frontend-design)
│  └─ INTEGRATION TESTING (both teams)

SEMANA 4
├─ Day 1-3: Optimization & Security (@code-review)
├─ Day 4-5: Performance + SEO (@frontend-design + @code-review)
├─ Day 5-7: Pre-launch checklist + Launch
│  ├─ @brainstorming: Final go/no-go decision
│  ├─ @code-review: Production deployment
│  └─ @frontend-design: Last-minute UI fixes
```

---

## 🎯 SUCCESS METRICS (Day 1)

```
TECHNICAL:
  ✓ Zero critical errors in first 24h
  ✓ 99.9% uptime
  ✓ Response time <500ms (p95)
  ✓ Zero payment failures

USER EXPERIENCE:
  ✓ At least 10 users complete purchase
  ✓ Avg order value > 40€
  ✓ Cart abandonment rate < 60%
  ✓ No critical UI bugs reported

BUSINESS:
  ✓ Landing page CTR > 5%
  ✓ Product view to add-to-cart > 8%
  ✓ Conversion rate > 1.5%
  ✓ Email signup > 20 people
```

---

## 🔄 DESPUÉS DEL LAUNCH

### SEMANA 2-4 (Post-MVP)
- A/B testing de homepage
- Optimización de funnel de conversión
- Automatización de email mejorada
- SEO content blogging
- Integración con influencers

### MONTH 2 (Phase 2)
- Programa de referrals
- Admin dashboard advanced features
- Integración con más canales de pago
- Programa de lealtad
- Mobile app (si demand existe)

---

## 📝 PROMPTS FINALES PARA ANTIGRAVITY

### Prompt Maestro (Copiar tal cual a Antigravity):
```
Eres un equipo de desarrollo senior. Ejecuta el flujo 'Ship a SaaS MVP' 
para FUTX STORE (plataforma de ecommerce de camisetas de fútbol) 
aplicando automáticamente @brainstorming, @frontend-design y @code-review 
durante cada fase.

CONTEXTO:
- App: FUTX STORE - Plataforma de venta online de camisetas retro/vintage
- Timeline: 4 semanas
- Goal: MVP listo para vender en producción
- Público: Coleccionistas, aficionados, hype beasts (España)

FASES:
1. DISCOVERY & STRATEGY (Semana 1) → @brainstorming leads
2. DESIGN SYSTEM & FRONTEND (Semana 1-2) → @frontend-design leads
3. BACKEND ARCHITECTURE (Semana 1-2) → @code-review leads
4. FEATURE DEVELOPMENT (Semana 2-3) → @frontend-design + @code-review
5. OPTIMIZATION & HARDENING (Semana 3-4) → @code-review leads
6. LAUNCH PREPARATION (Semana 4) → @brainstorming leads

Genera documentación detallada para cada fase con:
- Entregables específicos
- Prompts para ejecutar (listos para copiar-pegar)
- Checklist de completitud
- Riesgos y mitigación
- Timeline realista

Estructura como 6 documentos separados (uno por fase) para fácil seguimiento.
```

---

## ✅ WHAT'S INCLUDED IN THIS WORKFLOW

Este documento proporciona:

1. **6 fases claramente definidas** (discovery, design, backend, features, optimization, launch)
2. **Tareas específicas** dentro de cada fase con outputs esperados
3. **Prompts listos para copiar-pegar** para cada tarea
4. **Timeline realista** (4 semanas)
5. **Success metrics** definidas
6. **Contingency plans** para riesgos
7. **Post-launch roadmap**

---

## 🚀 CÓMO EJECUTAR

1. **Copia este documento** y pásalo a Antigravity con contexto de tu app
2. **Pasa los prompts de cada fase** secuencialmente
3. **Usa @brainstorming** para decisiones estratégicas
4. **Usa @frontend-design** para todo lo visual
5. **Usa @code-review** para todo lo técnico
6. **Monitorea progreso** semanalmente
7. **Ajusta scope** si es necesario (prioriza Must-haves)

---

**Documento preparado para ejecución inmediata con Antigravity Workflows.**
**Último update: 2024**
