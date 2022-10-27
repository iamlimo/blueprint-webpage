import React from 'react'
import About from './About/About'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Intro from './intro/Intro'
import Products from './products/Products'
import Section5 from './section5/Secton5'

const Home = () => {
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