import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const ServiceSummary = () => {
  useGSAP(() => {
    // Check if viewport is mobile (< 768px)
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Only apply transforms on desktop to prevent mobile overflow
    if (!isMobile) {
      const triggers = [];

      triggers.push(gsap.to("#title-service-1", {
        xPercent: 20,
        scrollTrigger: {
          target: "#title-service-1",
          scrub: true,
        },
      }).scrollTrigger);

      triggers.push(gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
          target: "#title-service-2",
          scrub: true,
        },
      }).scrollTrigger);

      triggers.push(gsap.to("#title-service-3", {
        xPercent: 60,
        scrollTrigger: {
          target: "#title-service-3",
          scrub: true,
        },
      }).scrollTrigger);

      triggers.push(gsap.to("#title-service-4", {
        xPercent: -40,
        scrollTrigger: {
          target: "#title-service-4",
          scrub: true,
        },
      }).scrollTrigger);

      // Cleanup function to prevent memory leaks
      return () => {
        triggers.forEach(trigger => trigger?.kill());
      };
    }
  });
  return (
    <section className="mt-20 overflow-x-hidden font-light leading-snug text-center mb-28 md:mb-42 text-[30px] sm:text-[52px] md:text-[62px] lg:text-[100px]">
      <div id="title-service-1" className="flex items-center gap-3">
        <p className="italic">Backends</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>Ecommerce</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-8  md:translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-12 md:-translate-x-24"
      >
        <p>APIs</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="flex items-center justify-center gap-3 translate-x-10 md:translate-x-20">
        <p>Databases</p>
        {/* <div className="w-10 h-0.5 md:h-1 md:w-32 bg-gold" /> */}
        {/* <p>SaaS</p> */}
      </div>
    </section>
  );
};

export default ServiceSummary;
