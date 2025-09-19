'use client'

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";

import banner1 from "../../public/aboutPageImages/banner1.webp";

import {
  FaLeaf,
  FaStar,
  FaBookOpen,
  FaSmile,
  FaCalendarAlt,
  FaUsers,
  FaBox,
  FaUserMd,
  FaHeart,
  FaSeedling,
  FaGlobeAsia,
  FaAward
} from "react-icons/fa";

const AboutUs = () => {
  const router = useRouter()
  return (
    <div className="w-full overflow-y-auto h-screen overflow-x-hidden">
      <div className="w-screen h-[600px] relative">
        <Image
          src={banner1}
          alt="About Background"
          fill
          priority
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-[4vh] md:px-[8vw] lg:pl-[43%] text-white">
          <div className="inline-flex items-center justify-center w-[6vh] h-[6vh] md:w-[6vw] md:h-[6vw] rounded-full bg-white text-[3vh] md:text-[3vw] mb-[1vw] shadow-md">
            <FaLeaf className="text-green-700" />
          </div>

          <h2 className="text-[4vh] md:text-[4.2vw] font-[400] mb-[1vw]">
            About Us
          </h2>

          <p className="text-[1.8vh] md:text-[1.4vw] md:leading-[1.8vw] mb-[1vw]">
            At <span className="font-semibold">Aayu Yogamrit</span>, we believe in enhancing the <i>quality of life</i> for every individual.
            The name <b>“Aayu”</b> signifies the lifespan of every living being on Earth,
            and our mission is to nurture and strengthen that span through the ancient wisdom of Ayurveda.
          </p>

          <p className="italic text-[1.6vh] md:text-[1.2vw] mb-[1vw]">
            "Bringing ancient wisdom to modern wellness"
          </p>

          <p className="text-[1.6vh] md:text-[1.1vw] leading-[3vh] md:leading-[1.8vw] mb-[1vw]">
            While awareness of Ayurveda is growing rapidly, the market still lacks high-quality products.
            Many existing ones fail to deliver real results due to inconsistency in sourcing and production.
            At Aayu Yogamrit, we solve this by sourcing every herb from its <b>place of origin</b>,
            ensuring maximum nutrition, purity, and effectiveness.
          </p>
        </div>
      </div>

      {/* SECTION 2 – Our Values */}
      <div className="w-full py-16 md:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Aayu Yogamrit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="text-4xl text-green-700" />,
                title: "Purity",
                description: "We source herbs from their native regions to ensure maximum potency and nutritional value in every product."
              },
              {
                icon: <FaHeart className="text-4xl text-green-700" />,
                title: "Wellness",
                description: "Our mission is to enhance quality of life through authentic Ayurvedic solutions that work in harmony with nature."
              },
              {
                icon: <FaGlobeAsia className="text-4xl text-green-700" />,
                title: "Sustainability",
                description: "We practice ethical sourcing and production methods that respect both people and the planet."
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">{value.title}</h3>
                <p className="text-green-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3 – Why Choose Us */}
      <div className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Why Choose Aayu Yogamrit</h2>
              <p className="text-lg text-green-600 mb-8">
                Our unique sourcing principle – <b>One Crop, One Location</b> – ensures
                that every herb is grown in its most natural environment.
                Soil, climate, and weather at the origin place provide the best nutrition to the crop,
                making our ingredients rich in nutrients and highly effective.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <FaSeedling className="text-green-700 text-xl" />, text: "100% Natural & Herbal Products" },
                  { icon: <FaAward className="text-green-700 text-xl" />, text: "Premium Quality Ingredients" },
                  { icon: <FaBookOpen className="text-green-700 text-xl" />, text: "Backed by Ayurvedic Science" },
                  { icon: <FaSmile className="text-green-700 text-xl" />, text: "Thousands of Happy Customers" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-lg text-green-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-green-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Our Sourcing Difference</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mt-1 mr-3">
                      1
                    </div>
                    <p>Identify native regions for each herb based on ancient texts</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mt-1 mr-3">
                      2
                    </div>
                    <p>Partner with local farmers practicing traditional cultivation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mt-1 mr-3">
                      3
                    </div>
                    <p>Harvest at peak potency following seasonal rhythms</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mt-1 mr-3">
                      4
                    </div>
                    <p>Process using traditional methods that preserve active compounds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 – Our Experience */}
      <div className="w-full py-16 md:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Journey So Far</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto">
              With over a decade of dedication in the Ayurvedic wellness industry, Aayu Yogamrit has been committed to crafting natural products that touch lives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: 10, label: "Years of Excellence", icon: <FaCalendarAlt className="text-green-700" /> },
              { number: 5000, label: "Happy Customers", icon: <FaUsers className="text-green-700" /> },
              { number: 200, label: "Natural Products", icon: <FaBox className="text-green-700" /> },
              { number: 50, label: "Wellness Experts", icon: <FaUserMd className="text-green-700" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-2xl mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
                  <CountUp start={0} end={stat.number} duration={2.5} />+
                </h3>
                <p className="text-green-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Evolution</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-800 text-2xl font-bold mb-4">
                  2013
                </div>
                <h4 className="text-xl font-semibold mb-2">Foundation</h4>
                <p className="text-green-600">Started with 5 basic Ayurvedic formulations based on ancient recipes</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-800 text-2xl font-bold mb-4">
                  2018
                </div>
                <h4 className="text-xl font-semibold mb-2">Expansion</h4>
                <p className="text-green-600">Launched skincare line and expanded to international markets</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-800 text-2xl font-bold mb-4">
                  2023
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-green-600">Introduced modern delivery formats while preserving traditional efficacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 – Our Vision & Mission */}
      <div className="w-full py-16 md:py-24 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision & Mission</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Our guiding principles that shape our products and practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-900/30 p-8 rounded-2xl backdrop-blur-sm border border-green-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700 text-2xl mb-6">
                <FaGlobeAsia />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-green-100">
                To create a healthier world by reviving the lost treasure of Ayurveda
                and making it accessible to all generations. We envision a future where
                Ayurvedic wisdom is integrated into daily life, promoting holistic wellness
                for individuals and communities worldwide.
              </p>
            </div>

            <div className="bg-green-900/30 p-8 rounded-2xl backdrop-blur-sm border border-green-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-700 text-2xl mb-6">
                <FaLeaf />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-green-100">
                To provide <b>scientifically crafted</b>, 100% natural Ayurvedic
                products that improve wellness and lifestyle globally. We are committed
                to authenticity, quality, and sustainability in every step from farm to formulation,
                making ancient Ayurvedic wisdom accessible in modern life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6 – Testimonials */}
      <div className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-green-600 max-w-3xl mx-auto">
              Authentic experiences from people who have transformed their lives with Aayu Yogamrit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rohit Sharma",
                role: "Regular Customer",
                feedback: "The products are truly authentic. I felt a real difference in my energy levels within weeks. Highly recommend Aayu Yogamrit!",
              },
              {
                name: "Priya Singh",
                role: "Ayurveda Enthusiast",
                feedback: "Finally found Ayurvedic products that are consistent and effective. Their sourcing method is really impressive.",
              },
              {
                name: "Aman Verma",
                role: "Wellness Coach",
                feedback: "Pure quality! You can feel the difference compared to other brands. My whole family uses their products now.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-green-800">{t.name}</h3>
                    <p className="text-green-600 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-green-700 italic">"{t.feedback}"</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 7 – Call to Action */}
      <div className="w-full py-16 md:py-24 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Ayurvedic Journey Today</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Experience the purity and effectiveness of Ayurveda with Aayu Yogamrit.
            From sourcing to production, we ensure every product is rooted in tradition,
            backed by science, and crafted for your well-being.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
            onClick={() => router.push("/product")}
            className="px-8 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-100 transition-colors duration-300 shadow-md">
              Explore Our Products
            </button>
            <button 
              onClick={() => router.push("/contact")}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Contact Our Experts
            </button>
          </div>

          <p className="mt-10 text-green-200">
            Have questions? Call us at   or email info@aayuyogamrit.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;