import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

import clickShopImg from "../../assets/Projects/clickshop.png";
import portfolioImg from "../../assets/Projects/portfolio.png";
import movieAppImg from "../../assets/Projects/movie.png";

function Projects() {
  const projects = [
    {
      title: "Click Shop",
      desc: "A specialized Cash on Delivery (COD) e-commerce platform built for the Moroccan market. It features a serverless architecture using Google Sheets for real-time order management and integrates advanced Facebook Pixel events for ad optimization.",
      img: clickShopImg,
      tags: ["React", "Vite", "Google Sheets API", "Facebook Pixel"],
      github: "https://github.com/IlyassLho/E-com-Store",
      demo: "https://click-shop.ma",
    },
    {
      title: "My Portfolio",
      desc: "My personal professional portfolio website to showcase my skills, experience, and projects. Designed with a clean, responsive UI using the latest web technologies.",
      img: portfolioImg,
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/IlyassLho/portfolio",
      demo: "https://ilyaslhouari.netlify.app/",
    },
    {
      title: "Ily Flicks - TMDB Client",
      desc: "An interactive movie discovery application that allows users to search for movies, view details, ratings, using the TMDB API.",
      img: movieAppImg,
      tags: ["React.js", "TMDB API", "Axios", "CSS3"],
      github: "https://github.com/IlyassLho/movie-app",
      demo: "",
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