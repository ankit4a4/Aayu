import { useState } from "react";
import { FaStar, FaShoppingCart, FaTruck } from "react-icons/fa";
import api from "../../utils/api";
import toast from "react-hot-toast";
import product1 from "../../public/product/amlacandy1.jpg";
import product2 from "../../public/product/amlacandy2.jpg";
import product3 from "../../public/product/amlacandy3.jpg";
import product4 from "../../public/product/amlacandy4.webp";
import secondProduct1 from "../../public/product/salted-amla-candy.jpg";
import secondProduct2 from "../../public/product/salted-amla-candy1.webp";
import secondProduct3 from "../../public/product/salted-amla-candy3.jpg";
import secondProduct4 from "../../public/product/salted-amla-candy4.jpg";
import thirdproduct from "../../public/product/mix-fruit.png";

const products = [
  {
    slug: "amla-candy-sweet",
    name: "Amla Candy Sweet",
    size: "500mg",
    price: 285,
    delivery: "Free Delivery within 3–5 business days across India.",
    desc: "Delicious sweet amla candy made with natural ingredients for daily wellness. Perfect snack for boosting immunity and maintaining energy throughout the day.",
    images: [product1.src, product2.src, product3.src, product4.src],
    rating: 4.9,
    benefits: ["Rich in Vitamin C", "Immunity Booster", "Tasty & Healthy"],
    ingredients: ["Amla (Indian Gooseberry)", "Sugar", "Cardamom"],
    usage:
      "Consume 1-2 pieces daily after meals. Suitable for adults and children.",
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep sealed to maintain freshness.",
    healthBenefits: [
      "Boosts immunity naturally",
      "Supports digestive health",
      "Improves skin and hair health",
    ],
  },
  {
    slug: "amla-candy-salted",
    name: "Amla Candy Salted",
    size: "500mg",
    price: 285,
    delivery: "₹49 Delivery charge | Free shipping on orders above ₹499.",
    desc: "Tangy salted amla candy that aids digestion and boosts immunity. A perfect snack with a tangy twist for all age groups.",
    images: [
      secondProduct1.src,
      secondProduct2.src,
      secondProduct3.src,
      secondProduct4.src,
    ],
    rating: 4.8,
    benefits: ["Improves Digestion", "Natural Antioxidant", "Travel Friendly"],
    ingredients: ["Amla (Indian Gooseberry)", "Salt", "Black Salt", "Spices"],
    usage: "Consume 1-2 pieces daily after meals or as a healthy snack.",
    storage: "Keep in airtight container in a cool, dry place. Avoid moisture.",
    healthBenefits: [
      "Enhances digestion naturally",
      "Boosts immunity and energy",
      "Acts as natural detoxifier",
    ],
  },
  {
    slug: "mix-fruit-sweets",
    name: "MIX FRUIT SWEETS",
    size: "1Kg",
    price: 795,
    delivery: "₹49 Delivery charge | Free shipping on orders above ₹499.",
    desc: "Tangy salted amla candy that aids digestion and boosts immunity. A perfect snack with a tangy twist for all age groups.",
    images: [
      thirdproduct.src,
      thirdproduct.src,
      thirdproduct.src,
      thirdproduct.src,
    ],
    rating: 4.8,
    benefits: ["Improves Digestion", "Natural Antioxidant", "Travel Friendly"],
    ingredients: [
      "Amla Laddoo",
      "Mael Barfi",
      "Mango Barfi",
      "Amla Barfi (Mix Dry Fruits)",
      "Guava Barfi",
      "Amla Barfi",
    ],
    usage: "Consume 1-2 pieces daily after meals or as a healthy snack.",
    storage: "Keep in airtight container in a cool, dry place. Avoid moisture.",
    healthBenefits: [
      "Enhances digestion naturally",
      "Boosts immunity and energy",
      "Acts as natural detoxifier",
    ],
  },
];

export async function getStaticPaths() {
  const paths = products.map((p) => ({
    params: { data: p.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.data);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
}

// 🔹 Page Component
const SingleProductPage = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = async () => {
    try {
      await api.post("/cart/add", {
        items: [
          {
            name: product.name,
            quantity: 1,
            price: product.price,
          },
        ],
      });
      toast.success("Product added to cart!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div
        className="w-full h-96 relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          {product.name}
        </h1>
      </div>

      <div className="overflow-y-auto md:px-[10vw] mx-auto px-4 py-6 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Images */}
        <div>
          <div className="border rounded-lg overflow-hidden mb-4">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full md:h-[500px] object-contain"
            />
          </div>
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name}-${i}`}
                className={`md:w-24 w-14 h-14 object-cover border rounded cursor-pointer ${
                  mainImage === img ? "border-green-700" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Details */}
        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            {product.name}
            <span className="text-sm font-medium text-white bg-green-300 px-2 py-1 rounded-full ml-2">
              {product.size || "Size N/A"}
            </span>
          </h1>

          <p className="text-2xl font-semibold text-green-900 mb-4">
            ₹{product.price}
          </p>

          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-green-700">{product.rating}</span>
          </div>

          <p className="text-green-600 mb-4">{product.desc}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {product.benefits.map((b, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-green-800 mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-green-700">
              {product.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-green-800 mb-2">
              Health Benefits:
            </h3>
            <ul className="list-disc list-inside text-green-700">
              {product.healthBenefits.map((hb, i) => (
                <li key={i}>{hb}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-green-800 mb-2">Usage:</h3>
            <p className="text-green-700">{product.usage}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-green-800 mb-2">
              Storage Instructions:
            </h3>
            <p className="text-green-700">{product.storage}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <FaTruck className="text-green-600" /> Delivery Information:
            </h3>
            <p className="text-green-700">{product.delivery}</p>
          </div>

          <div className="mb-4 flex items-start gap-4">
            <a
              href={`https://wa.me/7207257757?text=I am%20interested%20in%20buying%20the%20product%20${product.name}`}
              target="_blank"
              className="w-full bg-green-600 text-center text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Chat WhatsApp
            </a>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#b88b1b] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
