import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import {
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../../redux/cartSlice";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.discount ? item.discount_price : item.price;
    return acc + price * item.count;
  }, 0);

  const shipping = 16;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = () => {
    if (couponApplied) {
      toast.warn("Promo kod allaqachon qo‘llangan!");
      return;
    }

    if (coupon.trim().toUpperCase() === "AEMA_MEM") {
      setDiscountAmount(100);
      setCouponApplied(true);
      toast.success("🎉 Ajoyib! Promo kod qo‘llandi, $100 chegirma!");
    } else {
      toast.error("❌ Noto‘g‘ri promo kod!");
    }
  };

  return (
    <div className="w-[90%] m-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold mb-4">🛒 Shopping Cart</h2>
        <div className="grid grid-cols-5 gap-4 font-bold border-b pb-2">
          <p>Products</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Total</p>
        </div>

        {cartItems.map((item) => (
          <div key={item._id} className="grid grid-cols-5 gap-4 items-center py-4 border-b">
            <div className="flex gap-4 items-center">
              <img src={item.main_image} className="w-16 h-16 object-contain" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">SKU: {item._id}</p>
              </div>
            </div>

            <p>${item.discount ? item.discount_price : item.price}.00</p>

            <div className="flex items-center gap-2">
              <button
                className="w-6 h-6 flex items-center justify-center border rounded text-green-600 hover:bg-green-100"
                onClick={() => dispatch(decreaseCount(item._id))}
              >
                <MinusOutlined />
              </button>
              <span className="w-6 text-center">{Math.abs(item.count)}</span>
              <button
                className="w-6 h-6 flex items-center justify-center border rounded text-green-600 hover:bg-green-100"
                onClick={() => dispatch(increaseCount(item._id))}
              >
                <PlusOutlined />
              </button>
            </div>

            <p className="text-green-600 font-bold">
              ${(item.discount ? item.discount_price : item.price) * item.count}.00
            </p>

            <button
              className="text-gray-400 hover:text-red-500"
              onClick={() => dispatch(removeFromCart(item._id))}
            >
              <DeleteOutlined />
            </button>
          </div>
        ))}
      </div>

      <div className="border p-6 rounded shadow-sm">
        <h3 className="text-lg font-bold border-b pb-3 mb-4">Cart Totals</h3>
        <div className="mb-4">
          <label className="block text-sm mb-1">Coupon Apply</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="border px-3 py-2 w-full text-sm rounded"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
          </div>
        </div>

        <div className="text-sm space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Coupon Discount</span>
            <span> ${discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="text-green-500 text-xs text-right cursor-pointer hover:underline">
            View shipping charge
          </div>
        </div>

        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2">
          Proceed To Checkout
        </button>
        <p className="text-center text-green-600 text-sm cursor-pointer hover:underline">
          Continue Shopping
        </p>
      </div>
    </div>
  );
};

export default Cart;
