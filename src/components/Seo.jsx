// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://hasnainwali-official.vercel.app";
const SITE_NAME = "Hasnain Wali";
const DEFAULT_TITLE = "Hasnain Wali | MERN Stack Developer in Pakistan";
const DEFAULT_DESCRIPTION =
    "Hasnain Wali is a MERN stack developer based in Bannu, KPK, Pakistan, building full-stack web apps, e-commerce platforms, and SaaS products with React, Node.js, Express, and MongoDB.";
const DEFAULT_IMAGE = `${SITE_URL}/images/hasnain.webp`;

/**
 * SEO component — one <Helmet> per route.
 * Every route in App.jsx renders this with route-specific title/description/url.
 * Schema.org blocks only render the entities relevant to that page —
 * we don't dump every schema type on every route.
 */
const SEO = ({
    title,
    description,
    image,
    url,
    keywords,
    breadcrumbs = [],
    projectData = null,
    type = "website",
    noindex = false,
}) => {
    const pageTitle = title || DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageImage = image
        ? image.startsWith("http")
            ? image
            : `${SITE_URL}${image}`
        : DEFAULT_IMAGE;
    const pageUrl = url || SITE_URL;

    const defaultKeywords =
        "MERN stack developer, full stack developer Pakistan, React developer, Node.js developer, MongoDB developer, Hasnain Wali, web developer Bannu KPK";

    // Person schema — describes YOU as an entity, independent of any one page.
    // This is what lets Google show a Knowledge Panel-style understanding of
    // "Hasnain Wali" as a developer, and ties your site + social profiles together.
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Hasnain Wali",
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        jobTitle: "MERN Stack Developer",
        description: DEFAULT_DESCRIPTION,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bannu",
            addressRegion: "KPK",
            addressCountry: "PK",
        },
        sameAs: [
            "https://www.linkedin.com/in/Hasnainwali/",
            "https://github.com/Hasnainwali",
        ],
        knowsAbout: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "TanStack Query",
            "REST API Development",
            "Full Stack Development",
        ],
    };

    // WebSite schema — one per site, homepage only (see condition below).
    // Enables the sitelinks search box eligibility in Google.
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#person` },
    };

    // BreadcrumbList — real routes only, no #fragment URLs.
    const breadcrumbSchema =
        breadcrumbs.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: breadcrumbs.map((crumb, idx) => ({
                    "@type": "ListItem",
                    position: idx + 1,
                    name: crumb.name,
                    item: `${SITE_URL}${crumb.url}`,
                })),
            }
            : null;

    // CreativeWork — only on project detail pages.
    const creativeWorkSchema = projectData
        ? {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: projectData.name,
            description: projectData.description,
            image: projectData.image?.startsWith("http")
                ? projectData.image
                : `${SITE_URL}${projectData.image}`,
            url: pageUrl,
            creator: { "@id": `${SITE_URL}/#person` },
            ...(projectData.dateCreated && {
                dateCreated: projectData.dateCreated,
            }),
            ...(projectData.technologies?.length && {
                keywords: projectData.technologies.join(", "),
            }),
        }
        : null;

    const isHome = pageUrl === SITE_URL || pageUrl === `${SITE_URL}/`;

    return (
        <Helmet>
            <html lang="en" />
            <title>{pageTitle}</title>

            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="Hasnain Wali" />
            <meta
                name="robots"
                content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
            />

            <link rel="canonical" href={pageUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:image:alt" content={pageTitle} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />

            {/* Structured data — Person always, WebSite only on home,
          breadcrumb/creative-work only where relevant */}
            <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
            {isHome && (
                <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
            )}
            {breadcrumbSchema && (
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            )}
            {creativeWorkSchema && (
                <script type="application/ld+json">{JSON.stringify(creativeWorkSchema)}</script>
            )}
        </Helmet>
    );
};

export default SEO;