import { useEffect, useRef } from "react";
import "./Cursor.css";

function Cursor() {
    const dot = useRef(null);
    const ring = useRef(null);

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dot.current) {
                dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (ring.current) {
                ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
            }
            requestAnimationFrame(animate);
        };

        const onEnter = () => {
            ring.current?.classList.add("hovered");
            dot.current?.classList.add("hovered");
        };
        const onLeave = () => {
            ring.current?.classList.remove("hovered");
            dot.current?.classList.remove("hovered");
        };

        document.addEventListener("mousemove", onMove);
        document.querySelectorAll("a, button, .tech-card, .project-card").forEach(el => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        animate();
        return () => document.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <>
            <div ref={dot} className="cursor-dot" />
            <div ref={ring} className="cursor-ring" />
        </>
    );
}

export default Cursor;
