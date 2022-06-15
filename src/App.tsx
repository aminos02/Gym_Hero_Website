import React from 'react';
import './App.scss';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Features from './components/Features';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Features/>
    </div>
  );
}

export default App;
