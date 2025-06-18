import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import logo from '../../icons/grenshop.svg';
import serach from '../../icons/search.svg';
import shop from '../../icons/shop.svg';
import { Badge } from 'antd';
import { BellOutlined, LoginOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modalslice'; 
import type { AuthType } from '../../../@types';
import Cookies from 'js-cookie';
import type { RootState } from '../../../redux/store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart); 

  const [user, setUser] = useState<Partial<AuthType>>({});

  useEffect(() => {
    const cookie = Cookies.get("user"); 
    if (cookie) {
      const data: AuthType = JSON.parse(cookie);
      setUser(data);
    }
  }, []);

  const nav_link_style = `
    text-[18px] cursor-pointer relative 
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[3px] after:bg-[#46A358] after:rounded-full
    after:transition-all after:duration-300 
    hover:after:w-full
  `;

  return (
    <header className="flex flex-wrap items-center justify-between py-5 px-4">
      <nav onClick={() => navigate("/")} className="cursor-pointer">
        <img src={logo} alt="logo" className="w-[140px]" />
      </nav>

      <nav className="hidden md:flex items-center gap-5 font-semibold">
        <h3 onClick={() => navigate("/")} className={nav_link_style}>
          Home
        </h3>
        <h3 onClick={() => navigate("/blok")} className={nav_link_style}>
          Blog
        </h3>
      </nav>

      <nav className="flex items-center gap-7">
        <img className="cursor-pointer w-5 md:w-5" src={serach} alt="search" />

        <BellOutlined className="hidden md:inline-block text-[22px] cursor-pointer" />

        <Badge onClick={() => navigate("/shop")} count={cart.length} showZero>
          <img className="cursor-pointer w-5 md:w-6" src={shop} alt="shop" />
        </Badge>

        <button
          onClick={() => dispatch(openModal())}
          className="
            hidden md:flex
            w-[100px] h-[35px] bg-[#46A358] text-white rounded-md 
            items-center justify-center transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-lg group
          "
        >
          <LoginOutlined className="transition-all duration-300 group-hover:translate-x-[2px]" />
          <span className="ml-[5px] transition-all duration-300 group-hover:translate-x-[2px]">
            {user.name ? user.name : "Login"}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
