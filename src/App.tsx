import React from 'react';
import './App.scss';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Discount from './components/Discount';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Trainers from './components/Trainers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Features/>
      <Pricing/>
      <Trainers/>
      <Discount/>
      <Reviews/>
      <Blogs/>
      <Footer/>

<FontAwesomeIcon icon={solid('user-secret')} />


    </div>
  );
}

export default App;
