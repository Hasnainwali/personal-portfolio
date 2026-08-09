import React, { lazy, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import ClientsLogo from "./sections/ClientsLogo";
import Testimonials from "./sections/Testimonials";
import SEO from "./components/Seo.jsx";
import NotFound from "./components/NotFound.jsx";
import Breadcrumbs from "./components/Breadcrumbs";
import { Routes, Route } from 'react-router-dom'

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const seoProps = {
    title: "Hasnain Wali | MERN Stack Developer",
    description:
      "MERN Stack Developer from Pakistan Kpk Bannu. Building scalable, high-performance web applications with React, Node.js, and MongoDB and using cloud services",
    image: "/images/hasnain.webp",
    url: "https://hasnainwali-official.vercel.app",
    keywords:
      "MERN Stack Developer, Full Stack Developer Pakistan, React Developer, Node.js Developer, MongoDB, SaaS Development, API Development, Web Application, E-Commerce Platform, Scalable Architecture",
  };

  // Page content renders immediately. The 3D planet in Hero loads on its
  // own, in the background, with its own local fallback (see LazyCanvas
  // in Hero.jsx) — it no longer blocks Navbar/text/other sections.
  const Home = (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Breadcrumbs />
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ClientsLogo />
      <ContactSummary />
      <Testimonials />
      <Contact />
    </ReactLenis>
  );

  return (
    <>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      <SEO {...seoProps} />

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;