'use client';

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

import banner1 from "../public/homepageImages/banner2-min.webp";
import banner2 from "../public/homepageImages/banner3-min.webp";
import banner4 from "../public/homepageImages/banner4-min.webp";
import product1 from "../public/product/amlacandy1.jpg";
import product2 from "../public/product/salted-amla-candy.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const router = useRouter();



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
    appendDots: (dots) => (
      <div className="absolute bottom-[1.2vw] left-1/2 transform -translate-x-1/2 flex gap-[0.6vw] z-50">
        <ul className="flex gap-[0.6vw]"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-4 h-4 md:w-[1.5vw] md:h-[1.5vw] rounded-full transition-colors bg-white/50 border-2 border-white"></button>
    ),
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Slider {...settings}>

        {/* 🌿 Slide 1 - Welcome */}
        <div className="w-screen h-screen relative">
          <Image
            src={banner1}
            alt="Hero Banner"
            fill
            priority
            quality={80}
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 text-white">
            <h1 className="text-5xl md:text-[4.2vw] font-[400] mb-4 md:mb-[1.5vw]">
              Welcome to Aayu Yogamrit
            </h1>
            <h2 className="text-2xl md:text-[2.5vw] text-yellow-400 mb-4 md:mb-[1.5vw]">
              Enhancing the Quality of Life
            </h2>
            <p className="text-lg md:text-[1.4vw] md:w-[65%] md:leading-[1.6vw] mb-6 md:mb-[1.5vw]">
              “Aayu” means the life span of every living being. Our mission is to enhance and enrich
              the Aayu of human civilization by offering authentic Ayurvedic solutions rooted in
              nature’s best resources.
            </p>

            {/* ✅ WhatsApp Button */}
            <a
              href="https://wa.me/7207257757?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20Ayurvedic%20products."
              target="_blank"
              className="px-8 py-4 md:py-[1vw] md:px-[2vw] bg-[#25D366] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-400/30 flex items-center justify-center"
            >
              Chat on WhatsApp
              <FaWhatsapp className="text-white text-xl md:text-[1.5vw] ml-2" />
            </a>
          </div>
        </div>

        {/* 🌿 Slide 2 - About */}
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
              <h2 className="text-2xl md:text-[2.7vw] font-light mb-8 md:mb-[1.9vw] text-white">
                Our Story, Our Mission
              </h2>
              <p className="text-lg md:text-[1.4vw] md:pr-[30%] text-gray-100 mx-auto mb-10 md:mb-[2.3vw] leading-relaxed">
                Awareness for Ayurveda is rising rapidly, yet the market lacks consistent quality
                products. At Aayu Yogamrit, we solve this by sourcing every medicine from its
                original place of harvest—where soil, climate, and nutrients are naturally balanced.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button
                  onClick={() => router.push("/about")}
                  className="px-8 py-4 md:py-[1vw] md:px-[2vw] bg-[#598034] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/30 flex items-center justify-center"
                >
                  Know More
                </button>

                {/* ✅ WhatsApp Button */}
                <a
                  href="https://wa.me/7207257757?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20Ayurvedic%20products."
                  target="_blank"
                  className="px-8 py-4 md:py-[1vw] md:px-[2vw] bg-[#25D366] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-400/30 flex items-center justify-center"
                >
                  Chat on WhatsApp
                  <FaWhatsapp className="text-white text-xl md:text-[1.5vw] ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 🌿 Slide 3 - Products / USP */}
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
            <h1 className="text-3xl md:mt-3 md:text-[5vw] font-[400] tracking-wide mb-12 drop-shadow-lg">
              Our <span className="text-[#5b7d44]">Products</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pr-[8vw]">
              {/* Product 1 */}
              <div className="relative group bg-white rounded-2xl h-[50vh] md:h-[22vw] overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                <Image
                  src={product1.src}
                  alt="Amla Candy Sweet"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transform group-hover:scale-110 transition duration-700"
                  onClick={() => router.push("/product/amla-candy-sweet")}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 z-20">
                  <div className="backdrop-blur-md bg-white/50 border md:p-[1.1vw] border-white/20 rounded-xl p-4">
                    <h3 className="text-lg md:text-[1.8vw] font-[500] mb-2 text-black">Amla Candy Sweet</h3>
                    <p className="text-gray-700 text-sm md:text-[1.1vw] leading-relaxed">
                      Delicious sweet amla candy made with natural ingredients for daily wellness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="relative hidden md:block bg-white group h-[50vh] md:h-[22vw] rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
                <Image
                  src={product2.src}
                  alt="Amla Candy Salted"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transform group-hover:scale-110 transition duration-700"
                  onClick={() => router.push("/product/amla-candy-salted")}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 z-20">
                  <div className="backdrop-blur-md bg-white/50 border md:p-[1.1vw] border-white/20 rounded-xl p-4">
                    <h3 className="text-lg md:text-[1.8vw] font-[400] mb-2 text-black">Amla Candy Salted</h3>
                    <p className="text-gray-700 text-sm md:text-[1.1vw] leading-relaxed">
                      Tangy salted amla candy that aids digestion and boosts immunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-[1.3vw] md:pr-[30%] leading-relaxed mt-8 md:mt-12 text-gray-600">
              Our USP lies in delivering consistent quality Ayurvedic products that ensure better
              results and make treatments truly trustworthy.
            </p>

            {/* ✅ WhatsApp Button */}
            <div className="mt-6 flex justify-center md:justify-start md:pl-0">
              <a
                href="https://wa.me/7207257757?text=Hello!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20Ayurvedic%20products."
                target="_blank"
                className="px-8 py-4 md:py-[1vw] md:px-[2vw] bg-[#25D366] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-400/30 flex items-center justify-center"
              >
                Chat on WhatsApp
                <FaWhatsapp className="text-white text-xl md:text-[1.5vw] ml-2" />
              </a>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Home;
