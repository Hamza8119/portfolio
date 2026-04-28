import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import './Burger.css';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();

  return (
    <>
      {/* Logo top-left */}
      <a href="#home" className="nav-logo">Hamza<span>.</span></a>

      <button
        className={`burger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          {t.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="menu-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Burger;