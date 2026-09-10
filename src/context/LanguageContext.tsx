'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    es: {
        // Navbar
        'nav.home': 'Inicio',
        'nav.skip': 'Saltar al contenido',
        'nav.label': 'Navegación principal',
        'nav.toggleTheme': 'Cambiar tema claro u oscuro',
        'projects.heading': 'Algunos de mis proyectos',
        'projects.count': 'PROYECTOS',
        'projects.cover': 'Proyecto',
        'projects.projectLabel': 'Desarrollo web',
        'projects.close': 'Cerrar detalles',
        'about.sectionLabel': 'PERFIL',
        'experience.sectionLabel': 'TRAYECTORIA',
        'contact.sectionLabel': 'CONTACTO',
        'nav.about': 'Sobre Mí',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',
        'nav.darkMode': 'Modo Oscuro',
        'nav.lightMode': 'Modo Claro',

        // Hero
        'hero.available': 'Disponible para oportunidades',
        'hero.title': 'Desarrollador Fullstack Mid',
        'hero.description': 'Desarrollo aplicaciones web para operaciones de negocio con React, Next.js, TypeScript y Node.js. Trabajo en sistemas multiempresa, autenticación e integraciones con servicios externos.',
        'hero.location': 'Tehuacán, Puebla, México',
        'hero.cv': 'Ver CV',
        'hero.github': 'GitHub',
        'hero.linkedin': 'LinkedIn',
        'hero.projects': 'Ver proyectos',

        // About
        'about.title': 'Sobre',
        'about.titleHighlight': 'Mí',
        'about.greeting': 'Hola, soy Miguel',
        'about.intro': 'Soy desarrollador Fullstack Mid. He participado en sistemas de punto de venta, flujos de autenticación y herramientas para administrar negocios, desde la interfaz hasta las reglas que se ejecutan en el servidor.',
        'about.skills': 'Mi stack principal incluye TypeScript, React, Next.js y Node.js. Trabajo con PostgreSQL, Prisma y Supabase, organizando el backend por capas y manteniendo la validación y la autorización del lado del servidor.',
        'about.tools': 'En MVPX AI contribuí a un POS multiempresa y a Fideguardian — Presta Prenda. Como cofundador y desarrollador en Nodatix, construí un CRM para reposterías con aislamiento de datos por negocio, integración con WhatsApp Cloud API y pruebas con Vitest.',
        'about.background': 'Cursé Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de Tehuacán entre agosto de 2024 y abril de 2026, después del TSU en Tecnologías de la Información.',
        'about.languages': 'Español nativo · Inglés intermedio, enfocado en lectura de documentación.',
        'about.value1': 'Frontend moderno',
        'about.value1Desc': 'Construyo interfaces con React, Next.js y TypeScript, contemplando estados de carga, contenido vacío y errores.',
        'about.value2': 'Backend y APIs',
        'about.value2Desc': 'Separo validaciones, acceso a datos y reglas de negocio. He integrado WhatsApp Cloud API, Stripe y servicios de Supabase.',
        'about.value3': 'Datos y autorización',
        'about.value3Desc': 'He implementado aislamiento de datos por negocio, políticas RLS en PostgreSQL y autorización del lado del servidor.',
        'about.value4': 'Pruebas automatizadas',
        'about.value4Desc': 'Escribo pruebas de servicios, validaciones y reglas de negocio con Vitest y Node Native Test Runner.',

        // Capabilities
        'capabilities.title': 'Qué puedo',
        'capabilities.titleHighlight': 'construir',
        'capabilities.item1.title': 'Sistemas web administrativos',
        'capabilities.item1.desc': 'Paneles de gestión con autenticación, roles de usuario, formularios y manejo de datos.',
        'capabilities.item2.title': 'Landing pages profesionales',
        'capabilities.item2.desc': 'Sitios de presentación con diseño responsivo, animaciones y formularios de contacto funcionales.',
        'capabilities.item3.title': 'Dashboards y paneles',
        'capabilities.item3.desc': 'Interfaces con gráficas, tablas, filtros y visualización de datos estructurados.',
        'capabilities.item4.title': 'Aplicaciones web progresivas',
        'capabilities.item4.desc': 'PWAs con soporte offline, instalación en dispositivo y sincronización de datos.',
        'capabilities.item5.title': 'Integración de APIs',
        'capabilities.item5.desc': 'Conexión entre frontend y backend, consumo de APIs REST y gestión de bases de datos SQL y NoSQL.',

        // Projects
        'projects.title': 'Mis',
        'projects.titleHighlight': 'Proyectos',
        'projects.viewDetails': 'Ver Detalles',
        'projects.viewCode': 'Ver Código en GitHub',
        'projects.modal.about': 'Descripción',
        'projects.modal.modules': 'Módulos y Características',
        'projects.modal.technologies': 'Tecnologías Utilizadas',
        'projects.modal.role': 'Mi Rol',
        'projects.modal.status': 'Estado',
        'projects.category.professional': 'Profesional',
        'projects.category.academic': 'Académico',

        // Evenrent
        'projects.evenrent.title': 'Evenrent — Gestión de eventos y rentas',
        'projects.evenrent.coverLabel': 'Eventos, recursos y operaciones',
        'projects.evenrent.desc': 'Sistema web para administrar eventos, recursos y rentas de negocios dedicados a servicios para eventos.',
        'projects.evenrent.descExtended': 'Aplicación para gestionar eventos, recursos, rentas y operaciones de negocios de servicios para eventos. Desarrollada con Next.js, TypeScript, tRPC, Prisma y PostgreSQL.',
        'projects.evenrent.modules.0': 'Administración de eventos.',
        'projects.evenrent.modules.1': 'Gestión de recursos y rentas.',
        'projects.evenrent.modules.2': 'Gestión de operaciones de negocios de servicios para eventos.',

        // MVPX AI
        'projects.pos.title': 'POS Multiempresa — MVPX AI',
        'projects.pos.coverLabel': 'Punto de venta para múltiples empresas',
        'projects.pos.desc': 'Contribución al backend multiempresa y a la experiencia de uso de una plataforma de punto de venta durante mi estadía en MVPX AI.',
        'projects.pos.descExtended': 'Participé en una plataforma de punto de venta multiempresa en MVPX AI. Mi trabajo se centró en componentes del backend en Node.js, pruebas automatizadas y estrategias de UX para los estados asíncronos de módulos críticos.',
        'projects.pos.role': 'Desarrollador Full Stack Jr en estadía profesional. Arquitecturé componentes del backend para operaciones multiempresa, implementé pruebas con Node Native Test Runner y desarrollé estrategias de UX para estados de carga, contenido vacío y errores.',
        'projects.pos.modules.0': 'Componentes de backend en Node.js para operaciones multiempresa.',
        'projects.pos.modules.1': 'Pruebas automatizadas con Node Native Test Runner.',
        'projects.pos.modules.2': 'Estados de carga, contenido vacío y manejo de errores en módulos del punto de venta.',

        // Nodatix
        'projects.nodatix.title': 'CRM Pastelería — Nodatix',
        'projects.nodatix.coverLabel': 'Gestión para negocios de repostería',
        'projects.nodatix.desc': 'CRM multiempresa para gestionar clientes, pedidos, pagos y productos de reposterías, con datos aislados por negocio e integración con WhatsApp.',
        'projects.nodatix.descExtended': 'Sistema de gestión para negocios de repostería desarrollado en Nodatix. Organicé el backend en capas de validación con Zod, acceso a datos con Prisma y servicios de reglas de negocio, conectadas mediante Server Actions de Next.js. Integré PostgreSQL, Auth y Storage de Supabase, manteniendo la validación y la autorización del lado del servidor.',
        'projects.nodatix.role': 'Cofundador y Desarrollador Full Stack. Desarrollé la arquitectura multiempresa, los módulos operativos y la integración con WhatsApp Cloud API. Reforcé el aislamiento de datos con RLS y mantuve pruebas automatizadas de servicios, validaciones y reglas de negocio.',
        'projects.nodatix.modules.0': 'Gestión de clientes, pedidos, pagos, productos y dashboard operativo.',
        'projects.nodatix.modules.1': 'Aislamiento de información por negocio, políticas RLS y restricciones de acceso a la API en PostgreSQL.',
        'projects.nodatix.modules.2': 'Backend por capas con Zod, Prisma y Server Actions; validación y autorización en el servidor.',
        'projects.nodatix.modules.3': 'Integración con WhatsApp Cloud API mediante patrón outbox y validación HMAC-SHA256.',
        'projects.nodatix.modules.4': 'Pruebas automatizadas con Vitest sobre servicios, validaciones y reglas de negocio.',

        // Project 1
        'projects.project1.title': 'NutriDev — SaaS de gestión nutricional',
        'projects.project1.desc': 'Gestión de pacientes, planes alimenticios y citas para nutriólogos, con soporte offline y pagos mediante Stripe.',
        'projects.project1.descExtended': 'Sistema SaaS para nutriólogos con gestión de pacientes, planes alimenticios con Mistral, citas y reportes PDF. Express sirve la interfaz y gestiona el backend, con JavaScript, Tailwind CSS y MySQL. Desarrollé el soporte PWA con Service Workers y una estrategia de caché network-first con fallback offline. Integré pagos con Stripe Checkout y procesamiento asíncrono mediante webhooks.',
        'projects.project1.role': 'Desarrollador principal. Implementé el backend con Express y MySQL y el frontend del sistema. Integré Mistral, el funcionamiento offline mediante Service Workers y el flujo de pagos con Stripe Checkout y webhooks.',
        'projects.project1.modules.0': 'Gestión completa de pacientes con historial médico',
        'projects.project1.modules.1': 'Generación de planes alimenticios con IA (Mistral)',
        'projects.project1.modules.2': 'Sistema de citas y recordatorios automáticos',
        'projects.project1.modules.3': 'Exportación de reportes y planes en formato PDF',
        'projects.project1.modules.4': 'Service Workers con estrategia network-first y fallback offline.',
        'projects.project1.modules.5': 'Stripe Checkout y procesamiento asíncrono de pagos mediante webhooks.',

        // Project 2
        'projects.project2.title': 'PWA de gestión de tareas — modo offline',
        'projects.project2.desc': 'Aplicación web progresiva (PWA) para gestionar tareas con soporte completo sin conexión a internet.',
        'projects.project2.descExtended': 'Progressive Web App con React y Redux para gestionar tareas de manera eficiente incluso sin conexión. Utiliza Service Workers para funcionalidad offline y sincroniza datos automáticamente al restablecer la conexión. Backend en Node.js con MongoDB para persistencia.',
        'projects.project2.role': 'Desarrollador principal. Implementé el frontend con React/Redux, los Service Workers para modo offline y el backend con Node.js y MongoDB.',
        'projects.project2.modules.0': 'CRUD completo de tareas con sincronización offline',
        'projects.project2.modules.1': 'Service Worker para funcionalidad sin conexión',
        'projects.project2.modules.2': 'Sincronización automática de datos al reconectar',

        // Project 4
        'projects.project4.title': 'Fideguardian — Presta Prenda',
        'projects.project4.coverLabel': 'Autenticación, acceso y onboarding',
        'projects.project4.desc': 'Desarrollo de flujos de autenticación OTP, recuperación de cuentas y reglas de acceso, con React y TypeScript, durante mi estadía en MVPX AI.',
        'projects.project4.descExtended': 'Contribuí a Fideguardian — Presta Prenda implementando autenticación con OTP y recuperación de cuentas. Optimicé la gestión de estado con Zustand y React Query para reducir peticiones redundantes y mejorar la consistencia de datos entre pantallas, e implementé reglas de negocio para el acceso y onboarding de usuarios.',
        'projects.project4.role': 'Desarrollador Full Stack Jr en MVPX AI. Mi participación se centró en los flujos de autenticación y recuperación de cuentas, la gestión de estado y las reglas de acceso y onboarding.',
        'projects.project4.modules.0': 'Autenticación mediante OTP y recuperación de cuentas con React y TypeScript.',
        'projects.project4.modules.1': 'Gestión de estado con Zustand y React Query para reducir peticiones redundantes.',
        'projects.project4.modules.2': 'Reglas de negocio para el acceso y onboarding de usuarios.',

        // Experience
        'experience.title': 'Mi',
        'experience.titleHighlight': 'Trayectoria',
        'experience.work': 'Experiencia Laboral',
        'experience.education': 'Educación',
        'experience.certifications': 'Certificaciones',
        'experience.nodatix.title': 'Cofundador y Desarrollador Full Stack',
        'experience.nodatix.desc': 'CRM Pastelería: desarrollé una arquitectura multiempresa con aislamiento de datos por negocio y un backend por capas con Zod, Prisma y Server Actions. Construí módulos de clientes, pedidos, pagos, productos y dashboard con Supabase; integré WhatsApp Cloud API con patrón outbox y validación HMAC-SHA256, reforcé las políticas RLS y escribí pruebas con Vitest.',
        'experience.mvpx.title': 'Desarrollador Full Stack Jr · Estadía profesional',
        'experience.mvpx.desc': 'Contribuí al backend del POS multiempresa en Node.js, implementé pruebas automatizadas y estados de carga, vacío y error. En Fideguardian — Presta Prenda desarrollé autenticación OTP, recuperación de cuentas y reglas de acceso y onboarding, y optimicé la gestión de estado con Zustand y React Query.',
        'experience.degree.title': 'Ingeniería en Desarrollo y Gestión de Software',
        'experience.tsu.title': 'TSU en Tecnologías de la Información',
        'experience.location': 'Tehuacán, Puebla, México',
        'experience.tester.title': 'Certificado en Tester',
        'experience.excel.title': 'Certificado en Excel',
        'experience.aws.title': 'Constancia de Gamer a Experto AWS',
        'experience.testerDesc': 'Formación en pruebas de software y aseguramiento de calidad.',
        'experience.excelDesc': 'Formación en Excel, Testing Program (2023).',
        'experience.awsDesc': 'Constancia de formación en AWS emitida por NECTEC (2023).',

        // Contact
        'contact.title': 'Hablemos',
        'contact.titleHighlight': 'de tu proyecto',
        'contact.description': '¿Tienes una oportunidad laboral, una colaboración o un proyecto web en mente? Puedes escribirme y con gusto reviso cómo puedo aportar desde desarrollo frontend, backend o construcción de interfaces.',
        'contact.name': 'Nombre',
        'contact.namePlaceholder': 'Tu nombre',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'tu@email.com',
        'contact.message': 'Mensaje',
        'contact.messagePlaceholder': '¿En qué puedo ayudarte?',
        'contact.send': 'Enviar Mensaje',
        'contact.sending': 'Enviando...',
        'contact.success': '¡Mensaje enviado correctamente! Te responderé pronto.',
        'contact.error': 'Error al enviar el mensaje',
        'contact.errorConnection': 'Error de conexión. Intenta de nuevo.',
        'contact.suggestedTitle': 'Consultas frecuentes',
        'contact.suggestedSubtitle': 'Haz clic en una pregunta para autocompletar el formulario',
        'contact.questions.availabilityShort': 'Disponibilidad',
        'contact.questions.availability': '¿Cuál es tu disponibilidad actual para nuevos proyectos?',
        'contact.questions.remoteShort': 'Trabajo remoto',
        'contact.questions.remote': '¿Trabajas de forma remota o estás abierto a modalidad híbrida?',
        'contact.questions.salaryShort': 'Expectativa salarial',
        'contact.questions.salary': '¿Cuál es tu rango salarial esperado?',
        'contact.questions.stackShort': 'Stack técnico',
        'contact.questions.stack': '¿Puedes detallar tu experiencia con el stack tecnológico que manejamos?',
        'contact.questions.experienceShort': 'Experiencia',
        'contact.questions.experience': '¿Podrías contarme más sobre tu experiencia en proyectos similares?',

        // Footer
        'footer.rights': '© 2026 Miguel Ángel Lázaro. Todos los derechos reservados.',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.skip': 'Skip to content',
        'nav.label': 'Main navigation',
        'nav.toggleTheme': 'Toggle light or dark theme',
        'projects.heading': 'Selected projects',
        'projects.count': 'PROJECTS',
        'projects.cover': 'Project',
        'projects.projectLabel': 'Web development',
        'projects.close': 'Close details',
        'about.sectionLabel': 'PROFILE',
        'experience.sectionLabel': 'EXPERIENCE',
        'contact.sectionLabel': 'CONTACT',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'nav.darkMode': 'Dark Mode',
        'nav.lightMode': 'Light Mode',

        // Hero
        'hero.available': 'Available for opportunities',
        'hero.title': 'Mid-level Fullstack Developer',
        'hero.description': 'I build web applications for business operations with React, Next.js, TypeScript and Node.js. My work includes multi-tenant systems, authentication and integrations with external services.',
        'hero.location': 'Tehuacán, Puebla, Mexico',
        'hero.cv': 'View CV',
        'hero.github': 'GitHub',
        'hero.linkedin': 'LinkedIn',
        'hero.projects': 'View projects',

        // About
        'about.title': 'About',
        'about.titleHighlight': 'Me',
        'about.greeting': 'Hi, I\'m Miguel',
        'about.intro': 'I am a mid-level Fullstack developer. I have contributed to point-of-sale systems, authentication flows and business management tools, from the interface to server-side business rules.',
        'about.skills': 'My main stack includes TypeScript, React, Next.js and Node.js. I work with PostgreSQL, Prisma and Supabase, organizing backends into layers and keeping validation and authorization on the server.',
        'about.tools': 'At MVPX AI, I contributed to a multi-tenant POS and Fideguardian — Presta Prenda. As co-founder and developer at Nodatix, I built a bakery CRM with per-business data isolation, WhatsApp Cloud API integration and Vitest tests.',
        'about.background': 'I studied Software Development and Management Engineering at Universidad Tecnológica de Tehuacán from August 2024 to April 2026, following a Higher University Technician degree in Information Technology.',
        'about.languages': 'Native Spanish · Intermediate English, focused on reading documentation.',
        'about.value1': 'Modern Frontend',
        'about.value1Desc': 'I build interfaces with React, Next.js and TypeScript, accounting for loading, empty and error states.',
        'about.value2': 'Backend & APIs',
        'about.value2Desc': 'I separate validation, data access and business rules. My integrations include WhatsApp Cloud API, Stripe and Supabase services.',
        'about.value3': 'Data & Authorization',
        'about.value3Desc': 'I have implemented per-business data isolation, PostgreSQL RLS policies and server-side authorization.',
        'about.value4': 'Automated Testing',
        'about.value4Desc': 'I write tests for services, validation and business rules with Vitest and Node Native Test Runner.',

        // Capabilities
        'capabilities.title': 'What I can',
        'capabilities.titleHighlight': 'build',
        'capabilities.item1.title': 'Web admin systems',
        'capabilities.item1.desc': 'Management panels with authentication, user roles, forms and data handling.',
        'capabilities.item2.title': 'Professional landing pages',
        'capabilities.item2.desc': 'Presentation sites with responsive design, animations and functional contact forms.',
        'capabilities.item3.title': 'Dashboards & panels',
        'capabilities.item3.desc': 'Interfaces with charts, tables, filters and structured data visualization.',
        'capabilities.item4.title': 'Progressive web apps',
        'capabilities.item4.desc': 'PWAs with offline support, device installation and data synchronization.',
        'capabilities.item5.title': 'API integration',
        'capabilities.item5.desc': 'Frontend-backend connection, REST API consumption and SQL/NoSQL database management.',

        // Projects
        'projects.title': 'My',
        'projects.titleHighlight': 'Projects',
        'projects.viewDetails': 'View Details',
        'projects.viewCode': 'View Code on GitHub',
        'projects.modal.about': 'About',
        'projects.modal.modules': 'Modules & Features',
        'projects.modal.technologies': 'Technologies Used',
        'projects.modal.role': 'My Role',
        'projects.modal.status': 'Status',
        'projects.category.professional': 'Professional',
        'projects.category.academic': 'Academic',

        // Evenrent
        'projects.evenrent.title': 'Evenrent — Event and Rental Management',
        'projects.evenrent.coverLabel': 'Events, resources and operations',
        'projects.evenrent.desc': 'Web application for managing events, resources and rentals for event service businesses.',
        'projects.evenrent.descExtended': 'An application for managing events, resources, rentals and operations for event service businesses. Built with Next.js, TypeScript, tRPC, Prisma and PostgreSQL.',
        'projects.evenrent.modules.0': 'Event administration.',
        'projects.evenrent.modules.1': 'Resource and rental management.',
        'projects.evenrent.modules.2': 'Operations management for event service businesses.',

        // MVPX AI
        'projects.pos.title': 'Multi-tenant POS — MVPX AI',
        'projects.pos.coverLabel': 'Point of sale for multiple businesses',
        'projects.pos.desc': 'Contributed to the multi-tenant backend and user experience of a point-of-sale platform during my internship at MVPX AI.',
        'projects.pos.descExtended': 'Contributed to a multi-tenant point-of-sale platform at MVPX AI. My work focused on Node.js backend components, automated tests and UX strategies for asynchronous states in critical modules.',
        'projects.pos.role': 'Junior Full Stack Developer intern. Architected backend components for multi-tenant operations, implemented tests with Node Native Test Runner and developed UX strategies for loading, empty and error states.',
        'projects.pos.modules.0': 'Node.js backend components for multi-tenant operations.',
        'projects.pos.modules.1': 'Automated tests with Node Native Test Runner.',
        'projects.pos.modules.2': 'Loading, empty and error states in point-of-sale modules.',

        // Nodatix
        'projects.nodatix.title': 'Bakery CRM — Nodatix',
        'projects.nodatix.coverLabel': 'Management for bakery businesses',
        'projects.nodatix.desc': 'Multi-tenant CRM for bakery customers, orders, payments and products, with per-business data isolation and WhatsApp integration.',
        'projects.nodatix.descExtended': 'A bakery management system developed at Nodatix. I organized the backend into Zod validation, Prisma data access and business service layers, connected through Next.js Server Actions. Integrated Supabase PostgreSQL, Auth and Storage, keeping validation and authorization on the server.',
        'projects.nodatix.role': 'Co-founder and Full Stack Developer. Built the multi-tenant architecture, operational modules and WhatsApp Cloud API integration. Strengthened data isolation with RLS and maintained automated tests for services, validation and business rules.',
        'projects.nodatix.modules.0': 'Customer, order, payment and product management with an operational dashboard.',
        'projects.nodatix.modules.1': 'Per-business data isolation, RLS policies and PostgreSQL API access restrictions.',
        'projects.nodatix.modules.2': 'Layered backend with Zod, Prisma and Server Actions; server-side validation and authorization.',
        'projects.nodatix.modules.3': 'WhatsApp Cloud API integration using an outbox pattern and HMAC-SHA256 validation.',
        'projects.nodatix.modules.4': 'Automated Vitest tests for services, validation and business rules.',

        // Project 1
        'projects.project1.title': 'NutriDev — Nutrition Management SaaS',
        'projects.project1.desc': 'Patient, meal plan and appointment management for nutritionists, with offline support and Stripe payments.',
        'projects.project1.descExtended': 'A SaaS system for nutritionists with patient management, Mistral-powered meal plans, appointments and PDF reports. Express serves the interface and handles the backend, with JavaScript, Tailwind CSS and MySQL. Built PWA support using Service Workers and a network-first cache strategy with an offline fallback. Integrated Stripe Checkout payments and asynchronous processing through webhooks.',
        'projects.project1.role': 'Lead developer. Implemented the Express and MySQL backend and the frontend. Integrated Mistral, offline functionality through Service Workers and the payment flow with Stripe Checkout and webhooks.',
        'projects.project1.modules.0': 'Complete patient management with medical history',
        'projects.project1.modules.1': 'AI-powered meal plan generation (Mistral)',
        'projects.project1.modules.2': 'Appointment system with automatic reminders',
        'projects.project1.modules.3': 'Export reports and plans in PDF format',
        'projects.project1.modules.4': 'Service Workers with a network-first strategy and offline fallback.',
        'projects.project1.modules.5': 'Stripe Checkout and asynchronous payment processing through webhooks.',

        // Project 2
        'projects.project2.title': 'Offline Task Management PWA',
        'projects.project2.desc': 'Progressive Web App (PWA) for task management with full offline support.',
        'projects.project2.descExtended': 'Progressive Web App built with React and Redux for efficient task management, even without internet. Uses Service Workers for offline functionality and automatically syncs data when connection is restored. Node.js backend with MongoDB.',
        'projects.project2.role': 'Lead developer. Implemented the React/Redux frontend, Service Workers for offline mode and the Node.js + MongoDB backend.',
        'projects.project2.modules.0': 'Complete CRUD of tasks with offline sync',
        'projects.project2.modules.1': 'Service Worker for offline functionality',
        'projects.project2.modules.2': 'Automatic data synchronization on reconnect',

        // Project 4
        'projects.project4.title': 'Fideguardian — Presta Prenda',
        'projects.project4.coverLabel': 'Authentication, access and onboarding',
        'projects.project4.desc': 'Developed OTP authentication, account recovery and access rules with React and TypeScript during my internship at MVPX AI.',
        'projects.project4.descExtended': 'Contributed to Fideguardian — Presta Prenda by implementing OTP authentication and account recovery. Optimized state management with Zustand and React Query to reduce redundant requests and improve data consistency across screens, and implemented business rules for user access and onboarding.',
        'projects.project4.role': 'Junior Full Stack Developer at MVPX AI. My contribution focused on authentication and account recovery flows, state management, and access and onboarding rules.',
        'projects.project4.modules.0': 'OTP authentication and account recovery with React and TypeScript.',
        'projects.project4.modules.1': 'State management with Zustand and React Query to reduce redundant requests.',
        'projects.project4.modules.2': 'Business rules for user access and onboarding.',

        // Experience
        'experience.title': 'My',
        'experience.titleHighlight': 'Journey',
        'experience.work': 'Work Experience',
        'experience.education': 'Education',
        'experience.certifications': 'Certifications',
        'experience.nodatix.title': 'Co-founder & Full Stack Developer',
        'experience.nodatix.desc': 'Bakery CRM: developed a multi-tenant architecture with per-business data isolation and a layered backend using Zod, Prisma and Server Actions. Built customer, order, payment, product and dashboard modules with Supabase; integrated WhatsApp Cloud API using an outbox pattern and HMAC-SHA256 validation, strengthened RLS policies and wrote Vitest tests.',
        'experience.mvpx.title': 'Junior Full Stack Developer · Professional Internship',
        'experience.mvpx.desc': 'Contributed to the multi-tenant POS backend in Node.js, implemented automated tests and loading, empty and error states. At Fideguardian — Presta Prenda, developed OTP authentication, account recovery and access and onboarding rules, and optimized state management with Zustand and React Query.',
        'experience.degree.title': 'Software Development and Management Engineering',
        'experience.tsu.title': 'Higher University Technician in Information Technology',
        'experience.location': 'Tehuacán, Puebla, Mexico',
        'experience.tester.title': 'Software Testing Certificate',
        'experience.excel.title': 'Excel Certificate',
        'experience.aws.title': 'De Gamer a Experto AWS — Training Certificate',
        'experience.testerDesc': 'Training in software testing and quality assurance.',
        'experience.excelDesc': 'Excel training, Testing Program (2023).',
        'experience.awsDesc': 'AWS training certificate issued by NECTEC (2023).',

        // Contact
        'contact.title': 'Let\'s talk',
        'contact.titleHighlight': 'about your project',
        'contact.description': 'Do you have a job opportunity, a collaboration or a web project in mind? Feel free to reach out and I\'ll be happy to discuss how I can contribute through frontend, backend or interface development.',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Your name',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'your@email.com',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'How can I help you?',
        'contact.send': 'Send Message',
        'contact.sending': 'Sending...',
        'contact.success': 'Message sent successfully! I\'ll respond soon.',
        'contact.error': 'Error sending message',
        'contact.errorConnection': 'Connection error. Try again.',
        'contact.suggestedTitle': 'Common questions',
        'contact.suggestedSubtitle': 'Click on a question to autocomplete the form',
        'contact.questions.availabilityShort': 'Availability',
        'contact.questions.availability': 'What is your current availability for new projects?',
        'contact.questions.remoteShort': 'Remote work',
        'contact.questions.remote': 'Do you work remotely or are you open to hybrid mode?',
        'contact.questions.salaryShort': 'Salary expectation',
        'contact.questions.salary': 'What is your expected salary range?',
        'contact.questions.stackShort': 'Tech stack',
        'contact.questions.stack': 'Can you detail your experience with the tech stack we use?',
        'contact.questions.experienceShort': 'Experience',
        'contact.questions.experience': 'Could you tell me more about your experience on similar projects?',

        // Footer
        'footer.rights': '© 2026 Miguel Ángel Lázaro. All rights reserved.',
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.es] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
