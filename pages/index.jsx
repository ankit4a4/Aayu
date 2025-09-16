'use client'

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import banner1 from "../public/homepageImages/banner2-min.webp";
import banner2 from "../public/homepageImages/banner3-min.webp";
import banner4 from "../public/homepageImages/banner4-min.webp";

// Import slick slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banners = [banner1, banner2, banner4];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <div className="absolute bottom-[1.2vw] left-1/2 transform -translate-x-1/2 flex gap-[0.6vw] z-50">
        <ul className="flex gap-[0.6vw]"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-4 h-4 md:w-[1.5vw] md:h-[1.5vw] rounded-full transition-colors bg-white/50 border-2 border-white"></button>
    )
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="w-screen h-screen relative">
          <Image
            src={banner1}
            alt="Hero Banner"
            fill
            priority // First slide fast load
            quality={80}
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
            <h1 className="text-5xl md:text-[4.2vw] font-[400] mb-4 md:mb-[1.5vw]">Welcome to Aayu Yog Amrit</h1>
            <h2 className="text-2xl md:text-[2.5vw] text-yellow-400 mb-4 md:mb-[1.5vw]">Discover Excellence in Every Step</h2>
            <p className="text-lg md:text-[1.4vw] md:w-[65%] md:leading-[1.6vw] mb-6 md:mb-[1.5vw]">
              Join us in a journey of innovation and quality. Our platform provides top-notch solutions, guidance, and resources that empower you to achieve your goals.
            </p>
            <button className="px-8 py-3 md:py-[1vw] md:px-[3vw] bg-[#598034] rounded-lg text-white hover:transition md:text-[1.1vw]">
              Get Started
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-screen h-screen relative">
          <Image
            src={banner2}
            alt="About Banner"
            fill
            quality={75}
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-6 md:px-[5vw] text-white">
            <div className="relative z-10 w-[80%] md:pl-[3vw]">
              <h1 className="text-5xl md:text-[5vw] font-[400] mb-4 md:mb-[1.5vw]">About Us</h1>
              <h2 className="text-2xl md:text-[2.7vw] font-light mb-8 md:mb-[1.9vw] text-white">Our Story, Our Mission</h2>
              <p className="text-lg md:text-[1.4vw] md:pr-[30%] text-gray-100 mx-auto mb-10 md:mb-[2.3vw] leading-relaxed">
                We are dedicated to delivering exceptional quality and service. Our journey started with a vision to make a meaningful impact. Learn more about our values, goals, and the team behind the success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button className="px-8 py-4 md:py-[1vw] md:px-[2vw] bg-[#598034] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/30 flex items-center justify-center">
                  Know More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-screen h-screen relative">
          <Image
            src={banner4}
            alt="Products Banner"
            fill
            quality={75}
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-white pl-3 pr-3 md:pl-[40%] py-12">
            <h1 className="text-3xl md:text-[5vw] font-[400] tracking-wide mb-12 drop-shadow-lg">
              Our <span className="text-[#5b7d44]">Products</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pr-[8vw]">
              {/* Product 1 */}
              <div className="relative group rounded-2xl h-[50vh] md:h-[30vw] overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                <Image
                  src="https://doctorpizza.org/wp-content/uploads/2025/04/Herbal_Tea_Recipe_for_Lung_Detox.png"
                  alt="Product 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 z-20">
                  <div className="backdrop-blur-md bg-white/50 border md:p-[1.1vw] border-white/20 rounded-xl p-4">
                    <h3 className="text-lg md:text-[1.8vw] font-[500] mb-2 text-black">Aayu Herbal Tea</h3>
                    <p className="text-gray-700 text-sm md:text-[1.1vw] leading-relaxed">
                      Boosts immunity & promotes relaxation with natural herbs.
                    </p>
                  </div>
                </div>
              </div>
              {/* Product 2 */}
              <div className="relative hidden md:block group h-[50vh] md:h-[30vw] rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                <Image
                  src="https://wallpaperaccess.com/full/2680927.jpg"
                  alt="Product 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 z-20">
                  <div className="backdrop-blur-md bg-white/50 border md:p-[1.1vw] border-white/20 rounded-xl p-4">
                    <h3 className="text-lg md:text-[1.8vw] font-[400] mb-2 text-black">Tulsi Drops</h3>
                    <p className="text-gray-700 text-sm md:text-[1.1vw] leading-relaxed">
                      Pure Tulsi extract for respiratory & overall wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Home;
