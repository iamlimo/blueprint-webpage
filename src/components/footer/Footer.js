import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp, faLinkedin, faInstagram, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className='foo-wrapper'>
        <div className='foo-left'>
            <p className='foo-title'>Blueprints Pathways</p>
            <hr />
            <ul className='foo-ul'>
                <li className='foo-li'>Elf Bus stop, No 1b Akinyemi Ave, <br /> Lekki Phase 1 106104, Lagos</li>
                <li className='foo-li'>+234-704-1127-855</li>
                <li className='foo-li'>+234-902-8197-960</li>
            </ul>
        </div>
        <div className='foo-middle'>
            <p className='foo-title'>Quick Links</p>
            <hr />
            <div className='foo-ul ul-middle'>
                <Link to="/" className='foo-li'>Home</Link>
                <Link to="/" className='foo-li'>Solutions</Link>
                <Link to="/" className='foo-li'>Blog</Link>
                <Link to="/about" className='foo-li'>Our Culture</Link>
                <Link to="/" className='foo-li'>Contact Us</Link>
            </div>
        </div>
        <div className='foo-right'>
            <p className='foo-title' style={{textAlign: 'center'}}>Follow Us</p>
            <hr style={{border: '2px solid white', width: '100px', marginLeft: '120px'}}
            className='right-line'
            />
            <div className='foo-ul ul-right'>
                <a href="https://wa.me/message/3XQPNKHLC6MME1" target='_blank'><FontAwesomeIcon className='f-icon' icon={faWhatsapp} /></a>
                <a href="https://www.linkedin.com/company/blueprint-pathway/" target='_blank'><FontAwesomeIcon className='f-icon' icon={faLinkedin} /></a>
                <a href="https://instagram.com/blueprintspathway?igshid=YmMyMTA2M2Y=" target='_blank'><FontAwesomeIcon className='f-icon' icon={faInstagram} /></a>
                <a href="https://twitter.com/blueprintspath?s=21&t=qRbPITBhtbgyIjwYEKBd0A" target='_blank'><FontAwesomeIcon className='f-icon' icon={faTwitter} /></a>
                <a href="http://www.tiktok.com/@blueprints_pathway" target='_blank'><FontAwesomeIcon className='f-icon' icon={faTiktok} /></a>
            </div>
        </div>
    </div>
    <div>
        <p className='foot-btm'>©  Copyright Blueprints 2022</p>
    </div>
    </>
  )
}

export default Footer