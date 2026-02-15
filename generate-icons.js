// Script para generar íconos placeholder PWA
// Ejecutar con: node generate-icons.js

const fs = require('fs');
const path = require('path');

function generateSVGIcon(size, text) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#22b8cf"/>
  <text 
    x="50%" 
    y="50%" 
    font-family="Arial, sans-serif" 
    font-size="${size * 0.4}" 
    font-weight="bold"
    fill="white" 
    text-anchor="middle" 
    dominant-baseline="central">
    ${text}
  </text>
</svg>`;
}

// Generar SVG temporales
const publicDir = path.join(__dirname, 'public');

// Icon 192x192
fs.writeFileSync(
  path.join(publicDir, 'icon-192.svg'),
  generateSVGIcon(192, 'ML')
);

// Icon 512x512
fs.writeFileSync(
  path.join(publicDir, 'icon-512.svg'),
  generateSVGIcon(512, 'ML')
);

console.log('✅ Íconos SVG placeholder generados en /public');
console.log('⚠️  Recuerda reemplazarlos con PNG reales para mejor compatibilidad');
console.log('📖 Ver ICONOS-PWA.md para instrucciones detalladas');
