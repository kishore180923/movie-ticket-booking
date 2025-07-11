import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const spotlightData = [
  {
    title: 'Wallwalker Live',
    date: 'July 20, 2025',
    location: 'Mumbai Arena',
    image: 'https://i.imgur.com/3eF8Bpn.jpg',
  },
  {
    title: 'BTS World Tour',
    date: 'August 5, 2025',
    location: 'Chennai Stadium',
    image: 'https://i.imgur.com/z7Q4Zei.jpg',
  },
  {
    title: 'Eminem: Revival Night',
    date: 'August 15, 2025',
    location: 'Delhi Dome',
    image: 'https://i.imgur.com/hs5gHkQ.jpg',
  },
  {
    title: 'Kaber Vasuki Oorvalam',
    date: 'Aug 2, 2025',
    location: 'APL Global, Chennai',
    image: 'https://i.imgur.com/Y2yaTBr.png',
  },
  {
    title: 'Imagine Dragons Vibes',
    date: 'September 3, 2025',
    location: 'Bangalore Live Grounds',
    image: 'https://i.imgur.com/bn4UIGb.jpg',
  },
];

const SpotlightSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % spotlightData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span>🎯 Highlights</span>
        <span className="text-sm font-normal text-gray-500">|  Music Concepts Handpicked events</span>
      </h2>

      <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col sm:flex-row items-end justify-between text-white"
            style={{
              backgroundImage: `url(${spotlightData[index].image})`,
              backgroundBlendMode: 'darken',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="bg-gradient-to-r from-black/70 via-black/30 to-transparent w-full sm:w-1/2 h-full p-6 flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl font-bold">{spotlightData[index].title}</h3>
              <p className="text-sm sm:text-base text-gray-200 mt-1">{spotlightData[index].date} • {spotlightData[index].location}</p>
              <button className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 rounded-full w-max text-sm">Book Now</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpotlightSlider;
