import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

import clickShopImg from "../../assets/Projects/clickshop.png";
import portfolioImg from "../../assets/Projects/portfolio.png";
import movieAppImg from "../../assets/Projects/movie.png";
import DarDigitalImg from "../../assets/Projects/dardigital.png";
import BCH from "../../assets/Projects/bch.png";
import CerRental from "../../assets/Projects/CerRental.png";
import ElectroTurbo from "../../assets/Projects/électrisité.png";
import ecom from "../../assets/Projects/ecom.jpeg";

function Projects() {
  const projects = [
  
        {
      title: "ADM Car - Location de Voitures",
      desc: "A car rental platform that allows users to browse, book, and manage car rentals online. Includes a login system and admin dashboard for managing bookings.",
      img: CerRental, // ضع رابط الصورة هنا إذا عندك
      tags: ["Vue.js", "Vite", "CSS3", "Firebase"],
      github: "https://github.com/Hamza8119/ADM-CAR-LE-CATION-DE-VOITURE",
      demo: "https://admcar.netlify.app/login",
    },
        {
      title: "ElectroTurbo",
      desc: "An electricity services platform providing solutions and consultations online. Users can explore services and contact providers directly.",
      img: ElectroTurbo, // ضع رابط الصورة هنا
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Hamza8119/electricit-",
      demo: "https://electroturbo.netlify.app",
    },
       {
      title: "E-commerce Project",
      desc: "An online store project showcasing product listings, cart functionality, and checkout process. Built to demonstrate full-stack e-commerce capabilities.",
      img: ecom, // ضع رابط الصورة هنا
      tags: ["Vue.js", "CSS3", "API", "Vite"],
      github: "https://github.com/Hamza8119/ecommerce",
      demo: "",
    },
        {
      title: "BCH - E-commerce",
      desc: "Another e-commerce platform demonstrating advanced product management and user experience design.",
      img: BCH, // ضع رابط الصورة هنا
      tags: ["Vue.js", "CSS3", "API"],
      github: "https://github.com/chaimabidqui/BCH",
      demo: "",
    },
        {
      title: "Dar Digital Agency - Centre Project",
      desc: "A showcase website for Dar Digital Agency, highlighting services, team, and portfolio. Built to demonstrate modern web design practices.",
      img: DarDigitalImg, // ضع رابط الصورة هنا
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/DAR-DIGITAL/DarDigitalAgency",
      demo: "",
    },
    {
      title: "My Portfolio",
      desc: "My personal professional portfolio website to showcase my skills, experience, and projects. Designed with a clean, responsive UI using the latest web technologies.",
      img: portfolioImg,
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/IlyassLho/portfolio",
      demo: "https://ilyaslhouari.netlify.app/",
    },

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2 className="section-title">
          My Recent <span className="text-primary">Works</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">

              {/* Image Area */}
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-overlay">
                    <Github size={20} /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-overlay">
                      <ExternalLink size={20} /> Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* (Mobile mostly) */}
                <div className="project-buttons">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-github">
                    <Github size={18} /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-demo">
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;