import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { LazyCanvas } from "../utils/imageOptimizer";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Building scalable web experiences that feel effortless
Driven by clean design and thoughtful engineering
Crafted with intent.`;

  return (
    <section
      id="home"
      className="flex flex-col justify-center md:justify-end min-h-screen"
      role="region"
      aria-label="Hero section with 3D planet visualization"
    >
      <AnimatedHeaderSection
        subTitle={"Welcome to my portfolio"}
        title={"Hasnain Wali"}
        text={text}
        textColor={"text-black"}
      />
      {/* 
      <LazyCanvas
        fallback={
          <div
            className="absolute inset-0 -z-50 bg-linear-to-br from-gray-900 to-black"
            style={{ width: "100vw", height: "100vh" }}
          />
        }
      >
        <figure
          className="absolute inset-0 -z-50"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas
            shadows
            camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
            dpr={isMobile ? 1 : window.devicePixelRatio}
          >
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <Float speed={0.5}>
                <Planet scale={isMobile ? 0.7 : 1} />
              </Float>
            </Suspense>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 5, -9]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 3, 1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[-5, -1, -1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[10, 1, 0]}
                  scale={16}
                />
              </group>
            </Environment>
          </Canvas>
        </figure>
      </LazyCanvas> */}
    </section>
  );
};

export default Hero;
