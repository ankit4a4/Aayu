'use client'

import { useState, useEffect, useRef } from "react";

import banner1 from "../public/homepageImages/banner2.jpg";
import banner2 from "../public/homepageImages/banner3.jpg";
import banner4 from "../public/homepageImages/banner4.jpg";


const banners = [banner1, banner2, banner4];

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
            <h1 className="text-5xl md:text-[4.2vw] font-[400] mb-4 md:mb-[1.5vw]">Welcome to Aayu Yog Amrit</h1>
            <h2 className="text-2xl md:text-[2.5vw] text-yellow-400 mb-4 md:mb-[1.5vw]">Discover Excellence in Every Step</h2>
            <p className="text-lg md:text-[1.4vw] md:w-[65%] md:leading-[1.6vw] mb-6 md:mb-[1.5vw]">
              Join us in a journey of innovation and quality. Our platform provides top-notch solutions, guidance, and resources that empower you to achieve your goals.
            </p>
            <button className="px-8 py-3 md:py-[1vw] md:px-[3vw]  bg-[#598034]  rounded-lg hover: text-white transition md:text-[1.1vw]">
              Get Started
            </button>
          </div>
        </div>

        {/* Slider 2 */}

        <div className="w-screen h-screen relative flex-shrink-0 overflow-hidden">
          <img src={banner2.src} alt="About Banner" className="w-full h-full object-cover " />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-6 md:px-[5vw] text-white">
            <div className="relative z-10  w-[80%] md:pl-[3vw]">
              <h1 className="text-5xl md:text-[5vw] font-[400] mb-4 md:mb-[1.5vw] ">
                About Us
              </h1>
              <h2 className="text-2xl md:text-[2.7vw] font-light mb-8 md:mb-[1.9vw] text-white ">
                Our Story, Our Mission
              </h2>
              <p className="text-lg md:text-[1.4vw] md:pr-[30%] text-gray-100 mx-auto mb-10 md:mb-[2.3vw] leading-relaxed  delay-500">
                We are dedicated to delivering exceptional quality and service. Our journey started with a vision to make a meaningful impact. Learn more about our values, goals, and the team behind the success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start ">
                <button className="px-8 py-4 md:py-[1vw] md:px-[2vw]  bg-[#598034] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw]  transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/30 flex items-center justify-center">
                  Know More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Slider 3 */}


        <div className="w-screen h-full relative flex-shrink-0">
          {/* Background Image */}
          <img
            src={banner4.src}
            alt="Products Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay + Content */}
          <div className="absolute inset-0 flex flex-col justify-center text-white pl-3 pr-3 md:pl-[40%] py-12">
            <h1 className="text-3xl md:text-[5vw] font-[400] tracking-wide mb-12 drop-shadow-lg">
              Our <span className="text-[#5b7d44]">Products</span>
            </h1>

            {/* Product Cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:pr-[8vw]">
              {/* Product 1 */}
              <div className="relative group rounded-2xl h-[50vh] md:h-[30vw] overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                {/* Product Image */}
                <img
                  src="https://doctorpizza.org/wp-content/uploads/2025/04/Herbal_Tea_Recipe_for_Lung_Detox.png"
                  alt="Product 1"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />

                {/* Glass Content Box */}
                <div className="absolute bottom-0 left-0 right-0  p-2  md:p-6 z-20">
                  <div className="backdrop-blur-md bg-white/50 border md:p-[1.1vw] border-white/20 rounded-xl p-4">
                    <h3 className="text-lg md:text-[1.8vw] font-[500] mb-2 text-black">Aayu Herbal Tea</h3>
                    <p className="text-gray-700 text-sm md:text-[1.1vw] leading-relaxed ">
                      Boosts immunity & promotes relaxation with natural herbs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="relative group h-[50vh] md:h-[30vw] rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                {/* Product Image */}
                <img
                  src="https://wallpaperaccess.com/full/2680927.jpg"
                  alt="Product 2"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />

                {/* Glass Content Box */}
                <div className="absolute bottom-0 left-0 right-0 p-2  md:p-6 z-20">
                  <div className="backdrop-blur-md bg-white/50 border md:p-[1.1vw] border-white/20 rounded-xl p-4">
                    <h3 className="text-lg md:text-[1.8vw] font-[400] mb-2 text-black">Tulsi Drops</h3>
                    <p className="text-gray-700 text-sm md:text-[1.1vw] leading-relaxed ">
                     Pure Tulsi extract for respiratory & overall wellness.
                    </p>
                  </div>
                </div>
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
      <div className="absolute bottom-[1.2vw] left-1/2 transform -translate-x-1/2 flex gap-[0.6vw]">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 md:w-[1.5vw] md:h-[1.5vw] rounded-full transition-colors ${current % banners.length === index ? " bg-[#598034] border-2 border-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
