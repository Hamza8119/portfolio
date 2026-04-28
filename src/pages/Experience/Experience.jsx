import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext";
import "./Experience.css";

function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <h2 className="section-title" data-aos="fade-up">
          {t.experienceTitle} <span className="text-primary">{t.experienceTitleHighlight}</span>
        </h2>

        <div className="timeline">
          {t.experienceData.map((item, index) => (
            <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">
                  <MdDateRange className="icon-small" />
                  <span>{item.year}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <h5 className="timeline-school">
                  <FaUniversity className="icon-small" />
                  <span>{item.school}</span>
                </h5>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
