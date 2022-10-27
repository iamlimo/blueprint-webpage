import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp, faLinkedin, faInstagram, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <div className='foo-wrapper'>
        <div className='foo-left'>
            <p className='foo-title'>Blueprints Pathways</p>
            <hr style={{border: '2px solid white'}}/>
            <ul className='foo-ul'>
                <li className='foo-li'>Elf Bus stop, No 1b Akinyemi Ave, <br /> Lekki Phase 1 106104, Lagos</li>
                <li className='foo-li'>+234-704-1127-855</li>
                <li className='foo-li'>+234-902-8197-960</li>
            </ul>
        </div>
        <div className='foo-middle'>
            <p className='foo-title'>Quick Links</p>
            <hr style={{border: '2px solid white'}}/>
            <ul className='foo-ul'>
                <li className='foo-li'>Home</li>
                <li className='foo-li'>Solutions</li>
                <li className='foo-li'>Blog</li>
                <li className='foo-li'>Our Culture</li>
                <li className='foo-li'>Contact Us</li>
            </ul>
        </div>
        <div className='foo-right'>
            <p className='foo-title' style={{textAlign: 'center'}}>Follow Us</p>
            <hr style={{border: '2px solid white', width: '100px', marginLeft: '120px'}}/>
            <div className='foo-ul ul-right'>
                <FontAwesomeIcon className='f-icon' icon={faWhatsapp} />
                <FontAwesomeIcon className='f-icon' icon={faLinkedin} />
                <FontAwesomeIcon className='f-icon' icon={faInstagram} />
                <FontAwesomeIcon className='f-icon' icon={faTwitter} />
                <FontAwesomeIcon className='f-icon' icon={faTiktok} />
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