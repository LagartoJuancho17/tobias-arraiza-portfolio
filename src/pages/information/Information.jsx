import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import { useLanguage } from "../../context/LanguageContext";

import "./Information.css";

import Transition from "../../components/transition/Transition";

import {
  services,
  tecnologiasWeb,
  tecnologiasExtra,
  education,
  experience,
} from "./info";

const Information = () => {
  const lenis = useLenis(({ scroll }) => { });
  const { t, language } = useLanguage();

  return (
    <ReactLenis root>
      <div className="information">
        <div className="container">
          <h1>
            {t.information.bio}
          </h1>
          <div className="info-services">
            <div className="col">
              <div className="sub-col">
                <ul>
                  {services.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="sub-col">
              </div>
            </div>
            <div className="col">
              <p>
                {t.information.cta}
              </p>
              <div className="contact-link">
                <Link to="/">&#x2192; {t.information.connect}</Link>
              </div>
            </div>
          </div>
          
          <div className="info-resume">
            <div className="col resume-section">
              <p className="resume-heading">{language === 'es' ? 'Educación' : 'Education'}</p>
              <div className="divider"></div>
              <div className="resume-list">
                {education.map((item) => (
                  <div key={item.id} className="resume-item">
                    <h3>{item.title[language]}</h3>
                    <p className="resume-role">{item.role[language]}</p>
                    <p className="resume-date">{item.date[language]}</p>
                    <ul>
                      {item.details.map((detail, index) => (
                        <li key={index}>&#x2192; {detail[language]}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col resume-section">
              <p className="resume-heading">{language === 'es' ? 'Experiencia' : 'Experience'}</p>
              <div className="divider"></div>
              <div className="resume-list">
                {experience.map((item) => (
                  <div key={item.id} className="resume-item">
                    <h3>{item.title[language]}</h3>
                    <p className="resume-role">{item.role[language]}</p>
                    <p className="resume-date">{item.date[language]}</p>
                    <ul>
                      {item.details.map((detail, index) => (
                        <li key={index}>&#x2192; {detail[language]}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="info-content">
            <div className="col">
              <div className="tecnologias">
                <p>{t.information.webTech}</p>
                <div className="divider"></div>
                <ul>
                  {tecnologiasWeb.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="tecnologiasExtra">
                <p>{t.information.extraTech}</p>
                <div className="divider"></div>
                <ul>
                  {tecnologiasExtra.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="info-content-2">
            <div className="col">
              <p>Exhibitions, Talks, and Workshops</p>
              <div className="divider"></div>
              <ul>
                {exhibitions.map((item) => (
                  <li key={item.id}>&#x2192; {item.text}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <p>Press</p>
              <div className="divider"></div>
              <ul>
                {press.map((item) => (
                  <li key={item.id}>&#x2192; {item.text}</li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Information);
