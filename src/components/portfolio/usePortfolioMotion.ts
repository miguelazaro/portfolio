'use client';

import { useEffect, type RefObject } from 'react';

// Progressive enhancement: content stays visible without JavaScript or motion.
export function usePortfolioMotion(root: RefObject<HTMLDivElement | null>) {
    useEffect(() => {
        const element = root.current;
        if (!element || !('IntersectionObserver' in window)) return;
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const animations = new Set<Animation>();
        let observer: IntersectionObserver | undefined;

        function observe() {
            observer?.disconnect();
            animations.forEach(animation => animation.cancel());
            animations.clear();
            if (preference.matches) return;

            observer = new IntersectionObserver(entries => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    observer?.unobserve(entry.target);
                    const target = entry.target as HTMLElement;
                    if (target.dataset.revealed) continue;
                    target.dataset.revealed = 'true';
                    const isTechnologyList = target.dataset.reveal === 'technologies';
                    Array.from(target.children).forEach((child, index) => {
                        const animation = child.animate([
                            { opacity: 0, transform: isTechnologyList ? 'translateY(10px) scale(.96)' : 'translateY(12px)', filter: isTechnologyList ? 'blur(0)' : 'blur(2px)' },
                            { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
                        ], {
                            duration: 420,
                            delay: isTechnologyList ? Math.min(index * 35, 350) : Math.min(index * 45, 180),
                            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                            fill: 'backwards',
                        });
                        animations.add(animation);
                        animation.onfinish = () => { animations.delete(animation); };
                    });
                }
            }, { threshold: 0.15 });
            element?.querySelectorAll('[data-reveal]').forEach(target => observer?.observe(target));
        }

        observe();
        preference.addEventListener('change', observe);
        return () => {
            observer?.disconnect();
            animations.forEach(animation => animation.cancel());
            preference.removeEventListener('change', observe);
        };
    }, [root]);
}
