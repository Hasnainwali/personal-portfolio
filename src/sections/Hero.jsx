import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Loader from "../components/Loader";

const Hero = () => {
  const text = `Building scalable web experiences that feel effortless
Driven by clean design and thoughtful engineering
Crafted with intent.`;

  return (
    <section
      id="home"
      className="flex flex-col justify-center md:justify-end min-h-screen"
      role="region"
      aria-label="Hero section"
    >
      <AnimatedHeaderSection
        subTitle={"Welcome to my portfolio"}
        title={"Hasnain Wali"}
        text={text}
        textColor={"text-black"}
        titleTag="h1"
      />

      <div
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Loader />
      </div>
    </section>
  );
};

export default Hero;
