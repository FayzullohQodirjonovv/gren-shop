import React from 'react';
import Oneimg from '../../icons/oneimg.svg';
import Twoimg from '../../icons/twoimg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PlantOffers: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center items-center gap-6 p-6">
      <div className="bg-white shadow-md p-3 flex flex-col md:flex-row items-center gap-4 max-w-xm">
        <img
          src={Oneimg}
          alt="Plant"
          className="w-[292px] h-[292px] object-contain"
        />
        <div className="text-center md:text-right w-full">
          <h3 className="font-bold text-sm md:text-base text-center md:text-end">
            SUMMER CACTUS <br /> & SUCCULENTS
          </h3>
          <p className="text-gray-600 text-sm mt-2 text-center md:text-end">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <div className="flex justify-center md:justify-end">
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700 text-sm">
              Find More <FontAwesomeIcon icon={faArrowRight} beat className="text-[white] ml-[10px] text-[14px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md p-3 flex flex-col md:flex-row items-center gap-4 max-w-xm">
        <img
          src={Twoimg}
          alt="Plant"
          className="w-[292px] h-[292px] object-contain"
        />
        <div className="text-center md:text-right w-full">
          <h3 className="font-bold text-sm md:text-base text-center md:text-end">
            STYLING TRENDS <br /> & MUCH MORE
          </h3>
          <p className="text-gray-600 text-sm mt-2 text-center md:text-end">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <div className="flex justify-center md:justify-end">
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700 text-sm">
              Find More <FontAwesomeIcon icon={faArrowRight} beat className="text-[white] ml-[10px] text-[14px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOffers;
