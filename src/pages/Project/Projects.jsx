import { Github, ExternalLink } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
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

const projectImages = [CerRental, ElectroTurbo, ecom, BCH, DarDigitalImg, portfolioImg, hackathon];
const projectLinks = [
  { github: "https://github.com/Hamza8119/ADM-CAR-LE-CATION-DE-VOITURE", demo: "https://admcar.netlify.app/login" },
  { github: "https://github.com/Hamza8119/electricit-", demo: "https://electroturbo.netlify.app" },
  { github: "https://github.com/Hamza8119/ecommerce", demo: "" },
  { github: "https://github.com/chaimabidqui/BCH", demo: "" },
  { github: "https://github.com/DAR-DIGITAL/DarDigitalAgency", demo: "" },
  { github: "https://github.com/Hamza8119/portfolio", demo: "https://hamzaibourk2.netlify.app/" },
  { github: "https://github.com/AmineDah123/Hackathon", demo: "https://cmfp-hackathon.com/#tracks" },
];
const projectTags = [
  ["Vue.js", "Vite", "CSS3", "Firebase"],
  ["HTML5", "CSS3", "JavaScript"],
  ["Vue.js", "CSS3", "API", "Vite"],
  ["Vue.js", "CSS3", "API", "Tailwind CSS", "Laravel", "MySQL"],
  ["Vue.js", "CSS", "JavaScript", "Responsive Design", "Tailwind CSS"],
  ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
  ["React.js", "Vite", "express.js", "Framer Motion", "sage", "API", "Postgresql"],
];

const figmaImages = [figma, portfolio2, screnshotiphone, bgapp, scipad, pro34, ADM, logo3, ISTA1, FIGMA2, DarDigitalImg, pro2];
const figmaLinks = [
  { figma: "https://www.figma.com/design/6qOf14wahp1XUcV9itDCxB/Background-remover--Community-?node-id=21-2", demo: "" },
  { figma: "https://www.figma.com/design/6qOf14wahp1XUcV9itDCxB/Background-remover--Community-?node-id=139-10", demo: "" },
  { figma: "https://www.figma.com/design/IypMqVNPEmV1wdhFYMc5RW/developpeur-informatique.ma?node-id=0-1", demo: "https://play.google.com/apps/internaltest/4701593209203782579" },
  { figma: "https://www.figma.com/design/IypMqVNPEmV1wdhFYMc5RW/developpeur-informatique.ma?node-id=27-2", demo: "https://play.google.com/apps/internaltest/4701593209203782579" },
  { figma: "https://www.figma.com/design/IypMqVNPEmV1wdhFYMc5RW/developpeur-informatique.ma?node-id=7-19", demo: "https://play.google.com/apps/internaltest/4701593209203782579" },
  { figma: "https://www.figma.com/design/kpOuOn0TkQc2XVOleNM9eM/poste-instagram?node-id=11-2", demo: "" },
  { figma: "https://www.figma.com/design/H1FcTamhgeLSubReKXGtcV/Ramadan-Kareem--Community-?node-id=0-1", demo: "" },
  { figma: "https://www.figma.com/design/4ns5od1t3XwPZ786iRQ5FS/Untitled?node-id=0-1", demo: "" },
  { figma: "https://www.figma.com/design/vzdk3p7ScKgjuKa0frGCpA/VERF_EXAM?node-id=0-1", demo: "" },
  { figma: "https://www.figma.com/design/nfCv5rRd47YZzGosrnlnoY/DECORATION-CODEVIN", demo: "" },
  { figma: "https://www.figma.com/design/cQFM360OK3oIliZoOndSUO/DAR-DIGITAL-AGENCY?node-id=0-1", demo: "" },
  { figma: "https://www.figma.com/design/cQFM360OK3oIliZoOndSUO/DAR-DIGITAL-AGENCY?node-id=598-2", demo: "" },
];
const figmaTags = [
  ["Figma", "UX/UI", "Dashboard", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Dashboard", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
  ["Figma", "UX/UI", "Product Design"],
];

function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2 className="section-title" data-aos="fade-up">
          {t.projectsTitle} <span className="text-primary">{t.projectsTitleHighlight}</span>
        </h2>
        <p className="projects-subtitle" data-aos="fade-up" data-aos-delay="100">{t.projectsSubtitle}</p>

        <h3 className="projects-category-title" data-aos="fade-up">{t.websitesCategory}</h3>
        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="project-img-wrapper">
                <img src={projectImages[index]} alt={project.title} className="project-img" loading="lazy" />
                <div className="project-overlay">
                  {projectLinks[index].github && (
                    <a href={projectLinks[index].github} target="_blank" rel="noreferrer" className="btn-overlay">
                      <Github size={20} /> {t.codeLabel}
                    </a>
                  )}
                  {projectLinks[index].demo && (
                    <a href={projectLinks[index].demo} target="_blank" rel="noreferrer" className="btn-overlay">
                      <ExternalLink size={20} /> {t.demoLabel}
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {projectTags[index].map((tag, i) => <span key={i} className="tech-tag">{tag}</span>)}
                </div>
                <div className="project-buttons">
                  {projectLinks[index].github && (
                    <a href={projectLinks[index].github} target="_blank" rel="noreferrer" className="btn-github">
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {projectLinks[index].demo && (
                    <a href={projectLinks[index].demo} target="_blank" rel="noreferrer" className="btn-demo">
                      <ExternalLink size={18} /> {t.demoLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="projects-category-title figma-title" data-aos="fade-up">{t.figmaCategory}</h3>
        <div className="projects-grid">
          {figmaImages.map((img, index) => (
            <div key={index} className="project-card figma-card" data-aos="fade-up" data-aos-delay={index * 60}>
              <div className="project-img-wrapper">
                <img src={img} alt="Figma Design" className="project-img" loading="lazy" />
                <div className="project-overlay">
                  {figmaLinks[index].figma && (
                    <a href={figmaLinks[index].figma} target="_blank" rel="noreferrer" className="btn-overlay">
                      <ExternalLink size={20} /> Figma
                    </a>
                  )}
                  {figmaLinks[index].demo && (
                    <a href={figmaLinks[index].demo} target="_blank" rel="noreferrer" className="btn-overlay">
                      <ExternalLink size={20} /> {t.demoLabel}
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">UX/UI Design</h3>
                <p className="project-desc">{t.figmaDesc}</p>
                <div className="project-tags">
                  {figmaTags[index].map((tag, i) => <span key={i} className="tech-tag">{tag}</span>)}
                </div>
                <div className="project-buttons">
                  {figmaLinks[index].figma && (
                    <a href={figmaLinks[index].figma} target="_blank" rel="noreferrer" className="btn-demo">
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
