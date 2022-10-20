import React from "react";
import logo from '../../logo1.svg'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <div>
    <nav className="fixed">
      <img src={logo} alt='BluePrints Pathway'/>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/what-we-do'>Solutions</Link></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Our Culture</a></li>
      <button type='button' className='bg-yellow-300'>Get to know more</button>
      </ul>
    </nav>
  </div>;
};

export default Navbar ;
