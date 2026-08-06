// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Javascript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "E-Commerce & SaaS Solutions",
    description:
      "From subscription workflows to multi-tenant systems, each product is engineered for performance and effortless management at any scale.",
    items: [
      {
        title: "Multi-Tenant Architecture",
        description: "(Role Management, Tenant Isolation, Scalable Logic)",
      },
      {
        title: "Payment & Subscription Systems",
        description: "(Stripe, PayPal, Local Gateways, Billing Flows)",
      },
      {
        title: "Admin Dashboards & Automation",
        description: "(Analytics, CRUD Systems, Automated Operations)",
      },
    ],
  },
  {
    title: "API Building & Integration",
    description:
      "Whether building new endpoints or integrating external services, every API is structured for clarity, security, and long-term maintainability.",
    items: [
      {
        title: "Custom API Development",
        description: "(REST, Modular Architecture)",
      },
      {
        title: "Service Integrations",
        description: "(REST, Auth, Third-Party Platforms)",
      },
      {
        title: "Security & Authentication",
        description: "(JWT, OAuth, Input Validation, Rate Limiting)",
      },
    ],
  },
  {
    title: "Performance Optimization & Refactoring",
    description:
      "Through focused refactoring and performance audits, your product becomes faster, more stable, and easier to scale—without disrupting core functionality.",
    items: [
      {
        title: "Codebase Refactoring",
        description: "(Structure Cleanup, Reusable Patterns, Best Practices)",
      },
      {
        title: "Performance Audits",
        description: "(Core Web Vitals, Lighthouse, Rendering Analysis)",
      },
      {
        title: "Caching & Query Optimization",
        description: "(DB Queries, API Caching, Rendering Efficiency)",
      },
    ],
  },

];


export const projects = [
  {
    id: 1,
    name: "Online Tour Booking System",
    description:
      "A full-stack web app to book tours, manage plans, and view bookings with an admin dashboard.",
    caseStudy:
      "Built for a local tour agency facing manual booking issues and poor customer management. I solved the problem by creating a centralized digital platform where users can explore, book, and manage tours online, while admins can control tour plans, bookings, and users from a dashboard. Scope included authentication, role-based access, booking management, cloud image storage, and scalable backend APIs. Result: reduced manual workload and improved booking efficiency.",
    href: "https://github.com/Hasnainwali",
    online: "https://hw-tours.netlify.app/",
    image: "/assets/projects/online-tour.webp",
    bgImage: "/assets/projects/online-tour.webp",
    frameworks: [
      { id: 4, name: "React" },
      { id: 3, name: "JavaScript" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Node.js" },
      { id: 7, name: "Express.js" },
      { id: 8, name: "MongoDB" },
      { id: 9, name: "MongoDB Atlas" },
      { id: 10, name: "Cloudinary" },
    ],
  },

  {
    id: 2,
    name: "ssibannu",
    description:
      "A full-stack web app for an IT Academy and software house with an admin dashboard.",
    caseStudy:
      "Designed and developed for an IT academy needing a strong online presence and internal management system. The challenge was handling course visibility, student inquiries, and content management in one place. I built a full-stack platform with dynamic course/service management, admin controls, inquiry handling, and media management. Scope included responsive frontend, secure backend, and scalable database design. Result: improved digital branding and easier operational management.",
    href: "https://github.com/Hasnainwali",
    online: "https://ssibannu.com",
    image: "/assets/projects/ssib.webp",
    bgImage: "/assets/projects/ssib.webp",
    frameworks: [
      { id: 4, name: "React" },
      { id: 3, name: "JavaScript" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Node.js" },
      { id: 7, name: "Express.js" },
      { id: 8, name: "MongoDB" },
      { id: 9, name: "MongoDB Atlas" },
      { id: 10, name: "Cloudinary" },
    ],
  },

  {
    id: 3,
    name: "Personal Portfolio Website",
    description:
      "A responsive portfolio showcasing my skills, projects, and experience with modern UI design.",
    caseStudy:
      "Created to build my personal brand and professionally showcase my work to clients and recruiters. The main challenge was standing out in a competitive market. I solved this through a premium modern UI, smooth animations, optimized performance, and clear storytelling of projects and skills. Scope included responsive design, advanced animations, SEO optimization, and reusable component architecture. Result: stronger professional presence and better client trust.",
    href: "https://github.com/Hasnainwali",
    online: "https://hasnainwali-official.vercel.app/",
    image: "/assets/projects/portfolio.webp",
    bgImage: "/assets/projects/portfolio.webp",
    frameworks: [
      { id: 1, name: "React js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "GSAP" },
      { id: 5, name: "Three JS" },
    ],
  },

  {
    id: 4,
    name: "Online Property",
    description:
      "An Web App In which properties can be sell and buy. This is real Eastate platform where dealers can represent their societies, homes, villas etc.",
    caseStudy:
      "Developed a full-stack real estate platform that simplifies property buying and selling through a secure online marketplace. The application supports three user roles—Admin, Seller, and Buyer—allowing sellers to publish and manage property listings, buyers to discover and inquire about properties, and administrators to oversee users, listings, and platform activities through a centralized dashboard. Currently under active development with ongoing feature enhancements and performance improvements.",
    href: "https://github.com/Hasnainwali",
    online: "https://bannugull.com",
    image: "/assets/projects/online-property.webp",
    bgImage: "/assets/projects/online-property.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Expres JS Node JS" },
      { id: 3, name: "MongoDb" },
      { id: 3, name: "Redux toolkit" },
      { id: 3, name: "Cloudinay cloud" },
    ],
  },

  {
    id: 5,
    name: "Hex Color Generator",
    description:
      "An Web App which generates different gradient colors. The colors can be copied by one click.",
    caseStudy:
      "Developed as a utility tool for designers and developers who spend time manually selecting and testing colors. The problem was inefficient color experimentation. I solved it by creating an instant random gradient generator with one-click copy functionality. Scope included DOM manipulation, dynamic styling logic, and user-friendly interaction design. Result: faster design workflow and better developer productivity.",
    href: "https://github.com/Hasnainwali",
    image: "/assets/projects/hex-col.webp",
    bgImage: "/assets/projects/hex-col.webp",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },

  {
    id: 6,
    name: "Private Journal App",
    description:
      "A personal diary App that tracks all your activities dynamically you saved here with complete authentication and ownership",
    caseStudy:
      "Built to solve privacy and ownership issues in traditional note-taking apps. Users needed a secure place to save personal thoughts and daily activities. I created a full-stack journal platform with authentication, private note ownership, protected routes, and CRUD functionality. Scope included user security, scalable backend APIs, responsive UI, and database optimization. Result: users get a secure personal digital diary experience.",
    href: "https://github.com/Hasnainwali",
    online: "https://private-journal-frontend.vercel.app/",
    image: "/assets/projects/private-journal.webp",
    bgImage: "/assets/projects/private-journal.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "tailwind css" },
      { id: 3, name: "Node js" },
      { id: 4, name: "Express.js" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "JavaScript" },
    ],
  },
];


export const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/awlad_e_adam?igsh=OGQ5ZDc2ODk2ZA=="
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1KP3X5oysv/",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+923142633952%20?text=Hello%20Hasnain%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%20I%20am%20interested%20in%20learning%20more%20about%20your%20work%20and%20potentially%20collaborating.%20Please%20let%20me%20know%20if%20you%27d%20be%20open%20to%20a%20conversation.%0AThank you!",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hasnainwali"
  },
  {
    name: "GitHub",
    href: "https://github.com/Hasnainwali"
  },
];
