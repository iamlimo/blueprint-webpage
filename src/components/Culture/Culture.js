import React from 'react'
import "./culture.css"
import {motion} from 'framer-motion'
import firstImg from '../../assets/first-img.png'
import secondImg from '../../assets/second image.png'
import thirdImg from '../../assets/third-image.png'

const Culture = () => {
  return (
    <>

      <div className='sec-1'>
        <div className='sec1-wrapper'>
        <h1 className='sec1-title'>Our Culture</h1>
        <div className='sec-con'>
                <div className='sec1-left'>
                <img className='sec1-img' src={firstImg} alt='...' />
                </div>
      
                <div className='sec1-right'>
                  <p className='sec1-words'>
                  As a value-oriented team, we at Blueprint 
                  Pathways are committed to delivering more 
                  than expected, and we rely on our 
                  amazing team of tech-oriented creatives to bring 
                  solutions to you.
                  </p>
                  <div className='btn-div'>
                  <motion.button className="sec1-btn"
                whileHover={{scale: 1.07, originX: 0}}
                transition={{type: 'tween', stiffness: 300}}
                >
                  Get to know more
                </motion.button>
                </div>

                </div>        
          </div>
          
        </div>
      </div>
                   

              {/* SECOND SECTION */}

      <div className='sec-2'>
          <div className='sec2-left'>
            <p className='sec2-words'>
            We have a keen interest in people willing to learn and explore the boundaries of what is possible, and if you want to be a part of that collaborative effort, reach out to us and let’s have a conversation.
            </p>
          </div>
          <div className='sec2-right'>
            <img className='sec2-img' src={secondImg} alt='...' />
          </div>
      </div>

         

                 {/* THIRD SECTION */}

      <div className='sec-3'>
          <div className='sec3-left'>
            <img className='sec3-img' src={thirdImg} alt='...' />
          </div>
          <div className='sec3-right'>
            <p className='sec3-words'>
            Would you like to work with us, or perhaps you are looking to partner with us to create opportunities for young minds and budding talent? Are you in search of a dynamic working environment to nurture curious minds and apply them to sharpen their edges? You can reach out to Judith, here.
            </p>
          </div>
      </div>

    </>
  )
}

export default Culture