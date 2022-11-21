import React from 'react'
import About from './About/About'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Solutions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
        <Navbar />
        <About />
        <Footer />
    </div>
  )
}

export default Solutions