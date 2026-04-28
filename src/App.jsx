import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbWorld } from 'react-icons/tb';

import { LanguageProvider, useLang } from './context/LanguageContext';
import { Toaster } from 'react-hot-toast';
import ScrollTop from './components/ScrollTop/ScrollTop';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Cursor from './components/Cursor/Cursor';
import Certificate from './pages/Certificate/Certificate';
import Contact from './components/Contact/Contact';
import Preloader from './components/loading/Preloader';
import Dock from './components/Dock/Dock';
import Burger from './components/Burger/Burger';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Project from './pages/Project/Projects';

const langLabels = { en: "English", fr: "Français", ar: "العربية" };

function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="lang-switcher-global" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(p => !p)} aria-label="Select language">
        <TbWorld size={20} />
        <span>{langLabels[lang]}</span>
      </button>
      {open && (
        <ul className="lang-dropdown">
          {Object.entries(langLabels).map(([code, label]) => (
            <li key={code}>
              <button
                className={`lang-option ${lang === code ? "active" : ""}`}
                onClick={() => { setLang(code); setOpen(false); }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="App">
          <LangSwitcher />
          <Burger />
          <Home />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Project />
          <Certificate />
          <Contact />
          <Footer />
          <Dock />
          <ScrollTop />
          <WhatsApp />
          <Cursor />
          <Toaster position="bottom-center" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid rgba(208,131,160,0.3)' } }} />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
