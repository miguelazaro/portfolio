# Diseño principal del portafolio

La propuesta con navegación lateral es ahora la página principal en `/`. `/design-preview` redirige a `/`.

## Implementación

- `src/components/portfolio/Portfolio.tsx`: presentación, inicial M en SVG, navegación, proyectos, perfil y contacto.
- `src/components/portfolio/portfolio.module.css`: composición responsive, paletas, temas y formulario.
- `src/components/portfolio/ContactForm.tsx`: formulario bilingüe con validación y estados de envío.
- `src/data/projects.ts`: fuente compartida de los seis proyectos y sus capturas reales.
- Space Grotesk para títulos y DM Sans para texto; fuentes locales con licencia OFL.

## Composición y color

La navegación lateral pasa a una barra inferior a partir de 540 px. Los proyectos se presentan en un índice desplegable; las capturas se contienen en un marco 4:3 sin deformación. Los seis proyectos, incluidos Nodatix y Evenrent, tienen capturas reales.

El diseño inicia en oscuro: fondo `#17191D`, texto `#F3F2EE`, acento menta `#8DE5C5` y coral `#F47D83`. Los controles permiten comparar lila/lima y azul/naranja, además del tema claro. Los colores de texto se oscurecen en el tema claro para mantener contraste. La M responde al puntero y respeta la preferencia de movimiento reducido.

El contacto tiene dos columnas en escritorio y una hasta 1000 px. Los campos tienen etiquetas visibles, autocompletado, límites de longitud y foco visible. Durante el envío se deshabilitan los campos y el botón. Los errores conservan el contenido; el éxito lo limpia. Se anuncia el resultado a tecnologías de asistencia.

## Envío de mensajes

`POST /api/contact` usa Resend. Requiere `RESEND_API_KEY` en el servidor; `RESEND_FROM_EMAIL` permite configurar un remitente verificado y, si falta, conserva el remitente existente `Portafolio <onboarding@resend.dev>`. El destinatario es `miguel.lazaro.2003@gmail.com` y `replyTo` utiliza el correo de quien escribe.

El servidor valida tipos, contenido obligatorio, email y longitudes. El correo se envía como texto para conservar saltos de línea y evitar interpretar HTML introducido por visitantes. La clave nunca se envía al navegador.

## Verificación

- `npm run build` y ESLint de los archivos modificados.
- `node --test tests/contact-route.test.mjs`: validación, configuración ausente, destinatario/reply-to y errores del proveedor, con Resend simulado.
- Navegador: redirección, validación, envío en curso, error conservando contenido, éxito limpiando campos y adaptación entre 320 y 1920 px en ambos temas.
- Las pruebas no envían correos reales; la entrega final depende de la configuración y aceptación de Resend.
