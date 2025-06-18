import React, { type FC } from 'react';
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/cartSlice";
import type { ProductsType } from '../../../../../@types';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style_icons = `
  w-10 h-10 rounded-sm bg-white flex items-center justify-center 
  shadow-md hover:bg-[#46A358] hover:text-white transition
`;

const ProductCard: FC<ProductsType> = (props) => {
  const dispatch = useDispatch();

const handleAddToCart = () => {
  dispatch(addToCart({ ...props, count: 1 }));
  toast.success(`🛒 "${props.title}" savatga qo‘shildi`, {
    position: "top-right",
    autoClose: 2000,
  });
};


  return (
    <div className="cursor-pointer">
      <div className="border-t border-transparent hover:border-[#46A358]">
        <div className="group h-[320px] bg-[#f5f5f5] flex justify-center items-center relative">
          <img
            src={props.main_image}
            alt={props.title}
            className="w-4/5 h-[80%] max-sm:h-[100%] object-contain"
          />
          <div className="hidden group-hover:flex absolute bottom-4 gap-3">
            <div className={style_icons}>
              <HeartOutlined className="text-[18px]" />
            </div>
            <div className={style_icons}>
              <SearchOutlined className="text-[18px]" />
            </div>
            <div className={style_icons} onClick={handleAddToCart}>
              <ShoppingCartOutlined className="text-[18px]" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-2 font-medium text-[#3D3D3D]">{props.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-[#46A358] text-[18px] font-bold">{props.price}$</h3>
        {props.discount_price && (
          <h3 className="font-[300] text-[#A5A5A5] line-through">
            {props.discount_price}$
          </h3>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
