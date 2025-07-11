import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const movies = [
  {
    id: 1,
    title: "Interstellar Reunion",
    year: "2017",
    genre: "Science fiction • Drama • Action",
    duration: "164 min",
    rating: "9.1/10",
    poster: "Interstellar_poster.jpeg",
    bg: "interstellar-feat.jpeg",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    year: "2024",
    genre: "Sci-fi • Adventure • Action",
    duration: "156 min",
    rating: "8.8/10",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    bg: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
  },
  {
    id: 3,
    title: "The Batman",
    year: "2022",
    genre: "Action • Crime • Drama",
    duration: "176 min",
    rating: "8.2/10",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    bg: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 4,
    title: "Oppenheimer",
    year: "2023",
    genre: "Drama • History • Thriller",
    duration: "180 min",
    rating: "9.0/10",
    poster: "oppenheimer.jpg",
    bg: "oppenheimer_bg.jpeg",
  },
  {
    id: 5,
    title: "Avatar: The Way of Water",
    year: "2022",
    genre: "Sci-fi • Adventure • Fantasy",
    duration: "192 min",
    rating: "7.9/10",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    bg: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={movies[currentSlide].id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${movies[currentSlide].bg})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute z-20 top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full"
        >
          <FaChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute z-20 top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Movie Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 py-16 h-full text-white">
        {/* Poster */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <img
            src={movies[currentSlide].poster}
            alt={`${movies[currentSlide].title} Poster`}
            className="rounded-xl shadow-2xl"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-3/4 md:pl-10">
          <h2 className="text-4xl font-bold mb-2">{movies[currentSlide].title}</h2>
          <p className="text-gray-300 mb-2">
            {movies[currentSlide].year} • {movies[currentSlide].genre}
          </p>
          <p className="text-sm text-gray-300 max-w-xl mb-6">
            Experience the cinematic excellence of {movies[currentSlide].title}. Dive into a story filled with emotion, thrill, and visual wonder.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-200 mb-6">
            <span>⏱️ {movies[currentSlide].duration}</span>
            <span>🔊 Subtitles</span>
            <span>
              ⭐ IMDB:{" "}
              <span className="text-red-500 font-semibold">{movies[currentSlide].rating}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-red-600 px-5 py-2 rounded-full hover:bg-red-700 transition">
              Watch trailer
            </button>
            <button className="text-sm underline hover:text-gray-400 transition">Read more...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
