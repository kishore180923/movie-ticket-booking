import React from 'react';
import { FaFilm, FaUsers } from 'react-icons/fa';
import { MdTheaterComedy } from 'react-icons/md';

const AboutCineBook = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">About CineBook</h2>
          <p className="text-lg mb-6">
            Founded in 2023, CineBook started as a passion project by movie enthusiasts who wanted to simplify the ticket booking experience. 
            What began as a small startup has now grown into one of the most trusted platforms for movie ticket bookings.
          </p>
          <p className="text-lg mb-6">
            We partner with theaters across the country to bring you the latest blockbusters, indie films, and everything in between. 
            Our mission is to make movie-going as seamless and enjoyable as possible.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-purple-800 px-4 py-2 rounded-full flex items-center">
              <FaFilm className="mr-2" /> 1000+ Movies
            </div>
            <div className="bg-blue-800 px-4 py-2 rounded-full flex items-center">
              <MdTheaterComedy className="mr-2" /> 500+ Theaters
            </div>
            <div className="bg-pink-800 px-4 py-2 rounded-full flex items-center">
              <FaUsers className="mr-2" /> 1M+ Customers
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Movie theater" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCineBook;
