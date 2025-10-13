import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  // Fetch cart items
  const fetchCart = async () => {
    try {
      const res = await api.get("/cart/get");
      setCartItems(res.data.cart?.items || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load cart!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Dynamically load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (cartItems.length === 0) {
    toast.error("Your cart is empty!");
    return;
  }

  setProcessing(true);

  try {
    // Load Razorpay script
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      toast.error("Failed to load Razorpay SDK. Please try again.");
      setProcessing(false);
      return;
    }

    // Map postalcode to postalCode
    const userInfo = { ...formData, postalCode: formData.postalcode };

    // ✅ Map cart items to include productId
    const itemsForCheckout = cartItems.map(item => ({
      name: item.name,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
      productId: item.productId || item._id, // ensure productId exists
    }));

    // 1️⃣ Create Razorpay order in backend
    const res = await api.post("/order/checkout", {
      userInfo,
      items: itemsForCheckout,
    });

    const { razorpayOrder } = res.data;

    // 2️⃣ Open Razorpay checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      name: "StyleCart",
      description: "Order Payment",
      order_id: razorpayOrder.id,
      handler: async (response) => {
        try {
          // 3️⃣ Verify payment
          await api.post("/order/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          toast.success("Payment successful! Cart cleared.");
          setCartItems([]);
          router.push("/thank-you");
        } catch (err) {
          console.error(err);
          toast.error("Payment verification failed!");
        } finally {
          setProcessing(false);
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#53914c" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error(err);
    toast.error("Failed to initiate payment!");
    setProcessing(false);
  }
};


  if (loading) return <p className="text-center mt-10">Loading cart...</p>;

  return (
    <div className="h-screen md:py-8 py-24 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#53914c] mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-gray-600">Secure checkout with encrypted payment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#53914c] rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                <h2 className="text-xl font-semibold text-gray-800">Billing Information</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-medium text-gray-700">Delivery Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                      placeholder="House No, Street Name, Landmark"
                      rows="3"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      name="postalcode"
                      value={formData.postalcode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b98820]"
                      placeholder="PIN Code"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className={`w-full mt-4 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                    processing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#53914c] hover:bg-[#447b3e]"
                  }`}
                >
                  {processing ? "Processing..." : `Pay ₹${totalAmount} Now`}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#b98820] rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
              </div>

              {cartItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg mb-3">
                  <div className="w-12 h-12 bg-[#53914c] rounded-lg flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-gray-800">₹{item.price * item.quantity}</span>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-3 mt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-[#b98820]">₹{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
