# Portfolio Full Stack - Miguel Ángel Lázaro

Portafolio web profesional desarrollado con Next.js 16, React 19 y Mantine UI. Diseñado para demostrar habilidades técnicas en desarrollo full stack con enfoque en performance, accesibilidad y experiencia de usuario.

**Live Demo:** [miguelazaro-portfolio.vercel.app](https://miguelazaro-portfolio.vercel.app)

## Lighthouse Performance Scores

- **Performance:** 83/100
- **Accessibility:** 84/100
- **Best Practices:** 100/100
- **SEO:** 100/100

## Stack Tecnológico

### Frontend
- **Next.js 16.1.4** - React Framework con App Router
- **React 19.2.3** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático
- **Mantine UI 8.3.13** - Sistema de componentes modernos
- **Framer Motion** - Animaciones fluidas

### Características
- **PWA** - Progressive Web App instalable
- **i18n** - Soporte multilenguaje (ES/EN)
- **Dark Mode** - Tema oscuro/claro persistente
- **Responsive Design** - Optimizado para todos los dispositivos
- **Contact Form** - Integración con Resend para emails

### Optimizaciones
- **React Compiler** - Optimización automática de componentes
- **Tree-shaking** - Bundle optimization para Mantine
- **Modern JavaScript** - Sin polyfills innecesarios (Chrome 90+)
- **CSS Optimization** - Minificación y optimización experimental
- **Lazy Loading** - Carga diferida de recursos

## Arquitectura del Proyecto

```
portafolio_fullstack/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── contact/        # API Route para formulario
│   │   ├── globals.css         # Estilos globales y animaciones
│   │   ├── layout.tsx          # Root layout con providers
│   │   └── page.tsx            # Página principal
│   │
│   ├── components/
│   │   ├── layout/             # Componentes de estructura
│   │   │   ├── Navbar.tsx      # Navegación con scroll-spy
│   │   │   └── Footer.tsx      # Pie de página
│   │   │
│   │   ├── sections/           # Secciones principales
│   │   │   ├── Hero.tsx        # Sección de bienvenida
│   │   │   ├── About.tsx       # Información personal
│   │   │   ├── Projects.tsx    # Showcase de proyectos
│   │   │   ├── Experience.tsx  # Timeline de trayectoria
│   │   │   └── Contact.tsx     # Formulario de contacto
│   │   │
│   │   └── ui/                 # Componentes reutilizables
│   │       ├── WhatsAppButton.tsx
│   │       ├── ThemeToggle.tsx
│   │       ├── LanguageToggle.tsx
│   │       └── InstallPrompt.tsx
│   │
│   └── context/
│       └── LanguageContext.tsx # Estado global de i18n
│
├── public/                     # Assets estáticos
│   ├── img/                    # Imágenes de proyectos
│   ├── logo1.svg               # Logo principal
│   └── icon-*.png              # Iconos PWA
│
├── .browserslistrc             # Targets de navegadores modernos
├── next.config.ts              # Configuración de Next.js
└── package.json
```

## Instalación y Desarrollo

### Prerequisitos
- Node.js 20.x o superior
- npm o pnpm

### Configuración Local

1. Clonar el repositorio
```bash
git clone https://github.com/miguelazaro/portfolio.git
cd portfolio
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno

Crear archivo `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your@email.com
```

4. Ejecutar en desarrollo
```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Linter de código
```

## Deploy

### Vercel (Recomendado)

El proyecto está optimizado para Vercel:

1. Push a GitHub
2. Importar proyecto en Vercel
3. Configurar variables de entorno
4. Deploy automático

### Variables de Entorno en Producción
```
RESEND_API_KEY=xxxxx
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your@email.com
```

## Características Técnicas Destacadas

### Performance Optimization
- **Mantine Tree-shaking:** Importación selectiva de componentes
- **Modern JS Targets:** Chrome 90+, Firefox 90+, Safari 14+
- **CSS Optimization:** Experimental CSS minification
- **Compression:** Brotli compression en producción

### SEO y Accesibilidad
- Metadata dinámica con Next.js
- Semantic HTML
- ARIA labels apropiados
- Alt text en imágenes
- Lighthouse score 84/100 en accesibilidad

### PWA Features
- Manifest.json configurado
- Service Worker (Next.js automático)
- Iconos para múltiples resoluciones
- Prompt de instalación personalizado

### Internacionalización
- Context API para gestión de estado
- Soporte ES/EN
- Toggle persistente en localStorage
- Traducciones tipadas con TypeScript

## Patrones de Diseño Utilizados

### Component Composition
Separación clara entre componentes de layout, secciones y UI reutilizables.

### Barrel Exports
Exports centralizados para imports limpios:
```typescript
import { Hero, About, Projects } from '@/components/sections';
```

### Container/Presentational Pattern
Separación de lógica de negocio y presentación en componentes.

### Custom Hooks
Reutilización de lógica con hooks personalizados (useLanguage).

## Contribución

Este es un proyecto de portafolio personal. Fork y modificaciones son bienvenidos para crear tu propio portafolio.

## Licencia

MIT License - Libre para uso personal y comercial.

## Contacto

**Miguel Ángel Lázaro**  
Desarrollador Full Stack Jr.

- GitHub: [@miguelazaro](https://github.com/miguelazaro)
- LinkedIn: [miguelazaro](https://linkedin.com/in/miguelazaro)
- Portfolio: [miguelazaro-portfolio.vercel.app](https://miguelazaro-portfolio.vercel.app)

---

Desarrollado con Next.js 16 y React 19 - 2026
