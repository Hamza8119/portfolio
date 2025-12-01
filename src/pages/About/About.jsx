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
              <img src="/lilyass.jpg" alt="Ilyas Lhouari" className="about-img" />
            </div>
          </Tilt>
        </div>

        {/* RIGHT SIDE: */}
        <div className="about-text">
          <h2 className="section-title">
            Know Who <span className="text-primary">I Am</span>
          </h2>

          <p className="intro-text">
            I'm <span className="text-primary">Ilyas</span>, a resilient Junior Full Stack Developer and recent <strong>OFPPT (DTS)</strong> graduate, with strong expertise in backend development.
            As a proud member of <strong>1337 Coding School (42 Network)</strong>, I combine academic rigor with an intensive, problem-solving mindset. Proven to adapt and collaborate in high-pressure environments, I am driven by algorithmic thinking and a passion for exploring cutting-edge technologies to deliver impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;