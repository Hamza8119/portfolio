import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext";
import "./Education.css";

function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="education-section">
      <div className="education-container">

        <h2 className="section-title" data-aos="fade-up">
          {t.educationTitle} <span className="text-primary">{t.educationTitleHighlight}</span>
        </h2>

        <div className="timeline">
          {t.educationData.map((item, index) => (
            <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">
                  <MdDateRange className="icon-small" /> {item.year}
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <h5 className="timeline-school">
                  <FaUniversity className="icon-small" /> {item.school}
                </h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
