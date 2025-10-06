"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLeaf, FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import img from "../../public/productPageImage/banner.webp";
import { useRouter } from "next/navigation";
import product1 from "../../public/product/amlacandy1.jpg";
import product2 from "../../public/product/salted-amla-candy.jpg";

const products = [
  {
    name: "Amla Candy Sweet",
    slug: "product/amla-candy-sweet",
    desc: "Delicious sweet amla candy made with natural ingredients for daily wellness.",
    img: product1.src,
    rating: 4.9,
    benefits: ["Rich in Vitamin C", "Immunity Booster", "Tasty & Healthy"],
  },
  {
    name: "Amla Candy Salted",
    slug: "product/amla-candy-salted",
    desc: "Tangy salted amla candy that aids digestion and boosts immunity.",
    img: product2.src,
    rating: 4.8,
    benefits: ["Improves Digestion", "Natural Antioxidant", "Travel Friendly"],
  },
];

const Product = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden bg-green-50">
      {/* Hero Section */}
      <div
        className="w-full md:h-[400px] h-[600px] relative overflow-hidden"
        style={{
          backgroundImage: `url('${img.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>
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
              Discover our range of{" "}
              <span className="font-semibold">100% natural Ayurvedic products</span>, crafted to bring balance, health, and vitality into your daily life.
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
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Featured Products</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto">
              Our most popular Ayurvedic formulations, crafted with care and traditional wisdom
            </p>
          </div>

          {/* Desktop Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-16">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-100"
              >
                <div className="relative md:h-[50vh] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
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
                  <div className="flex  gap-3">
                    <button
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                      onClick={() => router.push(`${product.slug}`)}
                    >
                      Read More
                    </button>
                    <button
                      className="w-full bg-[#b88b1b] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition"
                      onClick={() => alert(`Added ${product.name} to cart!`)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
