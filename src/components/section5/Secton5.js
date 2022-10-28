import React from 'react'
import './section5.css'
import Line from '../../assets/line-this.png'
import students from '../../assets/students-img.png'
import { motion } from "framer-motion"

const Section5 = () => {
  return (
    <div className='sec5-wrapper'>
        <div className='sec5-left'>
         <img src={Line} alt='line' className='pro-line' />
           <span className='scam'>Blueprints Travels</span>
           <h2 className='pro-headline'>Eliminating the boundaries <br /> between you and <br/> international education</h2>
           <ul className='sec-ul'>
               <li className='sec-li'>Japa with ease, stress free</li>
               <li className='sec-li'>Getting you admission without IELTS or TOEFL</li>
               <li className='sec-li'>Canada is the top choice for Nigerian hopefuls</li>
               <li className='sec-li'>Insert function</li>
           </ul>
           <motion.button 
            whileHover={{scale: 1.07, originX: 0}}
            transition={{type: 'tween', stiffness: 300}}
           className='sec-btn'
           >
            Get to know more</motion.button>
        </div>
        <div className='sec-right'>
            <img src={students} className='sec-img' alt="students"/>
        </div>
    </div>
  )
}

export default Section5