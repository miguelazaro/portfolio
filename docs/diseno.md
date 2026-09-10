# Diseño principal del portafolio

## Movimiento e interacción

Las referencias de [Craft](https://rauno.me/craft), [Invisible Details of Interaction Design](https://rauno.me/craft/interaction-design) y [Designing Depth](https://rauno.me/craft/depth) orientan las entradas escalonadas, la continuidad de la navegación y la respuesta a las acciones. La implementación es propia y utiliza CSS y Web Animations, sin dependencias nuevas.

Los títulos entran una vez al aparecer en pantalla, con 12 px de desplazamiento y un desenfoque breve de 2 px. El indicador de navegación se desplaza en 260 ms; los proyectos abren y cierran en 280 ms y su signo pasa de más a menos. Los paneles cerrados son inertes y quedan fuera del árbol de accesibilidad. La galería entra en 200 ms y conserva el diálogo nativo, Escape y la recuperación del foco. Los botones responden a presión y las flechas se desplazan únicamente con un puntero preciso.

`usePortfolioMotion.ts` mantiene el contenido visible sin animación y cancela las entradas si cambia la preferencia de movimiento reducido. CSS desactiva las demás transiciones con esa misma preferencia. No se anima el desplazamiento por cuenta propia ni se bloquean interacciones mientras termina una transición.

Las listas de tecnologías utilizan `data-reveal="technologies"`: cada elemento entra con 35 ms de separación y un retraso máximo de 350 ms. Los iconos se elevan y giran ligeramente al pasar el cursor; una línea toma el color de la tecnología. Los nombres siguen siendo texto, sin añadir paradas de teclado a elementos decorativos.

`ConversationMascot.tsx` dibuja un personaje de teléfono en SVG con los colores de la M. Al pasar el cursor sobre «Hablemos», enfocarlo con el teclado o pulsarlo, el personaje realiza un salto y un saludo de 620 ms. Su sombra acompaña el salto. No se repite automáticamente, no modifica el enlace de WhatsApp y permanece quieto con movimiento reducido.

La propuesta con navegación lateral es ahora la página principal en `/`. `/design-preview` redirige a `/`.

## Implementación

- `src/components/portfolio/Portfolio.tsx`: presentación con fotografía del espacio de trabajo, navegación, proyectos, perfil y contacto.
- `src/components/portfolio/portfolio.module.css`: composición responsive, paletas, temas y formulario.
- `src/components/portfolio/Journey.tsx`: trayectoria con dos experiencias laborales, dos estudios y tres certificaciones del CV.
- `src/components/portfolio/ContactForm.tsx`: formulario bilingüe con validación y estados de envío.
- `src/data/projects.ts`: fuente compartida de los seis proyectos y sus capturas reales.
- Space Grotesk para títulos y DM Sans para texto; fuentes locales con licencia OFL.

## Composición y color

La navegación lateral incluye Inicio, Proyectos, Sobre mí, Trayectoria y Contacto. Hasta 540 px se convierte en una barra inferior con cuatro accesos: Inicio, Proyectos, Perfil y Contacto. Perfil lleva a Sobre mí y permanece activo al recorrer la trayectoria; los grupos ocultos no participan en la navegación con teclado. La trayectoria se encuentra entre el perfil y el contacto, con fechas, cargos y formación en español e inglés. Los proyectos se presentan en un índice desplegable; las capturas se contienen en un marco 4:3 sin deformación. Los seis proyectos, incluidos Nodatix y Evenrent, tienen capturas reales.

El diseño inicia en oscuro: fondo `#17191D`, texto `#F3F2EE`, acento menta `#8DE5C5` y coral `#F47D83`. Los controles permiten comparar lila/lima y azul/naranja, además del tema claro. Los colores de texto se oscurecen en el tema claro para mantener contraste. La inicial del menú y el punto del nombre usan un solo color, sin sombras desplazadas.

La portada muestra `public/img/imagen_laptop.jpeg` mediante Next Image, con carga prioritaria y texto alternativo en ambos idiomas. El marco es horizontal, 16:10 en escritorio y 16:9 hasta 800 px, con el encuadre alineado hacia la parte inferior para destacar los equipos. La saturación, luminosidad y contraste se ajustan con CSS; el original se conserva. En móvil, la fotografía sigue a la presentación y los controles de paleta quedan debajo de su pie.

La fotografía entra una sola vez al aparecer en pantalla. Con ratón, el marco sigue el cursor con una inclinación máxima de 3 grados, un acercamiento del 3,5 % y una recuperación suave del color. Al salir, vuelve al encuadre inicial. El área que mide el puntero permanece fija para evitar vibraciones. En pantallas táctiles solo se utiliza la entrada; con movimiento reducido no se aplica ninguno de estos efectos.

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

`Technologies.tsx` conserva el stack principal y añade debajo «Otras tecnologías que he utilizado», con PHP, Laravel, Python y herramientas usadas en otros proyectos o durante la formación. Los iconos tienen colores de marca independientes de la paleta; los nombres mantienen el contraste del tema. Los conceptos sin marca y las identidades monocromáticas usan el color del texto. No se asignan porcentajes de dominio.

Los cuatro ejemplos muestran únicamente tecnologías del proyecto citado: frontend en Presta Prenda, Express e integraciones en NutriDev, arquitectura y datos en Nodatix, y backend y pruebas en POS Multiempresa. Nodatix aparece una sola vez y no se le atribuye Python. NutriDev describe Express como servidor de la interfaz y del backend.

La sección se sitúa entre Sobre mí y Trayectoria. Al recorrerla se mantiene activo Perfil en móvil o Sobre mí en escritorio. Cada ejemplo enlaza a Proyectos y despliega el proyecto citado. Los grupos se muestran en cuatro columnas en escritorio, dos en tablet y una en móvil. Se comprobaron español e inglés, temas claro y oscuro, enlaces a proyectos y accesibilidad automática.
