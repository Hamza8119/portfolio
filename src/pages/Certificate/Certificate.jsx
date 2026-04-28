import { useState } from "react";
import { X } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import imgDarDigital from "../../assets/cirtificated/cirtificated-dardigital.jpg";
import imgBigAcademy from "../../assets/cirtificated/cirtificated-bigacademy.jpg";
import imgFigma from "../../assets/cirtificated/cirtficated-figma-orange.jpg";
import imgJava from "../../assets/cirtificated/cirtificated-java-orange.jpg";
import imgEnglish from "../../assets/cirtificated/cirteficated-institut-english.jpg";
import "./Certificate.css";

const certImages = [imgDarDigital, imgBigAcademy, imgFigma, imgJava, imgEnglish];
const certColors = ["#D083A0", "#a78bfa", "#D083A0", "#a78bfa", "#D083A0"];

function Certificate() {
    const { t } = useLang();
    const c = t.certificates;
    const [preview, setPreview] = useState(null);

    const certs = [
        { title: c.cert1Title, issuer: "Dar Digital", year: "2024" },
        { title: c.cert2Title, issuer: "Big Academy", year: "2023" },
        { title: c.cert3Title, issuer: "Orange Digital Center", year: "2025" },
        { title: c.cert4Title, issuer: "Orange Digital Center", year: "2025" },
        { title: c.cert5Title, issuer: "Institut CPG", year: "2024" },
    ];

    return (
        <section id="certificate" className="cert-section">
            <div className="cert-container">
                <h2 className="section-title" data-aos="fade-up">
                    {c.title} <span className="text-primary">{c.titleHighlight}</span>
                </h2>

                <div className="cert-grid">
                    {certs.map((cert, i) => (
                        <div
                            key={i}
                            className="cert-card"
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                            onClick={() => setPreview(i)}
                        >
                            <div className="cert-img-wrapper">
                                <img src={certImages[i]} alt={cert.title} className="cert-img" loading="lazy" />
                                <div className="cert-img-overlay">
                                    <span>{c.viewCert}</span>
                                </div>
                            </div>
                            <div className="cert-body">
                                <h3 className="cert-title" style={{ color: certColors[i] }}>{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <span className="cert-year">{cert.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {preview !== null && (
                <div className="cert-lightbox" onClick={() => setPreview(null)}>
                    <button className="cert-close" onClick={() => setPreview(null)}><X size={24} /></button>
                    <img
                        src={certImages[preview]}
                        alt={certs[preview].title}
                        className="cert-lightbox-img"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}

export default Certificate;
