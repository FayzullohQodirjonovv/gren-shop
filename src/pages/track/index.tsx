import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  User,
  ShoppingCart,
  MapPin,
  Heart,
  Package,
  LogOut,
} from "lucide-react";
import Navbar from "../../assets/components/navbar";
import Footer from "../../assets/components/footer";

interface OrderType {
  _id: string;
  total_price: number;
  createdAt: string;
  products?: { name: string; quantity: number; price: number }[];
}

const TrackOrder = () => {
  const navigate = useNavigate();
  const [orders] = useState<OrderType[]>([
    {
      _id: "2348ru14920",
      total_price: 234,
      createdAt: "2025-07-06",
      products: [
        { name: "Rose Bouquet", quantity: 2, price: 25 },
        { name: "Tulips", quantity: 3, price: 15 },
      ],
    },
    { _id: "67d7eabcdb90f46f8f7368ea", total_price: 88.0, createdAt: "2025-03-17" },
    { _id: "67dd4770be3828830606300d", total_price: 57.99, createdAt: "2025-03-21" },
    { _id: "67de7e52c8f9f004aed2ff39", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67d7eabcdb90f46f8f7368ea", total_price: 88.0, createdAt: "2025-03-17" },
    { _id: "67dd4770be3828830606300d", total_price: 57.99, createdAt: "2025-03-21" },
    { _id: "67de7e52c8f9f004aed2ff39", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67d7eabcdb90f46f8f7368ea", total_price: 88.0, createdAt: "2025-03-17" },
    { _id: "67dd4770be3828830606300d", total_price: 57.99, createdAt: "2025-03-21" },
    { _id: "67de7e52c8f9f004aed2ff39", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de84570273469bc09ee4ae", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de84580273469bc09ee4b2", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de84580273469bc09ee4b6", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de84850273469bc09ee4b9", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de848f0273469bc09ee4bc", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de84c50273469bc09ee4bf", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de850a0273469bc09ee4c2", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de86be0273469bc09ee4c5", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de8e370273469bc09ee50c", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de8f970273469bc09ee50f", total_price: 27.9, createdAt: "2025-03-22" },
    { _id: "67de905f0273469bc09ee513", total_price: 27.9, createdAt: "2025-03-22" },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);

  return (
    <div className="w-[90%] m-auto">
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-6 space-y-4">
          {[
            { icon: <User />, label: "Account Details", to: "/account" },
            { icon: <ShoppingCart />, label: "My Products", to: "/shop" },
            { icon: <MapPin />, label: "Address", to: "/adress" },
            { icon: <Heart />, label: "Wishlist", to: "/wishlist" },
            {
              icon: <Package />,
              label: "Track Order",
              to: "/track",
              active: true,
            },
            {
              icon: <LogOut />,
              label: "Log out",
              action: () => {
                Cookies.remove("user");
                navigate("/");
              },
              className: "text-red-500 hover:bg-red-100",
            },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => {
                if (item.to) navigate(item.to);
                if (item.action) item.action();
              }}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
                item.active
                  ? "bg-green-100 text-green-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              } ${item.className || ""}`}
            >
              <div className="mr-3">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📦 Track your Orders
          </h2>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Table Header */}
            <table className="min-w-full">
              <thead className="bg-green-50 sticky top-0 z-10">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Order Number</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">Total</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600">More</th>
                </tr>
              </thead>
            </table>

            {/* Scrollable Table Body */}
            <div className="max-h-[400px] overflow-y-auto">
              <table className="min-w-full">
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b last:border-none hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">{order._id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.createdAt}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">${order.total_price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="hover:underline"
                        >
                          More info
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal */}
          {selectedOrder && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Order Details</h3>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">ID:</span> {selectedOrder._id}</p>
                  <p><span className="font-medium">Date:</span> {selectedOrder.createdAt}</p>
                  <p><span className="font-medium">Total:</span> ${selectedOrder.total_price.toFixed(2)}</p>

                  {selectedOrder.products && (
                    <>
                      <p className="font-medium mt-4">Products:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedOrder.products.map((item, idx) => (
                          <li key={idx}>
                            {item.name} × {item.quantity} — ${item.price}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default TrackOrder;
