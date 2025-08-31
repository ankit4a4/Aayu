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
  }
];

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const Card = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2 }}
      className="group relative bg-white/10 backdrop-blur-xl rounded-[2vh] pb-[2vh] md:rounded-[2vw] shadow-lg 
                 border border-white/20 flex flex-col items-center text-center
                 hover:scale-105 hover:shadow-2xl transition-all duration-300
                 max-w-[80vw] md:max-w-[20vw] overflow-hidden"
    >
      {/* Glow on Hover */}
      <div className="absolute inset-0 rounded-[2vh] md:rounded-[2vw] bg-gradient-to-tr from-green-400/40 to-yellow-300/40 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

      {/* Image */}
      <div className="relative w-full h-[30vh] md:h-[15vw]">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover rounded-t-[2vh] md:rounded-t-[2vw] transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-[2vh] md:p-[1vw] h-[20vh] md:h-[10vw] flex flex-col justify-center">
        <h2 className="text-[2vh] md:text-[1.9vw] font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
          {item.name}
        </h2>
        <p className="text-gray-700 mt-[1vh] md:mt-[0.5vw] text-[1.5vh] md:text-[1.3vw] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen md:w-[80vw] mx-auto relative z-[51] flex flex-col items-center justify-center px-[2vh] md:px-[2vw] py-[5vh] md:py-[3vw]">
      {/* Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[3vh] md:text-[2vw] font-bold text-black mb-[4vh] md:mb-[2vw] text-center"
      >
        Ayurvedic <span className="text-green-500">Products</span>
      </motion.h1>

      {/* Mobile Slider */}
      <div className="block md:hidden w-full">
        <Slider {...settings}>
          {products.map((item, i) => (
            <div key={i} className="px-[1vh]">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[2vw]">
        {products.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
