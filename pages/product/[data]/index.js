import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaStar, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import product1 from "../../../public/product/amlacandy1.jpg";
import product2 from "../../../public/product/amlacandy2.jpg";
import product3 from "../../../public/product/amlacandy3.jpg";
import product4 from "../../../public/product/amlacandy4.webp";
import secondProduct1 from "../../../public/product/salted-amla-candy.jpg";
import secondProduct2 from "../../../public/product/salted-amla-candy1.webp";
import secondProduct3 from "../../../public/product/salted-amla-candy3.jpg";
import secondProduct4 from "../../../public/product/salted-amla-candy4.jpg";

const products = [
  {
    slug: "amla-candy-sweet",
    name: "Amla Candy Sweet",
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
];

const SingleProductPage = () => {
  const router = useRouter();
  const { data: slug } = router.query;
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (!slug) return;
    const found = products.find((p) => p.slug === slug);
    setProduct(found);
  }, [slug]);

  useEffect(() => {
    if (product) setMainImage(product.images[0]);
  }, [product]);

  if (!product)
    return <div className="text-center py-20">Loading product...</div>;

  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <div className="h-screen overflow-y-auto">
      {/* Hero Section */}
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

      {/* Main Content */}
      <div className="overflow-y-auto md:px-[10vw] mx-auto px-4 py-6 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left side: Images */}
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
                className={`md:w-24 m:h-24 w-14 h-14 object-cover border rounded cursor-pointer ${
                  mainImage === img ? "border-green-700" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right side: Details */}
        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-green-700">{product.rating}</span>
          </div>
          <p className="text-green-600 mb-4">{product.desc}</p>

          {/* Benefits */}
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

          {/* Ingredients */}
          <div className="mb-4">
            <h3 className="font-semibold text-green-800 mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside text-green-700">
              {product.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          {/* Health Benefits */}
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

          {/* Usage */}
          <div className="mb-4">
            <h3 className="font-semibold text-green-800 mb-2">Usage:</h3>
            <p className="text-green-700">{product.usage}</p>
          </div>

          {/* Storage */}
          <div className="mb-6">
            <h3 className="font-semibold text-green-800 mb-2">
              Storage Instructions:
            </h3>
            <p className="text-green-700">{product.storage}</p>
          </div>

          {/* WhatsApp Button */}
          <div className="mb-4 flex items-start gap-4 justify-start">
            <a
              href={`https://wa.me/7207257757?text=I am%20interested%20in%20buying%20the%20product%20${product.name}`}
              target="_blank"
              className="px-8 py-4 md:py-[1vw] md:px-[4vw] bg-[#25D366] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-400/30 flex items-center justify-center"
            >
              Chat on WhatsApp
              <FaWhatsapp className="text-white text-xl md:text-[1.5vw] ml-2" />
            </a>

            <button
              onClick={() => alert(`Added ${product.name} to cart!`)}
              className="px-8 py-4 md:py-[1vw] md:px-[4vw] bg-[#b88b1c] text-white font-semibold rounded-[1.1vw] md:text-[1.1vw] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#b88b1c]/50 flex items-center justify-center gap-2"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="mb-6"></div>

          {/* Other Products */}
          {otherProducts.length > 0 && (
            <div>
              <h3 className="text-green-800 font-semibold mb-2">
                Other Products
              </h3>
              <div className="flex gap-4">
                {otherProducts.map((p) => (
                  <img
                    key={p.slug}
                    src={p.images[0]}
                    alt={p.name}
                    className="w-24 h-24 object-cover rounded cursor-pointer border border-gray-300 hover:border-green-700"
                    onClick={() => router.push(`/product/${p.slug}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
