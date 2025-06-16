import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Job1 from '../../icons/job1.svg'
import Job2 from '../../icons/job2.svg'
import Job3 from '../../icons/job3.svg'
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-9 text-start border-b">
        <div>
          <img src={Job1} alt="Garden Care" className="mb-[10px]" />
          <h3 className="font-bold">Garden Care</h3>
          <p>We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
        </div>
        <div>
          <img src={Job2} alt="Plant Renovation" className="mb-[10px]" />
          <h3 className="font-bold">Plant Renovation</h3>
          <p>We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
        </div>
        <div>
          <img src={Job3} alt="Watering Garden" className="mb-[10px]" />
          <h3 className="font-bold">Watering Garden</h3>
          <p>We are an online plant shop <br /> offering a wide range of cheap <br /> and trendy plants.</p>
        </div>
               <div className="mt-4 md:mt-0">
                <h2 className="font-bold mb-[10px]">Would you like to join newsletters?</h2>
          <input
            type="email"
            placeholder="enter your email address..."
            className="px-4 py-2 border rounded-l-md mb-[10px]"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">Join</button>
          <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!  </p>
        </div>
      </div>

      <div className="p-6 md:flex justify-between items-center bg-white border-b">
        <div>
          <h4 className="font-semibold mb-2">Would you like to join newsletters?</h4>
          <p className="text-sm">
            We usually post offers and challenges in newsletter. We're your online houseplant destination.
          </p>
        </div>
 
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h2 className="text-green-600 font-bold text-lg">GREENSHOP</h2>
          <div className="flex items-center mt-2">
            <MdLocationOn className="mr-2" />
            <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="mr-2" />
            <span>contact@greenshop.com</span>
          </div>
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>+88 01911 717 490</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-2">My Account</h4>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>Our stores</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Help & Guide</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Social Media</h4>
          <div className="flex space-x-3 mb-4">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
          <h4 className="font-bold mb-2">We accept</h4>
          <div className="flex space-x-2">
            <img src="/icons/paypal.svg" alt="PayPal" />
            <img src="/icons/mastercard.svg" alt="MasterCard" />
            <img src="/icons/visa.svg" alt="Visa" />
            <img src="/icons/amex.svg" alt="American Express" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t">
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
}
