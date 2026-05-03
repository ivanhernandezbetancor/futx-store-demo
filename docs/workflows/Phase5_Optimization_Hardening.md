# FASE 5: OPTIMIZATION & HARDENING

## 🎯 Objetivo de la Fase
Asegurar que la aplicación de FUTX STORE cumpla con los más altos estándares de rendimiento (Core Web Vitals), seguridad y métricas SEO antes del lanzamiento a producción.

## 📦 Entregables Específicos
1. Reporte de optimización de rendimiento (Lighthouse > 90).
2. Reporte y mitigaciones de seguridad (Sec Hardening).
3. Configuración SEO On-Page y Eventos Analytics.

## 🤖 Prompts para Ejecutar (Copiar y Pegar)

**Prompt 5.1: Performance Optimization**
```text
@code-review @frontend-design Revisa la arquitectura frontend/backend de FUTX STORE y genera un plan de optimización de performance para alcanzar >90 en Lighthouse:
1. Estrategia de Code splitting y Lazy Loading de imágenes (WebP).
2. Optimización del bundle y eliminación de dependencias pesadas.
3. Configuración de cache de base de datos / CDN para assets.
4. Mejoras de LCP, FID y CLS.
```

**Prompt 5.2: Security Hardening**
```text
@code-review Aplica y verifica las siguientes medidas de seguridad para el eCommerce FUTX STORE:
1. Sanitización estricta de inputs (contra SQLi y XSS).
2. Configuración de CORS y Security Headers (Helmet/CSP).
3. Rate Limiting en endpoints de login y pago.
4. Manejo seguro de tokens JWT (HttpOnly cookies).
Proporciona el código de middleware necesario para esto.
```

**Prompt 5.3: SEO & Analytics Setup**
```text
@frontend-design @code-review Genera la configuración esencial de SEO y Analytics:
1. Estructura de etiquetas Meta dinámicas para la PDP (Product Detail Page).
2. JSON-LD Structured Data (Schema.org de Producto y FAQ).
3. Guía de eventos de Google Analytics 4 (GA4) a trackear: view_item, add_to_cart, begin_checkout, purchase.
```

## ✅ Checklist de Completitud
- [ ] Lighthouse score de Performance > 90.
- [ ] Imágenes servidas en WebP con lazy load.
- [ ] Auditoría de seguridad pasada sin issues críticos.
- [ ] SEO Técnico implementado (Robots, Sitemap, Meta tags, JSON-LD).
- [ ] Eventos de GA4 disparándose correctamente en frontend.

## ⚠️ Riesgos y Mitigación
- **Riesgo:** Aplicación lenta aleja a los compradores móviles.
- **Mitigación:** Cacheo agresivo de páginas estáticas o SSR y CDN.
- **Riesgo:** Filtración de PII o fraude en pagos.
- **Mitigación:** Mantener todo el PCI compliance vía Stripe Elements (no guardar tarjetas) y aplicar Rate Limiting.

## 📅 Timeline Realista
- **Duración:** 7 Días (Semana 3-4)
- Días 1-3: Performance Auditing y Optimización.
- Días 4-5: Refuerzo de Seguridad y Auditorías.
- Días 6-7: Implementación de SEO y GA4 Data Layer.
