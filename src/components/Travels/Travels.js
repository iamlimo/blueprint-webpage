import React from 'react'
import './travels.css'
import Line from '../../assets/line-this.png'
import students from '../../assets/students-img.png'

const Section5 = () => {
  return (
    <div className='sec5-wrapper'>
        <div className='sec5-left'>
          <div className='sec5-title'>
         <img src={Line} alt='line' className='sec-line' />
           <span className='sec-scam'>Blueprints Travels</span>
          </div>
           <h2 className='sec-head'>Eliminating the boundaries <br /> between you and <br/> international education</h2>
           <ul className='sec-ul'>
               <li className='sec-li'>Japa with ease, stress free</li>
               <li className='sec-li'>Getting you admission without IELTS or TOEFL</li>
               <li className='sec-li'>Canada is the top choice for Nigerian hopefuls</li>
               <li className='sec-li'>Insert function</li>
           </ul>
           <button className='sec-btn'>
            Get to know more</button>
        </div>
        <div className='sec-right'>
            <img src={students} className='sec-img' alt="students"/>
        </div>
    </div>
  )
}

export default Section5