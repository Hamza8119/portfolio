import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollTop.css";

function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            className={`scroll-top-btn ${visible ? "show" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
}

export default ScrollTop;
