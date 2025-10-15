import React from "react";
import { useRouter } from "next/router";

const ThankYouPage = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const goToProducts = () => {
    router.push("/product");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fdf6e7] to-[#e7f3e9] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
        <h1 className="text-4xl font-bold text-[#b98820] mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been successfully placed. We’ll send you a confirmation email shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goToHome}
            className="py-3 px-6 bg-[#53914c] text-white font-semibold rounded-xl hover:bg-[#447b3e] transition-all"
          >
            Go to Home
          </button>
          <button
            onClick={goToProducts}
            className="py-3 px-6 bg-[#b98820] text-white font-semibold rounded-xl hover:bg-[#a4781c] transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
