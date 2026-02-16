# Estructura de Componentes

Organización modular siguiendo mejores prácticas de Next.js.

## Directorios

### `/layout`
Componentes de estructura y navegación.
- `Navbar.tsx` - Navegación principal con scroll-spy

### `/sections`
Secciones principales del portafolio.
- `Hero.tsx` - Sección de bienvenida
- `About.tsx` - Información personal y valores
- `Projects.tsx` - Showcase de proyectos
- `Experience.tsx` - Timeline de experiencia
- `Contact.tsx` - Formulario de contacto

### `/ui`
Componentes reutilizables de interfaz.
- `WhatsAppButton.tsx` - Botón flotante de contacto
- `ThemeToggle.tsx` - Switch de tema oscuro/claro
- `LanguageToggle.tsx` - Selector de idioma ES/EN

## Barrel Exports
Cada directorio incluye un `index.ts` para imports limpios:
```typescript
import { Hero, About } from '@/components/sections';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
```
