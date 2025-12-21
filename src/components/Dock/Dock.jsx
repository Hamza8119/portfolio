import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon , Instagram} from 'lucide-react';
import './Dock.css';

const Dock = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function Theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  const socials = [
    {
      id: "github",
      icon: <Github size={22} />,
      label: "GitHub",
      url: "https://github.com/Hamza8119"
    },
    {
      id: "linkedin",
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hamza-ibourk-b8569833a/"
    },
    {
      id: "email",
      icon: <Mail size={22} />,
      label: "Email",
      url: "mailto:hamzaibourk2005@gmail.com"
    },
     {
    id: "instagram",
    icon: <Instagram size={22} />,
    label: "Instagram",
    url: "https://www.instagram.com/code_.vin?igsh=MXhqaWp5YXMwN2d1bQ%3D%3D&utm_source=qr"
  },
  ];

  return (
    <div className="dock-container">
      <div className="dock-bar">

        {/* Social Icons */}
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="dock-item"
            aria-label={item.label}
          >
            {item.icon}
            <span className="dock-tooltip">{item.label}</span>
          </a>
        ))}

        {/* Separator (خط فاصل) */}
        <div className="dock-separator"></div>

        {/*Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="dock-item"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          <span className="dock-tooltip">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

      </div>
    </div>
  );
};

export default Dock;