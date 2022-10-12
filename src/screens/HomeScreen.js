import React from "react";
import cracked from '../logo/cracked.svg'
import loving from '../logo/loving.svg'
import down from '../logo/down.svg'
import wowed from '../logo/wowed.svg'
import scroll from '../logo/scroll.svg'
import gale from '../images/gale.jpg'
import '../components/navbar/navbar.css'
import Footer from "../components/footer/Footer";

const HomeScreen = () => {
  return <div>
    <div className='quote text-center'>
      <p>Quote of the day</p>
      <h1>"Always deliver more than expected"</h1>
    </div>
    <div className="feelings text-center">
      <p>How are you feeling today?</p>
      <div className='flex justify-center'>
        <img src={cracked} alt={cracked} />
        <img src={loving} alt={loving} />
        <img src={down} alt={down} />
        <img src={wowed} alt={wowed} />
      </div>
    </div>
    <div className='scroll'>
      <img src={scroll} alt='Scroll' className='ml-5 mb-2' />
      <p>Scroll down</p>
    </div>
    <div className='grid grid-cols-2 mt-40'>
      <div className='okay flex flex-col items-center justify-center p-24'>
        <h1 >Providing easy solutions for you</h1>
        <p className='mt-12'>We connect you to solutions designed to eliminate everyday complications or we are a Nigerian tech solutions company committed to simplifying digital processes in every industry across Africa, from Edu-travel to Fintech.</p>
        <button type='button' className='bg-yellow-300 p-3 mt-4 self-start'>Get to know more</button>
      </div>
      <div className='bluee'>
        <img src={gale} alt={gale} className='shadow-lg' />
      </div>
    </div>
    <div style={{ backgroundColor: 'rgba(255, 138, 0, .04)', color: 'rgba(102, 102, 102, 0.6)', marginTop: '120px' }} className='p-8 items-center justify-center'>
      <ul className="flex items-center justify-between mx-36">
        <li>Vava</li>
        <li>Ridic Ventures</li>
        <li>House of Lunettes</li>
        <li>Yakoyo</li>
        <li>Drinks.ng</li>
        <li>Obiweezy</li>
      </ul>
    </div>
    <Footer />

  </div>;
};

export default HomeScreen;
