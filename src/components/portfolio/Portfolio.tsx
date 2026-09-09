'use client';

import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { IconArrowDown, IconArrowUpRight, IconArrowRight, IconHome, IconStack2, IconBriefcase, IconUser, IconMail, IconSun, IconMoon, IconBrandGithub, IconBrandLinkedin, IconPlus, IconMinus } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsDataConfig } from '@/data/projects';
import { portfolioCopy } from './copy';
import { ContactForm } from './ContactForm';
import { Journey } from './Journey';
import { ProjectGallery } from './ProjectGallery';
import { Technologies } from './Technologies';
import styles from './portfolio.module.css';

const glyph = 'M 30 370 V 40 H 105 L 190 193 L 275 40 H 350 V 370 H 268 V 199 L 190 327 L 112 199 V 370 Z';
const sections = ['home', 'projects', 'about', 'technologies', 'experience', 'contact'];

export function Portfolio() {
    const { language, setLanguage, t } = useLanguage();
    const es = language === 'es';
    const copy = portfolioCopy[language];
    const [light, setLight] = useState(false);
    const [palette, setPalette] = useState('mint');
    const [active, setActive] = useState('home');
    const [selected, setSelected] = useState<string | null>('nodatix');
    const artwork = useRef<HTMLDivElement>(null);
    const nav = [
        { id: 'home', label: t('nav.home'), icon: IconHome },
        { id: 'projects', label: t('nav.projects'), icon: IconStack2 },
        { id: 'about', label: t('nav.about'), icon: IconUser },
        { id: 'experience', label: es ? 'Trayectoria' : 'Journey', icon: IconBriefcase },
        { id: 'contact', label: t('nav.contact'), icon: IconMail },
    ];

    useEffect(() => {
        const update = () => {
            const current = sections.filter(id => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= window.innerHeight * .45).at(-1);
            setActive(current === 'technologies' ? 'about' : current ?? 'home');
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
    }, []);

    function moveLetter(event: PointerEvent<HTMLDivElement>) {
        if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        artwork.current?.style.setProperty('--tilt-x', `${((event.clientY - bounds.top) / bounds.height - .5) * -12}deg`);
        artwork.current?.style.setProperty('--tilt-y', `${((event.clientX - bounds.left) / bounds.width - .5) * 16}deg`);
    }

    return (
        <div className={styles.portfolio} data-theme={light ? 'light' : 'dark'} data-palette={palette}>
            <a href="#main" className={styles.skip}>{t('nav.skip')}</a>
            <aside className={styles.rail}>
                <a href="#home" className={styles.brand} aria-label={es ? 'Miguel Lázaro — inicio' : 'Miguel Lázaro — home'}><span aria-hidden="true">m<span>.</span></span></a>
                <span className={styles.railCaption}>FULL STACK<br />DEVELOPER</span>
                <nav aria-label={t('nav.label')} className={styles.navigation}>
                    <div className={styles.desktopNavigation}>
                        {nav.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}><item.icon size={21} stroke={1.5} aria-hidden="true" /><span>{item.label}</span></a>)}
                    </div>
                    <div className={styles.mobileNavigation}>
                        {nav.filter(item => item.id !== 'experience').map(item => (
                            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id || (item.id === 'about' && active === 'experience') ? 'location' : undefined}>
                                <item.icon size={21} stroke={1.5} aria-hidden="true" />
                                <span>{item.id === 'about' ? (es ? 'Perfil' : 'Profile') : item.label}</span>
                            </a>
                        ))}
                    </div>
                </nav>
                <div className={styles.railSocials}>
                    <a href="https://github.com/miguelazaro" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><IconBrandGithub size={19} /></a>
                    <a href="https://www.linkedin.com/in/miguel-lazaro-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconBrandLinkedin size={19} /></a>
                </div>
                <span className={styles.railEnd}>ML / 2026</span>
            </aside>
            <main id="main" className={styles.main}>
                <header className={styles.topbar}>
                    <span className={styles.breadcrumb}>ML<span>/</span>{es ? 'PORTAFOLIO' : 'PORTFOLIO'}<span>/</span>2026</span>
                    <div className={styles.controls}>
                        <span className={styles.available}><i />{copy.availability}</span>
                        <button onClick={() => setLanguage(es ? 'en' : 'es')} aria-label={es ? 'Switch to English' : 'Cambiar a español'}>{es ? 'EN' : 'ES'}</button>
                        <button onClick={() => setLight(!light)} aria-label={t('nav.toggleTheme')}>{light ? <IconMoon size={18} /> : <IconSun size={18} />}</button>
                    </div>
                </header>
                <section id="home" className={styles.hero} aria-labelledby="hero-title">
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}><span>01</span> {es ? 'CÓDIGO CON IDENTIDAD' : 'CODE WITH IDENTITY'}</p>
                        <p className={styles.hello}>{es ? 'Hola, soy' : 'Hello, I’m'}</p>
                        <h1 id="hero-title">Miguel<br />Lázaro<span>.</span></h1>
                        <h2>{t('hero.title')}</h2>
                        <p className={styles.intro}>{es ? 'De la primera interacción a la lógica detrás del negocio. Desarrollo aplicaciones con React, Next.js, TypeScript y Node.js.' : 'From the first interaction to the business logic behind it. I build applications with React, Next.js, TypeScript and Node.js.'}</p>
                        <div className={styles.actions}><a href="#projects" className={styles.primary}>{t('hero.projects')}<IconArrowDown size={18} /></a><a href="/cv/curriculum_vitae_lazaro.pdf#toolbar=0" target="_blank" rel="noopener noreferrer" className={styles.cv}>{t('hero.cv')}<IconArrowUpRight size={18} /></a></div>
                    </div>
                    <div className={styles.artwork} ref={artwork} onPointerMove={moveLetter} onPointerLeave={() => { artwork.current?.style.setProperty('--tilt-x', '0deg'); artwork.current?.style.setProperty('--tilt-y', '0deg'); }}>
                        <div className={styles.artGrid} aria-hidden="true" />
                        <span className={styles.artLabel}>{es ? 'ENTRE DISEÑO Y LÓGICA' : 'BETWEEN DESIGN & LOGIC'}</span>
                        <svg className={styles.monogram} viewBox="0 0 430 450" aria-hidden="true">
                            <path className={styles.letterShadow} d={glyph} transform="translate(35 26)" />
                            <path className={styles.letterMiddle} d={glyph} transform="translate(18 13)" />
                            <path className={styles.letterFront} d={glyph} />
                            <path d="M 30 40 H 105 L 190 193 L 275 40 H 350" fill="none" stroke="white" strokeOpacity=".45" strokeWidth="1.5" />
                        </svg>
                        <span className={styles.artCoordinate} aria-hidden="true">M—L<br />TEHUACÁN / MX</span>
                        <div className={styles.palette} role="group" aria-label={es ? 'Combinación de colores' : 'Color combination'}>
                            <span>{es ? 'ACENTO' : 'ACCENT'}</span>
                            {[['mint', es ? 'Menta y coral' : 'Mint and coral'], ['lilac', es ? 'Lila y lima' : 'Lilac and lime'], ['blue', es ? 'Azul y naranja' : 'Blue and orange']].map(([value, label]) => <button key={value} data-swatch={value} aria-label={label} title={label} aria-pressed={palette === value} onClick={() => setPalette(value)}><span /><span /></button>)}
                        </div>
                    </div>
                    <div className={styles.heroFooter}><span>TEHUACÁN, MÉXICO</span><span>FRONTEND <i>×</i> BACKEND <i>×</i> {es ? 'CRITERIO' : 'CRAFT'}</span><a href="#projects" aria-label={t('hero.projects')}><IconArrowDown size={18} /></a></div>
                </section>
                <section id="projects" className={styles.section} aria-labelledby="projects-title">
                    <div className={styles.sectionHeader}><div><p className={styles.eyebrow}><span>02</span> {es ? 'TRABAJO SELECCIONADO' : 'SELECTED WORK'}</p><h2 id="projects-title">{es ? 'Del problema' : 'From a problem'}<br /><span>{es ? 'al producto.' : 'to a product.'}</span></h2></div><p>{es ? 'Sistemas de negocio, decisiones técnicas y mi participación en cada proyecto.' : 'Business systems, technical decisions and my role in each project.'}</p></div>
                    <div className={styles.projectList}>
                        {projectsDataConfig.map((project, index) => {
                            const open = selected === project.id;
                            return <article key={project.id} className={styles.project} data-open={open}>
                                <h3><button className={styles.projectTrigger} onClick={() => setSelected(open ? null : project.id)} aria-expanded={open} aria-controls={`project-${project.id}`} id={`trigger-${project.id}`}><span className={styles.projectNumber}>0{index + 1}</span><span className={styles.projectName}>{t(project.titleKey)}</span><span className={styles.projectTech}>{project.technologies.slice(0, 2).join(' / ')}</span>{open ? <IconMinus size={23} /> : <IconPlus size={23} />}</button></h3>
                                <div id={`project-${project.id}`} role="region" aria-labelledby={`trigger-${project.id}`} hidden={!open} className={styles.projectDetail}>
                                    <div><p className={styles.projectDescription}>{t(project.descExtendedKey)}</p>{project.roleKey && <p className={styles.role}>{t(project.roleKey)}</p>}<ul className={styles.contributions}>{(project.id === 'nodatix' ? copy.contributions : project.modulesKey.map(t)).map(item => <li key={item}><IconArrowRight size={15} aria-hidden="true" /><span>{item}</span></li>)}</ul><p className={styles.stack}>{project.technologies.join(' · ')}</p>{project.repoLink && <a className={styles.cv} href={project.repoLink} target="_blank" rel="noopener noreferrer">{es ? 'Ver código' : 'View code'}<IconArrowUpRight size={17} /></a>}</div>
                                    {project.images[0] ? <ProjectGallery images={project.images} title={t(project.titleKey)} /> : <div className={styles.projectDiagram}><span className={styles.diagramLabel}>{es ? 'ESTRUCTURA DEL PROYECTO' : 'PROJECT STRUCTURE'}</span><strong>{project.id === 'nodatix' ? 'Nodatix' : 'Evenrent'}<span>↗</span></strong>{(project.id === 'nodatix' ? ['Next.js / Server Actions', 'Zod → ' + (es ? 'Servicios' : 'Services') + ' → Prisma', 'PostgreSQL / Supabase'] : ['Next.js / TypeScript', 'tRPC / Prisma', 'PostgreSQL']).map((line, i) => <div className={styles.diagramRow} key={line}><span>0{i + 1}</span>{line}</div>)}<p>{es ? 'Esquema técnico · captura pendiente' : 'Technical outline · screenshot pending'}</p></div>}
                                </div>
                            </article>;
                        })}
                    </div>
                </section>
                <section id="about" className={`${styles.section} ${styles.about}`} aria-labelledby="about-title"><div><p className={styles.eyebrow}><span>03</span> {es ? 'DETRÁS DEL CÓDIGO' : 'BEHIND THE CODE'}</p><h2 id="about-title">{es ? 'Pensar el sistema.' : 'Think it through.'}<br /><span>{es ? 'Cuidar el detalle.' : 'Care for the details.'}</span></h2></div><div><p>{t('about.intro')}</p><p>{t('about.skills')}</p><p>{t('about.languages')}</p></div></section>
                <Technologies onSelectProject={setSelected} />
                <Journey />
                <section id="contact" className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
                    <p className={styles.eyebrow}><span>05</span> {es ? 'SIGUIENTE CONVERSACIÓN' : 'NEXT CONVERSATION'}</p>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactIntro}>
                            <h2 id="contact-title">{es ? '¿Construimos' : 'Let’s build'}<br /><a href="mailto:miguel.lazaro.2003@gmail.com">{es ? 'algo juntos?' : 'something.'}<IconArrowUpRight aria-hidden="true" /></a></h2>
                            <a className={styles.email} href="mailto:miguel.lazaro.2003@gmail.com">miguel.lazaro.2003@gmail.com</a>
                            <div className={styles.contactSocials}>
                                <a className={styles.cv} href="https://github.com/miguelazaro" target="_blank" rel="noopener noreferrer">GitHub<IconArrowUpRight size={16} /></a>
                                <a className={styles.cv} href="https://www.linkedin.com/in/miguel-lazaro-dev/" target="_blank" rel="noopener noreferrer">LinkedIn<IconArrowUpRight size={16} /></a>
                            </div>
                            <p className={styles.contactAvailability}>{copy.availability} · {t('hero.location')}</p>
                        </div>
                        <ContactForm />
                    </div>
                </section>
                <footer className={styles.footer}><span>© 2026 MIGUEL ÁNGEL LÁZARO</span><a href="#home">{es ? 'Volver arriba' : 'Back to top'}<IconArrowUpRight size={15} /></a></footer>
            </main>
        </div>
    );
}
