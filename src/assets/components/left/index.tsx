import React from 'react';
import Img1 from '../../icons/blog1.svg';
import Img2 from '../../icons/blok2.svg';
import Img3 from '../../icons/blok3.svg';
import Img4 from '../../icons/blok4.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const blogData = [
  {
    img: Img1,
    date: 'September 12',
    time: '6 minutes',
    title: 'Cactus & Succulent Care Tips',
    desc: 'Cacti are succulents are easy care plants for any home or patio.',
  },
  {
    img: Img2,
    date: 'September 13',
    time: '2 minutes',
    title: 'Top 10 Succulents for Your Home',
    desc: 'Best in hanging baskets. Prefers medium to high light.',
  },
  {
    img: Img3,
    date: 'September 15',
    time: '3 minutes',
    title: 'Cacti & Succulent Care Tips',
    desc: 'Cacti and succulents thrive in containers and because most are..',
  },
  {
    img: Img4,
    date: 'September 15',
    time: '2 minutes',
    title: 'Best Houseplants Room By Room',
    desc: 'The benefits of houseplants are endless. In addition to..',
  },
];

const BlogPosts: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Blog Posts</h2>
        <p className="text-gray-500 mt-2">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={item.img} alt="blog" className="w-full h-[200px] object-cover" />
            <div className="p-4">
              <p className="text-green-600 text-sm font-medium mb-2">
                {item.date} | Read in {item.time}
              </p>
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <button className="text-green-600 font-bold text-md flex items-center gap-1 hover:underline">
                Read More <FontAwesomeIcon icon={faArrowRight} beat className="text-[green] ml-[10px] text-[14px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
