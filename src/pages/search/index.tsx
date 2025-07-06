import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { HeartOutlined } from "@ant-design/icons";
import type { RootState } from "../../redux/store";
import type { SimplifiedProduct } from "../../@types";
import { addToCart } from "../../redux/cartSlice";
import Navbar from "../../assets/components/navbar";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const productFromState = useSelector((state: RootState) =>
    state.search.products.find((item: SimplifiedProduct) => item._id === id)
  );

  const [product, setProduct] = useState<SimplifiedProduct | null>(
    productFromState ?? null
  );

  useEffect(() => {
    if (!productFromState) {
      const stored = localStorage.getItem("selected_product");
      if (stored) {
        const parsed = JSON.parse(stored) as SimplifiedProduct;
        if (parsed._id === id) setProduct(parsed);
      }
    }
  }, [id, productFromState]);

  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart({ ...product, count: 1 }));
    toast.success(`🛒 ${product.title} savatga qo‘shildi`);
  };

  if (!product) {
    return <div className="p-6 text-red-500">❌ Mahsulot topilmadi</div>;
  }

  const images = [
    product.main_image,
    product.main_image,
    product.main_image,
    product.main_image,
  ];

  return (
    <div className="w-[80%] m-auto" >
      <Navbar/>
      <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-green-700 hover:underline text-sm flex items-center gap-1">
          <span>←</span> back to products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-24 h-24 object-cover border shadow cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img
              src={mainImage || product.main_image}
              alt={product.title}
              className="max-h-[500px] w-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-green-600 text-xl font-semibold">
            ${product.discount ? product.discount_price : product.price}
          </p>

          <div>
            <p className="text-gray-700">Short description</p>
            <p className="text-sm text-gray-500">12</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="text-yellow-400 text-lg">
              {"★".repeat(Math.floor(product.rate))}
              {"☆".repeat(5 - Math.floor(product.rate))}
            </div>
            <span>{product.reviews || 47} customer review</span>
          </div>

          {/* Size selection */}
          <div>
            <p className="mb-1">Size:</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-1 rounded-full ${
                    selectedSize === size
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              BUY NOW
            </button>
            <button
              onClick={handleAddToCart}
              className="border px-6 py-2 rounded text-green-600 hover:bg-green-100"
            >
              Add To Cart
            </button>
            <button className="w-10 h-10 border rounded text-green-600 flex items-center justify-center hover:bg-green-100">
              <HeartOutlined />
            </button>
          </div>

          {/* Info */}
          <div className="text-sm mt-4 space-y-1 text-gray-700">
            <p>
              <span className="font-semibold">SKU:</span> {product._id}
            </p>
            <p>
              <span className="font-semibold">Categories:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Tags:</span>{" "}
              {product.tags?.join(", ") || "Home, Garden Plants"}
            </p>
            <p>
              <span className="font-semibold">Mavjud mahsulotlar soni:</span>{" "}
              {product.count}
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>

  );
};

export default ProductDetailPage;
