import React from "react";
import instagram from '../../logo/instagram.svg'
import linkedIn from '../../logo/linkedIn.svg'
import whatsapp from '../../logo/whatsapp.svg'
import twitter from '../../logo/twitter.svg'
import tiktok from '../../logo/tiktok.svg'
import copy from '../../logo/copy.svg'

const Footer = () => {
  return <>
    <div style={{ backgroundColor: '#002C61', color: '#FFFFFF' }} className='grid grid-cols-3 p-10'>
      <div style={{ color: '#FFFFFF' }}>
        <h3>Blueprints Pathway</h3>
        <p style={{ color: '#FFFFFF' }}>Elf Bus stop, No 1b Akinyemi Ave,<br /> Lekki Phase 1 106104, Lagos</p>
        <p>+234-704-1127-855</p>
        <p>+234-902-8197-960</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Solutions</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Our Culture</a></li>
          <li><a href='#'>Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="flex flex-row justify-start">
          <a href="#"><img src={whatsapp} alt={whatsapp} /></a>
          <a href="#"><img src={linkedIn} alt={linkedIn} /></a>
          <a href="#"><img src={instagram} alt={instagram} /></a>
          <a href="#"><img src={twitter} alt={twitter} /></a>
          <a href="#"><img src={tiktok} alt={tiktok} /></a>
        </div>

      </div>

    </div>
    <div className="flex justify-center items-center p-2">
      <img src={copy} alt='copyright'></img>
      <p>Copyright BluePrints 2022</p>
    </div>
  </>
};

export default Footer;
