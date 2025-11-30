import React from 'react';
import { motion } from 'framer-motion'; // للأنميشن الخفيفة
import { 
  Github, Linkedin, Mail, Code2, Terminal, Database, 
  Home, Wrench, FolderGit2, Briefcase, GraduationCap, Globe 
} from 'lucide-react';
import './App.css'; // استيراد الستايل

// --- DATA ---
const skills = [
  { name: "C / C++", icon: <Terminal size={30} /> },
  { name: "JavaScript", icon: <Code2 size={30} /> },
  { name: "React.js", icon: <Globe size={30} /> },
  { name: "Node.js", icon: <Database size={30} /> },
  { name: "Laravel", icon: <Code2 size={30} /> },
  { name: "Python", icon: <Code2 size={30} /> },
  { name: "SQL / Mongo", icon: <Database size={30} /> },
  { name: "Git", icon: <Github size={30} /> },
];

const projects = [
  {
    title: "SaaS E-Commerce",
    desc: "A scalable multi-vendor platform with Stripe payments and real-time inventory management.",
    tags: ["MERN", "Redux", "Stripe"],
    img: "/ecommerce.png", // حط التصويرة ف public
    link: "#"
  },
  {
    title: "Minishell (Unix)",
    desc: "Recreation of a functional Unix shell. Handles processes, signals, and memory management.",
    tags: ["C", "Unix API", "Algorithms"],
    img: "/minishell.png", // حط التصويرة ف public
    link: "#"
  },
  {
    title: "Blog CMS System",
    desc: "High-performance blog with SEO optimization and custom content management dashboard.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    img: "/ecommerce.png", // Placeholder
    link: "#"
  }
];

const App = () => {
  return (
    <div className="app">
      
      {/* --- HERO SECTION --- */}
      <section id="home" className="hero">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="profile-img-container"
        >
          <img src="/lilyass.jpg" alt="Ilyas" className="profile-img" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1>Hi, I'm <span className="text-primary">Ilyas Lhouari</span></h1>
          <p>
            Bridging the gap between <strong>Low-level Engineering</strong> (C/Unix) 
            and <strong>Modern Web Scalability</strong> (Full Stack).
          </p>
          
          <div className="social-icons justify-center">
            <a href="#" className="social-btn"><Github /></a>
            <a href="#" className="social-btn"><Linkedin /></a>
            <a href="mailto:ilyasslhouari@gmail.com" className="social-btn"><Mail /></a>
          </div>
        </motion.div>
      </section>

      <div className="container">
        
        {/* --- SKILLS --- */}
        <section id="skills" className="section">
          <h2 className="section-title">Professional <span className="text-primary">Skillset</span></h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="section">
          <h2 className="section-title">My Recent <span className="text-primary">Works</span></h2>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div key={index} className="project-card">
                <img src={proj.img} alt={proj.title} className="project-img" />
                <div className="project-content">
                  <h3>{proj.title}</h3>
                  <p className="text-muted" style={{fontSize: '0.9rem', margin: '10px 0'}}>{proj.desc}</p>
                  <div className="tags">
                    {proj.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <a href={proj.link} className="btn-code"><Github size={18}/> View Code</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TIMELINE (Exp & Edu) --- */}
        <section id="experience" className="section" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">Experience & <span className="text-primary">Education</span></h2>
          
          <div className="timeline">
            {/* Item 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="text-primary font-bold">2026 - Present</span>
                <h3>1337 Coding School (42 Network)</h3>
                <p>Software Engineering & Architecture. Intensive peer-to-peer learning.</p>
              </div>
            </div>

            {/* Item 2 (Left) */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="text-primary font-bold">Feb 2025 - Jun 2025</span>
                <h3>Full Stack Intern</h3>
                <p>Digital Solutions Agency. Built B2B platforms using Laravel & React.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="text-primary font-bold">2024 - 2026</span>
                <h3>OFPPT / ISTA</h3>
                <p>Specialized Technician in Digital Development (Full Stack).</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <footer>
        <p>Designed and Developed by <span className="text-primary">Ilyas Lhouari</span> © 2025</p>
      </footer>

      {/* --- DOCK NAVIGATION (Fixed) --- */}
      <div className="dock-container">
        <div className="dock">
          <a href="#home" className="dock-icon"><Home size={24}/></a>
          <a href="#skills" className="dock-icon"><Wrench size={24}/></a>
          <a href="#projects" className="dock-icon"><FolderGit2 size={24}/></a>
          <a href="#experience" className="dock-icon"><Briefcase size={24}/></a>
        </div>
      </div>

    </div>
  );
};

export default App;