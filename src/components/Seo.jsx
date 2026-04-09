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
    const defaultTitle = `${siteName} | MERN Stack Developer`;
    const defaultDescription =
        "Hasnain wali is a skilled Full Stack MERN Developer specializing in MongoDB, Express.js, React, and Node.js. I build scalable, high-performance web applications with modern technologies. Explore my portfolio of successful projects and let's collaborate on your next web development venture.";
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
                    "Hasnain wali, MERN Stack Developer, Full Stack Developer, MongoDB, Express.js, React, Node.js, mern stack developer portfolio, mern stack developer portfolio template web developer portfolio website, software engineer portfolio, full stack developer portfolio, web developer portfolio, hasanain wali contact, hasnain projects, hasnain skills, mern stack developer requirements, mern stack developer average salary, mern stack developer salary, what is mern stack developer, mern stack developer jobs, mern stack developer salary in dubai, saudi, UAE, mern stack developer salary in india"
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
                    "@type": "Organization",
                    name: "Hasnain wali MERN Stack developer",
                    url: siteUrl,
                    logo: defaultImage,
                    description: defaultDescription,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Bannu",
                        addressRegion: "KPK",
                        addressCountry: "Pakistan",
                    },
                    sameAs: [
                        "https://www.facebook.com/",
                        "https://www.linkedin.com/",
                    ],
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