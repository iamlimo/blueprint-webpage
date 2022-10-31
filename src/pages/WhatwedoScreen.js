import React, { useEffect } from "react";
import '../components/navbar/navbar.css'
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'
import cards from '../images/cards.jpg'
import arrow1 from '../logo/arrow1.svg'

const WhatwedoScreen = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return <div style={{ backgroundColor: '#F3F9FC', color: '#0E2C55', overflowX: 'hidden' }} className='mt-20 p-12 md:p-12'>
    <div className="flex flex-row items-center justify-center text">
      <h2>what we do</h2>
    </div>
    <p className="mt-5" data-aos='fade-right'>We create solutions designed to eliminate everyday complications. Blueprints Pathway is a place where businesses become brands. We are a Nigerian Digital Agency company committed to simplifying digital processes in every industry across Africa.
      We believe in better. Because better doesn't live in isolation and never stops evolving. Because better knows that best is only temporary. We are new, fresh and hungry. We exist to make the world a better experience.
    </p>
    <div className='grid grid-cols-2 sm:flex sm:flex-col sm:items-start sm:justify-start items-center justify-center mt-36'>
      <div className="flex flex-col">
        <div style={{ backgroundColor: '#9747ff4f' }} className='rounded flex flex-col rounded-3xl mb-12 ml-10 sm:ml-0 p-12 pb-0 pr-0'>
          <h3>Branding</h3>
          <p className='mt-3 lspacing pr-12 sm:pr-4 pb-12 sm:pb-4 md:text-xs'>Meeting brand objectives is made simpler with Blueprints Pathway since we provide strategy services with great brains that thoroughly investigate the best communication model and approach for your company.</p>
          <div className="flex flex-row justify-between items-end">
            <Link to='/what-we-do/branding' className='pb-6 flex flex-row justify-between sm:text-sm'>
              Get to know more<img src={arrow1} alt='arrow' />
            </Link>
            <img style={{ width: '55%', marginBottom: '0', opacity: 0.36 }} src={cards} alt='cards'></img>
          </div>
        </div>
        <div style={{ backgroundColor: '#B1D8FE' }} className='rounded flex flex-col rounded-3xl mb-12 sm:ml-0 ml-10 p-12 pb-0 pr-0'>
          <h3>Product Design & Development</h3>
          <p className='mt-3 lspacing pr-12 pb-12 sm:pr-4 pb-12 sm:pb-4 md:text-xs'> From the UI to the UX, we develop mood-enhancing, narrative websites that reach and make them appear appealing to their target demographic and beyond, add flavour to the brand, and give it more trust.
          </p>
          <div className="flex flex-row justify-between items-end">
            <Link to='/what-we-do/branding' className='pb-6 flex flex-row justify-between sm:text-sm'>
              Get to know more<img src={arrow1} alt='arrow' />
            </Link>
            <img style={{ width: '55%', marginBottom: '0', opacity: 0.36 }} src={cards} alt='cards'></img>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-32 sm:mt-0">
        <div style={{ backgroundColor: '#FCF6EE' }} className='rounded flex flex-col rounded-3xl mb-12 ml-10 sm:ml-0 p-12 pb-0 pr-0'>
          <h3>Content</h3>
          <p className='mt-3 lspacing pr-12 pb-12 sm:pr-4 sm:pb-4 md:text-xs'>We produce content that works on all digital and social media channels. Content draws your audience even closer by narrating the stories behind your business.
          </p>
          <div className="flex flex-row justify-between items-end">
            <Link to='/what-we-do/branding' className='pb-6 flex flex-row justify-between sm:text-sm'>
              Get to know more<img src={arrow1} alt='arrow' />
            </Link>
            <img style={{ width: '55%', marginBottom: '0', opacity: 0.36 }} src={cards} alt='cards'></img>
          </div>
        </div>
        <div style={{ backgroundColor: '#DEE3E6' }} className='rounded flex flex-col rounded-3xl mb-12 ml-10 sm:ml-0 p-12 pb-0 pr-0'>
          <h3>Brand Engagement</h3>
          <p className='mt-3 lspacing pr-12 pb-12 sm:pr-4 pb-12 sm:pb-4 md:text-xs'>Your brand will undoubtedly establish a steadfast place in the hearts of your target audience by engaging in conversation and responding to client issues.</p>
          <div className="flex flex-row justify-between items-end">
            <Link to='/what-we-do/branding' className='pb-6 flex flex-row justify-between sm:text-sm'>
              Get to know more<img src={arrow1} alt='arrow' />
            </Link>
            <img style={{ width: '55%', marginBottom: '0', opacity: 0.36 }} src={cards} alt='cards'></img>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default WhatwedoScreen;
