# Preparación para compartir y desplegar

Revisión local de producción: 9 de septiembre de 2026.

## Resultado

La compilación, ESLint y las cuatro pruebas del endpoint de contacto pasan. La página principal está preparada para desplegarse. No se ha realizado el deploy ni enviado correo real durante esta revisión.

## Cambios para compartir

- Portada PNG de 1200 × 630 px en `public/social-card.png`, con la M y la tipografía del diseño. Fuente editable: `docs/social-card.html`.
- Open Graph y Twitter utilizan la portada, el nombre y el título Desarrollador Fullstack Mid.
- Favicon SVG/ICO y Apple Touch Icon PNG coherentes con la identidad actual.
- Canonical, `robots.txt` y `sitemap.xml` apuntan a `https://miguelazaro-portfolio.vercel.app/`.
- `src/lib/site.ts` centraliza el origen. Si cambia el dominio, configurar `SITE_URL` con la URL HTTPS completa antes de compilar.
- El sitemap incluye solamente la página principal. La ruta antigua `/design-preview` redirige a ella; `/api/` queda excluida del rastreo.

Se utilizaron las convenciones oficiales de Next.js para [metadatos](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) y [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap).

## Evidencia de la revisión

Pruebas sobre `next build` + `next start` en localhost, con Chrome:

- Metadatos renderizados: título correcto, canonical absoluto, Open Graph y Twitter apuntando al PNG, `index, follow` y un único H1.
- Portada, iconos, CV, robots y sitemap devuelven HTTP 200.
- Las seis capturas se decodifican correctamente, incluidas Nodatix y Evenrent; todas usan `object-fit: contain`.
- Sin desbordamiento horizontal entre 320 y 1920 px.
- Navegación por teclado: enlace para saltar al contenido y apertura de proyectos.
- axe-core: cero infracciones detectadas en 12 combinaciones de ancho (390/1440 px), tema y paleta, más una comprobación en inglés. Esto no sustituye una auditoría manual exhaustiva.
- Sin errores JavaScript durante el recorrido.
- `npm run lint` sin errores. Se corrigieron tipos en InstallPrompt, el cálculo de tema de Capabilities y el formato de las pruebas de Node.
- `node --test tests/contact-route.test.mjs`: cuatro pruebas aprobadas, con Resend simulado.

## Rendimiento observado

Una carga fría por escenario; medición de laboratorio local, no puntuaciones Lighthouse ni datos de usuarios reales:

| Escenario | LCP | CLS | Recursos transferidos, sin documento |
| --- | ---: | ---: | ---: |
| Escritorio | 300 ms | 0 | 378 KB |
| Móvil, CPU ×4, 1,6 Mbps y 150 ms de latencia | 1412 ms | 0,00028 | 380 KB |

El documento comprimido pesa aproximadamente 11 KB. La suma de tiempo por encima de 50 ms en tareas largas durante la ventana medida fue de 51 ms en escritorio y 463 ms en móvil. Esta medida no es INP ni TBT de Lighthouse. Los resultados públicos dependerán del hosting, la red y el dispositivo.

## Al publicar

1. En Vercel, comprobar que `RESEND_API_KEY` está configurada para Production. La configuración local no demuestra que exista en Vercel.
2. Si se utiliza remitente propio, configurar `RESEND_FROM_EMAIL` con el remitente verificado; de lo contrario se conserva el remitente de Resend existente.
3. Configurar `SITE_URL` solamente si cambia el dominio público, y reconstruir el proyecto.
4. Después del deploy, comprobar `/`, `/social-card.png`, `/robots.txt`, `/sitemap.xml` y el CV desde la URL pública.
5. Hacer un envío de contacto autorizado y comprobar recepción y respuesta. La entrega real no está verificada por las pruebas simuladas.
6. Revisar el enlace en el inspector de publicaciones de LinkedIn para que vuelva a leer la portada si conserva la vista previa anterior.

No se ejecutó una revisión integral de dependencias ni una auditoría de seguridad en este punto; el alcance fue presentación al compartir, accesibilidad básica y funcionamiento de producción local.
