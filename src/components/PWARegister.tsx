'use client';

import { useEffect } from 'react';

export function PWARegister() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[PWA] Service Worker registrado:', registration.scope);
          
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
        })
        .catch((error) => {
          console.error('[PWA] Error al registrar Service Worker:', error);
        });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[PWA] Nueva versión disponible, recargando...');
        window.location.reload();
      });
    }
  }, []);

  return null;
}
