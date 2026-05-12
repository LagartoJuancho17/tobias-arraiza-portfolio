// Uttil Images
import uttilPortada from "../assets/projects/uttilportada.webp";
import uttilHero from "../assets/projects/uttilhero.webp";
import uttilHero2 from "../assets/projects/uttilhero2.webp";
import uttilHero3 from "../assets/projects/uttilhero3.webp";
import uttilImagen1 from "../assets/projects/uttilimagen1.webp";
import uttilImagen2 from "../assets/projects/uttilimagen2.webp";
import uttilImagen3 from "../assets/projects/uttilimagen3.webp";
import uttilImagen4 from "../assets/projects/uttilimagen4.webp";

// Nadar Images
import nadarPortada from "../assets/projects/nadarportada.webp";
import nadarHero from "../assets/projects/nadarhero.webp";
import nadarHero2 from "../assets/projects/nadarhero2.webp";
import nadarHero3 from "../assets/projects/nadarhero3.webp";
import nadarImagen1 from "../assets/projects/nadarimagen1.webp";
import nadarImagen2 from "../assets/projects/nadarimagen2.webp";
import nadarImagen3 from "../assets/projects/nadarimagen3.webp";
import nadarImagen4 from "../assets/projects/nadarimagen4.webp";

// Mapping Images & Videos
import mappingPortada from "../assets/projects/mappingportada.webp";
import mappingHero1 from "../assets/projects/mappinghero1.mov";
import mappingHero2 from "../assets/projects/mappinghero2.MOV";
import mappingHero3 from "../assets/projects/mappinghero3.MOV";
import mappingVideo1 from "../assets/projects/mappingvideo1.MOV";
import mappingVideo3 from "../assets/projects/mappingvideo3.MOV";
import mappingImagen1 from "../assets/projects/mappingimagen1.webp";
import mappingImagen2 from "../assets/projects/mappingimagen2.webp";

// Madres de Mayo Images & Videos
import madresdemayoPortada from "../assets/projects/madresdemayoportada.jpg";
import madresdemayoHero1 from "../assets/projects/madresdemayohero1.mp4";
import madresdemayoHero2 from "../assets/projects/madresdemayohero2.mp4";
import madresdemayoHero3 from "../assets/projects/madresdemayohero3.jpg";
import madresdemayoImagen1 from "../assets/projects/madresdemayoimagen1.jpg";
import madresdemayoImagen2 from "../assets/projects/madresdemayoimagen2.jpg";
import madresdemayoImagen3 from "../assets/projects/madresdemayoimagen3.jpg";
import madresdemayoImagen4 from "../assets/projects/madresdemayoimagen4.jpg";
import madresdemayoImagen5 from "../assets/projects/madresdemayoimagen5.jpg";

export const projectsData = [
  {
    id: "uttil",
    year: "2025",
    client: "Uttil",
    studio: "Creative Works",
    role: "Brand Identity & App Design",
    category: "UX/UI",
    title: {
      es: "Desarrollo de UI/UX para una app para Uttil",
      en: "UI/UX Development for an app for Uttil",
    },
    description1: {
      es: "UTTIL es una aplicación de alquiler de coches pensada para simplificar y agilizar todo el proceso de reserva. Desde la creación de su identidad visual —nombre, logo y sistema gráfico— hasta el diseño de la interfaz, el proyecto se enfocó en transmitir confianza, claridad y practicidad.",
      en: "UTTIL is a car rental app designed to simplify and streamline the entire reservation process. From creating its visual identity —name, logo, and graphic system— to the interface design, the project focused on conveying confidence, clarity, and practicality.",
    },
    description2: {
      es: "La app permite buscar vehículos según ubicación, fechas y tipo de auto, comparar opciones, ver disponibilidad en tiempo real y gestionar reservas de manera intuitiva. Su diseño prioriza una navegación simple y directa, reduciendo pasos innecesarios y mejorando la experiencia del usuario. UTTIL combina funcionalidad y coherencia visual para transformar el alquiler de coches en un proceso rápido, transparente y accesible.",
      en: "The app allows users to search for vehicles by location, dates, and car type, compare options, view real-time availability, and manage reservations intuitively. Its design prioritizes simple and direct navigation, reducing unnecessary steps and enhancing the user experience. UTTIL combines functionality and visual coherence to transform car rental into a quick, transparent, and accessible process.",
    },
    subInfo: {
      branding: { es: "Branding", en: "Branding" },
      uiux: { es: "Diseño UI/UX", en: "UI/UX Design" },
      development: { es: "Desarrollo", en: "Development" },
    },
    images: {
      hero: uttilHero,
      hero2: uttilHero2,
      hero3: uttilHero3,
      img1: uttilImagen1,
      img2: uttilImagen2,
      img3: uttilImagen3,
      img4: uttilImagen4,
    },
    thumbnail: uttilPortada,
  },
  {
    id: "nadar",
    year: "2026",
    client: "Nadar",
    studio: "Tobias Arraiza",
    role: "Ux/Ui Design",
    category: "UX/UI",
    title: {
      es: "Nadar - App Design",
      en: "Nadar - App Design",
    },
    description1: {
      es: "Creación de una app para nadadores, que ayude a la toma de tiempos y mejora con gráficos y metricas integradas, para profesionalizar la natación argentina.",
      en: "Creation of an app for swimmers, which helps in time management and improvement with integrated graphics and metrics, to professionalize Argentine swimming.",
    },
    description2: {
        es: "Integra funciones como registro de entrenamientos, seguimiento de tiempos y búsqueda de competencias, priorizando siempre la claridad, la simplicidad y una experiencia intuitiva. Es una propuesta donde identidad y producto funcionan de manera coherente y estratégica.",
        en: "Integrates functions such as training registration, time tracking and competition search, always prioritizing clarity, simplicity and intuitive experience. It is a proposal where identity and product work coherently and strategically.",
    },
    subInfo: {
        branding: { es: "Branding", en: "Branding" },
        uiux: { es: "Arte Conceptual", en: "Concept Art" },
        development: { es: "Diseño", en: "Design" },
        appDesign: { es: "App Design", en: "App Design" },
    },
    images: {
        hero: nadarHero,
        hero2: nadarHero2,
        hero3: nadarHero3,
        img1: nadarImagen1,
        img2: nadarImagen2,
        img3: nadarImagen3,
        img4: nadarImagen4,
    },
    thumbnail: nadarPortada,
  },
  {
    id: "mapping",
    year: "2025",
    client: "UMAI",
    studio: "Tobias Arraiza, Lola Mazza, Victoria Villalba, Camila Zalcman, Mariano Makedonsky",
    role: "Projection Mapping",
    category: "Mapping",
    title: {
      es: "UMAI - Mapping",
      en: "UMAI - Mapping",
    },
    description1: {
      es: "Un proyecto de mapping que explora la intersección entre arte digital, gamificación e interacción expandida, proponiendo una experiencia inmersiva donde el espacio físico se transforma en una interfaz de juego. A través de proyecciones dinámicas adaptadas a la arquitectura, el entorno deja de ser un soporte pasivo para convertirse en un sistema reactivo que responde a la acción del usuario.",
      en: "A mapping project that explores the intersection between digital art, gamification and expanded interaction, proposing an immersive experience where the physical space transforms into a game interface. Through dynamic projections adapted to the architecture, the environment ceases to be a passive support to become a reactive system that responds to user action.",
    },
    description2: {
        es: "Uno de los aspectos más innovadores fue la incorporación de inputs no convencionales: sensores de movimiento, variaciones de luz, sonido ambiente o presión física reemplazaron al joystick o teclado tradicional. Esto permitió ampliar la noción de control y repensar la relación entre usuario y sistema, priorizando una experiencia más intuitiva, física y performática.\n\n El resultado fue una instalación interactiva que combina tecnología, diseño y experimentación, transformando el mapping en una plataforma lúdica donde la arquitectura, la proyección y el cuerpo dialogan en un mismo ecosistema digital.",
        en: "One of the most innovative aspects was the incorporation of unconventional inputs: motion sensors, light variations, ambient sound or physical pressure replaced the traditional joystick or keyboard. This allowed us to expand the notion of control and rethink the relationship between user and system, prioritizing a more intuitive, physical and performative experience.\n\n The result was an interactive installation that combines technology, design and experimentation, transforming mapping into a playful platform where architecture, projection and the body dialogue within the same digital ecosystem.",
    },
    subInfo: {
        branding: { es: "Mapping", en: "Mapping" },
        uiux: { es: "Instalación", en: "Installation" },
        development: { es: "Visuales", en: "Visuals" },
    },
    images: {
        hero: mappingHero1,
        hero2: mappingHero2,
        hero3: mappingHero3,
        img1: mappingImagen1,
        img2: mappingVideo1,
        img3: mappingVideo3,
        img4: mappingImagen2,
    },
    thumbnail: mappingPortada,
  },
  {
    id: "madres-de-mayo",
    year: "2026",
    client: "Madres de Plaza de Mayo | CGT",
    studio: "Tobias Arraiza, Lola Mazza, Mariano Makedonsky, Antonella Serrese",
    role: "Video Editing",
    category: "Video",
    title: {
      es: "Madres de Mayo",
      en: "Madres de Mayo",
    },
    description1: {
      es: "Documental sobre las Madres de Plaza de Mayo, combinando material de archivo histórico con testimonios de las Madres y su lucha inclaudicable.",
      en: "Documentary about the Mothers of Plaza de Mayo, combining historical archive material with testimonies of the Mothers and their relentless struggle.",
    },
    description2: {
        es: "El proyecto se centró en preservar y difundir la memoria histórica a través de un formato audiovisual. Se trabajó intensamente en la edición de videos para asegurar la mejor calidad posible del material documental, resaltando la emotividad y la fuerza de los testimonios.",
        en: "The project focused on preserving and disseminating historical memory through an audiovisual format. We worked intensively on video editing to ensure the best possible quality of the documentary material, highlighting the emotionality and strength of the testimonies.",
    },
    subInfo: {
        branding: { es: "Video", en: "Video" },
        uiux: { es: "Edición", en: "Editing" },
        development: { es: "Documental", en: "Documentary" },
    },
    images: {
        hero: madresdemayoHero1,
        hero2: madresdemayoHero2,
        hero3: madresdemayoHero3,
        img1: madresdemayoImagen1,
        img2: madresdemayoImagen2,
        img3: madresdemayoImagen3,
        img4: madresdemayoImagen4,
        img5: madresdemayoImagen5,
    },
    thumbnail: madresdemayoPortada,
  }
];
