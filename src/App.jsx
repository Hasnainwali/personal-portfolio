import React, { useEffect, useState, lazy, Suspense } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import ClientsLogo from "./sections/ClientsLogo";
import Testimonials from "./sections/Testimonials";
import SEO from "./components/Seo.jsx";
import Breadcrumbs from "./components/Breadcrumbs";
import { Routes, Route } from 'react-router-dom'

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));

const App = () => {

  const seoProps = {
    title: "Hasnain Wali | MERN Stack Developer Portfolio",
    description:
      "MERN Stack Developer from Pakistan. Building scalable, high-performance web applications with React, Node.js, and MongoDB.",
    image: "/images/hasnain.webp",
    url: "https://hasnainwali-official.vercel.app",
    keywords:
      "MERN Stack Developer, Full Stack Developer Pakistan, React Developer, Node.js Developer, MongoDB, SaaS Development, API Development, Web Application, E-Commerce Platform, Scalable Architecture",
  };



  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  const Home = (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Breadcrumbs />
      {!isReady && (
        <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${isReady ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ClientsLogo />
        <ContactSummary />
        {/* <Testimonials /> */}
        <Contact />
      </div>

      <SpeedInsights />
    </ReactLenis>
  );

  return (
    <>
      <SEO {...seoProps} />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
