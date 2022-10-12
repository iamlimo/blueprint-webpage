import React from "react";
import logo from '../../logo1.svg'
import './navbar.css'

const Navbar = () => {
  return <div>
    <nav>
      <img src={logo} alt='BluePrints Pathway'/>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Solutions</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Our Culture</a></li>
      <button type='button' className='bg-yellow-300'>Get to know more</button>
      </ul>
    </nav>
  </div>;
};

export default Navbar ;
