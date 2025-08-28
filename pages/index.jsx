import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticlesContainer from "../components/ParticlesContainer";
import { useRouter } from "next/router";

const slides = [
  {
    title: "Welcome to Aayu Yog Amrit",
    desc: `Discover the power of Ayurveda with Aayu Yog Amrit. From natural skincare to immunity boosters, we bring you trusted herbal remedies rooted in ancient wisdom. Experience pure, organic, and chemical-free solutions for a healthier lifestyle. 🌿 Enhance your immunity naturally, rejuvenate your skin, and feel the ancient wisdom in every product.`,
    button: { text: "Explore Products", path: "/products" },
  },
  {
    title: "About Us",
    desc: `At Aayu Yog Amrit, we blend timeless Ayurvedic practices with modern wellness needs. Our mission is to promote natural healing, balance, and rejuvenation for a healthier lifestyle. We use only 100% herbal, organic, and chemical-free ingredients in every product we make. Join thousands of happy customers who trust us for authentic Ayurvedic care.`,
    button: { text: "Learn More", path: "/about" },
  },
  {
    title: "Our Products",
    desc: `Explore our wide range of Ayurvedic products — from immunity boosters to skincare essentials. Each product is crafted with care, purity, and authenticity. Experience the goodness of natural herbs, teas, oils, and supplements to elevate your wellness journey.`,
    button: { text: "View Products", path: "/products" },
  },
];

const Home = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [typeDone, setTypeDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setTypeDone(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100vh] relative overflow-hidden">
      {/* overlay bg */}
      <div className="w-full h-full relative z-50 ">
        <div className="flex flex-col justify-center items-center text-center h-full  mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* Title */}
            <motion.h1
              key={index + "-title"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-[4vh] md:text-[4vw] text-black font-bold leading-tight mb-4"
            >
              {!typeDone ? (
                <Typewriter
                  words={[slides[index].title]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={0}
                  delaySpeed={500}
                  loop={1}
                  onLoopDone={() => setTypeDone(true)}
                />
              ) : (
                slides[index].title
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              key={index + "-desc"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-[97vh] md:max-w-[70vw] text-black mx-auto mb-6 text-[2vh] md:text-[1.2vw] leading-relaxed font-[500]"
            >
              {slides[index].desc}
            </motion.p>

            {/* Button */}
            <motion.div
              key={index + "-btn"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => router.push(slides[index].button.path)}
                className="px-[4vh] relative py-[1vh] md:text-[1.3vw] text-[1.7vh] z-50 bg-accent text-white rounded-2xl shadow-lg hover:bg-accent/90 transition"
              >
                {slides[index].button.text}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* particles */}
      <div className="w-full h-full  absolute left-0 top-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
