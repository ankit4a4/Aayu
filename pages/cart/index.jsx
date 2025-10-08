import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import toast from "react-hot-toast";
import router from "next/router";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // 🧩 Fetch cart (reusable function)
  const fetchCart = async () => {
    try {
      const response = await api.get("/cart/get");
      const fetchedItems = response.data.cart?.items || [];
      setCartItems(fetchedItems);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load cart!");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🧮 Update local cart for optimistic UI
  const updateCartItem = (name, size, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // ➕ Increment quantity
  const increment = async (name, size) => {
    const item = cartItems.find((i) => i.name === name && i.size === size);
    if (!item) return;

    const newQuantity = item.quantity + 1;
    updateCartItem(name, size, newQuantity);

    try {
      await api.put("/cart/update", { name, size, action: "increment" });
      await fetchCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity!");
      updateCartItem(name, size, item.quantity);
    }
  };

  // ➖ Decrement quantity
  const decrement = async (name, size) => {
    const item = cartItems.find((i) => i.name === name && i.size === size);
    if (!item || item.quantity <= 1) return;

    const newQuantity = item.quantity - 1;
    updateCartItem(name, size, newQuantity);

    try {
      await api.put("/cart/update", { name, size, action: "decrement" });
      await fetchCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity!");
      updateCartItem(name, size, item.quantity);
    }
  };

  // ❌ Remove item
  const removeItem = async (name, size) => {
    try {
      await api.delete("/cart/remove", { data: { name, size } });
      toast.success("Item removed!");
      await fetchCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove item!");
    }
  };

  // 🧾 Totals
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    toast.success(
      `🎉 Order confirmed! Total items: ${totalItems}, Total: ₹${totalPrice}`
    );
    router.push("/checkout");
  };

  const continueShopping = () => {
    toast("🛍️ Continue shopping!");
    router.push("/product");
  };

  return (
    <div className="h-screen overflow-y-auto pt-28 bg-gradient-to-br from-[#fdf6e7] to-[#e7f3e9] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#b98820] mb-2">🛒 StyleCart</h1>
          <p className="text-gray-600">Your Shopping Cart</p>
          <div className="mt-4 bg-white inline-flex items-center px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Cart contains</span>
            <span className="ml-2 bg-[#53914c] text-white text-sm font-bold px-2 py-1 rounded-full">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>
        </div>

        {/* Cart Body */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty 🛍️</p>
            ) : (
              <>
                <div className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.name}-${item.size}`}
                      className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                    >
                      <div className="flex items-center space-x-6">
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-xs font-medium text-white bg-[#53914c] px-2 py-1 rounded-full">
                                500mg
                              </span>
                              <h3 className="font-semibold text-gray-800 text-xl mb-2 mt-1">
                                {item.name}
                              </h3>
                              <p className="text-3xl font-bold text-[#b98820]">
                                ₹{item.price}
                              </p>
                            </div>

                            <button
                              onClick={() => removeItem(item.name, item.size)}
                              className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="block md:flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                              <span className="text-gray-600 font-medium">
                                Quantity:
                              </span>
                              <div className="flex items-center space-x-3 bg-white px-3 py-2 rounded-lg border">
                                <button
                                  onClick={() => decrement(item.name, item.size)}
                                  className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg"
                                >
                                  −
                                </button>
                                <span className="w-8 text-center font-semibold text-gray-800 text-lg">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => increment(item.name, item.size)}
                                  className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="text-right mt-6 md:mt-0 mr-2">
                              <span className="text-gray-600 text-sm">
                                Item Total:
                              </span>
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

                {/* Summary */}
                <div className="bg-gradient-to-r from-[#fdf6e7] to-[#e7f3e9] rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#b98820] mb-6 text-center">
                    Order Summary
                  </h3>
                  <div className="border-t border-gray-300 pt-4 mt-2 flex justify-between text-xl font-bold text-gray-800">
                    <span>Total Amount</span>
                    <span className="text-3xl text-[#53914c]">₹{totalPrice}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      onClick={continueShopping}
                      className="flex-1 py-4 bg-white text-[#53914c] border border-[#53914c] font-semibold rounded-xl hover:bg-[#e9f5eb] transform hover:scale-[1.02] transition-all shadow-md"
                    >
                      Continue Shopping
                    </button>
                    <button
                      onClick={handleCheckout}
                      className="flex-1 py-4 bg-gradient-to-r from-[#b98820] to-[#53914c] text-white font-semibold rounded-xl hover:from-[#a4781c] hover:to-[#457f42] transform hover:scale-[1.02] transition-all shadow-lg"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-gray-500 text-sm">
          <p style={{ color: "black" }}>
            🔒 Secure checkout • 🚚 Free shipping • 🔄 Easy returns
          </p>
        </div>
      </div>
    </div>
  );
}
