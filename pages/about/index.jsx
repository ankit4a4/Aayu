"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

// ✅ Correct react-icons import
import { 
  FaLeaf, 
  FaStar, 
  FaBookOpen, 
  FaSmile, 
  FaCalendarAlt, 
  FaUsers, 
  FaBox, 
  FaUserMd 
} from "react-icons/fa";
import ParticlesContainer from "../../components/ParticlesContainer";

const About = () => {
  const [index, setIndex] = useState(0);
  const sections = ["about", "why", "experience"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = sections[index];

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative  z-[51]">
      <ParticlesContainer />
      <AnimatePresence mode="wait">
        {/* About Section */}
        {current === "about" && (
          <motion.div
            key="about"
            className="h-screen w-screen flex items-center justify-center p-[3vw] max-md:p-[3vh] relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="max-w-[70vw] text-center  rounded-[2vw] max-md:rounded-[2vh] p-[3vw] max-md:p-[3vh] shadow-2xl border">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="inline-flex items-center justify-center w-[6vw] h-[6vw] max-md:w-[6vh] max-md:h-[6vh] rounded-full bg-gray-100 text-[3vw] max-md:text-[3vh] mb-[2vw] max-md:mb-[2vh] shadow-md"
              >
                <FaLeaf />
              </motion.div>
              <h2 className="text-[3vw] max-md:text-[3vh] font-bold mb-[2vw] max-md:mb-[2vh] font-serif text-black">
                About Us
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-[1.5vw] max-md:text-[1.5vh] leading-relaxed mb-[1.5vw] max-md:mb-[1.5vh] max-w-[60vw] mx-auto text-black">
                  Aayu Yog Amrit is a trusted name in the world of Ayurveda. From
                  immunity boosters to skincare solutions, herbal supplements to
                  natural oils, we create products inspired by ancient Ayurvedic
                  wisdom and backed by modern quality standards.
                </p>
                <p className="text-[1.2vw] max-md:text-[1.2vh] italic text-black">
                  "Bringing ancient wisdom to modern wellness"
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Why Choose Us Section */}
        {current === "why" && (
          <motion.div
            key="why"
            className="h-screen w-screen flex flex-col items-center justify-center p-[3vw] max-md:p-[3vh] relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="max-w-[80vw] w-full  rounded-[2vw] max-md:rounded-[2vh] p-[3vw] max-md:p-[3vh] shadow-2xl border">
              <h2 className="text-[3vw] max-md:text-[3vh] font-bold mb-[3vw] max-md:mb-[3vh] text-center font-serif text-black">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] max-md:gap-[2vh] max-w-[70vw] mx-auto">
                {[
                  { icon: <FaLeaf />, text: "100% Natural & Herbal Products" },
                  { icon: <FaStar />, text: "Premium Quality Ingredients" },
                  { icon: <FaBookOpen />, text: "Backed by Ayurvedic Science" },
                  { icon: <FaSmile />, text: "Thousands of Happy Customers" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-[2vw] max-md:p-[2vh]  rounded-[1.5vw] max-md:rounded-[1.5vh] shadow-lg border flex items-center space-x-[1vw] max-md:space-x-[1vh]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-[2.5vw] max-md:text-[2.5vh] text-black">{item.icon}</span>
                    <span className="text-[1.3vw] max-md:text-[1.3vh] font-medium text-black">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Experience Section */}
        {current === "experience" && (
          <motion.div
            key="experience"
            className="h-screen w-screen flex flex-col items-center justify-center p-[3vw] max-md:p-[3vh] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="max-w-[85vw] w-full  rounded-[2vw] max-md:rounded-[2vh] p-[3vw] max-md:p-[3vh] shadow-2xl border">
              <h2 className="text-[3vw] max-md:text-[3vh] font-bold mb-[3vw] max-md:mb-[3vh] text-center font-serif text-black">
                Our Experience
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] max-md:gap-[2vh] max-w-[75vw] mx-auto">
                {[
                  { number: 10, label: "Years of Excellence", icon: <FaCalendarAlt /> },
                  { number: 5000, label: "Happy Customers", icon: <FaUsers /> },
                  { number: 200, label: "Natural Products", icon: <FaBox /> },
                  { number: 50, label: "Wellness Experts", icon: <FaUserMd /> },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-[2vw] max-md:p-[2vh]  rounded-[2vw] max-md:rounded-[2vh] shadow-lg text-center border"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="text-[2.5vw] max-md:text-[2.5vh] mb-[1vw] max-md:mb-[1vh] text-black">
                      {stat.icon}
                    </div>
                    <h3 className="text-[2.5vw] max-md:text-[2.5vh] font-extrabold mb-[1vw] max-md:mb-[1vh] text-black">
                      <CountUp start={0} end={stat.number} duration={2.5} />+
                    </h3>
                    <p className="text-[1.2vw] max-md:text-[1.2vh] font-medium text-black">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-[2vw] max-md:bottom-[2vh] left-1/2 transform -translate-x-1/2 flex space-x-[1vw] max-md:space-x-[1vh] z-10">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-[1vw] h-[1vw] max-md:w-[1vh] max-md:h-[1vh] rounded-full transition-all duration-300 ${
              i === index ? "bg-black scale-125" : "bg-gray-400 hover:bg-black"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-[0.3vw] max-md:h-[0.3vh] bg-black"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        key={index}
      />
    </div>
  );
};

export default About;
