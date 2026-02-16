'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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
        'nav.about': 'Sobre Mí',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',
        'nav.darkMode': 'Modo Oscuro',
        'nav.lightMode': 'Modo Claro',
        
        // Hero
        'hero.available': 'DISPONIBLE',
        'hero.title': 'Desarrollador Full Stack JR',
        'hero.description': 'Desarrollo aplicaciones y webs modernas, rápidas y escalables con tecnologías de vanguardia.',
        'hero.cv': 'Ver CV',
        'hero.github': 'GitHub',
        'hero.linkedin': 'LinkedIn',
            
        // About 
        'about.title': 'Sobre',
        'about.titleHighlight': 'Mí', 
        'about.greeting': 'Hola, soy Miguel',  
        'about.intro': 'Soy un desarrollador  Full Stack Junior apasionado por crear aplicaciones web modernas y eficientes. Mi viaje en la programación comenzó con la curiosidad de entender cómo funcionan las cosas, y se convirtió en mi profesión.',
        'about.skills': 'Me especializo en React, Next.js, TypeScript y Node.js con Express, y trabajo tanto en el frontend como en el backend. Tengo capacidad para crear APIs robustas y gestionar bases de datos (SQL y MongoDB), conectando el frontend con lógica de servidor eficiente.',
        'about.tools': 'Utilizo Tailwind CSS y otras herramientas modernas para crear interfaces responsivas y escalables. Cada proyecto es una oportunidad para aprender algo nuevo y superar desafíos técnicos.',
        'about.hobby': 'Cuando no estoy programando, me gusta estar al día con las últimas tendencias tecnológicas, contribuir a proyectos open source y compartir conocimiento con la comunidad.',
        'about.value1': 'Código Limpio',  
        'about.value1Desc': 'Escribo código mantenible y escalable siguiendo best practices',
        'about.value2': 'Innovación',
        'about.value2Desc': 'Siempre explorando nuevas tecnologías y frameworks modernos',
        'about.value3': 'Pasión',
        'about.value3Desc': 'Amo lo que hago y me emociona resolver problemas complejos',
        'about.value4': 'Resultados',
        'about.value4Desc': 'Enfocado en entregar soluciones que generen impacto real',
        
        // Projects
        'projects.title': 'Mis',
        'projects.titleHighlight': 'Proyectos',
        'projects.viewDetails': 'Ver Detalles',
        'projects.viewCode': 'Ver Código en GitHub',
        'projects.modal.about': 'Descripción',
        'projects.modal.modules': 'Módulos y Características',
        'projects.modal.technologies': 'Tecnologías Utilizadas',
        
        // Project 1
        'projects.project1.title': 'Sistema web para nutriólogos',
        'projects.project1.desc': 'Sistema web SaaS para nutriólogos que permite gestionar pacientes, planes alimenticios con IA y citas.',
        'projects.project1.descExtended': 'Sistema web completo tipo SaaS diseñado para nutriólogos profesionales. Permite gestionar una base de pacientes, crear y asignar planes alimenticios personalizados utilizando IA (Mistral), agendar citas y generar reportes en PDF. El sistema incluye autenticación segura, panel de administración completo y base de datos MySQL para almacenamiento de información.',
        'projects.project1.modules.0': 'Gestión completa de pacientes con historial médico',
        'projects.project1.modules.1': 'Generación de planes alimenticios con IA (Mistral)',
        'projects.project1.modules.2': 'Sistema de citas y recordatorios automáticos',
        'projects.project1.modules.3': 'Exportación de reportes y planes en formato PDF',
        
        // Project 2
        'projects.project2.title': 'PWA de gestión de tareas modo offline',
        'projects.project2.desc': 'Aplicación web progresiva (PWA) para gestionar tareas con funcionalidad offline.',
        'projects.project2.descExtended': 'Progressive Web App desarrollada con React y Redux que permite gestionar tareas de manera eficiente incluso sin conexión a internet. Utiliza Service Workers para funcionalidad offline y sincroniza automáticamente los datos cuando se restablece la conexión. Backend en Node.js con MongoDB para persistencia de datos.',
        'projects.project2.modules.0': 'CRUD completo de tareas con sincronización offline',
        'projects.project2.modules.1': 'Service Worker para funcionalidad sin conexión',
        'projects.project2.modules.2': 'Sincronización automática de datos al reconectar',
        
        // Project 3
        'projects.project3.title': 'Landing Page Corporativa',
        'projects.project3.desc': 'Sitio web de alto impacto para una agencia digital. Animaciones suaves al hacer scroll.',
        'projects.project3.descExtended': 'Sitio web corporativo de alto impacto visual desarrollado con Astro para máximo rendimiento. Incluye animaciones fluidas al hacer scroll con Framer Motion, diseño responsive con Tailwind CSS y formulario de contacto funcional. Optimizado para SEO y velocidad de carga.',
        'projects.project3.modules.0': 'Diseño responsive con Tailwind CSS',
        'projects.project3.modules.1': 'Animaciones fluidas con Framer Motion',
        
        // Experience
        'experience.title': 'Mi',
        'experience.titleHighlight': 'Trayectoria',
        'experience.work': 'Experiencia Laboral',
        'experience.education': 'Educación',
        'experience.certifications': 'Certificaciones',
        'experience.currentDegree': 'En curso',
        'experience.testerDesc': 'Certificación profesional en pruebas de software y aseguramiento de calidad.',
        'experience.awsDesc': 'Formación especializada en servicios y arquitectura de Amazon Web Services.',
        
        // Contact
        'contact.title': 'Hablemos',
        'contact.titleHighlight': 'de tu proyecto',
        'contact.description': '¿Tienes una idea en mente o buscas un desarrollador para tu equipo? Estoy disponible para trabajos freelance y oportunidades full-time.',
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
        'contact.suggestionsTitle': 'Espacio para sugerencias (opcional)',
        'contact.suggestionsSubtitle': 'Si eres reclutador, déjame feedback constructivo para mejorar mi perfil o habilidades',
        
        // Footer
        'footer.rights': '© 2026 Miguel Ángel Lázaro. Todos los derechos reservados.',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'nav.darkMode': 'Dark Mode',
        'nav.lightMode': 'Light Mode',
        
        // Hero
        'hero.available': 'AVAILABLE',
        'hero.title': 'Full Stack Developer JR',
        'hero.description': 'I develop modern, fast and scalable applications and websites with cutting-edge technologies.',
        'hero.cv': 'View CV',
        'hero.github': 'GitHub',
        'hero.linkedin': 'LinkedIn',
        
        // About
        'about.title': 'About',
        'about.titleHighlight': 'Me',
        'about.greeting': 'Hi, I\'m Miguel 👋',
        'about.intro': 'I\'m a passionate Junior Full Stack developer who creates modern and efficient web applications. My journey in programming started with curiosity to understand how things work, and it became my profession.',
        'about.skills': 'I specialize in React, Next.js, TypeScript and Node.js with Express, and I enjoy working on both frontend and backend. I have the ability to create robust APIs and manage databases (SQL and MongoDB), connecting frontend with efficient server logic.',
        'about.tools': 'I use Tailwind CSS and other modern tools to create responsive and scalable interfaces. Each project is an opportunity to learn something new and overcome technical challenges.',
        'about.hobby': 'When I\'m not coding, I like to keep up with the latest tech trends, contribute to open source projects and share knowledge with the community.',
        'about.value1': 'Clean Code',
        'about.value1Desc': 'I write maintainable and scalable code following best practices',
        'about.value2': 'Innovation',
        'about.value2Desc': 'Always exploring new technologies and modern frameworks',
        'about.value3': 'Passion',
        'about.value3Desc': 'I love what I do and I\'m excited to solve complex problems',
        'about.value4': 'Results',
        'about.value4Desc': 'Focused on delivering solutions that generate real impact',
        
        // Projects
        'projects.title': 'My',
        'projects.titleHighlight': 'Projects',
        'projects.viewDetails': 'View Details',
        'projects.viewCode': 'View Code on GitHub',
        'projects.modal.about': 'About',
        'projects.modal.modules': 'Modules & Features',
        'projects.modal.technologies': 'Technologies Used',
        
        // Project 1
        'projects.project1.title': 'Nutrition Management System',
        'projects.project1.desc': 'SaaS web system for nutritionists to manage patients, AI-powered meal plans and appointments.',
        'projects.project1.descExtended': 'Complete SaaS web system designed for professional nutritionists. Manage patient database, create and assign personalized meal plans using AI (Mistral), schedule appointments and generate PDF reports. The system includes secure authentication, complete admin panel and MySQL database for information storage.',
        'projects.project1.modules.0': 'Complete patient management with medical history',
        'projects.project1.modules.1': 'AI-powered meal plan generation (Mistral)',
        'projects.project1.modules.2': 'Appointment system with automatic reminders',
        'projects.project1.modules.3': 'Export reports and plans in PDF format',
        
        // Project 2
        'projects.project2.title': 'Offline Task Management PWA',
        'projects.project2.desc': 'Progressive Web App (PWA) for task management with offline functionality.',
        'projects.project2.descExtended': 'Progressive Web App developed with React and Redux that allows efficient task management even without internet connection. Uses Service Workers for offline functionality and automatically syncs data when connection is restored. Node.js backend with MongoDB for data persistence.',
        'projects.project2.modules.0': 'Complete CRUD of tasks with offline sync',
        'projects.project2.modules.1': 'Service Worker for offline functionality',
        'projects.project2.modules.2': 'Automatic data synchronization on reconnect',
        
        // Project 3
        'projects.project3.title': 'Corporate Landing Page',
        'projects.project3.desc': 'High-impact website for a digital agency. Smooth scroll animations.',
        'projects.project3.descExtended': 'High visual impact corporate website developed with Astro for maximum performance. Features smooth scroll animations with Framer Motion, responsive design with Tailwind CSS and functional contact form. Optimized for SEO and loading speed.',
        'projects.project3.modules.0': 'Responsive design with Tailwind CSS',
        'projects.project3.modules.1': 'Smooth animations with Framer Motion',
        
        // Experience
        'experience.title': 'My',
        'experience.titleHighlight': 'Journey',
        'experience.work': 'Work Experience',
        'experience.education': 'Education',
        'experience.certifications': 'Certifications',
        'experience.currentDegree': 'In progress',
        'experience.testerDesc': 'Professional certification in software testing and quality assurance.',
        'experience.awsDesc': 'Specialized training in Amazon Web Services architecture and services.',
        
        // Contact
        'contact.title': 'Let\'s talk',
        'contact.titleHighlight': 'about your project',
        'contact.description': 'Do you have an idea in mind or are you looking for a developer for your team? I\'m available for freelance work and full-time opportunities.',
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
        'contact.suggestionsTitle': 'Space for suggestions (optional)',
        'contact.suggestionsSubtitle': 'If you are a recruiter, leave me constructive feedback to improve my profile or skills',
        
        // Footer
        'footer.rights': '© 2026 Miguel Ángel Lázaro. All rights reserved.',
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

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
