// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({
    title,
    description,
    image,
    url,
    keywords,
}) => {
    const siteName = "Hasnain wali";
    const defaultTitle = "Hasnain Wali | MERN Stack Developer Portfolio in Pakistan";

    const defaultDescription =
        "Hasnain Wali is a MERN Stack Developer from Pakistan specializing in React, Node.js, and MongoDB. Explore my portfolio and projects.";

    const defaultImage =
        "/images/hasnain.webp";
    const siteUrl = "https://hasnainwali-official.vercel.app";

    return (
        <Helmet>
            {/* ✅ Title */}
            <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>

            {/* ✅ Basic Meta */}
            <meta
                name="description"
                content={description || defaultDescription}
            />

            <meta
                name="keywords"
                content={
                    keywords ||
                    "Hasnain wali, MERN Stack Developer, Full Stack Developer, MongoDB, Express.js, React, Node.js, mern stack developer portfolio, mern stack developer portfolio templates, web developer portfolio website, software engineer portfolio, full stack developer portfolio, web developer portfolio,Hasnain Wali, MERN Stack Developer, React Developer Pakistan, Full Stack Developer Portfolio, Node.js Developer"
                }
            />
            

            <meta name="author" content="Hasnain Wali" />
            <meta name="robots" content="index, follow" />

            {/* ✅ Canonical URL */}
            <link rel="canonical" href={url || siteUrl} />

            {/* ✅ Open Graph (Facebook, LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || defaultTitle} />
            <meta
                property="og:description"
                content={description || defaultDescription}
            />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* ✅ Twitter SEO */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta
                name="twitter:description"
                content={description || defaultDescription}
            />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Structured Data (MPORTANT) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Hasnain Wali",
                    "url": siteUrl,
                    "image": defaultImage,
                    "jobTitle": "MERN Stack Developer",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bannu",
                        "addressRegion": "KPK",
                        "addressCountry": "Pakistan"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/",
                        "https://github.com/"
                    ]
                })}
            </script>

            {/* Local Business Schema */}
            {/* <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    name: "Syed Software Institute Bannu",
                    url: siteUrl,
                    logo: defaultImage,
                    description: defaultDescription,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Bannu",
                        addressRegion: "KPK",
                        addressCountry: "PK",
                    },
                })}
            </script> */}
        </Helmet>
    );
};

export default SEO;