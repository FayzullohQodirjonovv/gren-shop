// ProductPage.tsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, ShoppingCart, MapPin, Heart, Package, LogOut } from "lucide-react";
import { Empty } from "antd";
import Cookies from "js-cookie";
import Navbar from "../../assets/components/navbar";
import Footer from "../../assets/components/footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(saved);
  }, []);

  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/");
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Mahsulot savatchaga qo‘shildi!");
  };

  return (
    <div className="w-[90%] m-auto">
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-[60vh] bg-gray-50">
        <aside className="w-64 p-4 bg-white shadow-md">
          <nav className="space-y-2">
            <div onClick={() => navigate("/account")} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <User className="w-5 h-5 mr-2" /> Account Details
            </div>
            <div className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer bg-gray-200">
              <ShoppingCart className="w-5 h-5 mr-2" /> My Products
            </div>
            <div onClick={() => navigate("/adress")} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <MapPin className="w-5 h-5 mr-2" /> Address
            </div>
            <div onClick={() => navigate("/wishlist")} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <Heart className="w-5 h-5 mr-2" /> Wishlist
            </div>
            <div onClick={() => navigate("/track")} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <Package className="w-5 h-5 mr-2" /> Track Order
            </div>
            <div onClick={handleLogout} className="flex items-center p-2 text-red-500 hover:bg-red-100 rounded cursor-pointer">
              <LogOut className="w-5 h-5 mr-2" /> Log out
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-6">🍭 My Products</h2>

          {products.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <Empty description="No products found" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item, idx) => (
                <div key={idx} className="border p-4 rounded shadow bg-white">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;