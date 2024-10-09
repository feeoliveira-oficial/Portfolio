import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Contact from './components/Contact';

const resources =
{
    en:
        {
            translation:
            {
                Start: 'Check my journey',
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
                ProjectsButton: 'View Project',
                Bot: 'TechBuddy - Our personal tech Jinn',
                AskPlaceholder: "Ask me anything about technology... e.g., What is React?",
                BotButton: 'Come on ask, but be wise u have just some tokens available!',
                Contact: 'Contact',
                Name: 'Name',
                Message: 'Message',
                Send: 'Send',
                MessageSentSuccess: "Message sent successfully!",
                MessageSentFailure: "Error sending message. Try again.",
                PrivacyPolicy: 'Privacy Policy',
                TermsOfUse: 'Terms of Use',
            }
        },
    pt:
        {
            translation:
            {
                Start: 'Explore a jornada',
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
                ProjectsButton: 'Ver Projeto',
                Bot: 'Robotinik - Nosso pingado Tech de cada dia',
                AskPlaceholder: "Pergunte-me qualquer coisa sobre tecnologia... ex.: O que é React?",
                BotButton: 'Vamos lá pergunte, mas seja sábio você tem só tem os tokens grátis disponíveis!',
                Contact: 'Contato',
                Name: 'Nome',
                Message: 'Mensagem',
                Send: 'Enviar',
                MessageSentSuccess: "Mensagem enviada com sucesso!",
                MessageSentFailure: "Erro ao enviar a mensagem. Tente novamente.",
                PrivacyPolicy: 'Política de Privacidade',
                TermsOfUse: 'Termos de Uso',
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
                ProjectsButton: 'Voir le projet',
                cardtitle1: 'Système de gestion de bibliothèque',
                Bot: 'Copain de tech - notre génie technologique personnel',
                AskPlaceholder: "Demandez-moi n'importe quoi sur la technologie... par exemple, Qu'est-ce que React?",
                BotButton: 'Allez-y, demandez, mais soyez sage, vous n\'avez que quelques jetons',
                Contact: 'Contact',
                Name: 'Nom',
                Message: 'Message',
                Send: 'Envoyer',
                MessageSentSuccess: "Message envoyé avec succès!",
                MessageSentFailure: "Erreur lors de l'envoi du message. Réessayer.",
                PrivacyPolicy: 'Politique de Confidentialité',
                TermsOfUse: 'Conditions d\'Utilisation',
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
                ProjectsButton: 'Ver Proyecto',
                Bot: 'TechBuddy - Nuestro genio tecnológico personal',
                AskPlaceholder: "Pregúntame cualquier cosa sobre tecnología... por ejemplo, ¿Qué es React?",
                BotButton: 'Vamos, pregunta, pero sé sabio, solo tienes algunos tokens disponibles!',
                Contact: 'Contacto',
                Name: 'Nombre',
                Message: 'Mensaje',
                Send: 'Enviar',
                MessageSentSuccess: "¡Mensaje enviado con éxito!",
                MessageSentFailure: "Error al enviar el mensaje. Inténtalo de nuevo.",
                PrivacyPolicy: 'Política de Privacidad',
                TermsOfUse: 'Términos de Uso',
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