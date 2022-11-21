import React from 'react'
import Culture from './components/Culture/Culture'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const OurCulture = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
        <Navbar />
        <Culture />
        <Footer />
    </div>
  )
}

export default OurCulture