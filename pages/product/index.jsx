"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Aayu Herbal Tea",
    desc: "Boosts immunity & promotes relaxation with natural herbs.",
    img: "https://doctorpizza.org/wp-content/uploads/2025/04/Herbal_Tea_Recipe_for_Lung_Detox.png",
  },
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
];

const Product = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipe: true,      // ✅ swipe allow
    draggable: true,  // ✅ draggable allow
    adaptiveHeight: true, // optional: slide height adjusts automatically
  };

  return (
    <div className="w-screen h-screen relative">
      {/* Background Image */}
      <img
        src="/productPageImage/banner.webp"
        alt="Product Background"
        className="w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-[5vw] md:px-[5vw] md:pl-[40%]">
        <div className="w-[100%] md:max-w-[60vw]">
          {/* Heading */}
          <h2 className="text-[4vh] md:text-[4vw] font-[400] mb-[2vh] md:mb-[1vw]">
            Our <span className="text-green-400">Products</span>
          </h2>

          {/* Intro */}
          <p className="text-[2vh] md:text-[1.2vw] mb-[3vh] md:mb-[1vw] leading-[3vh] md:leading-[1.6vw] text-gray-200">
            Discover our range of <span className="text-white font-semibold">100% Ayurvedic products</span>,
            crafted to bring balance, health, and vitality into your daily life.
            Each formula is inspired by ancient wisdom and backed by modern standards.
          </p>

          {/* Mobile Slider */}
          <div className="block md:hidden w-full">
            <Slider {...sliderSettings}>
              {products.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-md  rounded-xl shadow-md border border-white/20 
                             hover:scale-105 transition-all duration-300 "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[25vh] object-cover rounded-lg mb-[1.5vh]"
                  />
                  <h3 className="text-[2.5vh] font-semibold text-white mb-[1vh] px-3">
                    {item.name}
                  </h3>
                  <p className="text-[1.8vh] text-gray-200 px-3">{item.desc}</p>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-[1vw] max-w-[100%]">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-[1vw] rounded-xl shadow-md border border-white/20 
                           hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[15vw] object-cover rounded-lg mb-[1vw]"
                />
                <h3 className="text-[1.8vw] font-semibold text-white mb-[0.5vw]">
                  {item.name}
                </h3>
                <p className="text-[1.3vw] text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <p className="italic mt-[2vh] md:mt-[1vw] text-[1.8vh] md:text-[1vw] text-gray-300">
            “Ayurveda for everyday wellness – naturally.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
