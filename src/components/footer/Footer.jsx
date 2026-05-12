import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="mailto:tobiasarraiza17@gmail.com">
              &#x2192; tobiasarraiza17@gmail.com
            </Link>
          </div>
        </div>
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="https://www.instagram.com/tobiasarraiza_/" target="_blank">
              &#x2192; Instagram
            </Link>
          </div>
          <div className="footer-link">
            <Link to="https://www.behance.net/tobiasarraiza17" target="_blank">
              &#x2192; Behance
            </Link>
          </div>
          <div className="footer-link">
            <Link to="https://www.linkedin.com/in/tobias-arraiza/" target="_blank">
              &#x2192; LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-link">
          <p>&copy; Tobias Arraiza</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
