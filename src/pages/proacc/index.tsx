  import { useEffect, useState } from "react";
  import Cookies from "js-cookie";
  import { Input, Button } from "antd";
  import type { AuthType } from "../../@types";
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
  import { useNavigate } from "react-router-dom";

  const AccountDetails = () => {
    const [userData, setUserData] = useState<Partial<AuthType>>({});
    const navigate = useNavigate();

    useEffect(() => {
      const cookie = Cookies.get("user");
      if (cookie) {
        try {
          const parsed = JSON.parse(cookie);
          setUserData(parsed);
        } catch (e) {
          console.error("Cookie error topilmadi", e);
        }
      }
    }, []);

    const handleSave = () => {
      Cookies.set("user", JSON.stringify(userData), { expires: 7 }); 
      console.log("Ma'lumotlar saqlandi:", userData);
    };

    const handleLogout = () => {
      Cookies.remove("user");
      navigate("/");
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
              <a onClick={()=> navigate(`/Procuct`)} href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                <ShoppingCart className="w-5 h-5 mr-2" /> My Products
              </a>
              <a   onClick={() => navigate(`/adress`)} href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                <MapPin className="w-5 h-5 mr-2" /> Address
              </a>
              <a
    onClick={() => navigate(`/wishlist`)}
    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
  >
    <Heart className="w-5 h-5 mr-2" /> Wishlist
  </a>
  <div
  onClick={() => navigate("/track")}
  className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
>
  <Package className="w-5 h-5 mr-2" /> Track Order
</div>

              <a
                href="#"
                onClick={handleLogout}
                className="flex items-center p-2 text-red-500 hover:bg-red-100 rounded"
              >
                <LogOut className="w-5 h-5 mr-2" /> Log out
              </a>
            </nav>
          </aside>

          {/* Form */}
          <main className="flex-1 p-4 sm:p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">* First name</label>
                <Input
                  value={userData.name || ""}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">* Last name</label>
                <Input
                  value={userData.surname || ""}
                  onChange={(e) => setUserData({ ...userData, surname: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">* Email</label>
                <Input
                  value={userData.email || ""}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">* Phone number</label>
                <Input
                  value={userData.phone_number || ""}
                  onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">* Username</label>
                <Input
                  value={userData.username || ""}
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">* Image</label>
                <Input
                  type="file"
                  onChange={(e) => setUserData({ ...userData, image: e.target.files?.[0] })}
                />
              </div>
            </div>

            <Button
              className="mt-6 bg-green-600 text-white"
              size="large"
              onClick={handleSave}
            >
              Save changes
            </Button>
          </main>
        </div>

        <Footer />
      </div>
    );
  };

  export default AccountDetails;
