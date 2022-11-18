import React from 'react'
import './products.css'
import Line from '../../assets/line-this.png'
import phone from '../../assets/phone-img.png'
import phone2 from '../../assets/phone2-img.png'
import google from '../../assets/google-play.png'
import app from '../../assets/app-store.png'
import Carousel from 'react-bootstrap/Carousel';


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

    <Carousel fade interval="1500" indicators={false} nextIcon={false} prevIcon={false}>
      <Carousel.Item>
        <img src={phone} className="pro-img d-block" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img src={phone2} className="pro-img2 d-block" alt="..." />
      </Carousel.Item>
    </Carousel>
 
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
           <button className='pro-btn'>
            Get to know more
            </button>
        </div>
     </div>
    </div>
  )
}

export default Products;