'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';
import Image from 'next/image';
import { IconArrowLeft, IconArrowRight, IconX, IconZoomIn, IconZoomOut } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './gallery.module.css';

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
    const { language } = useLanguage();
    const es = language === 'es';
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const dialog = useRef<HTMLDialogElement>(null);
    const viewport = useRef<HTMLDivElement>(null);
    const opener = useRef<HTMLButtonElement>(null);
    const touch = useRef<{ x: number; y: number } | null>(null);
    const swiped = useRef(false);
    const count = images.length;
    const current = Math.min(index, Math.max(0, count - 1));
    const caption = es ? `Captura ${current + 1} de ${count}` : `Screenshot ${current + 1} of ${count}`;

    useEffect(() => {
        if (!expanded) return;
        const element = dialog.current;
        const trigger = opener.current;
        const previousOverflow = document.body.style.overflow;
        element?.showModal();
        document.body.style.overflow = 'hidden';
        return () => {
            element?.close();
            document.body.style.overflow = previousOverflow;
            trigger?.focus({ preventScroll: true });
        };
    }, [expanded]);

    function navigate(direction: number) {
        if (count < 2) return;
        setIndex((current + direction + count) % count);
        setZoomed(false);
        viewport.current?.scrollTo(0, 0);
    }

    function keyNavigation(event: KeyboardEvent<HTMLElement>) {
        if (zoomed) return; // Arrow keys scroll the enlarged image instead.
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            navigate(event.key === 'ArrowLeft' ? -1 : 1);
        }
    }

    function startTouch(event: TouchEvent<HTMLElement>) {
        swiped.current = false;
        touch.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
    }

    function endTouch(event: TouchEvent<HTMLElement>) {
        const start = touch.current;
        touch.current = null;
        if (!start || zoomed || count < 2 || !event.changedTouches.length) return;
        const dx = event.changedTouches[0].clientX - start.x;
        const dy = event.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            swiped.current = true;
            if (event.cancelable) event.preventDefault();
            navigate(dx < 0 ? 1 : -1);
        }
    }

    function toggleZoom() {
        setZoomed(!zoomed);
        viewport.current?.scrollTo(0, 0);
    }

    if (!count) return null;

    const previousLabel = es ? 'Captura anterior' : 'Previous screenshot';
    const nextLabel = es ? 'Captura siguiente' : 'Next screenshot';

    return (
        <div className={styles.gallery} role="group" aria-label={`${es ? 'Galería de' : 'Gallery for'} ${title}`} aria-roledescription={es ? 'carrusel' : 'carousel'}>
            <button ref={opener} type="button" className={styles.capture} aria-label={`${es ? 'Ampliar' : 'Enlarge'}: ${title}. ${caption}`} aria-haspopup="dialog"
                onClick={() => { if (!swiped.current) { setZoomed(false); setExpanded(true); } swiped.current = false; }}
                onKeyDown={keyNavigation} onTouchStart={startTouch} onTouchEnd={endTouch} onTouchCancel={() => { touch.current = null; }}>
                <Image src={images[current]} alt={`${title} — ${caption}`} fill sizes="(max-width: 800px) 90vw, 40vw" />
                <span className={styles.enlarge}><IconZoomIn size={16} aria-hidden="true" />{es ? 'Ampliar' : 'Enlarge'}</span>
            </button>
            <div className={styles.controls}>
                <p aria-live="polite" aria-atomic="true">{caption}</p>
                {count > 1 && <div className={styles.arrows}>
                    <button type="button" onClick={() => navigate(-1)} onKeyDown={keyNavigation} aria-label={previousLabel}><IconArrowLeft size={18} /></button>
                    <button type="button" onClick={() => navigate(1)} onKeyDown={keyNavigation} aria-label={nextLabel}><IconArrowRight size={18} /></button>
                </div>}
            </div>

            <dialog ref={dialog} className={styles.dialog} aria-label={`${es ? 'Capturas ampliadas de' : 'Enlarged screenshots of'} ${title}`}
                onClose={() => { setExpanded(false); setZoomed(false); }} onKeyDown={keyNavigation}
                onClick={event => { if (event.target === event.currentTarget) setExpanded(false); }}>
                {expanded && <div className={styles.viewer}>
                    <header className={styles.viewerHeader}>
                        <div><p className={styles.viewerTitle}>{title}</p><p className={styles.viewerCaption}>{caption}</p></div>
                        <div className={styles.viewerActions}>
                            <button type="button" aria-pressed={zoomed} onClick={toggleZoom} aria-label={zoomed ? (es ? 'Ajustar imagen' : 'Fit image') : (es ? 'Acercar imagen' : 'Zoom in')}>
                                {zoomed ? <IconZoomOut size={21} /> : <IconZoomIn size={21} />}
                            </button>
                            <button type="button" onClick={() => setExpanded(false)} aria-label={es ? 'Cerrar galería' : 'Close gallery'}><IconX size={23} /></button>
                        </div>
                    </header>
                    <div ref={viewport} className={styles.viewport} role="region" tabIndex={0} aria-label={es ? 'Imagen ampliada; desplázate para explorar al acercar' : 'Enlarged image; scroll to explore when zoomed'}
                        onTouchStart={startTouch} onTouchEnd={endTouch} onTouchCancel={() => { touch.current = null; }}>
                        <div className={styles.canvas} data-zoomed={zoomed}>
                            <Image src={images[current]} alt={`${title} — ${caption}`} fill unoptimized sizes="100vw" />
                        </div>
                    </div>
                    <footer className={styles.viewerFooter}>
                        <p aria-live="polite" aria-atomic="true">{caption}<span>{zoomed ? (es ? ' · Desplázate para ver el detalle' : ' · Scroll to explore') : (es ? ' · Imagen completa' : ' · Full image')}</span></p>
                        {count > 1 && <div className={styles.arrows}>
                            <button type="button" onClick={() => navigate(-1)} aria-label={previousLabel}><IconArrowLeft size={20} /></button>
                            <button type="button" onClick={() => navigate(1)} aria-label={nextLabel}><IconArrowRight size={20} /></button>
                        </div>}
                    </footer>
                </div>}
            </dialog>
        </div>
    );
}
