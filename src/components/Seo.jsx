// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({
    title,
    description,
    image,
    url,
    keywords,
    breadcrumbs = [],
    projectData = null,
    type = "website",
}) => {
    const siteName = "Hasnain Wali";
    const siteUrl = "https://hasnainwali-official.vercel.app";
    const defaultTitle = "Hasnain Wali | MERN Stack Developer Portfolio";
    const defaultDescription =
        "MERN Stack Developer from Pakistan. Building scalable, high-performance web applications with React, Node.js, and MongoDB.";
    const defaultImage = "/images/hasnain.webp";

    const cleanKeywords =
        keywords ||
        "MERN Stack Developer, Full Stack Developer Pakistan, React Developer, Node.js Developer, MongoDB, Web Development Portfolio, SaaS Development, API Development";

    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Hasnain Wali",
        url: siteUrl,
        image: defaultImage,
        jobTitle: "MERN Stack Developer | Full Stack Engineer",
        description: defaultDescription,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bannu",
            addressRegion: "KPK",
            addressCountry: "PK",
        },
        sameAs: [
            "https://www.linkedin.com/in/hasnain-wali/",
            "https://github.com/Hasnainwali",
            "https://twitter.com/hasnain_wali",
        ],
        knowsAbout: [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "API Development",
            "Full Stack Development",
            "SaaS Architecture",
        ],
    };

    const portfolioCreativeWorkSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Portfolio - MERN Stack Developer",
        description: "Collection of full-stack web development projects",
        url: `${siteUrl}/#portfolio`,
        creator: {
            "@type": "Person",
            name: "Hasnain Wali",
            url: siteUrl,
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement:
            breadcrumbs.length > 0
                ? breadcrumbs.map((crumb, idx) => ({
                    "@type": "ListItem",
                    position: idx + 1,
                    name: crumb.name,
                    item: `${siteUrl}${crumb.url}`,
                }))
                : [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: siteUrl,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Services",
                        item: `${siteUrl}/#services`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Portfolio",
                        item: `${siteUrl}/#portfolio`,
                    },
                ],
    };

    let creativeWorkSchema = null;
    if (projectData) {
        creativeWorkSchema = {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: projectData.name,
            description: projectData.description,
            image: projectData.image,
            url: projectData.url,
            creator: {
                "@type": "Person",
                name: "Hasnain Wali",
            },
            dateCreated: projectData.dateCreated,
            technologies: projectData.technologies,
            ...(projectData.rating && {
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: projectData.rating,
                    bestRating: 5,
                    worstRating: 1,
                },
            }),
        };
    }

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Hasnain Wali - Full Stack Development",
        url: siteUrl,
        logo: defaultImage,
        description: defaultDescription,
        sameAs: [
            "https://www.linkedin.com/in/hasnain-wali/",
            "https://github.com/Hasnainwali",
        ],
        foundingDate: "2022",
        areaServed: "PK",
    };

    return (
        <Helmet>
            <title>{title || defaultTitle}</title>

            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={cleanKeywords} />
            <meta name="author" content="Hasnain Wali" />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            <link rel="canonical" href={url || siteUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:image:alt" content={title || defaultTitle} />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
            <meta name="twitter:creator" content="@hasnain_wali" />

            <script type="application/ld+json">{JSON.stringify(portfolioSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(portfolioCreativeWorkSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            {creativeWorkSchema && (
                <script type="application/ld+json">{JSON.stringify(creativeWorkSchema)}</script>
            )}

            <meta
                name="google-site-verification"
                content="2tQCEpYXcV65riHjryC66Aw0FVHiAVNIaz8IcYq9qkY"
            />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        </Helmet>
    );
};

export default SEO;