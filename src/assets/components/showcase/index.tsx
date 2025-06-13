import React, { useEffect, useState } from "react";
import Gultuvak from "../../icons/gultuvak.svg";
import Gultuvak1 from "../../icons/gultuvak1.svg";
import { Button } from "antd";

const slides = [
  {
    highlight: "PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
    button: "SHOP NOW",
    image: Gultuvak,
  },
  {
    highlight: "EARTH",
    description:
      "Transform your home into a green oasis with our eco-friendly plants. Buy now and bring nature indoors.",
    button: "DISCOVER",
    image: Gultuvak1,
  },
  {
    highlight: "NATURE",
    description:
      "Find rare and beautiful plants for your garden. Sustainable and stylish greenery just a click away!",
    button: "EXPLORE",
    image: Gultuvak1,
  },
];

const BannerComponent: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between transition-all duration-500 ease-in-out">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-sm text-gray-500 font-bold mb-6">
            Welcome to Greenshop
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[60px] font-bold leading-tight mb-6">
            Let’s Make A<br />
            Better Planet
            <span className="text-green-600 ml-2 block md:inline">
              {slide.highlight}
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            {slide.description}
          </p>
          <Button className="!mt-6 !px-6 !py-3 !bg-green-600 !text-white !rounded !hover:bg-green-700 !transition">
            {slide.button}
          </Button>
        </div>

        <div className="md:w-1/2">
          <img
            src={slide.image}
            alt="Plant Banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-green-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerComponent;
