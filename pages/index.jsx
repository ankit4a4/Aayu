'use client'

import { useState, useEffect, useRef } from "react";

import banner1 from "../public/homepageImages/banner2.jpg";
import banner2 from "../public/homepageImages/banner3.jpg";
import banner3 from "../public/homepageImages/banner1.jpg";
import banner4 from "../public/homepageImages/banner4.jpg";

const banners = [banner1, banner2, banner3, banner4];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setTransitioning(true);
    setCurrent(prev => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (current === banners.length) {
      setTransitioning(false);
      setCurrent(0);
    }
  };

  const handleDotClick = (index) => {
    setTransitioning(true);
    setCurrent(index);
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Slides */}
      <div
        ref={sliderRef}
        className={`flex h-full ${transitioning ? "transition-transform duration-1000" : ""}`}
        style={{ transform: `translateX(-${current * 100}vw)` }}
        onTransitionEnd={handleTransitionEnd}
      >
       {/* Slider 1 */}
        <div className="w-screen h-full relative flex-shrink-0">
          <img src={banner1.src} alt="Hero Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0  flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
            <h1 className="text-5xl md:text-[3.8vw] font-bold mb-4 md:mb-[1.5vw]">Welcome to Aayu Yog Amrit</h1>
            <h2 className="text-2xl md:text-[2.5vw] text-yellow-400 mb-4 md:mb-[1.5vw]">Discover Excellence in Every Step</h2>
            <p className="text-lg md:text-[1.4vw] md:w-[65%] leading-[1.6vw] mb-6 md:mb-[1.5vw]">
              Join us in a journey of innovation and quality. Our platform provides top-notch solutions, guidance, and resources that empower you to achieve your goals.
            </p>
            <button className="px-8 py-3 md:py-[1vw] md:px-[3vw] bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition md:text-[1.1vw]">
              Get Started
            </button>
          </div>
        </div>

       {/* Slider 2 */}

        <div className="w-screen h-screen relative flex-shrink-0 overflow-hidden">
          <img src={banner2.src} alt="About Banner" className="w-full h-full object-cover scale-110 animate-zoomIn" />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-center px-6 md:px-16 text-white">
            <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-yellow-400 opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-yellow-400 opacity-60"></div>
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInDown">
                About <span className="text-yellow-400">Us</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-100 animate-fadeIn delay-300">
                Our <span className="font-medium text-yellow-300">Story</span>, Our <span className="font-medium text-yellow-300">Mission</span>
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeIn delay-500">
                We are dedicated to delivering exceptional quality and service. Our journey started with a vision to make a meaningful impact. Learn more about our values, goals, and the team behind the success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-700">
                <button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/30 flex items-center justify-center">
                  Know More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </div>

       {/* Slider 3 */}

        <div className="w-screen h-full relative flex-shrink-0">
          <img src={banner3.src} alt="Services Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center  px-6 md:px-16 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Core Services</h1>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
                <h3 className="text-2xl font-bold mb-2">Service One</h3>
                <p>High-quality solution tailored to your needs.</p>
              </div>
              <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
                <h3 className="text-2xl font-bold mb-2">Service Two</h3>
                <p>Professional guidance at every step of your journey.</p>
              </div>
              <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full md:w-1/3">
                <h3 className="text-2xl font-bold mb-2">Service Three</h3>
                <p>Innovative tools to boost efficiency and productivity.</p>
              </div>
            </div>
          </div>
        </div>

       {/* Slider 4 */}

        <div className="w-screen h-full relative flex-shrink-0">
          <img src={banner4.src} alt="Why Choose Us Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose Us</h1>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition">
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p>Skilled professionals delivering excellence.</p>
              </div>
              <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition">
                <h3 className="text-2xl font-bold mb-2">Proven Track Record</h3>
                <p>Years of experience with happy clients.</p>
              </div>
              <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg w-full md:w-1/3 hover:scale-105 transform transition">
                <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
                <p>Creative approaches to solve complex problems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clone of first slide for smooth loop */}
        <div className="w-screen h-full relative flex-shrink-0">
          <img src={banner1.src} alt="Hero Banner Clone" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-colors ${current % banners.length === index ? "bg-yellow-400" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
