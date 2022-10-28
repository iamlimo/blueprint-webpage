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
                <span id="line"><img src={LineImg} id="line-img" /></span>
                <span id="quote">Quote of the week:</span>
                </div>
                <div id="actual-quote">
                <h1 id="h1-center">“Always deliver more than expected”</h1>
           </div>

           <div id="feel">
            <p>How do you feel today?</p>  

              
                       {/* MODAL 1 */}
        <button type="button" className=" modal-em btn btn-none fs-1 px-4 border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              🤣
         </button>
<div className="modal-con modal fade mt-5 pt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
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
<div className="modal-con modal fade mt-5 pt-5" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    
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
<div className="modal-con modal fade mt-5 pt-5" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabe3" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    
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
<div className="modal-con modal fade mt-5 pt-5" id="exampleModa4" tabindex="-1" aria-labelledby="exampleModalLabe4" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    
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
            <h2 className="landing-headline">Providing easy<br/>solutions for you</h2>
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
<div id=" carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="900">
      <img src={Gale} class="intro-pic d-block" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="900">
      <img src={HouseOfBread} class="intro-pic d-block" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="900">
      <img src={Arik} class="intro-pic d-block" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="900">
      <img src={Chidinma} class="intro-pic d-block" alt="..." />
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