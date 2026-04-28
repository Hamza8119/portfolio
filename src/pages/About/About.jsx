import Tilt from 'react-parallax-tilt';
import { useLang } from "../../context/LanguageContext";
import "./About.css";

function About() {
  const { t } = useLang();

  return (
    <section id="about" className="about-section">
      <div className="about-content">

        {/* LEFT SIDE */}
        <div className="about-image-wrapper" data-aos="fade-right">
          <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} scale={1.1} transitionSpeed={450} className="tilt-box">
            <div className="img-card">
              <img src="/hamza.jpeg" alt="Hamza Ibourk" className="about-img" />
            </div>
          </Tilt>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-text" data-aos="fade-left">
          <h2 className="section-title">
            {t.aboutTitle} <span className="text-primary">{t.aboutTitleHighlight}</span>
          </h2>
          <p className="intro-text" style={{ fontSize: "20px", lineHeight: "1.8" }}>
            {t.aboutText}
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
