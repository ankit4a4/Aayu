import { motion } from "framer-motion";
import { BsArrowRight, BsPhone, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { useState } from "react";
import banner from "../../public/contactPageImage/banner.webp";
import { FaLeaf, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";


const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  const form = e.target;

  emailjs
    .sendForm(
      "service_gc831ko",   // replace with your EmailJS service ID
      "template_ul7ggwo",  // replace with your EmailJS template ID
      form,
      "qo6SLdXEADDbP3U52"    // replace with your EmailJS public key
    )
    .then(
      () => {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      },
      (error) => {
        console.error("Email send failed:", error);
        alert("Something went wrong. Please try again later.");
      }
    )
    .finally(() => setIsLoading(false));
};


  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto w-full bg-green-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img
          src={banner.src}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-green-700 text-2xl mb-4">
              <FaLeaf />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us for any questions or inquiries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-4">
                    <BsPhone className="text-lg" />
                  </div>
                  <a href="tel:917207257757">
                    <h3 className="font-semibold text-green-800">Phone</h3>
                    <p className="text-green-600"> </p>
                    <p className="text-green-600">+91 72072 57757</p>
                  </a>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-4">
                    <BsEnvelope className="text-lg" />
                  </div>
                  <a href="mailto:aayuyogamrit@gmail.com">
                    <h3 className="font-semibold text-green-800">Email</h3>
                    <p className="text-green-600">aayuyogamrit@gmail.com</p>
                    <p className="text-green-600"> </p>
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-green-100">
                <h3 className="font-semibold text-green-800 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-600">Monday - Friday</span>
                    <span className="text-green-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Saturday</span>
                    <span className="text-green-800 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Sunday</span>
                    <span className="text-green-800 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Send us a Message</h2>
              <p className="text-green-600 mb-6">We'll get back to you as soon as possible</p>

              <motion.form
                initial="hidden"
                animate="show"
                exit="hidden"
                onSubmit={handleSubmit}
                autoComplete="off"
                autoCapitalize="off"
                data-netlify="true"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-green-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="w-full border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    className="w-full border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    disabled={isLoading}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    disabled={isLoading}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden group"
                >
                  <span className="group-hover:-translate-x-[120%] group-hover:opacity-0 transition-all duration-300">
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </span>
                  <BsArrowRight
                    className="absolute text-xl -translate-x-[120%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                    aria-hidden
                  />
                </button>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >

        </motion.div>
      </div>

      <a
        href="https://wa.me/917207257757?text=Hi!%20I%20have%20a%20question."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 md:right-[6vw] md:bottom-[3.5vw] z-50"
      >
        <div
          className="bg-[#25D366] rounded-full p-2 shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        >
          <FaWhatsapp className="text-white" size={28} />
        </div>
      </a>
    </div>
  );
};

export default Contact;
