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

  return <div>
    <div className='quote text-center' data-aos='zoom-in'>
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
    <div className='scroll' style={{ marginTop: '10vh' }}>
      <img src={scroll} alt='Scroll' className='ml-5 mb-2' />
      <p>Scroll down</p>
    </div>
    <div className='grid grid-cols-2 mt-52 h-screen'>
      <div className='okay flex flex-col items-center justify-center p-24'>
        <h1 >Providing easy solutions for you</h1>
        <p style={{ color: '#0E2C55' }} className='mt-12'>We connect you to solutions designed to eliminate everyday complications or we are a Nigerian tech solutions company committed to simplifying digital processes in every industry across Africa, from Edu-travel to Fintech.</p>
        <button type='button' className='bg-yellow-300 p-3 mt-4 self-start'>Get to know more</button>
      </div>
      <div className='bluee' data-aos='zoom-in-right' data-aos-duration='500'>
        <img src={gale} alt={gale} className='shadow-lg' />
      </div>
    </div>
    <div style={{ backgroundColor: 'rgba(255, 138, 0, .04)', color: 'rgba(102, 102, 102, 0.6)' }} className='p-8 items-center mt-16 justify-center'>
      <ul className="flex items-center justify-between mx-36">
        <li>Vava</li>
        <li>Ridic Ventures</li>
        <li>House of Lunettes</li>
        <li>Yakoyo</li>
        <li>Drinks.ng</li>
        <li>Obiweezy</li>
      </ul>
    </div>
    <div style={{ backgroundImage: `url(${stripe})` }} className="bg-cover grid grid-cols-2 justify-between">
      <div className="h-screen w-36"></div>
      <div className="flex flex-col">
        <div className="w-3/4 mt-72 text">
          <h2>Who are we?</h2>
          <p style={{ color: '#0E2C55' }} className='mt-8'>We are an African tech company focused on simplifying the digital experience of millions of people across Africa.
            We connect you to solutions designed to eliminate everyday complications.
          </p>
        </div>
        <button type='button' style={{ color: '#0E2C55' }} className='bg-yellow-300 p-3 mt-6 self-start hover:font-semibold'>Get to know more</button>
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
              <img src={first} />
            </div>
            <p style={{ color: '#0E2C55' }} className='mt-5'>Creativity</p>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
            <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
              <img src={second} />
            </div>
            <p style={{ color: '#0E2C55' }} className='mt-5'>Collaboration</p>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
            <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
              <img src={third} />
            </div>
            <p style={{ color: '#0E2C55' }} className='mt-5'>Value-Oriented</p>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
            <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
              <img src={fourth} />
            </div>
            <p style={{ color: '#0E2C55' }} className='mt-5'>Innovation</p>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
            <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
              <img src={fifth} />
            </div>
            <p style={{ color: '#0E2C55' }} className='mt-5'>Problem Solving</p>
          </div>
          <div className="flex flex-col items-center justify-evenly bg-white p-6 pt-3 m-3">
            <div style={{ backgroundColor: '#D9ECFF' }} className="rounded-full p-2">
              <img src={sixth} />
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
      <div className="grid grid-cols-2">
        <div>
          <img src={phone1} alt='phone1' className="w-fit h-fit"></img>
          <div className="flex flex-row mt-0">
            <div className="flex flex row w-48 justify-between bg-white rounded-lg p-1 mx-3 shadow-lg">
              <img className="mx-3" src={playstore} alt={playstore}></img>
              <p>Download on Playstore</p>
            </div>
            <div className="flex flex row w-48 justify-between bg-white rounded-lg p-1 shadow-lg">
              <img className="mx-3" src={appstore} alt={appstore}></img>
              <p>Download on Appstore</p>
            </div>
          </div>

        </div>
        <div style={{ marginTop: '20vh' }} className="p-24 pl-0 text">
          <h4>ScamTrust</h4>
          <h1>Enabling transparency between the customer and the vendor by…</h1>
          <div className="ml-10">
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
    <div className="flex flex-row">
      <div className="p-24 text">
        <h4>Blueprints Travels</h4>
        <h1>Eliminating the boundaries between you and international education</h1>
        <div className="ml-10">
          <ul style={{ color: '#666666' }} className='list-disc leading-10'>
            <li>Japa with ease, stress free</li>
            <li>Getting you admission without IELTS or TOEFL</li>
            <li>Canada is the top choice for Nigerian hopefuls</li>
            <li>Insert function</li>
          </ul>
          <button type='button' className='bg-yellow-300 p-3 mt-4 self-start'>Get to know more</button>
        </div>
      </div>
      <div style={{ marginTop: '20vh', marginBottom: '10vh' }}>
        <img className="w-full h-full pr-40" src={travels} alt='travels'></img>
      </div>
    </div>
    <Footer />

  </div>;
};

export default HomeScreen;
