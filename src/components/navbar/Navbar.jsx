import React, { useState } from "react";
import logo from '../../logo1.svg'
import './navbar.css'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return <div>
    <nav className="fixed">
      <img src={logo} alt='BluePrints Pathway'/>
      <ul className={isExpanded ? 'expanded' : ''} onClick={()=> setIsExpanded(!isExpanded)}>
        <Link className='a' to='/'><li>Home</li></Link>
        <Link className='a' to='/what-we-do'><li>Solutions</li></Link>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Our Culture</a></li>
      </ul>
      <button type='button' className='bg-yellow-300 sm:hidden'>Get to know more</button>
      <button className='hamburger bg-white' onClick={()=> setIsExpanded(!isExpanded)}>{isExpanded? <ImCross/> : <GiHamburgerMenu/>}</button>
    </nav>
  </div>;
};

export default Navbar ;
