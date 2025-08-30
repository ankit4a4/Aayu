"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ParticlesContainer from "../../components/ParticlesContainer";

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
  {
    name: "Ashwagandha Powder",
    desc: "Helps manage stress & boosts stamina.",
    img: "https://www.vahdam.com/cdn/shop/products/AshwagandhaPowder-lifestyle_2048x2048.jpg?v=1678963108",
  },
];

export default function ProductSlider() {
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

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          loop={true}
          speed={600}
          spaceBetween={16}
          grabCursor={true}
          autoplay={{
            delay: 3000, // 3s autoplay
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{ enabled: true }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
          className="w-full"
        >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-[#ffffff] backdrop:blur-2xl rounded-[3vh] md:rounded-[1.5vw] shadow-md border overflow-hidden flex flex-col"
              >
                <div className="w-full ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[50vh] object-cover"
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
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          @media (max-width: 767px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
