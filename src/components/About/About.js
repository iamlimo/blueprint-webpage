import React, { useState } from 'react'
import './about.css'
import Line from '../../assets/line-this.png'
import frame from '../../assets/frame-design.png'
// import data from '../aboutData'
import { motion } from "framer-motion"


const About = () => {

  const [show, setShow] = useState(-1);

  const handleHover = (index) => {
    setShow(index);
  }
  const handleMouseOut = () => {
    setShow(-1);
  };


  return (
  <div className='ab-wrapper'>

               {/* Beginning of ABOUT TOP */}
      <div className='about-con-top'>
        <div className='ab-top-title'>
          <img src={Line} className='ab-line' alt='line' />
          <span className='about-title'>
              What we do
          </span>
        </div>
          <p className='about-words'>
          We create solutions designed to eliminate everyday complications. Blueprints Pathway is a place where businesses become brands. We are a Nigerian Digital Agency company committed to simplifying digital processes in every industry across Africa.
          We believe in better. Because better doesn’t live in isolation and never stops evolving. Because better knows that best is only temporary. We are new, fresh and hungry. We exist to make the world a better experience.
           </p>            

           <div className='card-con'>

              <div className='card-con-left'>
                <div className='card card1'
                style={{backgroundColor: '#9747FF4F',
                 border: 'none',
                 borderRadius: '20px',
                }}
                >
                  <h3 className='card-title'>Branding</h3>
                  <p className='card-words'>Meeting brand objectives is made simpler with Blueprints Pathway since we provide strategy services with great brains that thoroughly investigate the best communication model and approach for your company.</p>
                   <div className='card-bottom'>
                  <motion.p
                  whileHover={{
                    backgroundColor: '#FDEA6A',
                    padding: '5px',
                    borderRadius: '15px'
                  }}
                  transition={{type: 'tween', stiffness: 300}}
                   className='card-link'
                   >
                    Get to know more
                    </motion.p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                </div>

                <div className='card card2'
                style={{backgroundColor: '#B1D8FE',
                 border: 'none',
                 borderRadius: '20px'
              }}
                >
                  <h3 className='card-title'>IT services, Product Design & Development </h3>
                  <p className='card-words'> From the UI to the UX, we develop mood-enhancing, narrative websites that reach and make them appear appealing to their target demographic and beyond, add flavour to the brand, and give it more trust.</p>
                  <div className='card-bottom'>
                  <motion.p 
                  whileHover={{
                    backgroundColor: '#FDEA6A',
                    padding: '5px',
                    borderRadius: '15px'
                  }}
                  transition={{type: 'tween', stiffness: 300}}
                  className='card-link'
                  >
                    Get to know more
                    </motion.p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                 </div>

              </div>

              
                <div className='card-con-right'>

                 <div className='card card3'
                 style={{backgroundColor: '#FCF6EE',
                 border: 'none',
                 borderRadius: '20px'
                }}
                 >
                  <h3 className='card-title card-line-2'>Content</h3>
                  <p className='card-words'>We produce content that works on all digital and social media channels. Content draws your audience even closer by narrating the stories behind your business. </p>
                  <div className='card-bottom'>
                  <motion.p 
                  whileHover={{
                    backgroundColor: '#FDEA6A',
                    padding: '5px',
                    borderRadius: '15px'
                  }}
                  transition={{type: 'tween', stiffness: 300}}
                  className='card-link'
                  >
                    Get to know more
                    </motion.p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                </div>

                <div className='card card4'
                 style={{backgroundColor: '#DEE3E6',
                 border: 'none',
                 borderRadius: '20px'
                }}
                >
                  <h3 className='card-title'>Brand Engagement</h3>
                  <p className='card-words'>Your brand will undoubtedly establish a steadfast place in the hearts of your target audience by engaging in conversation and responding to client issues.</p>
                  <div className='card-bottom'>
                  <motion.p 
                  whileHover={{
                    backgroundColor: '#FDEA6A',
                    padding: '5px',
                    borderRadius: '15px'
                  }}
                  transition={{type: 'tween', stiffness: 300}}
                  className='card-link'
                  >
                    Get to know more</motion.p>
                  <img  className='card-frame' src={frame} alt='card-frame' />
                   </div>
                </div>
              </div>

           </div>
           </div>

    


                {/* ABOUT BOTTOM */}
      <div className='about-con-bottom'>
          <img src={Line} className='ab-line btm-line' alt='line' />
          <span className='ab-bottom-title'>
              What we believe
          </span>
          <p className='ab-bottom-words'>
              Our team is committed to breaking the barriers to success, but we pride 
              ourselves in our healthy work environment, one that primes every one of us 
              to do our best and deliver more than expected.
          </p>
     
           {/* <div className='card-wrapper'>
                {data.map((item, index) => {
                  return (
                    <div className='about-cards'
                    key={item.id}
                    >   
            <motion.div 
            whileHover={{width: '180px', paddingBottom: '175px', backgroundColor: '#d9ecff'}}
            transition={{ease: "linear"}}
            onMouseOver={()=>handleHover(index)} onMouseOut={handleMouseOut}
            className='btm-cards'  key={item.id}> 
              <img className='btm-card-img img-top' src={item.img} alt={item.alt}/>
              <h6 className='btm-card-word'>{item.word}</h6>
                   {show === index ? <p className='hover'>{item.hover}</p>: null } 

            </motion.div> 
                </div>
                  )
                })}

         <motion.button className='about-cta about-btn'
           whileHover={{scale: 1.07, originX: 0}}
           transition={{type: 'tween', stiffness: 300}}
          >Get to know more</motion.button>

               </div> */}
         
      </div>
  </div>
  )
}

export default About
