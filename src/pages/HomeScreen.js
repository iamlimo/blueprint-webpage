import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cracked from '../logo/cracked.svg'
import loving from '../logo/loving.svg'
import down from '../logo/down.svg'
import wowed from '../logo/wowed.svg'
import scroll from '../logo/scroll.svg'
import gale from '../images/gale.jpg'
import stripe from '../images/stripe.jpg'
import '../components/navbar/navbar.css'
import stripe2 from '../images/stripe2.jpg'
import phone1 from '../images/phone1.jpg'
import first from '../logo/first.svg'
import second from '../logo/second.svg'
import third from '../logo/third.svg'
import fourth from '../logo/fourth.svg'
import fifth from '../logo/fifth.svg'
import sixth from '../logo/sixth.svg'
import stroke from '../logo/stroke.svg'
import appstore from '../logo/appstore.svg'
import playstore from '../logo/googleplay.svg'
import travels from '../images/travels.jpg'
import Footer from "../components/footer/Footer";
import { Link } from 'react-router-dom'

const HomeScreen = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <>
    <div style={{ overflow: 'hidden' }}>
      <div className='quote text-center leading-10' data-aos='zoom-in'>
        <p style={{ color: '#0E2C55' }}>Quote of the day</p>
        <h1>"Always deliver more than expected"</h1>
      </div>
      <div className="feelings text-center">
        <p style={{ color: '#0E2C55' }}>How are you feeling today?</p>
        <div className='flex justify-center'>
          <img src={cracked} alt={cracked} className='hover:scale-150 hover:ease-in-out hover:duration-300' />
          <img src={loving} alt={loving} className='hover:scale-150 hover:ease-in-out hover:duration-300' />
          <img src={down} alt={down} className='hover:scale-150 hover:ease-in-out hover:duration-300' />
          <img src={wowed} alt={wowed} className='hover:scale-150 hover:ease-in-out hover:duration-300' />
        </div>
      </div>
      <div className='scroll md:hidden' style={{ marginTop: '10vh' }}>
        <img src={scroll} alt='Scroll' className='ml-5 mb-2' />
        <p>Scroll down</p>
      </div>
      <div className='grid grid-cols-2 md:flex md:flex-col mt-60 h-screen md:h-auto ml-0'>
        <div className='okay flex flex-col items-center justify-center lg:items-start lg:justify-start lg:pl-6 lg:p-0 lg:w-96 p-24 lg:pb-0'>
          <h1 >Providing easy solutions for you</h1>
          <p style={{ color: '#0E2C55' }} className='mt-12 sm:w-64 md:w-96'>We connect you to solutions designed to eliminate everyday complications or we are a Nigerian tech solutions company committed to simplifying digital processes in every industry across Africa, from Edu-travel to Fintech.</p>
          <button type='button' className='bg-yellow-300 p-3 mt-4 self-start'>Get to know more</button>
        </div>
        <div className='bluee' data-aos='zoom-in-right' data-aos-duration='500'>
          <img src={gale} alt={gale} className='shadow-lg' />
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(255, 138, 0, .04)', color: 'rgba(102, 102, 102, 0.6)' }} className='p-8 sm:px-2 sm:mt-32 md:mt-60 lg:mt-0 items-center mt-16 sm:mt-0 justify-center sm:items-start sm:justify-start w-full'>
        <ul className="flex items-center md:text-xs lg:text-sm justify-between mx-36 md:mx-3 lg:mx-6">
          <li>Vava</li>
          <li>Ridic Ventures</li>
          <li>House of Lunettes</li>
          <li>Yakoyo</li>
          <li>Drinks.ng</li>
          <li>Obiweezy</li>
        </ul>
      </div>
      <div style={{ backgroundImage: `url(${stripe})` }} className="bg-cover grid grid-cols-2 md:flex md:items-center md:p-20 justify-between">
        <div className="h-screen w-36 md:hidden"></div>
        <div className="flex flex-col">
          <div className="w-3/4 md:w-full mt-72 md:mt-0 text md:text-center md:justify-center md:items-center">
            <h2>Who are we?</h2>
            <p style={{ color: '#0E2C55' }} className='mt-8'>We are an African tech company focused on simplifying the digital experience of millions of people across Africa.
              We connect you to solutions designed to eliminate everyday complications.
            </p>
          </div>
          <button type='button' style={{ color: '#0E2C55' }} className='bg-yellow-300 p-3 mt-6 md:self-center self-start hover:font-semibold'>Get to know more</button>
        </div>
      </div>
      <div style={{ backgroundImage: stripe2, zIndex: '100' }} className="" data-aos='zoom-in' data-aos-duration='500'>
        <div style={{ backgroundColor: 'rgba(14, 44, 85, .02)' }} className="flex flex-col justify-center items-center text pb-20">
          <h2 className="mt-10">What we believe</h2>
          <p style={{ color: '#0E2C55' }} className="text-center w-96 my-6">Our team is committed to breaking the barriers to success, but we pride ourselves on our healthy work environment, one that primes every one of us to do our best and deliver more than expected.
          </p>
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
              <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
                <img src={first} alt='' />
              </div>
              <p style={{ color: '#0E2C55' }} className='mt-5'>Creativity</p>
            </div>
            <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
              <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
                <img src={second} alt='' />
              </div>
              <p style={{ color: '#0E2C55' }} className='mt-5'>Collaboration</p>
            </div>
            <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
              <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
                <img src={third} alt='' />
              </div>
              <p style={{ color: '#0E2C55' }} className='mt-5 text-center'>Value-Oriented</p>
            </div>
            <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
              <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
                <img src={fourth} alt='' />
              </div>
              <p style={{ color: '#0E2C55' }} className='mt-5'>Innovation</p>
            </div>
            <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
              <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
                <img src={fifth} alt='' />
              </div>
              <p style={{ color: '#0E2C55' }} className='mt-5 text-center'>Problem Solving</p>
            </div>
            <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
              <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
                <img src={sixth} alt='' />
              </div>
              <p style={{ color: '#0E2C55' }} className='mt-5'>Driven</p>
            </div>
            <Link to='/' className='border-b-2 border-yellow-300'>
              Get to know more
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center mt-20">
          <img style={{ height: '5px' }} src={stroke} alt='stroke'></img>
          <h2 className="pl-2">Our Products</h2>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-col">
          <div className="sm:flex sm:flex-col">
            <img src={phone1} alt='phone1' className="w-fit h-fit"></img>
            <div className="flex flex-row sm:flex-row mt-20 sm:mt-0">
              <div className="flex flex-row w-48 justify-between bg-white rounded-lg p-1 mx-3 my-3 shadow-lg">
                <img className="mx-3" src={playstore} alt={playstore}></img>
                <p>Download on Playstore</p>
              </div>
              <div className="flex flex row w-48 justify-between bg-white rounded-lg p-1 mx-3 my-3 shadow-lg">
                <img className="mx-3" src={appstore} alt={appstore}></img>
                <p>Download on Appstore</p>
              </div>
            </div>

          </div>
          <div className="p-24 sm:p-0 sm:pr-5 sm:mt-20 pl-0 text">
            <h4 className="sm:ml-10">ScamTrust</h4>
            <h1 className="sm:text-3xl sm:ml-10">Enabling transparency between the customer and the vendor by…</h1>
            <div className="ml-10 sm:ml-20">
              <ul style={{ color: '#666666' }} className='list-disc leading-10'>
                <li>Personalizing business transactions</li>
                <li>Providing insight on verifying vendor credibility</li>
                <li>Enforces two-party confirmation</li>
                <li>Enforces two-party confirmation</li>
                <li>Guaranteed refunds on any scam on the platform</li>
              </ul>
              <button type='button' className='bg-yellow-300 p-3 mt-4 self-start'>Get to know more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col sm:mt-20">
        <div className="p-24 sm:p-5 text">
          <h4 className="sm:ml-10">Blueprints Travels</h4>
          <h1 className="sm:text-3xl sm:ml-10">Eliminating the boundaries between you and international education</h1>
          <div className="ml-20">
            <ul style={{ color: '#666666' }} className='list-disc leading-10'>
              <li>Japa with ease, stress free</li>
              <li>Getting you admission without IELTS or TOEFL</li>
              <li>Canada is the top choice for Nigerian hopefuls</li>
              <li>Insert function</li>
            </ul>
            <button type='button' className='bg-yellow-300 p-3 mt-4 self-start'>Get to know more</button>
          </div>
        </div>
        <div className='travels flex justify-center items-center'>
          <img className="w-full h-full sm:w-80 sm:h-80 sm:pr-0 pr-40 self-center lg:hidden" src={travels} alt='travels'></img>
        </div>
      </div>
      <Footer />
    </div>
  </>;
};

export default HomeScreen;
