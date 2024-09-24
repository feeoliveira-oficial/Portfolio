import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources =
{
    en:
        {
            translation:
            {
                Start: 'Press Start',
                welcome: 'Hey you, be very Welcome',
                Home: 'Home',
                description: "Hello! I'm Felipe, a newbie developer with a Senior passion for technology. This portfolio is a window into my work, projects, and learning journey in programming.I hope you enjoy the xp and by the chance, if you have an open position in your team, don't hesitate give me a call, text me, send smokes signs, morse code, etc.",
                Skills: 'Skills',
                SkillsTitle: 'My Skills',
                Projects: 'Projects',
                ProjectsTitle: 'My Projects',
                html: 'Advanced HTML experience for creating websites.',
                css: 'Creating responsive and modern layouts using frameworks.',
                BI: 'Power BI experience for creating reports and dashboards.',
                SQL: 'SQL experience for creating and managing databases.',
                PHP: 'PHP experience for creating dynamic web pages.',
                Cs: 'C# experience for creating desktop applications and web services.',
                Java: 'Java experience for creating desktop applications and web services.',
                React: 'React experience for creating dynamic and interactive web applications.',
                javascript: 'Development of dynamic interactivity using JavaScript.',
                project1: 'Complete library management system, developed with ASP.NET and SQL Server, which allows registration of books, authors and categories.',
                project2: 'Tim Horton`s quality ranking analysis, developed with Python and Flask, which allows the analysis of product quality data and service.',
                copyright: '© 2024 [Felipe] - Copyright',
            }
        },
    pt:
        {
            translation:
            {
                Start: 'Pressione Iniciar',
                welcome: 'Olá, seja muito bem-vindo',
                Home: 'Início',
                description: "Olá! Eu sou o Felipe, um desenvolvedor juninho com uma paixão sênior por tecnologia. Este portfólio é uma janela para o meu trabalho, projetos e jornada de aprendizado em programação. Aproveite a experiência e, por acaso, houver uma posição na sua equipe, não hesite em me ligar, enviar uma mensagem de texto, enviar sinais de fumaça, código morse, etc.",
                Skills: 'Habilidades',
                SkillsTitle: 'Minhas habilidades',
                Projects: 'Projetos',
                ProjectsTitle: 'Meus Projetos',
                html: 'Experiência avançada em HTML para criação de websites.',
                css: 'Criação de layouts responsivos e modernos utilizando frameworks.',
                BI: 'Experiência em Power BI para criação de relatórios e dashboards.',
                SQL: 'Experiência em SQL para criação e gerenciamento de bancos de dados.',
                PHP: 'Experiência em PHP para criação de páginas web dinâmicas.',
                Cs: 'Experiência em C# para criação de aplicativos desktop e serviços web.',
                Java: 'Experiência em Java para criação de aplicativos desktop e serviços web.',
                React:'Experiência em React para criação de aplicações web dinâmicas e interativas.',
                javascript: 'Desenvolvimento de interatividade dinâmica utilizando JavaScript.',
                project1: 'Sistema completo de gerenciamento de biblioteca, desenvolvido com ASP.NET e SQL Server, que permite cadastro de livros, autores e categorias.',
                project2: 'Análise de ranking de qualidade do Tim Horton`s, desenvolvido com Python e Flask, que permite a análise de dados de qualidade de produtos e atendimento',
                copyright: '© 2024 [Felipe] - Direitos reservados',
            }
        },
    fr:
        {
            translation:
            {
                Start: 'Appuyez sur Démarrer',
                welcome: 'Salut, soyez le bienvenu',
                Home: 'Accueil',
                description: "Bonjour! Je m'appelle Felipe, un nouveau développeur avec une passion senior pour la technologie. Ce portfolio est une fenêtre sur mon travail, mes projets et mon parcours d'apprentissage en programmation. J'espère que vous apprécierez et, par hasard, si vous avez une position pour moi dans votre équipe, n'hésitez pas à m'appeler, m'envoyer un SMS, envoyer des signaux de fumée, code morse, etc.",
                Skills: 'Compétences',
                SkillsTitle: 'Mes compétences',
                Projects: 'Projets',
                ProjectsTitle: 'Mes projets',
                html: 'Expérience avancée en HTML pour la création de sites Web.',
                css: 'Création de mises en page modernes et réactives à l\'aide de frameworks.',
                BI: 'Expérience Power BI pour la création de rapports et de tableaux de bord.',
                SQL: 'Expérience SQL pour la création et la gestion de bases de données.',
                PHP: 'Expérience PHP pour la création de pages Web dynamiques.',
                Cs: 'Expérience C# pour la création d\'applications de bureau et de services Web.',
                Java: 'Expérience Java pour la création d\'applications de bureau et de services Web.',
                React: 'Expérience React pour la création d\'applications Web dynamiques et interactives.',
                javascript: 'Développement d\'interactivité dynamique à l\'aide de JavaScript.',
                project1: 'Système complet de gestion de bibliothèque, développé avec ASP.NET et SQL Server, qui permet l\'enregistrement de livres, d\'auteurs et de catégories.',
                project2: 'Analyse du classement de la qualité de Tim Horton`s, développée avec Python et Flask, qui permet l\'analyse des données de qualité des produits et du service.',
                copyright: '© 2024 [Felipe] - Tous droits réservés',
            }
        },
    es:
        {
            translation:
            {
                Start: 'Presiona Iniciar',
                welcome: 'Hola, sé muy bienvenido',
                Home: 'Inicio',
                description: "¡Hola! Soy Felipe, un desarrollador novato con una pasión senior por la tecnología. Este portafolio es una ventana a mi trabajo, proyectos y viaje de aprendizaje en programación. Espero que disfrutes y, por casualidad, si tienes un puesto para mí en tu equipo, no dudes en llamarme, enviarme un mensaje de texto, enviar señales de humo, código morse, etc.",
                Skills: 'Habilidades',
                SkillsTitle: 'Mis habilidades',
                Projects: 'Proyectos',
                ProjectsTitle: 'Mis proyectos',
                html: 'Experiencia avanzada en HTML para la creación de sitios web.',
                css: 'Creación de diseños modernos y receptivos utilizando frameworks.',
                BI: 'Experiencia en Power BI para la creación de informes y paneles de control.',
                SQL: 'Experiencia en SQL para la creación y gestión de bases de datos.',
                PHP: 'Experiencia en PHP para la creación de páginas web dinámicas.',
                Cs: 'Experiencia en C# para la creación de aplicaciones de escritorio y servicios web.',
                Java: 'Experiencia en Java para la creación de aplicaciones de escritorio y servicios web.',
                React: 'Experiencia en React para la creación de aplicaciones web dinámicas e interactivas.',
                javascript: 'Desarrollo de interactividad dinámica utilizando JavaScript.',
                project1: 'Sistema completo de gestión de bibliotecas, desarrollado con ASP.NET y SQL Server, que permite el registro de libros, autores y categorías.',
                project2: 'Análisis de clasificación de calidad de Tim Horton`s, desarrollado con Python y Flask, que permite el análisis de datos de calidad de productos y servicios.',
                copyright: '© 2024 [Felipe] - Todos los derechos reservados',
            }
        }
};

i18n
.use(initReactI18next)
.init(
    {
        resources,
        lng: 'en',
        fallbackLng: 'en',
        keySeparator: false,
        interpolation:
        {
            escapeValue: false
        }
    }
);

export default i18n;