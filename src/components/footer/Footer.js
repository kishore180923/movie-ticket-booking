import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const App = () => {
  return (
    <>
             \

   {/* Footer */}
      <footer className="bg-white text-gray-800 mt-10 shadow-lg border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">CineBook</h3>
            <p className="text-gray-600">Your ultimate destination to book movie tickets instantly.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Movies</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Offers</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-2xl text-gray-700">
              <a href="#" className="hover:text-blue-600 transition duration-300"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-500 transition duration-300"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><FaTwitter /></a>
              <a href="#" className="hover:text-red-500 transition duration-300"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 py-4 border-t border-gray-300">
          © 2025 <span className="text-indigo-600 font-semibold">CineBook</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
