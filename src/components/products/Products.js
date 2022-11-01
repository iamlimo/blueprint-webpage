import React from 'react'
import './products.css'
import Line from '../../assets/line-this.png'
import phone from '../../assets/phone-img.png'
import phone2 from '../../assets/phone2-img.png'
import google from '../../assets/google-play.png'
import app from '../../assets/app-store.png'
import { motion } from "framer-motion"


const Products = () => {
  return (
    <div className='pro-wrapper'>
       <div className='pro-heading'>
         <img src={Line} className='pro-line' alt='line' />
         <span className='pro-title'>
               Our Products
           </span>
     </div>

     <div className='pro-content'>

        <div className='pro-left'>
         {/* <img src={phone} className='pro-img' alt='line' /> */}

         <div id=" carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">
    <div className="phone-img carousel-item active"  transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="3000">
      <img src={phone} className="pro-img d-block" alt="..." />
    </div>
    <div className="phone2-img carousel-item"  transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="3000">
      <img src={phone2} className="pro-img2 d-block" alt="..." />
    </div>
  </div>
</div>
         
         <div className='download'
         >
            <button className='download-btn'>
            <img src={google} className='pro-icon' alt='line' />
            <span className='btn-txt'>Download on Playstore</span> 
            </button>
            
            <button className='download-btn'>
                <img src={app} className='pro-icon' alt='line' />
               <span className='btn-txt'>Download on Appstore</span> 
            </button>
         </div>
        </div>
        
        <div className='pro-right'>
           <img src={Line} className='pro-line2' alt='line' />
           <span className='scam'>ScamTrust</span>
           <h2 className="pro-headline">Enabling transparency between the customer <br /> and the vendor by...</h2>
           <ul className='pro-ul'>
               <li className='pro-li'>Personalizing business transaction</li>
               <li className='pro-li'>Providing insight on verifying vendor credibility</li>
               <li className='pro-li'>Enforces two-party confirmation</li>
               <li className='pro-li'>Guaranteed refunds on any scam on the platform</li>
           </ul>
           <motion.button
             whileHover={{scale: 1.07, originX: 0}}
             transition={{type: 'tween', stiffness: 300}}
           className='pro-btn'
           >
            Get to know more
            </motion.button>
        </div>
     </div>
    </div>
  )
}

export default Products;