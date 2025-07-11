import React, { useState } from "react";
import { FaStar, FaThumbsUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const musicConcepts = [
  {
    title: "Echoes of Silence",
    genre: "Ambient / Synth",
    rating: "7.8/10",
    votes: "521 Votes",
    type: "rating",
    poster: "https://i.imgur.com/G5dUIxC.jpg",
  },
  {
    title: "Bassline Revolution",
    genre: "EDM / Bass",
    rating: "48.2K Likes",
    type: "likes",
    poster: "https://i.imgur.com/qYv2nQ3.jpg",
  },
  {
    title: "Strings of the Soul",
    genre: "Acoustic / Instrumental",
    rating: "9.1/10",
    votes: "1.2K Votes",
    type: "rating",
    poster: "https://i.imgur.com/WzFpVdF.jpg",
  },
  {
    title: "Drumbeat Dynasty",
    genre: "Percussion / Tribal",
    rating: "12.5K Likes",
    type: "likes",
    poster: "https://i.imgur.com/EKMwJJ5.jpg",
  },
  {
    title: "Neon Dreams",
    genre: "Synthwave / Retro",
    rating: "8.4/10",
    votes: "892 Votes",
    type: "rating",
    poster: "https://i.imgur.com/JQxQvXa.jpg",
  },
  {
    title: "Urban Rhythms",
    genre: "Hip Hop / Lo-fi",
    rating: "36.7K Likes",
    type: "likes",
    poster: "https://i.imgur.com/KmTpQxL.jpg",
  },
  {
    title: "Celestial Harmonies",
    genre: "New Age / Meditation",
    rating: "8.9/10",
    votes: "1.5K Votes",
    type: "rating",
    poster: "https://i.imgur.com/MnWjYFz.jpg",
  },
  {
    title: "Guitar Legends",
    genre: "Rock / Blues",
    rating: "24.1K Likes",
    type: "likes",
    poster: "https://i.imgur.com/PqQvRxN.jpg",
  },
];

const RecommendedMusic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(musicConcepts.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= musicConcepts.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? musicConcepts.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const visibleItems = musicConcepts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="px-6 lg:px-16 py-10 bg-gradient-to-br from-gray-100 via-white to-gray-200 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
           Music Concepts
        </h2>
        <a href="#" className="text-sm text-red-500 hover:underline flex items-center">
          See All <FaChevronRight className="ml-1" />
        </a>
      </div>

      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
          aria-label="Previous"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleItems.map((music, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={music.poster}
                  alt={music.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Listen Now
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm mb-2">
                  {music.type === "rating" ? (
                    <FaStar className="text-yellow-500 mr-2" />
                  ) : (
                    <FaThumbsUp className="text-green-600 mr-2" />
                  )}
                  <span className="font-semibold text-gray-800">{music.rating}</span>
                  {music.votes && (
                    <span className="ml-1 text-gray-500">{music.votes}</span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{music.title}</h3>
                <p className="text-sm text-gray-600 italic">{music.genre}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10"
          aria-label="Next"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`w-3 h-3 rounded-full ${currentIndex === index * itemsPerPage ? 'bg-red-500' : 'bg-gray-300'}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedMusic;