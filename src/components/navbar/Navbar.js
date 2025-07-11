import React from 'react';
import { FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="w-full px-6 py-3 flex items-center justify-between fixed top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-white/20">
      {/* Logo and Explore */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 font-bold text-xl">
          <span className="text-black">Myticket</span>
          <span className="text-red-500 relative">
            <FaMapMarkerAlt className="inline" />
            <span className="absolute -bottom-[6px] text-orange-500 text-sm">k</span>
          </span>
        </div>

        <div className="border-l h-6 border-gray-300/60"></div>

        <div className="text-gray-800 font-medium flex items-center cursor-pointer hover:text-pink-500 transition">
          Explore <FiChevronDown className="ml-1" />
        </div>
      </div>

      {/* Search */}
      <div className="flex-1 mx-10">
        <input
          type="text"
          placeholder="Search for any event"
          className="w-full max-w-md px-4 py-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-sm"
        />
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-md hover:shadow-md transition cursor-pointer text-gray-800">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="text-sm font-medium">Chennai</span>
          <FiChevronDown />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1 text-xl text-blue-500">
          <FaTicketAlt />
          <span className="text-gray-400">/</span>
          <FaMapMarkerAlt />
        </div>

        {/* Create Event */}
        <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-1.5 rounded-full font-semibold hover:shadow-lg transition text-sm">
          Create event
        </button>

        {/* Login */}
        <button className="bg-white/30 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-gray-800 font-semibold hover:shadow-md transition text-sm">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
