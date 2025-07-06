import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../../assets/components/navbar";
import Footer from "../../assets/components/footer";
import ProductCard from "../../assets/components/flowers/products/card";
import {
  User,
  ShoppingCart,
  MapPin,
  Heart,
  Package,
  LogOut,
} from "lucide-react";
import type { SimplifiedProduct } from "../../@types";

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState<SimplifiedProduct[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistItems(saved);
  }, []);

  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/");
  };

  return (
    <div className="w-[90%] m-auto">
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-[60vh] bg-gray-50">
        <aside className="w-64 p-4 bg-white shadow-md">
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => navigate("/account")}
            >
              <User className="w-5 h-5 mr-2" /> Account Details
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => navigate("/products")}
            >
              <ShoppingCart className="w-5 h-5 mr-2" /> My Products
            </a>
            <a
              onClick={() => navigate(`/adress`)}
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
            >
              <MapPin className="w-5 h-5 mr-2" /> Address
            </a>
            <a
              onClick={() => navigate(`/wishlist`)}
              className="flex items-center p-2 text-green-700 bg-green-100 rounded cursor-pointer"
            >
              <Heart className="w-5 h-5 mr-2" /> Wishlist
            </a>
            <a
      href="#"
      onClick={() => navigate("/track")}
      className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
    >
      <Package className="w-5 h-5 mr-2" /> Track Order
    </a>
            <a
              href="#"
              onClick={handleLogout}
              className="flex items-center p-2 text-red-500 hover:bg-red-100 rounded"
            >
              <LogOut className="w-5 h-5 mr-2" /> Log out
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 md:p-10">
          <h1 className="text-2xl font-bold mb-4">Saqlangan mahsulotlar</h1>

          {wishlistItems.length === 0 ? (
            <p className="text-gray-500">Hozircha saqlangan mahsulotlar yo‘q.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {wishlistItems.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;
