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

// Cinematic slow zoom popup
const popupVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      mass: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4 } },
};

// Menu items variants with bouncy pop
const itemVariants = {
  hidden: { x: -30, opacity: 0, scale: 0.7 },
  visible: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 right-0 h-[100vh] w-[6vw] bg-transparent flex-col items-center justify-between py-[6vh] z-[61]">
        <div className="flex flex-col items-center">
          <motion.div
            className="mt-[2vh] mb-[1.5vh] text-white"
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHandPointDown className="text-[2vw]" />
          </motion.div>

          <button
            onClick={() => setOpen(true)}
            className="mt-[1.5vw] font-bold text-white tracking-widest rotate-90 hover:text-accent transition-colors text-[1vw]"
          >
            MENUS
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <p className="text-[0.8vw] text-white rotate-90 whitespace-nowrap font-medium tracking-widest">
            Empowering Security
          </p>
        </div>

        <div className="flex flex-col items-center gap-[1.5vw] mb-[2vh]">
          <a href="https://linkedin.com" target="_blank" className="hover:text-accent transition-colors text-white text-[1.5vw]">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-accent transition-colors text-white text-[1.5vw]">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-accent transition-colors text-white text-[1.5vw]">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" className="hover:text-accent transition-colors text-white text-[1.5vw]">
            <FaFacebook />
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="flex md:hidden fixed top-0 left-0 w-[100vw] h-[8vh] bg-white/90 shadow-md flex items-center justify-between px-[4vw] z-[61]">
        <Image src="/photos/black.png" alt="Logo" width={60} height={60} className="h-[6vh] w-auto" />
        <button onClick={() => setOpen(true)} className="text-[4vh] text-black">
          <HiBars3 />
        </button>
      </header>

      {/* Fullscreen Popup Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-[8vh] z-[70] px-[6vw]"
          >
            {/* Close Button */}
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
                <motion.div key={index} variants={itemVariants}>
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

            {/* Social Icons (Mobile) */}
            <div className="absolute bottom-[10vh] flex flex-col items-center gap-[6vh] md:hidden">
              <div className="flex gap-[6vw]">
                <a href="https://linkedin.com" target="_blank" className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110">
                  <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" className="text-white text-[5vh] hover:text-accent transition-transform hover:scale-110">
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
