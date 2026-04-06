import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function ProjectModal({ project, onClose }) {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        // Fade in overlay
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );

        // Scale + fade modal
        gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.8, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );

        // Disable scroll
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClose = () => {
        // Animate out before closing
        gsap.to(modalRef.current, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 0.3,
            onComplete: onClose,
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
        });
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] max-w-2xl rounded-2xl shadow-2xl p-6 relative"
                style={{ backgroundColor: "#E5E5E0" }}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-3 text-gray-700 hover:text-black text-xl
                    font-semibold"
                >
                    ✕
                </button>

                {/* Image */}
                <img
                    src={project.image}
                    alt={`${project.name} - Image`}
                    className="w-full h-60 object-cover rounded-xl mb-4"
                />

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Tech Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.frameworks.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-white"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                    {project.github && (
                        <a
                            href={project.href}
                            target="_blank"
                            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
                        >
                            GitHub
                        </a>
                    )}

                    {project.online && (
                        <a
                            href={project.online}
                            target="_blank"
                            className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;