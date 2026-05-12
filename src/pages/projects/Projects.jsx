import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./Projects.css";

import Transition from "../../components/transition/Transition";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useLanguage } from "../../context/LanguageContext";
import { projectsData } from "../../data/projects";


const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [activeYear, setActiveYear] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const containerRef = useRef(null);
  const lenis = useLenis(({ scroll }) => { });
  const { language } = useLanguage();

  const years = ["All", ...new Set(projectsData.map(p => p.year))].sort((a, b) => b - a);
  const categories = ["All", ...new Set(projectsData.map(p => p.category))];

  useEffect(() => {
    let filtered = [...projectsData].sort((a, b) => parseInt(b.year) - parseInt(a.year));
    if (activeYear !== "All") {
      filtered = filtered.filter(p => p.year === activeYear);
    }
    if (activeCategory !== "All") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    const initialSet = Array(30)
      .fill()
      .flatMap((_, i) =>
        filtered.map((project, j) => ({
          ...project,
          displayName: project.id === 'uttil' ? project.client : (project.title[language] || project.title['en']), 
          displayCategory: project.category,
          img: project.thumbnail,
          uniqueId: i * filtered.length + j,
        }))
      );
    setProjectList(initialSet);
    
    // Reset scroll when filter changes
    if (lenis) {
        lenis.scrollTo(0, { immediate: true });
    }
  }, [language, activeYear, activeCategory, lenis]);


  useEffect(() => {
    if (projectList.length > 0) {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onLeave: (self) => {
            self.scroll(1);
            ScrollTrigger.update();
          },
          onLeaveBack: (self) => {
            self.scroll(ScrollTrigger.maxScroll(window) - 1);
            ScrollTrigger.update();
          },
        });

        const projectItems = document.querySelectorAll(".project-item");
        projectItems.forEach((item) => {
          gsap.to(item, {
            opacity: 1,
            repeat: 1,
            yoyo: true,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "center bottom",
              end: "center top",
              scrub: true,
            },
          });
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [projectList]);

  return (
    <ReactLenis root>
      <div
        className="projects"
        ref={containerRef}
      >
        <button 
          className="toggle-filters-btn" 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <div className="filter-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3.5H13M3 7H11M5.5 10.5H8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>{language === 'es' ? 'Filtros' : 'Filters'}</span>
          <div className={`arrow ${isFiltersOpen ? 'open' : ''}`}>&#x2193;</div>
        </button>

        <div className={`filters-wrapper ${isFiltersOpen ? 'open' : ''}`}>
          <div className="filters">
            <div className="filter-group">
              <span className="filter-label">{language === 'es' ? 'Año:' : 'Year:'}</span>
              {years.map(year => (
                <button 
                  key={year} 
                  className={`filter-btn ${activeYear === year ? 'active' : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year === "All" ? (language === 'es' ? 'Todos' : 'All') : year}
                </button>
              ))}
            </div>
            <div className="filter-group">
              <span className="filter-label">{language === 'es' ? 'Categoría:' : 'Category:'}</span>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "All" ? (language === 'es' ? 'Todos' : 'All') : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          {projectList.map((project) => (
            <div className="row" key={project.uniqueId}>
              <div className="project-item">
                <div className="project-img">
                  <Link to={`/project/${project.id}`}>
                    <div className="project-hover-overlay">
                      <span>{language === 'es' ? 'Ver Proyecto' : 'View Project'}</span>
                    </div>
                    <img src={project.img} alt="" />
                  </Link>
                </div>
                <div className="project-details">
                  <div className="project-info-left">
                    <p id="project-name"> &#x2192; {project.displayName}</p>
                    <p id="project-date">{project.year}</p>
                  </div>
                  <p id="project-category">{project.displayCategory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Projects);
