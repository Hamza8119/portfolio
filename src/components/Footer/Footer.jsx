import { Github, Linkedin, Instagram, Briefcase, Mail } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import "./Footer.css";

function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT — Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">Hamza<span>.</span></h2>
          <p className="footer-tagline">{f.tagline}</p>
          <a href="mailto:hamzaibourk2005@gmail.com" className="footer-email">
            <Mail size={14} /> hamzaibourk2005@gmail.com
          </a>
        </div>

        {/* MIDDLE — Links */}
        <div className="footer-cols">
          <div className="footer-col">
            <h4>{f.col1Title}</h4>
            <a href="#home">{f.navHome}</a>
            <a href="#about">{f.navAbout}</a>
            <a href="#skills">{f.navSkills}</a>
            <a href="#projects">{f.navProjects}</a>
          </div>
          <div className="footer-col">
            <h4>{f.col2Title}</h4>
            <a href="#education">{f.navEducation}</a>
            <a href="#experience">{f.navExperience}</a>
            <a href="#contact">{f.navContact}</a>
          </div>
        </div>

        {/* RIGHT — Social */}
        <div className="footer-social-col">
          <h4>{f.connectTitle}</h4>
          <div className="footer-socials">
            <a href="https://github.com/Hamza8119" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/hamza-ibourk-b8569833a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/code_.vin" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://www.behance.net/hamzaibourk1" target="_blank" rel="noreferrer" aria-label="Behance"><Briefcase size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>{f.copyright}</span>
        <span>{f.builtWith}</span>
      </div>
    </footer>
  );
}

export default Footer;
