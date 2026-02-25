import { Link, useParams } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useLanguage } from "../../context/LanguageContext";

import "./SampleProject.css";

import Transition from "../../components/transition/Transition";

import { projectsData } from "../../data/projects";

const SampleProject = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();

  // Fallback to 'uttil' if no ID is provided or if id is not found (handling /sample-project route for backward compatibility)
  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const currentProjectIndex = projectIndex !== -1 ? projectIndex : 0;
  const project = projectsData[currentProjectIndex];

  const nextProjectIndex = (currentProjectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  if (!project) return <div>Project not found</div>;

  return (
    <ReactLenis root>
      <div className="project">
        <div className="container">
          <div className="project-hero-img">
            {project.images.heroVideo ? (
              <video
                src={project.images.heroVideo}
                poster={project.images.hero}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={project.images.hero} alt="Project Hero Img" />
            )}
          </div>

          <div className="project-info">
            <div className="col">
              <div className="project-client">
                <p>{t.sampleProject?.client || "Client"} &#x2192; {project.client}</p>
              </div>
              <div className="project-studio">
                <p>{t.sampleProject?.studio || "Studio"} &#x2192; {project.studio}</p>
              </div>
            </div>
            <div className="col">
              <div className="project-year">
                <p>{t.sampleProject?.year || "Year"} &#x2192; {project.year}</p>
              </div>
            </div>
          </div>

          <div className="project-copy">
            <div className="col">
              <h1>
                {project.title[language]}
              </h1>
            </div>

            <div className="col">
              <p>
                {project.description1[language]}
              </p>

              <div className="project-sub-info">
                <div className="sub-col">
                  <span>{project.subInfo.branding[language]}</span>
                  <span>{project.subInfo.uiux[language]}</span>
                  <span>{project.subInfo.development[language]}</span>
                </div>

                <div className="sub-col">
                  <span>&#x2192; {t.sampleProject?.fullInfo || "Full Information"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-hero-img-2">
            {typeof project.images.hero2 === 'string' && project.images.hero2.endsWith('.mp4') ? (
               <video
                src={project.images.hero2}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
                <img src={project.images.hero2} alt="" />
            )}
          </div>

          <div className="project-copy">
            <div className="col"></div>

            <div className="col">
              <p>
                {project.description2[language]}
              </p>
            </div>
          </div>

          <div className="project-imgs">
            <div className="img">
              <img src={project.images.img1} alt="" />
            </div>

            <div className="img">
              <img src={project.images.img4} alt="" />
            </div>
          </div>
          <div className="project-imgs">
            <div className="img">
              <img src={project.images.img3} alt="" />
            </div>

            <div className="img">
              <img src={project.images.img2} alt="" />
            </div>
          </div>

          <div className="project-hero-img-3">
            <img src={project.images.hero3} alt="" />
          </div>

          <div className="next-project-cta">
            <Link to={`/project/${nextProject.id}`}>
              <h1>{t.sampleProject?.nextProject || "Next Project"}</h1>
            </Link>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(SampleProject);
