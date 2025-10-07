import React, { useState } from "react";

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        postalcode: "",
    });

    const totalAmount = 1250; // Example amount

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Form Submitted & Payment process started!");
        console.log("Form Data:", formData);
    };

    return (
        <div className="h-screen  overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* 🟡 Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#53914c] mb-2">Complete Your Purchase</h1>
                    <p className="text-gray-600">Secure checkout with encrypted payment</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 📝 Left - Billing Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-[#53914c] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    1
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Billing Information</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
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

                                    {/* Email */}
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

                                    {/* Phone */}
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

                                    {/* Address */}
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

                                    {/* City */}
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

                                    {/* Country */}
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

                                    {/* Postal Code */}
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

                                {/* ✅ Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-[#53914c] text-white py-3 rounded-xl font-semibold hover:bg-[#447b3e] transition-all duration-200"
                                >
                                    Continue to Payment
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 💰 Right - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-8">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-[#b98820] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    2
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                            </div>

                            {/* Product */}
                            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg mb-3">
                                <div className="w-12 h-12 bg-[#53914c] rounded-lg flex items-center justify-center text-white font-bold">
                                    P
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800">Premium Product</h3>
                                    <p className="text-sm text-gray-600">Quantity: 1</p>
                                </div>
                                <span className="font-semibold text-gray-800">₹{totalAmount}</span>
                            </div>

                            {/* Total */}
                            <div className="border-t border-gray-200 pt-3 mt-4">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Amount</span>
                                    <span className="text-[#b98820]">₹{totalAmount}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full mt-5 bg-[#53914c] text-white py-4 rounded-xl font-semibold hover:bg-[#447b3e] transition-all duration-200"
                            >
                                Pay ₹{totalAmount} Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
