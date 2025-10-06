import React, { useState } from "react";

export default function Index() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Cozy Living Room Set",
            img: "https://images.unsplash.com/photo-1578894383454-6f3d2a8f1f2d?w=1200&q=80&auto=format&fit=crop",
            price: 1200,
            quantity: 1,
            category: "Living Room"
        },
        {
            id: 2,
            title: "Modern Dining Table",
            img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80&auto=format&fit=crop",
            price: 850,
            quantity: 1,
            category: "Dining"
        },
        {
            id: 3,
            title: "Luxury Bedroom Suite",
            img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop",
            price: 2100,
            quantity: 1,
            category: "Bedroom"
        }
    ]);

    const increment = (id) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrement = (id) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleCheckout = () => {
        alert(`🎉 Order confirmed! \nTotal items: ${totalItems}\nTotal amount: ₹${totalPrice}`);
    };

    const continueShopping = () => {
        alert("🛍️ Continue shopping clicked!");
    };

    return (
        <div className="h-screen overflow-y-auto pt-28 pd:mt-0 bg-gradient-to-br from-[#fdf6e7] to-[#e7f3e9] py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[#b98820] mb-2">🛒 StyleCart</h1>
                    <p className="text-gray-600">Your Shopping Cart</p>
                    <div className="mt-4 bg-white inline-flex items-center px-4 py-2 rounded-full shadow-sm">
                        <span className="text-sm text-gray-600">Cart contains</span>
                        <span className="ml-2 bg-[#53914c] text-white text-sm font-bold px-2 py-1 rounded-full">
                            {totalItems} {totalItems === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        {/* Cart Header */}
                        <div className="mb-8 md:flex justify-between items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-[#b98820] mb-2">Your Cart Items</h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-[#b98820] to-[#53914c] rounded-full"></div>
                            </div>
                            <br className="md:hidden flex" />
                            <span className="bg-[#e9f5eb] mt-4 md:mt-0 text-[#53914c] text-sm font-medium px-3 py-1 rounded-full">
                                {cartItems.length} products
                            </span>
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-6 mb-8">
                            {cartItems.map(item => (
                                <div key={item.id} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                                    <div className="flex items-center space-x-6">


                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-xs font-medium text-white bg-[#53914c] px-2 py-1 rounded-full">
                                                        {item.category}
                                                    </span>
                                                    <h3 className="font-semibold text-gray-800 text-xl mb-2 mt-1">{item.title}</h3>
                                                    <p className="text-3xl font-bold text-[#b98820]">₹{item.price}</p>
                                                </div>

                                                {/* Remove Button */}
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors duration-200"
                                                >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="block md:flex items-center justify-between mt-4">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-gray-600 font-medium">Quantity:</span>
                                                    <div className="flex items-center space-x-3  bg-white px-3 py-2 rounded-lg border">
                                                        <button
                                                            onClick={() => decrement(item.id)}
                                                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                                                        >
                                                            <span className="text-gray-700 font-bold text-lg">−</span>
                                                        </button>
                                                        <span className="w-8 text-center font-semibold text-gray-800 text-lg">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => increment(item.id)}
                                                            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                                                        >
                                                            <span className="text-gray-700 font-bold text-lg">+</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Item Total */}
                                                <div className="text-right mt-6 md:mt-0">
                                                    <span className="text-gray-600 text-sm">Item Total:</span>
                                                    <div className="text-2xl font-bold text-[#53914c]">
                                                        ₹{item.price * item.quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-gradient-to-r from-[#fdf6e7] to-[#e7f3e9] rounded-2xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-[#b98820] mb-6 text-center">Order Summary</h3>
                            <div className="border-t border-gray-300 pt-4 mt-2 flex justify-between text-xl font-bold text-gray-800">
                                <span>Total Amount</span>
                                <span className="text-3xl text-[#53914c]">₹{totalPrice}</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button
                                    onClick={continueShopping}
                                    className="flex-1 py-4 bg-white text-[#53914c] border border-[#53914c] font-semibold rounded-xl hover:bg-[#e9f5eb] transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Continue Shopping
                                    </span>
                                </button>
                                <button
                                    onClick={handleCheckout}
                                    className="flex-1 py-4 bg-gradient-to-r from-[#b98820] to-[#53914c] text-white font-semibold rounded-xl hover:from-[#a4781c] hover:to-[#457f42] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Proceed to Checkout
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-6 text-gray-500 text-sm">
                    <p style={{
                        color: "black",
                    }}>🔒 Secure checkout • 🚚 Free shipping • 🔄 Easy returns</p>
                </div>
            </div>
        </div>
    );
}
