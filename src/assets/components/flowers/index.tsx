import React from "react";
import one from '../../icons/1.svg'
import two from '../../icons/2.svg'
import thre from '../../icons/3.svg'
import fife from '../../icons/4.svg'
import six from '../../icons/5.svg'
import seven from '../../icons/6.svg'
import eight from '../../icons/7.svg'
import nine from '../../icons/8.svg'
import ten from '../../icons/9.svg'
import eleven from '../../icons/10.svg'
const products = [
  {
    id: 1,
    name: "Barberton Daisy",
    price: 119,
    image: one,
  },
  {
    id: 2,
    name: "Angel Wing Begonia",
    price: 169,
    image: two,
  },
  {
    id: 3,
    name: "African Violet",
    price: 199,
    oldPrice: 229,
    discount: "13%",
    image: thre,
  },
  {
    id: 4,
    name: "Beach Spider Lily",
    price: 129,
    image: fife,
  },
  {
    id: 5,
    name: "Blushing Bromeliad",
    price: 139,
    image: six,
  },
  {
    id: 6,
    name: "Aluminum Plant",
    price: 179,
    image: seven,
  },
  {
    id: 7,
    name: "Bird’s Nest Fern",
    price: 99,
    image: eight,
  },
  {
    id: 8,
    name: "Broadleaf Lady Palm",
    price: 59,
    image: nine,
  },
  {
    id: 9,
    name: "Chinese Evergreen",
    price: 39,
    image: ten,
  },
  {
    id: 10,
    name: "Chinese Evergreen",
    price: 39,
    image: eleven,
  },
];


const Flowers: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans mt-[50px]">
      <div className="w-full md:w-64 p-6 border-r space-y-6 bg-[#FBFBFB]">
        <div>
          <h4 className="font-bold mb-2 text-lg">Categories</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>House Plants (33)</li>
            <li>Potter Plants (12)</li>
            <li>Seeds (65)</li>
            <li>Small Plants (39)</li>
            <li>Big Plants (23)</li>
            <li>Succulents (17)</li>
            <li>Terrariums (19)</li>
            <li>Gardening (13)</li>
            <li>Accessories (18)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-lg">Price Range</h4>
          <input type="range" min="30" max="1300" className="w-full" />
          <button className="mt-2 w-full bg-green-600 text-white py-1 text-sm rounded">Filter</button>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-lg">Size</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Small (119)</li>
            <li>Medium (86)</li>
            <li>Large (78)</li>
          </ul>
        </div>

        <div>
          <img src={ten} alt="Super Sale" className="rounded-lg h-[100vh]" />
        </div>
      </div>

      <main className="p-2 flex-1">
        <div className="flex justify-between items-center mb-6">
          <div className="space-x-4 text-sm">
            <button className="font-bold text-green-600">All Plants</button>
            <button>New Arrivals</button>
            <button>Sale</button>
          </div>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4  bg-[#FBFBFB] relative hover:shadow transition">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount} OFF
                </span>
              )}
              <img src={product.image} alt={product.name} className="mx-auto h-40 object-contain" />
              <h3 className="mt-4 text-sm font-semibold">{product.name}</h3>
              <div className="mt-2 text-green-600 font-bold">${product.price.toFixed(2)}</div>
              {product.oldPrice && (
                <div className="text-gray-400 line-through text-sm">
                  ${product.oldPrice.toFixed(2)}
                </div>
              )}
            </div>
            
          ))}
          <div>
            
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 border rounded ${num === 1 ? "bg-green-600 text-white" : "bg-white"}`}
            >
              {num}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Flowers;
