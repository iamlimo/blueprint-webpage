import React from 'react'
import About from './About/About'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Intro from './intro/Intro'
import Products from './products/Products'
import Section5 from './Travels/Travels'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <Navbar />
        <Intro />
        <About />
        <Products />
        <Section5 />
        <Footer />
    </div>
  )
}

export default Home