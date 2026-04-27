import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";


import portfolioImg from "../../assets/Projects/portfolio.png";

import DarDigitalImg from "../../assets/Projects/DarDigital.png";
import BCH from "../../assets/Projects/BCH.png";
import CerRental from "../../assets/Projects/CerRental.png";
import ElectroTurbo from "../../assets/Projects/électrisité.png";
import ecom from "../../assets/Projects/ecom.jpeg";
import hackathon from "../../assets/Projects/hackathon.png";
import figma from "../../assets/Projects/FIGMA1.png";
import portfolio2 from "../../assets/Projects/portfolio2.png";
import screnshotiphone from "../../assets/Projects/screnshotiphone.png";
import bgapp from "../../assets/Projects/bgapp.png";
import scipad from "../../assets/Projects/scipad.png";
import pro34 from "../../assets/Projects/pro34.png";
import ADM from "../../assets/Projects/ADM.png";
import logo3 from "../../assets/Projects/logo3.png";
import ISTA1 from "../../assets/Projects/ISTA1.png";
import FIGMA2 from "../../assets/Projects/FIGMA2.png";
import pro2 from "../../assets/Projects/pro2.png";
 const figmaProjects = [
    {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: figma,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/6qOf14wahp1XUcV9itDCxB/Background-remover--Community-?node-id=21-2&p=f&t=dDYMUaEy2VM3CnDw-0"
    },
        {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: portfolio2,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/6qOf14wahp1XUcV9itDCxB/Background-remover--Community-?node-id=139-10&p=f&t=dDYMUaEy2VM3CnDw-0"
    },
        {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: screnshotiphone,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/IypMqVNPEmV1wdhFYMc5RW/developpeur-informatique.ma?node-id=0-1&p=f&t=dDYMUaEy2VM3CnDw-0",
      demo : "https://play.google.com/apps/internaltest/4701593209203782579"

    },
        {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: bgapp,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/IypMqVNPEmV1wdhFYMc5RW/developpeur-informatique.ma?node-id=27-2&p=f&t=dDYMUaEy2VM3CnDw-0",
      demo : "https://play.google.com/apps/internaltest/4701593209203782579"

    },
    
        {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: scipad,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/IypMqVNPEmV1wdhFYMc5RW/developpeur-informatique.ma?node-id=7-19&p=f&t=dDYMUaEy2VM3CnDw-0",
      demo : "https://play.google.com/apps/internaltest/4701593209203782579"
    },
      {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: pro34,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/kpOuOn0TkQc2XVOleNM9eM/poste-instagram?node-id=11-2&p=f&t=dDYMUaEy2VM3CnDw-0"
    },
      {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: ADM,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/H1FcTamhgeLSubReKXGtcV/Ramadan-Kareem--Community-?node-id=0-1&p=f&t=dDYMUaEy2VM3CnDw-0"
    },
      {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: logo3,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/4ns5od1t3XwPZ786iRQ5FS/Untitled?node-id=0-1&p=f&t=dDYMUaEy2VM3CnDw-0"
    },
          {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: ISTA1,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/vzdk3p7ScKgjuKa0frGCpA/VERF_EXAM?node-id=0-1&p=f&t=dDYMUaEy2VM3CnDw-0"
    },
        {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: FIGMA2,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/nfCv5rRd47YZzGosrnlnoY/DECORATION-CODEVIN?t=dDYMUaEy2VM3CnDw-0"
    },
         {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: DarDigitalImg,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/cQFM360OK3oIliZoOndSUO/DAR-DIGITAL-AGENCY?node-id=0-1&p=f&t=BkbC1Cj8fzkA1fAb-0"
    },
      {
      title: "UX/UI Product Design Kit",
      desc: "A professional Figma dashboard and product design kit showcasing modern UI/UX practices, responsive layouts, auto-layout systems, and structured design components.",
      img: pro2,
      tags: ["Figma", "UX/UI", "Dashboard", "Product Design"],
      figma : "https://www.figma.com/design/cQFM360OK3oIliZoOndSUO/DAR-DIGITAL-AGENCY?node-id=598-2&p=f&t=BkbC1Cj8fzkA1fAb-0",
      
    },
  ];


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
      tags: ["Vue.js", "CSS3", "API" ,"Tailwind CSS","Laravel" ,"MySQL"],
      github: "https://github.com/chaimabidqui/BCH",
      demo: "",
    },
        {
      title: "Dar Digital Agency - Centre Project",
      desc: "A showcase website for Dar Digital Agency, highlighting services, team, and portfolio. Built to demonstrate modern web design practices.",
      img: DarDigitalImg, // ضع رابط الصورة هنا
      tags: ["Vue.js", "CSS", "JavaScript", "Responsive Design" ,"Tailwind CSS"],
      github: "https://github.com/DAR-DIGITAL/DarDigitalAgency",
      demo: "",
    },
    {
      title: "My Portfolio",
      desc: "My personal professional portfolio website to showcase my skills, experience, and projects. Designed with a clean, responsive UI using the latest web technologies.",
      img: portfolioImg,
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Hamza8119/portfolio",
      demo: "https://hamzaibourk2.netlify.app/",
    },
       {
      title: "Hackathon Project",
      desc: "A professional portfolio website designed to present my skills, experience, and projects. Developed during a hackathon, this project highlights my ability to work under pressure, think creatively, and deliver a clean, modern, and responsive user interface using the latest web technologies.",
      img: hackathon,
      tags: ["React.js", "Vite", "express.js", "Framer Motion", "sage","API", "Postgresql"],
      github: "https://github.com/AmineDah123/Hackathon",
      demo: "https://cmfp-hackathon.com/#tracks",
    },

  ];

 return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          My Recent <span className="text-primary">Works</span>
        </h2>

        <p className="projects-subtitle">
          Websites, dashboards, and UI/UX designs created with modern technologies and clean visual design.
        </p>

        <h3 className="projects-category-title">Websites</h3>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} className="project-img" />

                <div className="project-overlay">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-overlay">
                      <Github size={20} /> Code
                    </a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-overlay">
                      <ExternalLink size={20} /> Demo
                    </a>
                  )}
                </div>
              </div>

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

                <div className="project-buttons">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-github">
                      <Github size={18} /> GitHub
                    </a>
                  )}

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

        <h3 className="projects-category-title figma-title">Figma Designs</h3>

<div className="projects-grid">
  {figmaProjects.map((project, index) => (
    <div key={index} className="project-card figma-card">
      <div className="project-img-wrapper">
        <img src={project.img} alt={project.title} className="project-img" />

        <div className="project-overlay">
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              className="btn-overlay"
            >
              <ExternalLink size={20} /> Figma
            </a>
          )}

{project.demo && (
  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-overlay">
    <ExternalLink size={20} /> Demo
  </a>
)}
        </div>
      </div>

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

        <div className="project-buttons">
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              className="btn-demo"
            >
              <ExternalLink size={18} /> Figma
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