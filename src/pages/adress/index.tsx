import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../../assets/components/navbar";
import Footer from "../../assets/components/footer";
import {
  User,
  ShoppingCart,
  MapPin,
  Heart,
  Package,
  LogOut,
} from "lucide-react";

const AddressPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    country: '',
    town: '',
    stateAddress: '',
    extraAddress: '',
    state: '',
    zip: ''
  });

  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Yuborilgan ma'lumotlar:", formData);
    // Bu yerga serverga yuborish yoki saqlash kodini yozing
  };

  return (
    <div className="w-[90%] m-auto">
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-[60vh] bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 p-4 bg-white shadow-md">
          <nav className="space-y-2">
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <User className="w-5 h-5 mr-2" /> Account Details
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <ShoppingCart className="w-5 h-5 mr-2" /> My Products
            </a>
            <a onClick={() => navigate(`/adress`)} className="flex items-center p-2  bg-green-100 rounded cursor-pointer">
              <MapPin className="w-5 h-5 mr-2" /> Address
            </a>
            <a onClick={() => navigate(`/wishlist`)} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <Heart className="w-5 h-5 mr-2" /> Wishlist
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
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

        {/* Address Form */}
        <main className="flex-1 p-4 sm:p-6 md:p-10">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">* Country / Region</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Type your country..."
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">* Town city</label>
                <input
                  type="text"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  placeholder="Type your town city..."
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">* State address</label>
                <input
                  type="text"
                  name="stateAddress"
                  value={formData.stateAddress}
                  onChange={handleChange}
                  placeholder="Type your Street address..."
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">* Extra address</label>
                <input
                  type="text"
                  name="extraAddress"
                  value={formData.extraAddress}
                  onChange={handleChange}
                  placeholder="Type your Extra address..."
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">* State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Type your state..."
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">* Zip</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Type your Extra zip..."
                  className="w-full border rounded px-4 py-2"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded"
            >
              Save changes
            </button>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AddressPage;
