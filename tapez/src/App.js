// src/App.js

import React from 'react';

import Navbar from './components/navbar';
import Header from './components/Header';
import HowItWorks from './components/Howitworks';
import AboutUs from './components/Aboutus';
import Cont from './components/cont';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomeP from './HOME/HomeP';
import BasicTable from './HOME/Cards/Table';

const App = () => {
  return (
   <>
   <BasicTable/>
   {/* <HomeP></HomeP> */}
   {/* <Navbar/>
          <Header />
          <HowItWorks />
          <AboutUs />
          <Cont />
          <Contact />
          <Footer /> */}
          </>
          
      
  );
};

export default App;
