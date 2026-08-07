import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 900;
const MAX_DISPLAY_MS = 2500;

const Loader = ({ onFinish }) => {
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        const start = performance.now();

        const finish = () => {
            const elapsed = performance.now() - start;
            const wait = Math.max(MIN_DISPLAY_MS - elapsed, 0);
            setTimeout(() => setFadingOut(true), wait);
        };

        const maxTimer = setTimeout(() => setFadingOut(true), MAX_DISPLAY_MS);

        if (document.readyState === "complete") {
            finish();
        } else {
            window.addEventListener("load", finish, { once: true });
        }

        return () => {
            window.removeEventListener("load", finish);
            clearTimeout(maxTimer);
        };
    }, []);

    useEffect(() => {
        if (!fadingOut) return;
        const timer = setTimeout(onFinish, 500);
        return () => clearTimeout(timer);
    }, [fadingOut, onFinish]);

    return (
        <div
            className={`fixed inset-0 z-999 flex items-center justify-center bg-black transition-opacity duration-500 ${fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            aria-hidden={fadingOut}
        >
            <div className="relative flex flex-col items-center gap-5">
                <svg
                    className="w-14 h-14 animate-spin"
                    viewBox="0 0 50 50"
                    style={{ filter: "drop-shadow(0 0 6px rgba(150,170,255,0.8))" }}
                >
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="3"
                    />
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="90 125"
                    />
                </svg>
                <p className="text-sm tracking-[0.3em] text-white/70 uppercase font-light">
                    Hasnain Wali
                </p>
            </div>
        </div>
    );
};

export default Loader;