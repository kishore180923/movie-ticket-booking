import React from 'react';
import Home from './components/home/home';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Poster from './components/poster/Poster';
import Highlights from './components/highlights/Highlights';
import MusicConcepts from './components/musicConcepts/MusicConcepts';
import AboutUs from './components/about/About';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <Poster />
      <Highlights />
      <MusicConcepts />
      <UpcomingEvents />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
