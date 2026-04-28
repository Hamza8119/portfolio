import { MapPin } from "lucide-react";
import IconCloud from "../../components/IconCloud";
import Sparkles from "../../components/Sparkles/Sparkles";
import { useLang } from "../../context/LanguageContext";
import "./Home.css";

function Home() {
    const { t, isRTL } = useLang();

    return (
        <section className="home-section" id="home">
            <div className="home-content">
                {/* LEFT SIDE */}
                <div className="home-header" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="location-badge"><MapPin size={13} /> {t.location}</div>

                    <h2 className="greeting">
                        {t.greeting} <span className="wave">👋🏻</span>
                    </h2>

                    <Sparkles minSize={30} maxSize={70}>
                        <h1 className="hero-title-large">
                            {t.heroTitle}<br />
                            <span className="stroke-text">{t.heroTitleStroke}</span>
                        </h1>
                    </Sparkles>

                    <h3 className="hero-subtitle">{t.subtitle}</h3>

                    <a href="/cv-hamza-ibourk.pdf" download className="btn-cv" data-aos="fade-up" data-aos-delay="300">
                        ⬇ {t.downloadCV}
                    </a>
                </div>

                {/* RIGHT SIDE */}
                <div className="home-cloud-container">
                    <IconCloud />
                </div>
            </div>
        </section>
    );
}

export default Home;
