import { Sora } from "next/font/google";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main className={`text-black bg-white font-sora relative  min-h-screen`}>
      <Head>
        <title>Aayu Yog Amrit</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="theme-color" content="#f13024" />
      </Head>
      <Nav />
      <Header />

      <div className="z-2">{children}</div>
    </main>
  );
};

export default Layout;
