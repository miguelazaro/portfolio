# Diseño principal del portafolio

La propuesta con navegación lateral es ahora la página principal en `/`. `/design-preview` redirige a `/`.

## Implementación

- `src/components/portfolio/Portfolio.tsx`: presentación, inicial M en SVG, navegación, proyectos, perfil y contacto.
- `src/components/portfolio/portfolio.module.css`: composición responsive, paletas, temas y formulario.
- `src/components/portfolio/Journey.tsx`: trayectoria con dos experiencias laborales, dos estudios y tres certificaciones del CV.
- `src/components/portfolio/ContactForm.tsx`: formulario bilingüe con validación y estados de envío.
- `src/data/projects.ts`: fuente compartida de los seis proyectos y sus capturas reales.
- Space Grotesk para títulos y DM Sans para texto; fuentes locales con licencia OFL.

## Composición y color

La navegación lateral incluye Inicio, Proyectos, Sobre mí, Trayectoria y Contacto. Hasta 540 px se convierte en una barra inferior con cuatro accesos: Inicio, Proyectos, Perfil y Contacto. Perfil lleva a Sobre mí y permanece activo al recorrer la trayectoria; los grupos ocultos no participan en la navegación con teclado. La trayectoria se encuentra entre el perfil y el contacto, con fechas, cargos y formación en español e inglés. Los proyectos se presentan en un índice desplegable; las capturas se contienen en un marco 4:3 sin deformación. Los seis proyectos, incluidos Nodatix y Evenrent, tienen capturas reales.

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

## Galerías de proyectos

`ProjectGallery.tsx` muestra una captura dentro del proyecto y abre un visor con lupa, zoom al doble y ajuste a la ventana. El diálogo permite recorrer las imágenes con flechas, cerrar con Escape y recuperar el foco en la captura original. Bloquea el desplazamiento del fondo mientras está abierto.

Para añadir más capturas, guardar los archivos en `public/img` y agregar sus rutas al arreglo `images` del proyecto en `src/data/projects.ts`. La primera es la portada. Con dos o más imágenes aparecen automáticamente el carrusel, el contador y los controles anterior/siguiente; no hay reproducción automática. En móvil se admiten deslizamientos horizontales y se mantiene el desplazamiento vertical. Al acercar la imagen, se puede desplazar el visor para explorar el detalle.

Se comprobaron una y tres imágenes (estas últimas en una ruta temporal de prueba, eliminada), recorrido circular, flechas de teclado, enfoque del diálogo, cierre, zoom y adaptación a móvil. No se añadieron capturas de ejemplo a los proyectos reales.

## Tecnologías

`Technologies.tsx` presenta el stack principal y cuatro grupos estáticos: frontend, backend, bases de datos y servicios, y pruebas y herramientas. Utiliza iconos discretos y nombres visibles. Las tecnologías provienen del CV y de los proyectos documentados; no se asignan porcentajes de dominio.

La sección se sitúa entre Sobre mí y Trayectoria. Al recorrerla se mantiene activo Perfil en móvil o Sobre mí en escritorio. Cada ejemplo enlaza a Proyectos y despliega el proyecto citado. Los grupos se muestran en cuatro columnas en escritorio, dos en tablet y una en móvil. Se comprobaron español e inglés, temas claro y oscuro, enlaces a proyectos y accesibilidad automática.
