import { Sora } from "next/font/google";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import api from "../utils/api";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await api.get("/cart/get");
        const items = res.data.cart?.items || [];
        const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalCount);
      } catch (err) {
        console.error("Failed to fetch cart count", err);
      }
    };
    fetchCart();
  }, []);
  return (
    <main className={`text-black bg-white font-sora relative  min-h-screen`}>
      <Head>
        <title>Aayu Yog Amrit</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="theme-color" content="#f13024" />
      </Head>
      <Nav cartCount={cartCount} />
      <Header />

      <div className="z-2">{children}</div>
    </main>
  );
};

export default Layout;
