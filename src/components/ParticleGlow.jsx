import { useEffect, useRef } from "react";

// Lightweight canvas particle/glow background — replaces the Three.js
// Planet scene. No model file, no 3D library, ~2KB of code.
const ParticleGlow = ({ className = "" }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let width, height, dpr;
        let particles = [];
        let rafId = null;
        let visible = true;

        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 40 : 90;

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const rand = (min, max) => Math.random() * (max - min) + min;

        const createParticles = () => {
            particles = Array.from({ length: particleCount }, () => ({
                x: rand(0, width),
                y: rand(0, height),
                r: rand(0.6, 2.2),
                vx: rand(-0.06, 0.06),
                vy: rand(-0.08, -0.02),
                alpha: rand(0.15, 0.6),
                pulseSpeed: rand(0.4, 1.2),
                pulseOffset: rand(0, Math.PI * 2),
            }));
        };

        resize();
        createParticles();

        let start = performance.now();

        const draw = (now) => {
            if (!visible) return;
            const t = (now - start) / 1000;

            ctx.clearRect(0, 0, width, height);

            // soft ambient glow, top-right — mirrors previous 3D lighting direction
            const glow = ctx.createRadialGradient(
                width * 0.75,
                height * 0.25,
                0,
                width * 0.75,
                height * 0.25,
                Math.max(width, height) * 0.6
            );
            glow.addColorStop(0, "rgba(120,140,255,0.10)");
            glow.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.y < -10) p.y = height + 10;
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;

                const pulse = 0.5 + 0.5 * Math.sin(t * p.pulseSpeed + p.pulseOffset);
                const a = p.alpha * (0.6 + 0.4 * pulse);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * (1 + 0.3 * pulse), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${a})`;
                ctx.shadowColor = "rgba(150,170,255,0.8)";
                ctx.shadowBlur = 6;
                ctx.fill();
            }

            rafId = requestAnimationFrame(draw);
        };

        if (prefersReducedMotion) {
            // Render a single static frame — no animation loop.
            draw(start);
        } else {
            rafId = requestAnimationFrame(draw);
        }

        const handleResize = () => {
            resize();
            createParticles();
        };

        const handleVisibility = () => {
            visible = document.visibilityState === "visible";
            if (visible && !prefersReducedMotion && !rafId) {
                start = performance.now();
                rafId = requestAnimationFrame(draw);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: "100%", height: "100%", display: "block" }}
        />
    );
};

export default ParticleGlow;