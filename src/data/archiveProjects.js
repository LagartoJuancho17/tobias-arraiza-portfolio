import boldHero from "../assets/archive/bold/hero.webp";
import bold1 from "../assets/archive/bold/1.webp";
import bold2 from "../assets/archive/bold/2.webp";
import bold3 from "../assets/archive/bold/3.webp";
import bold4 from "../assets/archive/bold/4.webp";
import bold5 from "../assets/archive/bold/5.webp";

import pokedleHero from "../assets/archive/pokedle/hero.webp";
import pokedle1 from "../assets/archive/pokedle/1.webp";
import pokedle2 from "../assets/archive/pokedle/2.webp";
import pokedle3 from "../assets/archive/pokedle/3.webp";
import pokedle4 from "../assets/archive/pokedle/4.webp";

import vansVideo from "../assets/archive/vans/video.mp4";
import spotifyVideo from "../assets/archive/spotify-logo/video.mp4";
import macMillerVideo from "../assets/archive/mac-miller/video.mp4";

export const archiveProjects = [
  { 
    id: "bold",
    name: "Bold", 
    category: {
      es: "Diseño de Logo",
      en: "Logo Design"
    }, 
    description: {
      es: "Creación de una marca personal sólida para Marcos con un logotipo de tipografía audaz.",
      en: "Creating a strong personal brand for Marcos with a bold typography logo.webp"
    },
    heroImage: boldHero,
    galleryImages: [bold1, bold2, bold3, bold4, bold5],
    link: "",
    video: "" 
  },
  { 
    id: "pokedle",
    name: "Pokedle", 
    category: {
      es: "Juego Web",
      en: "Web Game"
    }, 
    description: {
      es: "Una Pokedex interactiva con filtros y tipos. Incluye un desafío diario donde debes adivinar el Pokémon secreto mediante sus parámetros y un quiz de preguntas para poner a prueba tus conocimientos.",
      en: "An interactive Pokedex with filters and types. Includes a daily challenge where you must guess the secret Pokémon through its parameters and a quiz to test your knowledge.webp"
    },
    heroImage: pokedleHero,
    galleryImages: [pokedle1, pokedle2, pokedle3, pokedle4],
    link: "https://pokedlee.vercel.app/",
    video: "" 
  },
  {
    id: "vans",
    name: "Vans",
    category: {
      es: "Video",
      en: "Video"
    },
    description: {
      es: "Un video promocional dinámico para Vans, centrado en la cultura urbana y los deportes de acción.",
      en: "A dynamic promotional video for Vans, focusing on urban culture and action sports.webp"
    },
    heroImage: "",
    galleryImages: [],
    link: "https://vans.com",
    video: vansVideo,
    previewVideo: vansVideo,
  },
  {
    id: "spotify-logo",
    name: "Spotify Logo",
    category: {
      es: "Video",
      en: "Video"
    },
    description: {
      es: "Una exploración de logotipo animado para Spotify.",
      en: "An animated logo exploration for Spotify.webp"
    },
    heroImage: "",
    galleryImages: [],
    link: "https://spotify.com",
    video: spotifyVideo,
    previewVideo: spotifyVideo,
  },
  {
    id: "mac-miller",
    name: "Mac Miller",
    category: {
      es: "Video",
      en: "Video"
    },
    description: {
      es: "Un tributo y exploración visual para Mac Miller.",
      en: "A tribute and visual exploration for Mac Miller.webp"
    },
    heroImage: "",
    galleryImages: [],
    link: "",
    video: macMillerVideo,
    previewVideo: macMillerVideo,
  },
];
