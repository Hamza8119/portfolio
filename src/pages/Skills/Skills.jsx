import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { SiFigma, SiTailwindcss, SiVuedotjs, SiGithub, SiJavascript, SiReact, SiLinux, SiGit, SiCss3, SiHtml5, SiPython, SiLaravel, SiBootstrap, SiMysql, SiPhp, SiC, SiPostman } from "react-icons/si";
import { useLang } from "../../context/LanguageContext";
import "./Skills.css";

function Skills() {
    const { t } = useLang();

    const skills = [
        { name: "C Language", icon: <SiC /> },
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "React", icon: <SiReact /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Vue.js", icon: <SiVuedotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <span className="custom-tech-icon">N</span> },
        { name: "Frappe", icon: <span className="custom-tech-icon">F</span> },
        { name: "ERPNext", icon: <span className="custom-tech-icon">ERP</span> },
    ];

    const tools = [
        { name: "VS Code", icon: <DiVisualstudio /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Figma", icon: <SiFigma /> },
    ];

    const languages = [
        { name: "Arabic", icon: <span className="custom-tech-icon">🇲🇦</span> },
        { name: "English", icon: <span className="custom-tech-icon">🇬🇧</span> },
        { name: "French", icon: <span className="custom-tech-icon">🇫🇷</span> },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skiils-container">

                <h2 className="section-title" data-aos="fade-up">
                    {t.skillsTitle} <span className="text-primary">{t.skillsTitleHighlight}</span>
                </h2>
                <div className="tech-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="tech-card" data-aos="zoom-in" data-aos-delay={index * 40}>
                            <span className="tech-icon">{skill.icon}</span>
                            <span className="tech-name">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: "50px" }} data-aos="fade-up">
                    <span className="text-primary">{t.toolsTitle}</span> {t.toolsTitleSuffix}
                </h2>
                <div className="tech-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tech-card" data-aos="zoom-in" data-aos-delay={index * 60}>
                            <span className="tech-icon">{tool.icon}</span>
                            <span className="tech-name">{tool.name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: "50px" }} data-aos="fade-up">
                    <span className="text-primary">{t.languagesTitle}</span>
                </h2>
                <div className="tech-grid">
                    {languages.map((lang, index) => (
                        <div key={index} className="tech-card" data-aos="zoom-in" data-aos-delay={index * 80}>
                            <span className="tech-icon">{lang.icon}</span>
                            <span className="tech-name">{lang.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
