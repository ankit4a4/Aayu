'use client'

import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import Image from "next/image";

import banner1 from "../../public/aboutPageImages/banner1.webp";
import banner2 from "../../public/aboutPageImages/banner2.webp";
import banner4 from "../../public/aboutPageImages/banner3.webp";

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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[100]">
        <ul className="flex gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border border-gray-300 hover:bg-green-500 transition-colors"></button>
    )
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Slider {...settings}>

        {/* /////////////////// slider 1 ///////////////////////////////////// */}
       <div className="w-screen h-screen relative">
  {/* Background Image */}
  <Image
    src={banner1}
    alt="About Background"
    fill
    priority
    quality={80}
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-[4vh] md:px-[8vw] lg:pl-[43%] text-white">
    <div className="inline-flex items-center justify-center w-[6vh] h-[6vh] md:w-[6vw] md:h-[6vw] rounded-full bg-white text-[3vh] md:text-[3vw] mb-[2vh] md:mb-[2vw] shadow-md">
      <FaLeaf className="text-green-700" />
    </div>

    {/* Heading */}
    <h2 className="text-[4vh] md:text-[4.2vw] font-[400] mb-[2vh] md:mb-[1.5vw]">
      About Us
    </h2>

    {/* Intro */}
    <p className="text-[1.8vh] md:text-[1.4vw] md:leading-[1.8vw] mb-[2vh] md:mb-[1.2vw]">
      Aayu Yog Amrit is a trusted name in the world of Ayurveda. From immunity boosters to skincare solutions, herbal supplements to natural oils,
      we create products inspired by ancient Ayurvedic wisdom and backed by modern quality standards.
    </p>

    <p className="text-[1.8vh] md:text-[1.2vw] italic mb-[3vh] md:mb-[1.8vw]">
      "Bringing ancient wisdom to modern wellness"
    </p>

    <p className="text-[1.6vh] md:text-[1.1vw] leading-[3vh] md:leading-[1.8vw] mb-[2vh] md:mb-[1vw]">
      Our mission is to make Ayurveda accessible and relevant for everyone in today’s fast-paced world.
      With a strong focus on purity, sustainability, and innovation, we aim to provide holistic health solutions
      that nurture both body and mind.
    </p>

    <p className="text-[1.6vh] md:text-[1.1vw] leading-[3vh] md:leading-[1.8vw] mb-[2vh] md:mb-[1vw]">
      We believe true wellness comes from balance — balancing nature with science, tradition with innovation, and mind with body.
      That’s why every product is crafted with care, ensuring it not only heals but also enhances everyday living.
    </p>

    {/* Button */}
    <button className="px-[6vh] py-[2vh] md:px-[3vw] md:py-[1vw] bg-[#598034] rounded-[1vh] md:rounded-lg text-white font-medium shadow-lg hover:shadow-green-500/30 transition-all duration-300">
      Know More
    </button>
  </div>
</div>


        {/* /////////////////// slider 2 ///////////////////////////////////// */}
        <div className="w-screen h-screen relative">
  {/* Background Image */}
  <Image
    src={banner2}
    alt="Why Choose Us Background"
    fill
    quality={75}
    loading="lazy"
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-[4vh] md:px-[5vw] lg:pr-[45%] text-white">
    <div className="relative z-10 w-full md:pl-[2vw]">
      {/* Heading */}
      <h2 className="text-[4vh] md:text-[4vw] font-[400] mb-[2vh] md:mb-[1.5vw]">
        Why Choose Us
      </h2>

      {/* Intro */}
      <p className="text-[1.8vh] md:text-[1.3vw] leading-[3vh] md:leading-[1.6vw] mb-[3vh] md:mb-[2vw] max-w-full md:max-w-[55vw] text-gray-200">
        At <span className="font-semibold text-white">Aayu Yog Amrit</span>, we
        are committed to creating herbal and Ayurvedic products that promote
        holistic wellness. Every product is crafted with care, using ancient
        Ayurvedic wisdom combined with modern quality standards to ensure purity
        and effectiveness.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-[2vh] md:gap-[2vw] max-w-full md:max-w-[55vw] mb-[3vh]">
        {[
          { icon: <FaLeaf />, text: "100% Natural & Herbal Products" },
          { icon: <FaStar />, text: "Premium Quality Ingredients" },
          { icon: <FaBookOpen />, text: "Backed by Ayurvedic Science" },
          { icon: <FaSmile />, text: "Thousands of Happy Customers" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-[2vh] md:p-[2vw] rounded-[1.2vh] md:rounded-xl shadow-lg border border-white/30 bg-white/10 backdrop-blur-sm flex items-center space-x-[2vh] md:space-x-[1vw] hover:-translate-y-[0.5vh] hover:bg-white/20 transition-all duration-300"
          >
            <span className="text-[3vh] md:text-[2vw] text-white">
              {item.icon}
            </span>
            <span className="text-[1.8vh] md:text-[1.2vw] font-medium text-white">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <p className="italic text-[1.5vh] md:text-[1.1vw] text-gray-200">
        “Your health is our mission — experience the purity of Ayurveda with us.”
      </p>
    </div>
  </div>
</div>


        {/* /////////////////// slider 3 ///////////////////////////////////// */}
        <div className="w-screen h-screen relative">
          {/* Background Image */}
          <Image
            src={banner4}
            alt="Experience Background"
            fill
            quality={75}
            loading="lazy"
            className="object-cover"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-[4vh] md:px-[5vw] lg:pl-[40%]">
            <div className="max-w-full md:max-w-[55vw]">
              {/* Heading */}
              <h2 className="text-[3vh] md:text-[4vw] font-[400] tracking-wide mb-[2vh] md:mb-[1.5vw] drop-shadow-lg">
                Our Experience
              </h2>

              {/* Intro */}
              <p className="text-[1.8vh] md:text-[1.3vw] leading-[3vh] md:leading-[1.6vw] mb-[3vh] md:mb-[1.5vw] text-gray-200">
                With over a decade of dedication in the Ayurvedic wellness industry,
                <span className="font-semibold text-white"> Aayu Yog Amrit </span> has
                been committed to crafting natural products that touch lives. From
                wellness solutions to skincare, our journey reflects quality, trust, and
                care.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-[2vh] md:gap-[1.5vw] max-w-full md:max-w-[500px]">
                {[
                  { number: 10, label: "Years of Excellence", icon: <FaCalendarAlt /> },
                  { number: 5000, label: "Happy Customers", icon: <FaUsers /> },
                  { number: 200, label: "Natural Products", icon: <FaBox /> },
                  { number: 50, label: "Wellness Experts", icon: <FaUserMd /> },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-[2vh] md:p-[1vw] rounded-[1.2vh] md:rounded-[1vw] shadow-lg text-center border bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-[2.5vh] md:text-[2vw] mb-[1vh] text-white">{stat.icon}</div>
                    <h3 className="text-[2vh] md:text-[1.8vw] font-extrabold text-white">
                      <CountUp start={0} end={stat.number} duration={2.5} />+
                    </h3>
                    <p className="text-[1.5vh] md:text-[1vw] font-medium text-gray-200">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <p className="italic mt-[2vh] md:mt-[1vw] text-[1.5vh] md:text-[1vw] text-gray-300">
                “Decades of excellence, thousands of smiles — our journey is your trust.”
              </p>
            </div>
          </div>
        </div>


      </Slider>
    </div>
  );
};

export default AboutSlider;
