import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function ProjectModal({ project, onClose }) {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );

        gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.8, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out",
            }
        );

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClose = () => {
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
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 relative"
                style={{ backgroundColor: "#E5E5E0" }}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-4 text-gray-700 hover:text-black text-xl font-bold"
                >
                    ✕
                </button>

                {/* Project Image */}
                <img
                    src={project.image}
                    alt={`${project.name} image`}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                />

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    {project.name}
                </h2>

                {/* Description */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Project Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Case Study */}
                {project.caseStudy && (
                    <div className="mb-6 p-5 rounded-xl bg-white border-l-4 border-gray-800 shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            📘 Case Study
                        </h3>
                        <p className="text-gray-700 leading-7 text-justify">
                            {project.caseStudy}
                        </p>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.frameworks.map((tech) => (
                            <span
                                key={tech.id}
                                className="px-4 py-2 text-sm rounded-full bg-gray-800 text-white hover:bg-black transition"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-6">
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition"
                    >
                        View GitHub
                    </a>

                    {project.online && (
                        <a
                            href={project.online}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
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