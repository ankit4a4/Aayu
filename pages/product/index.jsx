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

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="min-h-screen md:w-[80%] mx-auto relative z-[53] flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold text-black mb-8 text-center"
      >
        Ayurvedic <span className="text-green-500">Products</span>
      </motion.h1>

      {/* Slider */}
      <div className="w-full">
        <Slider {...settings}>
          {products.map((item, i) => (
            <div key={i} className="px-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg 
                           border border-white/20 flex flex-col items-center text-center
                           hover:scale-105 hover:shadow-2xl transition-all duration-300
                           max-w-xs mx-auto h-96 overflow-hidden"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-400/40 to-yellow-300/40 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

                {/* Image */}
                <div className="relative w-full h-2/3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-t-2xl transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 h-1/3 flex flex-col justify-center">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {item.name}
                  </h2>
                  <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
