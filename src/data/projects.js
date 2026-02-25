import ProjectHeroImg from "../assets/sample-projects/sample-project-hero-2.png";
import ProjectHeroImg2 from "../assets/sample-projects/sample-project-hero-3.png";
import ProjectHeroImg3 from "../assets/sample-projects/sample-project-hero.png";
import ProjectImg1 from "../assets/sample-projects/sample-project-1.png";
import ProjectImg2 from "../assets/sample-projects/sample-project-2.png";
import ProjectImg3 from "../assets/sample-projects/sample-project-3.png";
import ProjectImg5 from "../assets/sample-projects/sample-project-5.png";
import ProjectImg4 from "../assets/sample-projects/sample-project-4.png";

// Importing images from Projects.jsx to reuse them for the list view or new projects
import ListImg1 from "../assets/projects/project1.png";
import ListImg2 from "../assets/projects/project2.7.jpg";
import ListImg3 from "../assets/projects/project3.png"; 
import ListImg4 from "../assets/projects/project4.jpg";
import ListImg5 from "../assets/projects/project5.jpg";
import ListImg6 from "../assets/projects/project6.jpg";

// Project 2 Images
import Project2Img1 from "../assets/projects/project2.1.jpg";
import Project2Img2 from "../assets/projects/project2.2.jpg";
import Project2Img3 from "../assets/projects/project2.3.jpg";
import Project2Img4 from "../assets/projects/project2.4.jpg";
import Project2Img5 from "../assets/projects/project2.5.jpg";
import Project2Img6 from "../assets/projects/project2.6.jpg";
import Project2Video from "../assets/projects/project2video.mp4";


// Project 3 Images
import Project3Img1 from "../assets/projects/project3.1.png";
import Project3Img2 from "../assets/projects/project3.2.png";
import Project3Img3 from "../assets/projects/project3.3.png";
import Project3Img4 from "../assets/projects/project3.4.png";
import Project3Img5 from "../assets/projects/project3.5.png";
import Project3Img6 from "../assets/projects/project3.6.png";

export const projectsData = [
  {
    id: "uttil",
    year: "2025",
    client: "Uttil",
    studio: "Creative Works",
    role: "Brand Identity & App Design",
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
      hero: ProjectHeroImg,
      hero2: ProjectHeroImg2,
      hero3: ProjectHeroImg3,
      img1: ProjectImg1,
      img2: ProjectImg2,
      img3: ProjectImg5,
      img4: ProjectImg4,
    },
    thumbnail: ListImg1,
  },
  {
    id: "echoes-of-light",
    year: "2026",
    client: "Plus Bank",
    studio: "Tobias Arraiza",
    role: "UI/UX App Design",
    title: {
      es: "Plus Bank",
      en: "Plus Bank",
    },
    description1: {
      es: "Explorando la interacción entre la luz y la oscuridad en entornos urbanos futuristas. Este proyecto busca evocar emociones a través del uso del color y la composición dinámica.",
      en: "Exploring the interaction between light and darkness in futuristic urban environments. This project aims to evoke emotions through the use of color and dynamic composition.",
    },
    description2: {
      es: "Una serie de ilustraciones que narran historias silenciosas de la ciudad nocturna. Cada pieza es un fragmento de una realidad alternativa donde la tecnología y la naturaleza coexisten.",
      en: "A series of illustrations narrating silent stories of the night city. Each piece is a fragment of an alternate reality where technology and nature coexist.",
    },
    subInfo: {
      branding: { es: "Ilustración", en: "Illustration" },
      uiux: { es: "Arte Conceptual", en: "Concept Art" },
      development: { es: "Diseño", en: "Design" },
    },
    images: {
      hero: Project2Img1,
      hero2: Project2Video,
      hero3: Project2Img2,
      img1: Project2Img3,
      img2: Project2Img4,
      img3: Project2Img5,
      img4: Project2Img6,
    },
    thumbnail: ListImg2,
  },
  {
    id: "nadar",
    year: "2026",
    client: "Nadar",
    studio: "Tobias Arraiza",
    role: "Ux/Ui Design",
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
    },
    images: {
        hero: ProjectImg3,
        hero2: Project3Img5,
        hero3: Project3Img6,
        img1: Project3Img1,
        img2: Project3Img2,
        img3: Project3Img3,
        img4: Project3Img4,
    },
    thumbnail: ListImg3,
  },
  {
      id: "fragmented-reality",
      year: "2024",
      client: "NeoVision",
      studio: "Future Labs",
      role: "3D Animation",
      title: {
          es: "Realidad Fragmentada",
          en: "Fragmented Reality",
      },
      description1: {
          es: "Una experiencia inmersiva en 3D que cuestiona la percepción de la realidad.",
          en: "An immersive 3D experience questioning the perception of reality.",
      },
      description2: {
          es: "Animaciones complejas y texturas detalladas para crear un mundo surrealista.",
          en: "Complex animations and detailed textures to create a surreal world.",
      },
      subInfo: {
          branding: { es: "3D Art", en: "3D Art" },
          uiux: { es: "Motion", en: "Motion" },
          development: { es: "Animation", en: "Animation" },
      },
      images: {
          hero: ProjectImg4,
          hero2: ListImg5,
          hero3: ListImg6,
          img1: ListImg1,
          img2: ListImg2,
          img3: ListImg3,
          img4: ListImg4,
      },
      thumbnail: ListImg4,
  },
   {
      id: "luminous-flux",
      year: "2023",
      client: "Flux Inc",
      studio: "Lightwave",
      role: "Motion Graphics",
      title: {
          es: "Flujo Luminoso",
          en: "Luminous Flux",
      },
      description1: {
          es: "Gráficos en movimiento fluidos y energéticos para una marca de bebidas deportivas.",
          en: "Fluid and energetic motion graphics for a sports drink brand.",
      },
      description2: {
          es: "Uso de partículas y dinámicas de fluidos para visualizar la energía.",
          en: "Use of particles and fluid dynamics to visualize energy.",
      },
      subInfo: {
          branding: { es: "Motion", en: "Motion" },
          uiux: { es: "Visual Effects", en: "Visual Effects" },
          development: { es: "Commercial", en: "Commercial" },
      },
      images: {
          hero: ListImg5,
          hero2: ListImg6,
          hero3: ListImg1,
          img1: ListImg2,
          img2: ListImg3,
          img3: ListImg4,
          img4: ListImg5,
      },
      thumbnail: ListImg5,
  },
  {
      id: "reflections",
      year: "2022",
      client: "Mirror Co",
      studio: "Reflect Studios",
      role: "Interactive Media",
      title: {
          es: "Reflejos",
          en: "Reflections",
      },
      description1: {
          es: "Instalación interactiva que responde al movimiento del espectador.",
          en: "Interactive installation responding to viewer movement.",
      },
      description2: {
          es: "Exploración de la identidad digital a través de espejos interactivos.",
          en: "Exploration of digital identity through interactive mirrors.",
      },
      subInfo: {
          branding: { es: "Interactive", en: "Interactive" },
          uiux: { es: "Installation", en: "Installation" },
          development: { es: "Code", en: "Code" },
      },
      images: {
          hero: ListImg6,
          hero2: ListImg1,
          hero3: ListImg2,
          img1: ListImg3,
          img2: ListImg4,
          img3: ListImg5,
          img4: ListImg6,
      },
      thumbnail: ListImg6,
  }
];
