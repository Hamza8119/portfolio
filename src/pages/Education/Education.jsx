import React from "react";
import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import "./Education.css";

function Education() {
  const educationData = [
    {
      year: "2026 - Now",
      title: "Computer science",
      school: "1337 Coding School (42 NETWORK) - Khouribga",
    },
    {
      year: "2024 - 2026",
      title: "Digital Development (DTS)",
      school: "Higher Institute of Applied Technology (OFPPT/ISTA) - Agadir",
    },
    {
      year: "2024",
      title: "BACCALAURÉAT SCIENCES PHYSIQUES",
      school: "Mohamed Derfoufi High School - Agadir",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        
        <h2 className="section-title">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              {/* The point on the side */}
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