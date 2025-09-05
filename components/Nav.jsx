"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiEnvelope,
  HiBars3,
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandPointDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";

const links = [
  { label: "Home", href: "/", Icon: HiHome },
  { label: "About", href: "/about", Icon: HiUser },
  { label: "Product", href: "/product", Icon: HiRectangleGroup },
  { label: "Contact", href: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar (right side) */}
      <aside className="hidden md:flex fixed top-0 right-0 h-[100vh] w-[6vw] bg-transparent flex-col items-center justify-between py-[6vh] z-[61]">
        {/* Top Section */}
        <div className="flex flex-col items-center">
          <motion.div
            className="mt-[2vh] mb-[1.5vh] text-gray-800"
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHandPointDown className="text-[2vw]" />
          </motion.div>

          <button
            onClick={() => setOpen(true)}
            className="mt-[1.5vw] font-bold text-gray-800 tracking-widest rotate-90 hover:text-accent transition-colors text-[1vw]"
          >
            MENUS
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <p className="text-[0.8vw] text-gray-600 rotate-90 whitespace-nowrap font-medium tracking-widest">
            Empowering Security
          </p>
        </div>

        <div className="flex flex-col items-center gap-[1.5vw] mb-[2vh]">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-accent transition-colors text-gray-700 text-[1.5vw]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-accent transition-colors text-gray-700 text-[1.5vw]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-accent transition-colors text-gray-700 text-[1.5vw]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-accent transition-colors text-gray-700 text-[1.5vw]"
          >
            <FaFacebook />
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="flex md:hidden fixed top-0 left-0 w-[100vw] h-[8vh] bg-white/90 shadow-md flex items-center justify-between px-[4vw] z-[61]">
        {/* Logo Image */}
        <Image
          src="/photos/black.png"
          alt="Logo"
          width={60}
          height={60}
          className="h-[6vh] w-auto"
        />

        {/* Hamburger */}
        <button onClick={() => setOpen(true)} className="text-[4vh] text-gray-800">
          <HiBars3 />
        </button>
      </header>

      {/* Fullscreen Popup Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-[8vh] z-[70] px-[6vw]"
          >
            {/* Cross Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-[6vh] right-[8vw] text-white text-[7vh] md:text-[3vw] hover:text-accent transition-colors"
            >
              <IoClose />
            </button>

            {/* Menu Links */}
            {links.map(({ label, href, Icon }, index) => {
              const isActive = pathname === href;
              return (
                <motion.div
                  key={index}
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-[6vw] text-[5vh] md:text-[2.5vw] font-bold transition-colors ${
                      isActive ? "text-accent" : "text-white hover:text-accent"
                    }`}
                  >
                    <Icon className="text-[6vh] md:text-[3vw]" />
                    {label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Bottom Section in Popup (Mobile only) */}
            <div className="absolute bottom-[10vh] flex flex-col items-center gap-[6vh] md:hidden">
              {/* Social Icons */}
              <div className="flex gap-[6vw]">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
