import React from "react";
import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      year: "2025",
      title: "Full Stack Web Development Training (1 Month)",
      school: "Dar Digital",
      description:
        "Built responsive web applications using HTML, tailwind.CSS, JavaScript, Vue.js, and backend fundamentals. Focused on UI/UX, API integration, and clean code practices."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <h2 className="section-title">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">

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

                {/* Description */}
                <p className="timeline-description">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
