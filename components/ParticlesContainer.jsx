import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0 z-[49]"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 60,
        interactivity: {
          events: { resize: true },
        },
        particles: {
          number: {
            value: 30, // thoda zyada petals
            density: { enable: true, area: 800 },
          },
          move: {
            direction: "bottom",
            enable: true,
            speed: { min: 0.3, max: 1.2 }, // random speed
            outModes: { default: "out" },
            straight: false,
          },
          rotate: {
            value: 0,
            random: true,
            direction: "random",
            animation: { enable: true, speed: 5 },
          },
          tilt: {
            enable: true,
            direction: "random",
            random: true,
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 2 },
          },
          shape: {
            type: "char",
            character: [
              { value: "🌿", font: "Verdana", style: "", weight: "400" },
              { value: "❀", font: "Verdana", style: "", weight: "400" },
              { value: "✦", font: "Verdana", style: "", weight: "400" },
              { value: "🌸", font: "Verdana", style: "", weight: "400" },
            ],
          },
          size: {
            value: { min: 18, max: 35 }, // thoda bada
          },
          opacity: {
            value: { min: 0.2, max: 0.4 }, // depth feel
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
