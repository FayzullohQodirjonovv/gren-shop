import React, { FC ,useState } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/cartSlice";
import type { SimplifiedProduct } from "../../../../../@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const style_icons = `
  w-10 h-10 rounded-md bg-white flex items-center justify-center 
  shadow-md border border-transparent
  border-[#46A358] text-[#46A358] transition cursor-pointer
`;

const ProductCard: FC<SimplifiedProduct> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...props, count: 1 }));
    toast.success(`Savatga qo‘shildi`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleViewDetails = () => {
    localStorage.setItem("selected_product", JSON.stringify(props));
    navigate(`/search/${props._id}`);
  };

  const handleLike = () => {
    setLiked(!liked);
  
    const wishlistKey = "wishlist";
    const savedItems = JSON.parse(localStorage.getItem(wishlistKey) || "[]");
  
    const exists = savedItems.find((item: SimplifiedProduct) => item._id === props._id);
  
    let updatedItems;
    if (!exists) {
      updatedItems = [...savedItems, props];
      toast.success("Saqlandi", {
        position: "top-center",
        autoClose: 1500,
      });
    } else {
      updatedItems = savedItems.filter((item: SimplifiedProduct) => item._id !== props._id);
      toast.error("Saqlashdan olib tashlandi", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  
    localStorage.setItem(wishlistKey, JSON.stringify(updatedItems));
  };
  
  return (
    <div className="cursor-pointer">
      <div className="border-t border-transparent hover:border-[#46A358]">
        <div className="group h-[320px] bg-[#f5f5f5] flex justify-center items-center relative overflow-hidden">
          <img
            src={props.main_image}
            alt={props.title}
            className="w-4/5 h-[80%] max-sm:h-[100%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 flex gap-3 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div
              onClick={handleLike}
              className={`${style_icons} transition-all duration-300 delay-100 cursor-pointer`}
              title="Saqlash"
            >
              <Heart className={`w-5 h-5 ${liked ? "text-red-500 fill-red-500" : ""}`} />
            </div>

            <div
              className={`${style_icons} transition-all duration-300 delay-200`}
              onClick={handleViewDetails}
              title="Batafsil ko‘rish"
            >
              <Search className="w-5 h-5" />
            </div>
            <div
              className={`${style_icons} transition-all duration-300 delay-300`}
              onClick={handleAddToCart}
              title="Savatga qo‘shish"
            >
              <ShoppingCart className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-2 font-medium text-[#3D3D3D]">{props.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        {props.discount ? (
          <>
            <h3 className="text-[#46A358] text-[18px] font-bold">{props.discount_price}$</h3>
            <h3 className="font-[300] text-[#A5A5A5] line-through">{props.price}$</h3>
          </>
        ) : (
          <h3 className="text-[#46A358] text-[18px] font-bold">{props.price}$</h3>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
