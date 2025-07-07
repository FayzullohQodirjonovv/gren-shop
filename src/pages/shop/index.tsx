import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import {
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../../redux/cartSlice";
import {
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";

const CheckoutForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    payment: "Direct bank transfer",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["firstName", "email", "phone", "address", "city", "country"];
    const emptyField = required.find((key) => !formData[key as keyof typeof formData]);
    if (emptyField)
      return toast.error("Iltimos, barcha majburiy maydonlarni to‘ldiring.");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First name *" className="input" onChange={handleChange} value={formData.firstName} />
        <input name="lastName" placeholder="Last name" className="input" onChange={handleChange} value={formData.lastName} />
      </div>
      <input name="country" placeholder="Country / Region *" className="input" onChange={handleChange} value={formData.country} />
      <input name="city" placeholder="Town / City *" className="input" onChange={handleChange} value={formData.city} />
      <input name="address" placeholder="Street Address *" className="input" onChange={handleChange} value={formData.address} />
      <input name="state" placeholder="State" className="input" onChange={handleChange} value={formData.state} />
      <input name="zip" placeholder="Zip" className="input" onChange={handleChange} value={formData.zip} />
      <input type="email" name="email" placeholder="Email address *" className="input" onChange={handleChange} value={formData.email} />
      <input type="tel" name="phone" placeholder="Phone number *" className="input" onChange={handleChange} value={formData.phone} />

      <div>
        <label className="block mb-2 font-medium">Payment Method *</label>
        <div className="space-y-2">
          {["PayPal", "Direct bank transfer", "Cash on delivery"].map((method) => (
            <div key={method} className="border p-3 rounded">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={formData.payment === method}
                  onChange={handleChange}
                  className="mr-2"
                />
                {method}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Confirm Order
      </button>
    </form>
  );
};

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.discount ? item.discount_price : item.price;
    return acc + price * item.count;
  }, 0);

  const shipping = 16;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = () => {
    if (couponApplied) return toast.warn("Promo kod allaqachon qo‘llangan!");
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
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Savat bo‘sh</p>
        ) : (
          <div>
            <div className="grid grid-cols-5 gap-4 font-bold border-b pb-2">
              <p>Products</p>
              <p>Price</p>
              <p>Qty</p>
              <p>Total</p>
              <p>Action</p>
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
                  <button className="btn-icon" onClick={() => dispatch(decreaseCount(item._id))}><MinusOutlined /></button>
                  <span className="w-6 text-center">{Math.abs(item.count)}</span>
                  <button className="btn-icon" onClick={() => dispatch(increaseCount(item._id))}><PlusOutlined /></button>
                </div>
                <p className="text-green-600 font-bold">
                  ${(item.discount ? item.discount_price : item.price) * item.count}.00
                </p>
                <button onClick={() => dispatch(removeFromCart(item._id))} className="text-gray-400 hover:text-red-500">
                  <DeleteOutlined />
                </button>
              </div>
            ))}
          </div>
        )}
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
            <button className="bg-green-600 text-white px-4 rounded" onClick={handleApplyCoupon}>
              Apply
            </button>
          </div>
        </div>

        <div className="text-sm space-y-2 mb-4">
          <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Coupon Discount</span><span>${discountAmount.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
        </div>

        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span><span>${total.toFixed(2)}</span>
        </div>

        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2"
          onClick={() => setShowCheckout(true)}
        >
          Proceed To Checkout
        </button>
        <p className="text-center text-green-600 text-sm cursor-pointer hover:underline">
          Continue Shopping
        </p>
      </div>

      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-lg relative">
            <button
              className="absolute right-3 top-3 text-gray-500 hover:text-red-500"
              onClick={() => setShowCheckout(false)}
            >
              <CloseOutlined />
            </button>
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <CheckoutForm
              onSubmit={(data) => {
                console.log("Zakaz yuborildi:", data);
                toast.success("✅ Zakaz yuborildi!");
                setShowCheckout(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;