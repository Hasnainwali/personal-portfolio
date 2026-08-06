import React from 'react';

// ============================================================
// IMAGE OPTIMIZATION UTILITY
// Why: Lazy load images to improve Core Web Vitals (LCP, CLS)
//      Use WebP with JPG fallback for modern browsers
// ============================================================
export const ImageOptimizer = ({ src, alt, className, priority = false }) => {
    // Extract base filename without extension
    const filename = src.substring(0, src.lastIndexOf('.'));

    return (
        <picture>
            {/* WebP format for modern browsers (25-35% smaller) */}
            <source srcSet={`${filename}.webp`} type="image/webp" />
            {/* JPG fallback for older browsers */}
            <img
                src={src}
                alt={alt}
                className={className}
                // Lazy load unless priority=true (for LCP image)
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                // Prevents Cumulative Layout Shift
                style={{ aspectRatio: '16/9' }}
            />
        </picture>
    );
};

// ============================================================
// LAZY LOAD THREE.JS CANVAS
// Why: Three.js is heavy (500KB+). Only load when visible
//      Saves initial page load time (FCP improvement)
//      Added 1-second delay to prevent immediate loading
// ============================================================
export const LazyCanvas = ({ children, fallback = null }) => {
    const [shouldLoad, setShouldLoad] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        // Add 1-second delay before observing to prevent immediate load
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.unobserve(entry.target);
                    }
                },
                { threshold: 0.1 }
            );

            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={ref}>
            {shouldLoad ? children : fallback || <div className="h-screen bg-gray-200 dark:bg-gray-800" />}
        </div>
    );
};
