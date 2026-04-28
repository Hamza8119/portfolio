import { useState, useRef } from "react";
import { Send, Copy, Check, Mail, Linkedin, Instagram, Loader } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useLang } from "../../context/LanguageContext";
import "./Contact.css";

// ── EmailJS config ──────────────────────────────────────────
const EJS_SERVICE = "service_10ham";
const EJS_TEMPLATE = "template_h5ri9sr";
const EJS_PUBLIC = "5afawkSpyqY0Z81SC";
// ────────────────────────────────────────────────────────────

function Contact() {
    const { t } = useLang();
    const formRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending
    const [form, setForm] = useState({ name: "", niche: "", email: "", budget: "", message: "" });

    const myEmail = "hamzaibourk2005@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, EJS_PUBLIC);
            setStatus("idle");
            setForm({ name: "", niche: "", email: "", budget: "", message: "" });
            toast.success(c.successMsg, { duration: 4000 });
        } catch {
            setStatus("idle");
            toast.error(c.errorMsg, { duration: 4000 });
        }
    };

    const c = t.contact;

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <p className="contact-eyebrow">{c.eyebrow}</p>
                <h2 className="section-title">{c.title} <span className="text-primary">{c.titleHighlight}</span></h2>

                <div className="contact-grid">

                    {/* LEFT — Form */}
                    <div className="contact-card">
                        <h3 className="contact-card-title">{c.formTitle}</h3>
                        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input name="name" value={form.name} onChange={handleChange} placeholder={c.name} required className="form-input" />
                                <input name="niche" value={form.niche} onChange={handleChange} placeholder={c.niche} className="form-input" />
                            </div>
                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={c.emailPlaceholder} required className="form-input" />
                            <select name="budget" value={form.budget} onChange={handleChange} className="form-input form-select">
                                <option value="" disabled>{c.budget}</option>
                                <option>{"< $500"}</option>
                                <option>$500 – $1000</option>
                                <option>$1000 – $3000</option>
                                <option>{"> $3000"}</option>
                            </select>
                            <textarea name="message" value={form.message} onChange={handleChange} placeholder={c.message} rows={4} className="form-input form-textarea" />

                            <button type="submit" className="btn-submit" disabled={status === "sending"}>
                                {status === "sending"
                                    ? <><Loader size={16} className="spin" /> {c.sending}</>
                                    : <><Send size={16} /> {c.submit}</>
                                }
                            </button>

                        </form>
                    </div>

                    {/* RIGHT — Quick contact */}
                    <div className="contact-card contact-card-right">
                        <h3 className="contact-card-title">{c.quickTitle}</h3>

                        <div className="contact-qr">
                            <QRCodeSVG
                                value="https://www.linkedin.com/in/hamza-ibourk-b8569833a/"
                                size={150}
                                bgColor="transparent"
                                fgColor="#D083A0"
                                level="M"
                            />
                            <p className="qr-label">{c.qrLabel}</p>
                        </div>

                        <div className="contact-links">
                            <a href={`mailto:${myEmail}`} className="contact-link-item">
                                <Mail size={18} />
                                <span>{myEmail}</span>
                            </a>
                            <a href="https://www.linkedin.com/in/hamza-ibourk-b8569833a/" target="_blank" rel="noreferrer" className="contact-link-item">
                                <Linkedin size={18} />
                                <span>hamza-ibourk</span>
                            </a>
                            <a href="https://www.instagram.com/code_.vin" target="_blank" rel="noreferrer" className="contact-link-item">
                                <Instagram size={18} />
                                <span>@code_.vin</span>
                            </a>
                        </div>

                        <div className="contact-email-box">
                            <p className="email-label"><Mail size={14} /> {c.emailDirect}</p>
                            <p className="email-value">{myEmail}</p>
                            <div className="email-actions">
                                <a href={`mailto:${myEmail}`} className="btn-email">{c.sendEmail}</a>
                                <button onClick={handleCopy} className="btn-copy">
                                    {copied ? <Check size={15} /> : <Copy size={15} />}
                                    {copied ? c.copied : c.copy}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
