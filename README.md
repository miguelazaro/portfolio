# Portafolio de Miguel Ángel Lázaro

Portafolio personal como Desarrollador Fullstack Mid. Reúne proyectos, experiencia profesional, formación y un formulario de contacto.

[Sitio publicado](https://miguelazaro-portfolio.vercel.app)

## Interfaz

- Navegación lateral en escritorio: Inicio, Proyectos, Sobre mí, Trayectoria y Contacto.
- Barra inferior en móvil con cuatro accesos. Perfil agrupa Sobre mí y Trayectoria.
- Temas claro y oscuro, con tres combinaciones de acento: menta/coral, lila/lima y azul/naranja.
- Contenido en español e inglés.
- Proyectos desplegables con descripción, participación, tecnologías y capturas.
- Galerías con carrusel, ampliación, zoom, controles de teclado y deslizamiento horizontal en móvil.
- Tecnologías agrupadas por área, con el stack principal destacado y ejemplos enlazados a proyectos.
- Trayectoria con experiencia laboral, estudios y certificaciones del CV.
- Formulario de contacto con validación, estados de envío y conservación del mensaje si ocurre un error.

La tipografía utiliza Space Grotesk y DM Sans, servidas desde archivos locales. Los estilos se implementan con CSS Modules y la inicial M está dibujada en SVG.

## Tecnologías

Next.js 16 con App Router, React 19 y TypeScript. El layout utiliza el proveedor de Mantine y los iconos son de Tabler. El envío de correo se realiza en el servidor con Resend.

La galería usa un diálogo nativo de HTML. Al abrirlo, el foco queda dentro del visor; al cerrarlo, vuelve a la captura original. Las imágenes de los proyectos se sirven mediante `next/image`; el visor ampliado carga la captura original.

## Desarrollo local

Requisitos: Node.js compatible con Next.js 16 y npm.

```bash
git clone https://github.com/miguelazaro/portfolio.git
cd portfolio
npm ci
npm run dev
```

Abrir [localhost:3000](http://localhost:3000).

Para habilitar el envío de mensajes, copiar `.env.local.example` a `.env.local` y completar la clave de Resend. El resto del portafolio puede ejecutarse sin esa clave.

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `RESEND_API_KEY` | Clave de Resend, necesaria para enviar mensajes. Solo se utiliza en el servidor. |
| `RESEND_FROM_EMAIL` | Remitente opcional. Si no se configura, se utiliza `Portafolio <onboarding@resend.dev>`. Un remitente propio debe estar verificado en Resend. |
| `SITE_URL` | URL pública opcional para canonical, Open Graph y sitemap. Por defecto: `https://miguelazaro-portfolio.vercel.app`. |

El destinatario está definido en `src/app/api/contact/route.ts`. El campo `replyTo` utiliza el correo de quien completa el formulario. El servidor valida tipos, campos obligatorios, formato de correo y longitudes; envía el contenido como texto.

## Estructura

```text
src/
  app/
    page.tsx                     Página principal
    layout.tsx                   Fuentes, proveedores y metadatos
    api/contact/route.ts         Envío de correo con Resend
    design-preview/page.tsx      Redirección a la página principal
    robots.ts                    Reglas de rastreo
    sitemap.ts                   Sitemap
  components/portfolio/
    Portfolio.tsx                Composición y navegación
    Journey.tsx                  Experiencia, formación y certificaciones
    Technologies.tsx             Stack y tecnologías aplicadas
    ProjectGallery.tsx           Carrusel y visor de capturas
    ContactForm.tsx              Formulario de contacto
    portfolio.module.css         Estilos de la página
    gallery.module.css           Estilos de la galería
    copy.ts                      Textos complementarios
  context/LanguageContext.tsx     Estado del idioma y traducciones
  data/projects.ts               Datos y rutas de imágenes de proyectos
  lib/site.ts                    Dominio público
public/
  img/                          Capturas de los proyectos
  cv/                           Curriculum en PDF
  fonts/                        Fuentes locales y licencias OFL
  social-card.png               Portada para redes sociales
tests/
  contact-route.test.mjs         Pruebas del endpoint de contacto
```

## Actualizar contenido

Los proyectos se configuran en `src/data/projects.ts`. Sus títulos y descripciones se resuelven mediante las claves de `LanguageContext.tsx`.

Para agregar capturas, guardar los archivos en `public/img` e incluir sus rutas en el arreglo `images` del proyecto. La primera imagen será la portada. Cuando hay más de una, aparecen automáticamente las flechas y el contador; el carrusel no avanza por sí solo.

La trayectoria se configura en `Journey.tsx`, con los textos de cargos y estudios en `LanguageContext.tsx`. El enlace al CV utiliza `public/cv/curriculum_vitae_lazaro.pdf`.

La portada de redes está en `public/social-card.png`; su composición editable está en `docs/social-card.html`. Los metadatos se definen en `src/app/layout.tsx`.

## Verificación

```bash
npm run lint
npm run build
node --test tests/contact-route.test.mjs
```

Las pruebas del endpoint simulan Resend y comprueban validación, destinatario, respuesta al remitente y errores del proveedor. No envían correos reales.

Para revisar la compilación de producción localmente:

```bash
npm run build
npm start
```

Las comprobaciones manuales incluyen navegación con teclado, foco del visor, cambios de idioma, temas y adaptación a pantallas pequeñas. El registro de la revisión previa al primer deploy está en [docs/preparacion-deploy.md](docs/preparacion-deploy.md), y las decisiones de interfaz en [docs/diseno.md](docs/diseno.md).

## Deploy

El repositorio está conectado a Vercel. Un push a `main` activa el despliegue de producción.

Configurar `RESEND_API_KEY` en las variables de Production de Vercel. Si se utiliza un remitente propio o cambia el dominio, configurar también `RESEND_FROM_EMAIL` o `SITE_URL` y volver a desplegar.

Después de publicar, comprobar la página principal, las capturas, el PDF del CV, `/social-card.png`, `/robots.txt` y `/sitemap.xml`. La recepción de un mensaje real se verifica por separado de las pruebas automatizadas.

## Contacto

Miguel Ángel Lázaro · Desarrollador Fullstack Mid

- [GitHub](https://github.com/miguelazaro)
- [LinkedIn](https://www.linkedin.com/in/miguel-lazaro-dev/)
- [Correo](mailto:miguel.lazaro.2003@gmail.com)
