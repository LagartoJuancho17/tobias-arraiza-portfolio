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
  const containerRef = useRef(null);
  const lenis = useLenis(({ scroll }) => { });
  const { language } = useLanguage();

  useEffect(() => {
    const initialSet = Array(30)
      .fill()
      .flatMap((_, i) =>
        projectsData.map((project, j) => ({
          ...project,
          // Use client name effectively as the short name, or fall back to title if needed.
          // In the original code, "name" was used.
          displayName: project.id === 'uttil' ? project.client : (project.title[language] || project.title['en']), 
          displayCategory: project.role,
          img: project.thumbnail,
          uniqueId: i * projectsData.length + j,
        }))
      );
    setProjectList(initialSet);
  }, [language]);


  useEffect(() => {
    if (containerRef.current && projectList.length > 0) {
      ScrollTrigger.create({
        scroller: containerRef.current,
        start: 0,
        end: "max",
        onLeave: (self) => {
          self.scroll(1);
          ScrollTrigger.update();
        },
        onLeaveBack: (self) => {
          self.scroll(ScrollTrigger.maxScroll(containerRef.current) - 1);
          ScrollTrigger.update();
        },
      });

      const projectItems =
        containerRef.current.querySelectorAll(".project-item");
      projectItems.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          repeat: 1,
          yoyo: true,
          ease: "none",
          scrollTrigger: {
            scroller: containerRef.current,
            trigger: item,
            start: "center bottom",
            end: "center top",
            scrub: true,
          },
        });
      });
    }
  }, [projectList]);

  return (
    <ReactLenis root>
      <div
        className="projects"
        ref={containerRef}
        style={{
          height: "100vh",
          //  overflowY: "auto"
          // to enable infinite scrolling, uncomment `overflowY: "auto"` and remove the <ReactLenis root> component from root
        }}
      >
        <div className="container">
          {projectList.map((project) => (
            <div className="row" key={project.uniqueId}>
              <div className="project-item">
                <div className="project-img">
                  <Link to={`/project/${project.id}`}>
                    <img src={project.img} alt="" />
                  </Link>
                </div>
                <div className="project-details">
                  <p id="project-name"> &#x2192; {project.displayName}</p>
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
