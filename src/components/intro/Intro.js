import React from "react";
import LineImg from '../../assets/line-this.png'
import HouseOfBread from '../../assets/HouseOfBread.png'
import Arik from '../../assets/Arik-pic.png'
import Chidinma from '../../assets/chidinma-pic.png'
import Gale from '../../assets/intro-img.png'
import './intro.css'
import { motion } from "framer-motion"


function Intro(){

  return(
    <>
    
        <div className="top-div">
           <div id="home-jumbo" className="homexx">
                <div id="qoutify">
                <span id="line"><img src={LineImg} id="line-img" alt="..." /></span>
                <span id="quote">Quote of the week:</span>
                </div>
                <div id="actual-quote">
                <h1 id="h1-center">“Always deliver more than expected”</h1>
           </div>

           <div id="feel">
            <p>How do you feel today?</p>  

              
                       {/* MODAL 1 */}
        <button type="button" className="modal-em btn btn-none fs-1 px-4 border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              🤣
         </button>
<div className="modal-con modal fade modal1 mt-5 pt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body p-5 text-center pe-5 default">
      “Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.”
      </div>
    </div>
  </div>
</div>

                       {/* MODAL 2 */}
        <button type="button" className="modal-em btn btn-none fs-1 px-4 border-0" data-bs-toggle="modal" data-bs-target="#exampleModa2">
           😞
        </button>
<div className="modal-con modal2 modal fade mt-5 pt-5" id="exampleModa2" tabIndex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
  <div className="modal-dialog box">
    <div className="modal-content body">
      <div className="modal-body p-5 text-center pe-5 default">
      “Cheer up! After every storm comes the sun. Happiness is waiting for you ahead.”
      </div>
    </div>
  </div>
</div>

                           {/* MODAL 3 */}
        <button type="button" className="modal-em btn btn-none fs-1 px-4 border-0" data-bs-toggle="modal" data-bs-target="#exampleModa3">
            😍
        </button>
<div className="modal-con mod3 modal fade mt-5 pt-5" id="exampleModa3" tabIndex="-1" aria-labelledby="exampleModalLabe3" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    
      <div className="modal-body p-5 text-center pe-5 default">
      “Love is a thing that is full of cares and fears.”
      </div>
    </div>
  </div>
</div>

                         {/* MODAL 4 */}
        <button type="button" className="modal-em btn btn-none fs-1 px-4 border-0" data-bs-toggle="modal" data-bs-target="#exampleModa4">
             😮
        </button>
<div className="modal-con mod4 modal fade mt-5 pt-5" id="exampleModa4" tabIndex="-1" aria-labelledby="exampleModalLabe4" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    
      <div className="modal-body p-5 text-center pe-5 default">
      It's cool to be different and just be who you are and shock people in a good way.

      </div>
    </div>
  </div>
</div>
                    {/* END OF MODAL */}
                  
           </div>
           </div>

           <a href="#landingCta">
           <div id="scroll-down">
             <div className="mousey">
             <div className="scroller"></div>
             </div>
             </div>
           </a>
        </div> 
        {/* end of top */}
      

      <div className="landingCta">
        <div className="intro-top">
          <div className="landing-top">
            <h2 className="landing-headline">Providing 

            <span id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
  <div className="span-div carousel-inner">
    <span className="carousel-item active" transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="1100">
        <p className='span-txt' style={{color: '#6c57d9'}}>convenient</p>
        <hr className='con-line line'/>
    </span>
    <span className="carousel-item" transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="1100">
        <p className='span-txt' style={{color: '#478aef'}}>essential</p>
        <hr className='ess-line line'/>
    </span>
    <span className="carousel-item" transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="1100">
        <p className='span-txt' style={{color: '#0e2c55'}}>easy</p>
        <hr className='easy-line line'/>
    </span>
    <span className="carousel-item" transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="1100">
        <p className='span-txt' style={{color: '#bf3232'}}>creative</p>
        <hr className='cre-line line'/>
    </span>
    <span className="carousel-item" transition="transform 2s ease-in, opacity 1s ease-out" data-bs-interval="1100">
        <p className='span-txt' style={{color: '#339737'}}>accessible</p>
        <hr className='acc-line line'/>
    </span>
  </div>
</span>

            <br/>solutions for you</h2>
            <p className="intro-words">We connect you to solutions designed to eliminate everyday complications or we are a Nigerian tech solutions company committed to simplifying digital processes in every industry across Africa, from Edu-travel to Fintech.
</p>
          <motion.button className="intro-btn"
          whileHover={{scale: 1.07, originX: 0}}
          transition={{type: 'tween', stiffness: 300}}
          >
            Get to know more
          </motion.button>
          </div>

          <div className="right-side">
<div id=" carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="900">
      <img src={Gale} className="intro-pic d-block" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="900">
      <img src={HouseOfBread} className="intro-pic d-block" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="900">
      <img src={Arik} className="intro-pic d-block" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="900">
      <img src={Chidinma} className="intro-pic d-block" alt="..." />
    </div>
  </div>
</div>

          </div>
          </div>
          <div className="intro-bottom">
            <ul className="intro-ul">
              <li>Vava</li>
              <li>Ridic Ventures</li>
              <li>House of Lunettes</li>
              <li>Yakoyo</li>
              <li>Drinks.ng</li>
              <li>Obiweezy</li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Intro;