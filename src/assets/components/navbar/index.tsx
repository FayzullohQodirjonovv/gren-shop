import { useNavigate } from 'react-router-dom';
import logo from '../../icons/grenshop.svg';
import serach from '../../icons/search.svg';
import shop from '../../icons/shop.svg';
import { Badge } from 'antd';
import { BellOutlined, LoginOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalslice'; 

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

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
        <h3 onClick={() => navigate("/blog")} className={nav_link_style}>
          Blog
        </h3>
      </nav>

      <nav className="flex items-center gap-7">
        <img className="cursor-pointer w-5 md:w-5" src={serach} alt="search" />

        <BellOutlined className="hidden md:inline-block text-[22px] cursor-pointer" />

        <Badge count="1">
          <img className="cursor-pointer w-5 md:w-6" src={shop} alt="shop" />
        </Badge>

        <button onClick={() => dispatch(openModal())} className="
          hidden md:flex
          w-[100px] h-[35px] bg-[#46A358] text-white rounded-md 
          items-center justify-center transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-lg group
        ">
          <LoginOutlined className="transition-all duration-300 group-hover:translate-x-[2px]" />
          <span className="ml-[5px] transition-all duration-300 group-hover:translate-x-[2px]">Login</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
