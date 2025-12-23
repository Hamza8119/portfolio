import React from "react";
import Sparkles from "../Sparkles/Sparkles";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-section">

      <h2 className="footer-mini-title"><span>C</span>ontact</h2>

      <div className="footer-content-center">
        <div className="heading-center">
          <Sparkles>
            <h1 className="footer-main-title">Get In Touch</h1>
          </Sparkles>
        </div>
    <p className="contact-text">
  Have questions? Ping me with a <a 
    href="https://www.linkedin.com/in/hamza-ibourk-b8569833a/" 
    target="_blank" 
    rel="noreferrer" 
    className="highlight-link"
  >
    LinkedIn
  </a> DM, email at <a 
    href="mailto:hamzaibourk2005@gmail.com" 
    className="highlight-link"
  >
    hamzaibourk2005@gmail.com
  </a>, or check my <a 
    href="https://www.instagram.com/sophisticated__decor/" 
    target="_blank" 
    rel="noreferrer" 
    className="highlight-link"
  >
    Instagram
  </a>.
</p>

      </div>

    </section>
  );
}

export default Footer;