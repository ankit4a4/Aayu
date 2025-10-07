import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

import Layout from "./Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Default style for all toasts
          style: {
            background: "#1F7A3B", // site green
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 20px",
            fontWeight: "500",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            maxWidth: "350px",
          },
          error: {
            style: {
              background: "#b88b1c", // gold/brown for errors
              color: "#fff",
              borderRadius: "12px",
              padding: "12px 20px",
              fontWeight: "500",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            },
          },
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
     
    </>
  
  );
}

export default MyApp;
