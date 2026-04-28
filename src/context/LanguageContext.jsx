import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
    en: {
        // Nav
        navLinks: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Education", href: "#education" },
            { name: "Experience", href: "#experience" },
            { name: "Certificate", href: "#certificate" },
        ],
        // Dock
        lightMode: "Light Mode",
        darkMode: "Dark Mode",

        // Home
        location: "Morocco",
        heroTitle: "FULLSTACK",
        heroTitleStroke: "DEVELOPER",
        greeting: "Hi, I'm HAMZA",
        subtitle: "I design and develop modern, elegant, and professional web interfaces.",
        downloadCV: "Download CV",

        // About
        aboutTitle: "Know Who",
        aboutTitleHighlight: "I Am",
        aboutText: (
            <>
                I'm <span className="text-primary">Hamza</span>, a motivated Junior Full Stack Developer with a diverse and hands-on learning journey.
                I completed a <strong>3-month Front-End training</strong> at <strong>Big Academy</strong>, followed by a <strong>6-month Full Stack Developer program</strong> at <strong>Dar Digital</strong>.
                I also trained at <strong>Orange Digital Center</strong> in <strong>Java, Figma, and Databases</strong>.
                Currently, I am studying <strong>Digital Development</strong> at <strong>OFPPT</strong>, and I have completed <strong>one year at university</strong> in <strong>Accounting, Finance, and Taxation</strong>.
                In parallel, I studied <strong>English for 6 months</strong>.
                This multidisciplinary background allows me to blend technical development skills with analytical and business-oriented thinking to build efficient and impactful digital solutions.
            </>
        ),

        // Skills
        skillsTitle: "Professional",
        skillsTitleHighlight: "Skillset",
        toolsTitle: "Tools",
        toolsTitleSuffix: "I Use",
        languagesTitle: "Languages",

        // Education
        educationTitle: "My",
        educationTitleHighlight: "Education",
        educationData: [
            { year: "2024 - 2026", title: "Digital Development (DTS)", school: "Higher Institute of Applied Technology (OFPPT / ISTA) - Agadir" },
            { year: "2025", title: "Workshops: Figma (1 Day) & Java (2 Days)", school: "Orange Digital Center" },
            { year: "2024", title: "Full Stack Web Development (6 Months)", school: "Dar Digital" },
            { year: "2023", title: "Front-End Web Development (3 Months)", school: "Big Academy" },
            { year: "2023", title: "English Language Training (6 Months)", school: "English Institute" },
            { year: "2023 - 2024", title: "Bachelor Studies: Accounting, Finance & Taxation", school: "Ibn Zohr University - Agadir" },
            { year: "2023", title: "Baccalauréat – Physical Sciences", school: "High School - Tata" },
        ],

        // Experience
        experienceTitle: "My",
        experienceTitleHighlight: "Experience",
        experienceData: [
            {
                year: "2025",
                title: "Full Stack Web Development Training (1 Month)",
                school: "Dar Digital",
                description: "Built responsive web applications using HTML, Tailwind CSS, JavaScript, Vue.js, and backend fundamentals. Focused on UI/UX, API integration, and clean code practices.",
            },
        ],

        // Projects
        projectsTitle: "My Recent",
        projectsTitleHighlight: "Works",
        projectsSubtitle: "Websites, dashboards, and UI/UX designs created with modern technologies and clean visual design.",
        websitesCategory: "Websites",
        figmaCategory: "Figma Designs",
        codeLabel: "Code",
        demoLabel: "Demo",
        projects: [
            { title: "ADM Car - Car Rental", desc: "A car rental platform that allows users to browse, book, and manage car rentals online. Includes a login system and admin dashboard for managing bookings." },
            { title: "ElectroTurbo", desc: "An electricity services platform providing solutions and consultations online. Users can explore services and contact providers directly." },
            { title: "E-commerce Project", desc: "An online store project showcasing product listings, cart functionality, and checkout process. Built to demonstrate full-stack e-commerce capabilities." },
            { title: "BCH - E-commerce", desc: "Another e-commerce platform demonstrating advanced product management and user experience design." },
            { title: "Dar Digital Agency - Centre Project", desc: "A showcase website for Dar Digital Agency, highlighting services, team, and portfolio. Built to demonstrate modern web design practices." },
            { title: "My Portfolio", desc: "My personal professional portfolio website to showcase my skills, experience, and projects. Designed with a clean, responsive UI using the latest web technologies." },
            { title: "Hackathon Project", desc: "A portfolio website developed during a hackathon, highlighting my ability to work under pressure, think creatively, and deliver a clean, modern, and responsive UI." },
        ],
        figmaDesc: "A professional Figma design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",

        // Footer
        footerMiniTitle: "Contact",
        footerMainTitle: "Get In Touch",
        footerText: (linkedin, email, instagram) => (
            <>
                Have questions? Ping me with a{" "}
                <a href="https://www.linkedin.com/in/hamza-ibourk-b8569833a/" target="_blank" rel="noreferrer" className="highlight-link">LinkedIn</a>{" "}
                DM, email at{" "}
                <a href="mailto:hamzaibourk2005@gmail.com" className="highlight-link">hamzaibourk2005@gmail.com</a>, or check my{" "}
                <a href="https://www.instagram.com/sophisticated__decor/" target="_blank" rel="noreferrer" className="highlight-link">Instagram</a>.
            </>
        ),
        contact: {
            eyebrow: "GET IN TOUCH",
            title: "Contact",
            titleHighlight: "Me",
            formTitle: "Share Your Vision",
            name: "Name",
            niche: "Niche / Project type",
            emailPlaceholder: "Email",
            budget: "Select budget",
            message: "About your project (optional)",
            submit: "Send Message",
            quickTitle: "Quick Contact",
            emailDirect: "Email me directly:",
            sendEmail: "Send Email",
            copy: "Copy",
            copied: "Copied!",
            qrLabel: "Scan to connect on LinkedIn",
            sending: "Sending...",
            successMsg: "✅ Message sent! I'll get back to you soon.",
            errorMsg: "❌ Something went wrong. Please try again.",
        },
        footer: {
            tagline: "Full Stack Developer crafting modern & elegant web experiences.",
            col1Title: "Navigate",
            col2Title: "More",
            connectTitle: "Connect With Me",
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navEducation: "Education",
            navExperience: "Experience",
            navContact: "Contact",
            copyright: "© 2025 Hamza Ibourk. All rights reserved.",
            builtWith: "Built with React & ❤️",
        },
        certificates: {
            title: "My",
            titleHighlight: "Certificates",
            cert1Title: "Full Stack Web Development",
            cert2Title: "Front-End Web Development",
            cert3Title: "Figma UI/UX Design Workshop",
            cert4Title: "Java Development Workshop",
            cert5Title: "English Language Training",
            viewCert: "View Certificate",
        },
    },

    fr: {
        // Nav
        navLinks: [
            { name: "Accueil", href: "#home" },
            { name: "À propos", href: "#about" },
            { name: "Compétences", href: "#skills" },
            { name: "Projets", href: "#projects" },
            { name: "Formation", href: "#education" },
            { name: "Expérience", href: "#experience" },
            { name: "Certificats", href: "#certificate" },
        ],
        lightMode: "Mode Clair",
        darkMode: "Mode Sombre",

        greeting: "Salut, je suis HAMZA",
        location: "Maroc",
        heroTitle: "FULLSTACK",
        heroTitleStroke: "DÉVELOPPEUR",
        subtitle: "Je conçois et développe des interfaces web modernes, élégantes et professionnelles.",
        downloadCV: "Télécharger CV",

        aboutTitle: "Qui",
        aboutTitleHighlight: "Suis-Je",
        aboutText: (
            <>
                Je suis <span className="text-primary">Hamza</span>, un développeur Full Stack Junior motivé avec un parcours d'apprentissage diversifié et pratique.
                J'ai suivi une <strong>formation Front-End de 3 mois</strong> à <strong>Big Academy</strong>, suivie d'un <strong>programme Full Stack de 6 mois</strong> à <strong>Dar Digital</strong>.
                J'ai également été formé à <strong>Orange Digital Center</strong> en <strong>Java, Figma et Bases de données</strong>.
                Actuellement, j'étudie le <strong>Développement Digital</strong> à l'<strong>OFPPT</strong>, et j'ai complété <strong>une année universitaire</strong> en <strong>Comptabilité, Finance et Fiscalité</strong>.
                En parallèle, j'ai étudié <strong>l'anglais pendant 6 mois</strong>.
                Ce parcours multidisciplinaire me permet d'allier compétences techniques et pensée analytique pour créer des solutions numériques efficaces et impactantes.
            </>
        ),

        skillsTitle: "Compétences",
        skillsTitleHighlight: "Professionnelles",
        toolsTitle: "Outils",
        toolsTitleSuffix: "que j'utilise",
        languagesTitle: "Langues",

        educationTitle: "Ma",
        educationTitleHighlight: "Formation",
        educationData: [
            { year: "2024 - 2026", title: "Développement Digital (DTS)", school: "Institut Supérieur de Technologie Appliquée (OFPPT / ISTA) - Agadir" },
            { year: "2025", title: "Ateliers : Figma (1 jour) & Java (2 jours)", school: "Orange Digital Center" },
            { year: "2024", title: "Développement Web Full Stack (6 mois)", school: "Dar Digital" },
            { year: "2023", title: "Développement Web Front-End (3 mois)", school: "Big Academy" },
            { year: "2023", title: "Formation en langue anglaise (6 mois)", school: "Institut d'anglais" },
            { year: "2023 - 2024", title: "Licence : Comptabilité, Finance & Fiscalité", school: "Université Ibn Zohr - Agadir" },
            { year: "2023", title: "Baccalauréat – Sciences Physiques", school: "Lycée - Tata" },
        ],

        experienceTitle: "Mon",
        experienceTitleHighlight: "Expérience",
        experienceData: [
            {
                year: "2025",
                title: "Formation Développement Web Full Stack (1 mois)",
                school: "Dar Digital",
                description: "Développement d'applications web responsives avec HTML, Tailwind CSS, JavaScript, Vue.js et les bases du backend. Accent sur l'UI/UX, l'intégration d'API et les bonnes pratiques de code.",
            },
        ],

        projectsTitle: "Mes Récents",
        projectsTitleHighlight: "Travaux",
        projectsSubtitle: "Sites web, tableaux de bord et designs UI/UX créés avec des technologies modernes et un design visuel soigné.",
        websitesCategory: "Sites Web",
        figmaCategory: "Designs Figma",
        codeLabel: "Code",
        demoLabel: "Démo",
        projects: [
            { title: "ADM Car - Location de Voitures", desc: "Une plateforme de location de voitures permettant aux utilisateurs de parcourir, réserver et gérer des locations en ligne. Comprend un système de connexion et un tableau de bord admin." },
            { title: "ElectroTurbo", desc: "Une plateforme de services électriques proposant des solutions et consultations en ligne. Les utilisateurs peuvent explorer les services et contacter les prestataires directement." },
            { title: "Projet E-commerce", desc: "Un projet de boutique en ligne présentant des listes de produits, la fonctionnalité panier et le processus de paiement. Conçu pour démontrer les capacités e-commerce full-stack." },
            { title: "BCH - E-commerce", desc: "Une autre plateforme e-commerce démontrant une gestion avancée des produits et une conception d'expérience utilisateur." },
            { title: "Dar Digital Agency - Projet Centre", desc: "Un site vitrine pour Dar Digital Agency, mettant en valeur les services, l'équipe et le portfolio. Conçu pour démontrer les pratiques modernes de conception web." },
            { title: "Mon Portfolio", desc: "Mon site portfolio personnel pour présenter mes compétences, mon expérience et mes projets. Conçu avec une interface propre et responsive utilisant les dernières technologies web." },
            { title: "Projet Hackathon", desc: "Un site portfolio développé lors d'un hackathon, mettant en avant ma capacité à travailler sous pression, à penser de manière créative et à livrer une interface moderne et responsive." },
        ],
        figmaDesc: "Un kit de design Figma professionnel présentant des pratiques UI/UX modernes, des mises en page responsives, des systèmes d'auto-layout et des composants de design structurés.",

        footerMiniTitle: "Contact",
        footerMainTitle: "Contactez-Moi",
        footerText: () => (
            <>
                Des questions ? Envoyez-moi un message sur{" "}
                <a href="https://www.linkedin.com/in/hamza-ibourk-b8569833a/" target="_blank" rel="noreferrer" className="highlight-link">LinkedIn</a>,
                par email à{" "}
                <a href="mailto:hamzaibourk2005@gmail.com" className="highlight-link">hamzaibourk2005@gmail.com</a>, ou consultez mon{" "}
                <a href="https://www.instagram.com/sophisticated__decor/" target="_blank" rel="noreferrer" className="highlight-link">Instagram</a>.
            </>
        ),
        contact: {
            eyebrow: "CONTACTEZ-MOI",
            title: "Me",
            titleHighlight: "Contacter",
            formTitle: "Partagez Votre Vision",
            name: "Nom",
            niche: "Niche / Type de projet",
            emailPlaceholder: "Email",
            budget: "Sélectionner un budget",
            message: "À propos de votre projet (optionnel)",
            submit: "Envoyer",
            quickTitle: "Contact Rapide",
            emailDirect: "Email direct :",
            sendEmail: "Envoyer un Email",
            copy: "Copier",
            copied: "Copié !",
            qrLabel: "Scanner pour me rejoindre sur LinkedIn",
            sending: "Envoi en cours...",
            successMsg: "✅ Message envoyé ! Je vous répondrai bientôt.",
            errorMsg: "❌ Une erreur s'est produite. Veuillez réessayer.",
        },
        footer: {
            tagline: "Développeur Full Stack créant des expériences web modernes et élégantes.",
            col1Title: "Navigation",
            col2Title: "Plus",
            connectTitle: "Me Rejoindre",
            navHome: "Accueil",
            navAbout: "À propos",
            navSkills: "Compétences",
            navProjects: "Projets",
            navEducation: "Formation",
            navExperience: "Expérience",
            navContact: "Contact",
            copyright: "© 2025 Hamza Ibourk. Tous droits réservés.",
            builtWith: "Créé avec React & ❤️",
        },
        certificates: {
            title: "Mes",
            titleHighlight: "Certificats",
            cert1Title: "Développement Web Full Stack",
            cert2Title: "Développement Web Front-End",
            cert3Title: "Atelier Figma UI/UX Design",
            cert4Title: "Atelier Développement Java",
            cert5Title: "Formation Langue Anglaise",
            viewCert: "Voir le Certificat",
        },
    },

    ar: {
        // Nav
        navLinks: [
            { name: "الرئيسية", href: "#home" },
            { name: "من أنا", href: "#about" },
            { name: "المهارات", href: "#skills" },
            { name: "المشاريع", href: "#projects" },
            { name: "التعليم", href: "#education" },
            { name: "الخبرة", href: "#experience" },
            { name: "الشهادات", href: "#certificate" },
        ],
        lightMode: "الوضع الفاتح",
        darkMode: "الوضع الداكن",

        greeting: "مرحباً، أنا حمزة",
        location: "المغرب",
        heroTitle: "مطور",
        heroTitleStroke: "فول ستاك",
        subtitle: "أصمم وأطور واجهات ويب حديثة وأنيقة واحترافية.",
        downloadCV: "تحميل السيرة الذاتية",

        aboutTitle: "تعرف على",
        aboutTitleHighlight: "شخصيتي",
        aboutText: (
            <>
                أنا <span className="text-primary">حمزة</span>، مطور Full Stack مبتدئ متحمس بمسيرة تعليمية متنوعة وعملية.
                أتممت <strong>تدريباً في Front-End لمدة 3 أشهر</strong> في <strong>Big Academy</strong>، ثم <strong>برنامج Full Stack لمدة 6 أشهر</strong> في <strong>Dar Digital</strong>.
                كما تدربت في <strong>Orange Digital Center</strong> على <strong>Java وFigma وقواعد البيانات</strong>.
                حالياً أدرس <strong>التطوير الرقمي</strong> في <strong>OFPPT</strong>، وأتممت <strong>سنة جامعية</strong> في <strong>المحاسبة والمالية والضرائب</strong>.
                بالتوازي، درست <strong>اللغة الإنجليزية لمدة 6 أشهر</strong>.
                هذه الخلفية المتعددة التخصصات تتيح لي الجمع بين مهارات التطوير التقني والتفكير التحليلي لبناء حلول رقمية فعّالة ومؤثرة.
            </>
        ),

        skillsTitle: "المهارات",
        skillsTitleHighlight: "المهنية",
        toolsTitle: "الأدوات",
        toolsTitleSuffix: "التي أستخدمها",
        languagesTitle: "اللغات",

        educationTitle: "مساري",
        educationTitleHighlight: "التعليمي",
        educationData: [
            { year: "2024 - 2026", title: "التطوير الرقمي (DTS)", school: "المعهد العالي للتكنولوجيا التطبيقية (OFPPT / ISTA) - أكادير" },
            { year: "2025", title: "ورشات: Figma (يوم) وJava (يومان)", school: "Orange Digital Center" },
            { year: "2024", title: "تطوير الويب Full Stack (6 أشهر)", school: "Dar Digital" },
            { year: "2023", title: "تطوير الويب Front-End (3 أشهر)", school: "Big Academy" },
            { year: "2023", title: "تدريب على اللغة الإنجليزية (6 أشهر)", school: "معهد اللغة الإنجليزية" },
            { year: "2023 - 2024", title: "دراسات جامعية: المحاسبة والمالية والضرائب", school: "جامعة ابن زهر - أكادير" },
            { year: "2023", title: "البكالوريا – العلوم الفيزيائية", school: "الثانوية - تاتا" },
        ],

        experienceTitle: "مساري",
        experienceTitleHighlight: "المهني",
        experienceData: [
            {
                year: "2025",
                title: "تدريب تطوير الويب Full Stack (شهر واحد)",
                school: "Dar Digital",
                description: "بناء تطبيقات ويب متجاوبة باستخدام HTML وTailwind CSS وJavaScript وVue.js وأساسيات الـ Backend. مع التركيز على UI/UX وتكامل API وممارسات الكود النظيف.",
            },
        ],

        projectsTitle: "أحدث",
        projectsTitleHighlight: "أعمالي",
        projectsSubtitle: "مواقع ويب ولوحات تحكم وتصاميم UI/UX أُنجزت بتقنيات حديثة وتصميم بصري نظيف.",
        websitesCategory: "المواقع الإلكترونية",
        figmaCategory: "تصاميم Figma",
        codeLabel: "الكود",
        demoLabel: "معاينة",
        projects: [
            { title: "ADM Car - تأجير السيارات", desc: "منصة لتأجير السيارات تتيح للمستخدمين تصفح الحجوزات وإدارتها عبر الإنترنت. تشمل نظام تسجيل دخول ولوحة تحكم للمشرف." },
            { title: "ElectroTurbo", desc: "منصة خدمات كهربائية تقدم حلولاً واستشارات عبر الإنترنت. يمكن للمستخدمين استكشاف الخدمات والتواصل مع مقدميها مباشرة." },
            { title: "مشروع التجارة الإلكترونية", desc: "مشروع متجر إلكتروني يعرض قوائم المنتجات وسلة التسوق وعملية الدفع. مبني لإظهار قدرات التجارة الإلكترونية الكاملة." },
            { title: "BCH - تجارة إلكترونية", desc: "منصة تجارة إلكترونية أخرى تُظهر إدارة متقدمة للمنتجات وتصميم تجربة مستخدم متميز." },
            { title: "Dar Digital Agency - مشروع المركز", desc: "موقع عرض لوكالة Dar Digital يبرز الخدمات والفريق والمحفظة. مبني لإظهار ممارسات تصميم الويب الحديثة." },
            { title: "محفظتي الشخصية", desc: "موقع محفظتي الشخصية لعرض مهاراتي وخبراتي ومشاريعي. مصمم بواجهة نظيفة ومتجاوبة باستخدام أحدث تقنيات الويب." },
            { title: "مشروع الهاكاثون", desc: "موقع محفظة طُوِّر خلال هاكاثون، يبرز قدرتي على العمل تحت الضغط والتفكير الإبداعي وتقديم واجهة حديثة ومتجاوبة." },
        ],
        figmaDesc: "مجموعة تصميم Figma احترافية تعرض ممارسات UI/UX الحديثة والتخطيطات المتجاوبة وأنظمة التخطيط التلقائي ومكونات التصميم المنظمة.",

        footerMiniTitle: "تواصل",
        footerMainTitle: "تواصل معي",
        footerText: () => (
            <>
                هل لديك أسئلة؟ راسلني عبر{" "}
                <a href="https://www.linkedin.com/in/hamza-ibourk-b8569833a/" target="_blank" rel="noreferrer" className="highlight-link">LinkedIn</a>،
                أو عبر البريد الإلكتروني{" "}
                <a href="mailto:hamzaibourk2005@gmail.com" className="highlight-link">hamzaibourk2005@gmail.com</a>، أو تابعني على{" "}
                <a href="https://www.instagram.com/sophisticated__decor/" target="_blank" rel="noreferrer" className="highlight-link">Instagram</a>.
            </>
        ),
        contact: {
            eyebrow: "تواصل معي",
            title: "راسلني",
            titleHighlight: "الآن",
            formTitle: "شاركني فكرتك",
            name: "الاسم",
            niche: "المجال / نوع المشروع",
            emailPlaceholder: "البريد الإلكتروني",
            budget: "اختر الميزانية",
            message: "عن مشروعك (اختياري)",
            submit: "إرسال",
            quickTitle: "تواصل سريع",
            emailDirect: "راسلني مباشرة:",
            sendEmail: "إرسال بريد",
            copy: "نسخ",
            copied: "تم النسخ!",
            qrLabel: "امسح للتواصل على LinkedIn",
            sending: "جاري الإرسال...",
            successMsg: "✅ تم إرسال الرسالة! سأرد عليك قريباً.",
            errorMsg: "❌ حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        },
        footer: {
            tagline: "مطور Full Stack يصنع تجارب ويب حديثة وأنيقة.",
            col1Title: "التنقل",
            col2Title: "المزيد",
            connectTitle: "تواصل معي",
            navHome: "الرئيسية",
            navAbout: "من أنا",
            navSkills: "المهارات",
            navProjects: "المشاريع",
            navEducation: "التعليم",
            navExperience: "الخبرة",
            navContact: "تواصل",
            copyright: "© 2025 حمزة إبورك. جميع الحقوق محفوظة.",
            builtWith: "مبني بـ React و ❤️",
        },
        certificates: {
            title: "شهاداتي",
            titleHighlight: "المهنية",
            cert1Title: "تطوير الويب Full Stack",
            cert2Title: "تطوير الويب Front-End",
            cert3Title: "ورشة تصميم Figma UI/UX",
            cert4Title: "ورشة تطوير Java",
            cert5Title: "تدريب اللغة الإنجليزية",
            viewCert: "عرض الشهادة",
        },
    },
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("fr");
    const t = translations[lang];
    const isRTL = lang === "ar";

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
            <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
        </LanguageContext.Provider>
    );
}

export function useLang() {
    return useContext(LanguageContext);
}
