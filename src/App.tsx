import React from 'react';
import './App.scss';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <AboutUs/>
    </div>
  );
}

export default App;
