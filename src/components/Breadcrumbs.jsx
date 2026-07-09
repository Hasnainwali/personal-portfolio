import { useState, useEffect } from 'react';

// ============================================================
// BREADCRUMB NAVIGATION COMPONENT
// Why: Improves UX + CTR in search results (shows hierarchy)
//      Each breadcrumb is an internal link = SEO juice flow
// ============================================================
const Breadcrumbs = () => {
    const [currentSection, setCurrentSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'home', label: 'Home', threshold: 0 },
                { id: 'services', label: 'Services', threshold: 0.2 },
                { id: 'portfolio', label: 'Portfolio', threshold: 0.4 },
                { id: 'about', label: 'About', threshold: 0.6 },
                { id: 'contact', label: 'Contact', threshold: 0.8 },
            ];

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (!element) continue;

                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight * sections[i].threshold) {
                    setCurrentSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Map section IDs to breadcrumb paths
    const getBreadcrumbs = () => {
        const paths = {
            home: [
                { name: 'Home', url: '#home', current: true },
            ],
            services: [
                { name: 'Home', url: '#home', current: false },
                { name: 'Services', url: '#services', current: true },
            ],
            portfolio: [
                { name: 'Home', url: '#home', current: false },
                { name: 'Portfolio', url: '#portfolio', current: true },
            ],
            about: [
                { name: 'Home', url: '#home', current: false },
                { name: 'About', url: '#about', current: true },
            ],
            contact: [
                { name: 'Home', url: '#home', current: false },
                { name: 'Contact', url: '#contact', current: true },
            ],
        };

        return paths[currentSection] || paths.home;
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <nav
            aria-label="Breadcrumb"
            className="hidden md:flex items-center gap-2 px-6 py-3 text-sm text-gray-600 bg-white/50 backdrop-blur-md fixed top-20 left-0 right-0 z-40"
        >
            {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2">
                    <a
                        href={crumb.url}
                        className={`transition-colors ${crumb.current
                                ? 'text-black font-semibold'
                                : 'text-gray-600 hover:text-black'
                            }`}
                        aria-current={crumb.current ? 'page' : undefined}
                    >
                        {crumb.name}
                    </a>
                    {idx < breadcrumbs.length - 1 && (
                        <span className="text-gray-400">/</span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
