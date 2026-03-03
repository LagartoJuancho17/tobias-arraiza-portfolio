import { useEffect, useState, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useLanguage } from "../../context/LanguageContext";

import "./Archive.css";

import Transition from "../../components/transition/Transition";
import Preview from "../../components/preview/Preview";
import tickSfx from "../../assets/sfx/tick.wav";
import { archiveProjects } from "../../data/archiveProjects";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Archive = () => {
  const { t, language } = useLanguage();
  const [archiveList, setArchiveList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedArchive, setSelectedArchive] = useState(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const containerRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (selectedArchive) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    }
    
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    };
  }, [selectedArchive, lenis]);

  useEffect(() => {
    const initialSet = Array(120)
      .fill()
      .flatMap((_, i) =>
        archiveProjects.map((archive, j) => ({
          ...archive,
          name: `${archive.name}`,
          id: i * archiveProjects.length + j,
          originalIndex: j,
        }))
      );
    setArchiveList(initialSet);
  }, []);

  useEffect(() => {
    // Scrolling behavior has been replaced with hover
  }, []);

  useEffect(() => {
    if (containerRef.current && archiveList.length > 0) {
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

      const archiveItems =
        containerRef.current.querySelectorAll(".archive-item");
      archiveItems.forEach((item) => {
        gsap.to(item, {
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
  }, [archiveList]);

  return (
    <ReactLenis root>
      <div
        className="archive"
        ref={containerRef}
        style={{
          height: "100vh",
          top: "-25em",
        }}
      >
        <div className="container">
          <div className="overlay"></div>

          <Preview project={archiveProjects[activeIndex]} />

          {archiveList.map((archive) => (
            <div className="row" key={archive.id}>
              <div 
                className="archive-item" 
                onMouseEnter={() => {
                  if (archive.originalIndex !== activeIndex) {
                    const tickSound = new Audio(tickSfx);
                    tickSound.play().catch(e => console.log(e));
                    setActiveIndex(archive.originalIndex);
                  }
                }}
                onClick={() => setSelectedArchive(archive)}
                style={{ cursor: "pointer" }}
              >
                <div className={`archive-details ${archive.originalIndex === activeIndex ? "active" : ""}`}>
                  <h1 id="archive-name">{archive.name}</h1>
                  <p id="archive-category">{archive.category[language] || archive.category}</p>
                </div>
              </div>
            </div>
          ))}

          {selectedArchive && (
            <div className="archive-modal-overlay" onClick={() => setSelectedArchive(null)}>
              <div 
                className="archive-modal-content" 
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent="true"
              >
                <button className="archive-modal-close" onClick={() => setSelectedArchive(null)}>✕</button>
                <h2 className="archive-modal-title">{selectedArchive.name}</h2>
                <p className="archive-modal-category">{selectedArchive.category[language] || selectedArchive.category}</p>
                
                <div className="archive-modal-media">
                  {selectedArchive.video && (
                    <div className="archive-modal-video-container">
                      <video 
                        src={selectedArchive.video} 
                        autoPlay 
                        loop 
                        muted={isVideoMuted}
                        playsInline 
                        className="archive-modal-video" 
                      />
                      <button 
                        className="mute-toggle-btn" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsVideoMuted(!isVideoMuted);
                        }}
                      >
                        {isVideoMuted ? "🔇" : "🔊"}
                      </button>
                    </div>
                  )}
                  {selectedArchive.galleryImages && selectedArchive.galleryImages.length > 0 && (
                    <>
                      <div className="grid-2">
                        {selectedArchive.galleryImages.slice(0, 2).map((img, i) => (
                          <img key={`archive-img-2-${i}`} src={img} alt={`Project image 2col ${i}`} className="archive-modal-image" />
                        ))}
                      </div>
                      {selectedArchive.galleryImages.length > 2 && (
                        <div className="grid-3">
                          {selectedArchive.galleryImages.slice(2, 5).map((img, i) => (
                            <img key={`archive-img-3-${i}`} src={img} alt={`Project image 3col ${i}`} className="archive-modal-image" />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>

                <p className="archive-modal-description">{selectedArchive.description[language] || selectedArchive.description}</p>
                
                {selectedArchive.link && (
                  <a href={selectedArchive.link} target="_blank" rel="noopener noreferrer" className="archive-modal-link">
                    {language === "es" ? "Visitar Proyecto ↗" : "Visit Project ↗"}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Archive);
