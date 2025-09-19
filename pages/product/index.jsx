"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLeaf, FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import img from "../../public/productPageImage/banner.webp"
import { useRouter } from "next/navigation";

const products = [
  {
    name: "Aayu Herbal Tea",
    desc: "Boosts immunity & promotes relaxation with natural herbs.",
    img: "https://doctorpizza.org/wp-content/uploads/2025/04/Herbal_Tea_Recipe_for_Lung_Detox.png",
    rating: 4.8,
    benefits: ["Immunity Boost", "Stress Relief", "Digestive Health"]
  },
  {
    name: "Amrit Chyawanprash",
    desc: "Traditional ayurvedic formula for strength & vitality.",
    img: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700,c_pad,q_auto,f_auto/b564478c0ac3406a93f0313153562e46.jpg",
    rating: 4.9,
    benefits: ["Energy Boost", "Respiratory Health", "Anti-Aging"]
  },
  {
    name: "Tulsi Drops",
    desc: "Pure Tulsi extract for respiratory & overall wellness.",
    img: "https://tiimg.tistatic.com/fp/1/008/627/tulsi-drops-905.jpg",
    rating: 4.7,
    benefits: ["Respiratory Support", "Immunity", "Stress Relief"]
  },
  {
    name: "Ashwagandha Capsules",
    desc: "Pure ashwagandha extract for stress relief and vitality.",
    img: "https://goldenacaciaherrbals.com/wp-content/uploads/2021/11/goldenacacia_ashwagandha-30-capsules.jpg",
    rating: 4.6,
    benefits: ["Stress Relief", "Energy", "Hormonal Balance"]
  },
  {
    name: "Triphala Tablets",
    desc: "Natural digestive support with three powerful fruits.",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/5/PC/PV/DQ/9637722/himalaya-triphala-tablets-500x500.jpg",
    rating: 4.5,
    benefits: ["Digestive Health", "Detoxification", "Eye Health"]
  },
  {
    name: "Brahmi Oil",
    desc: "Enhances memory and promotes hair growth naturally.",
    img: "https://thriveeffortlessly.com/wp-content/uploads/2024/02/Brahmi-Oil-1024x585.png",
    rating: 4.7,
    benefits: ["Brain Health", "Hair Growth", "Stress Relief"]
  },
];

const Product = () => {
  const router = useRouter()
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
    swipe: true,
    draggable: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden bg-green-50">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] relative  overflow-hidden"
        style={{
          backgroundImage: `url('${img.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/70  z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-green-700 text-2xl mb-6">
              <FaLeaf />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-green-300">Ayurvedic</span> Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our range of <span className="font-semibold">100% natural Ayurvedic products</span>,
              crafted to bring balance, health, and vitality into your daily life.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="italic text-green-200 text-lg"
            >
              "Ayurveda for everyday wellness – naturally."
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Featured Products</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto">
              Our most popular Ayurvedic formulations, crafted with care and traditional wisdom
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="block md:hidden mb-12">
            <Slider {...sliderSettings}>
              {products.slice(0, 3).map((product, i) => (
                <div key={i} className="px-2 outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                        <div className="flex items-center text-yellow-400">
                          <FaStar className="text-sm" />
                          <span className="text-green-700 text-sm ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-green-600 mb-4">{product.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.benefits.slice(0, 2).map((benefit, index) => (
                          <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Featured Products Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.slice(0, 3).map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-green-800">{product.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <FaStar className="text-sm" />
                      <span className="text-green-700 text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-green-600 mb-4">{product.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.benefits.map((benefit, index) => (
                      <span key={index} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Product Range</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto">
              Explore our complete collection of authentic Ayurvedic formulations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-green-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <FaStar className="text-xs" />
                      <span className="text-green-700 text-xs ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-green-600 text-sm mb-4">{product.desc}</p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Products</h2>
            <p className="text-lg text-green-200 max-w-3xl mx-auto">
              Our commitment to quality and authenticity sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaLeaf className="text-2xl" />, title: "100% Natural", description: "Made with pure, natural ingredients sourced from their native regions" },
              { icon: <FaStar className="text-2xl" />, title: "Premium Quality", description: "Rigorous quality control ensures the highest standards" },
              { icon: <FaHeart className="text-2xl" />, title: "Authentic Formulations", description: "Based on ancient Ayurvedic texts and traditional recipes" },
              { icon: <FaShoppingCart className="text-2xl" />, title: "Easy Delivery", description: "Free shipping on orders above ₹999 across India" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-green-700/30 p-6 rounded-xl text-center backdrop-blur-sm border border-green-500/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-green-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Begin Your Ayurvedic Journey</h2>
          <p className="text-lg text-green-600 mb-10 max-w-2xl mx-auto">
            Experience the difference that authentic, high-quality Ayurvedic products can make in your life
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
            onClick={() => router.push("contact")}
             className="bg-white hover:bg-green-100 text-green-700 border border-green-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Consult Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
