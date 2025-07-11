import React from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";

const movies = [
  {
    title: "Padai Thalaivan",
    genre: "Action/Thriller",
    rating: "7.4/10",
    votes: "48 Votes",
    type: "rating",
    poster: "https://i.imgur.com/OwXQ0NQ.jpg",
  },
  {
    title: "Thug Life",
    genre: "Action/Crime/Drama/Thriller",
    rating: "5/10",
    votes: "24.1K Votes",
    type: "rating",
    poster: "https://i.imgur.com/I4jOmkD.jpg",
  },
  {
    title: "Guts",
    genre: "Crime/Thriller",
    rating: "161 Likes",
    type: "likes",
    poster: "https://i.imgur.com/LlUGP6v.jpg",
  },
  {
    title: "Paramasivan Fathima",
    genre: "Horror/Thriller",
    rating: "8.9/10",
    votes: "277 Votes",
    type: "rating",
    poster: "https://i.imgur.com/oLEL1aB.jpg",
  },
  {
    title: "How to Train Your Dragon",
    genre: "Adventure/Family/Fantasy",
    rating: "85.2K Likes",
    type: "likes",
    poster: "https://i.imgur.com/jzfqTyU.jpg",
  },
  {
    title: "Leo: Rise of the Beast",
    genre: "Action/Fantasy",
    rating: "9.2/10",
    votes: "812 Votes",
    type: "rating",
    poster: "https://i.imgur.com/4Zl8yKn.jpg",
  },
  {
    title: "Silent Whispers",
    genre: "Mystery/Drama",
    rating: "198 Likes",
    type: "likes",
    poster: "https://i.imgur.com/mMIvL3c.jpg",
  },
  {
    title: "Raja: The Legend",
    genre: "Historical/Adventure",
    rating: "6.8/10",
    votes: "521 Votes",
    type: "rating",
    poster: "https://i.imgur.com/rmyl7GC.jpg",
  },
];

const RecommendedMovies = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recommended Movies</h2>
        <a href="#" className="text-sm text-red-500 hover:underline">See All ›</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="rounded-t-xl h-72 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm mb-2">
                {movie.type === "rating" ? (
                  <FaStar className="text-red-600 mr-1" />
                ) : (
                  <FaThumbsUp className="text-green-600 mr-1" />
                )}
                <span className="font-semibold text-gray-800">{movie.rating}</span>
                {movie.votes && (
                  <span className="ml-1 text-gray-500">{movie.votes}</span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 text-md mb-1">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
