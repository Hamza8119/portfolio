import React from "react";
import Tilt from 'react-parallax-tilt';
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">

        {/* LEFT SIDE: */}
        <div className="about-image-wrapper">
          <Tilt tiltMaxAngleX={35} tiltMaxAngleY={35} scale={1.1} transitionSpeed={450} className="tilt-box">
            <div className="img-card">
              <img src="/hamza.jpeg" alt="Hamza Ibourk" className="about-img" />
            </div>
          </Tilt>
        </div>

        {/* RIGHT SIDE: */}
        <div className="about-text">
          <h2 className="section-title">
            Know Who <span className="text-primary">I Am</span>
          </h2>

          <p className="intro-text">
            I'm <span className="text-primary">Hamza</span>, a motivated Junior Full Stack Developer with a diverse and hands-on learning journey.
            I completed a <strong>3-month Front-End training</strong> at <strong>Big Academy</strong>, followed by a <strong>6-month Full Stack Developer program</strong> at <strong>Dar Digital</strong>.
            I also trained at <strong>Orange Digital Center</strong> in <strong>Java, Figma, and Databases</strong>.
            Currently, I am studying <strong>Digital Development</strong> at <strong>OFPPT</strong>, and I have completed <strong>one year at university</strong> in <strong>Accounting, Finance, and Taxation</strong>.
            In parallel, I studied <strong>English for 6 months</strong>.
            This multidisciplinary background allows me to blend technical development skills with analytical and business-oriented thinking to build efficient and impactful digital solutions.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;