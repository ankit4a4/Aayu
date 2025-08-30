"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ParticlesContainer from "../../components/ParticlesContainer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Amrit Chyawanprash",
    desc: "Traditional ayurvedic formula for strength & vitality.",
    img: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700,c_pad,q_auto,f_auto/b564478c0ac3406a93f0313153562e46.jpg",
  },
  {
    name: "Tulsi Drops",
    desc: "Pure Tulsi extract for respiratory & overall wellness.",
    img: "https://tiimg.tistatic.com/fp/1/008/627/tulsi-drops-905.jpg",
  },
  {
    name: "Aloe Vera Juice",
    desc: "Detoxifies body and improves digestion naturally.",
    img: "https://www.awesomecuisine.com/wp-content/uploads/2018/12/Aloe_vera_Juice_resized.jpg",
  },

];

export default function ProductSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slick settings for mobile
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <ParticlesContainer />
      <div className="min-h-screen relative z-[52] w-full flex flex-col items-center justify-center px-[2vw] py-[5vh]">
        <motion.h1
          initial={{ y: -2 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[4vh] md:text-[3vw] font-bold text-black mb-[4vh] md:mb-[3vw] text-center"
        >
          Ayurvedic <span className="text-green-500">Products</span>
        </motion.h1>

        {isMobile ? (
          // Mobile Slick Slider
          <div className="w-full">
            <Slider {...settings}>
              {products.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mx-2 bg-white rounded-[3vh] shadow-md border overflow-hidden flex flex-col"
                >
                  <div className="w-full h-[40vh]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-[2vh] flex-1 flex flex-col justify-center text-center">
                    <h2 className="text-[2.2vh] font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-gray-900 font-[400] text-[1.8vh] mt-[0.8vh]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        ) : (
          // Desktop Grid
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="w-full sm:w-[45%] md:w-[30%] bg-white rounded-[3vh] md:rounded-[1.5vw] shadow-md border overflow-hidden flex flex-col"
              >
                <div className="w-full h-[50vh] md:h-[40vh]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-[2vh] md:p-[1vw] flex-1 flex flex-col justify-center text-center">
                  <h2 className="text-[2.2vh] md:text-[1.8vw] font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-gray-900 font-[400] text-[1.8vh] md:text-[1.2vw] mt-[0.8vh] md:mt-[0.4vw]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
