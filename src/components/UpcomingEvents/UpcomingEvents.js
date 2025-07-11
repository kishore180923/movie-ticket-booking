import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const upcomingEvents = [
  {
    id: 1,
    title: 'Andrea concert 2025',
    image: 'andrea.jpg',
    date: 'Feb 26, 2025',
    location: 'Chennai, Tamil Nadu, India',
    isPaid: true,
  },
  {
    id: 2,
    title: 'GV Prakash Concert Vibe Live',
    image: 'mk-gv-concert-3.webp',
    date: 'Feb 28, 2025',
    location: 'Chennai, Tamil Nadu, India',
    isPaid: false,
  },
  {
    id: 4,
    title: 'OG Vijay Antony Concert Music',
    image: 'vijay Antony.jpg',
    date: 'Mar 15, 2025',
    location: 'Chennai, Tamil Nadu, India',
    isPaid: false,
  },

  {
    id: 4,
    title: 'Dua Lipa Concert Music',
    image: 'dua lipa.avif',
    date: 'Mar 15, 2025',
    location: 'Chennai, Tamil Nadu, India',
    isPaid: false,
  },
  {
    id: 4,
    title: 'AR Rahman Concert Music',
    image: 'ARR.jpg',
    date: 'Mar 15, 2025',
    location: 'Chennai, Tamil Nadu, India',
    isPaid: false,
  },
 
  {
    id: 4,
    title: 'ANIRUDH Concert Music',
    image: 'Anirudh.jpg',
    date: 'Mar 15, 2025',
    location: 'Chennai, Tamil Nadu, India',
    isPaid: false,
  },
  {
    id: 3,
    title: 'Weekend Music Festival',
    image: 'weekend.jpg',
    date: 'Mar 03, 2025',
    location: 'Coimbatore, Tamil Nadu, India',
    isPaid: true,
  },
];

const UpcomingEvents = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollIntervalRef = useRef(null);

  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingEvents.length);
    }, 1000);
    return () => clearInterval(autoScrollIntervalRef.current);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: currentIndex * 340, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <section className="py-10 bg-gradient-to-r from-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center gap-2">
            Trending Events <span role="img" aria-label="calendar">📅</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore our hand-picked recommended events near you!
          </p>
        </div>

        {/* Scrollable Event List - Scrollbar Hidden */}
        <div 
          className="overflow-x-auto pb-4 hidden-scrollbar" 
          ref={scrollRef} 
          style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="relative min-w-[320px] max-w-sm h-[450px] rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-white mb-2">
                    <FaCalendarAlt className="text-blue-300 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-white mb-2">
                    <FaMapMarkerAlt className="text-red-300 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <div
                    className={`inline-block px-3 py-1 text-sm font-medium rounded ${
                      event.isPaid ? 'bg-red-600' : 'bg-green-600'
                    }`}
                  >
                    {event.isPaid ? 'Paid' : 'Free'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="mt-4 flex justify-center space-x-2">
          {upcomingEvents.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                currentIndex === index ? 'bg-blue-500 w-5' : 'bg-gray-300 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hide Scrollbar Styles */}
      <style jsx>{`
        .hidden-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hidden-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default UpcomingEvents;
