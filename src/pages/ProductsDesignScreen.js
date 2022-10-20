import React from "react";
import Cards from "../components/cards/Cards";
import '../components/navbar/navbar.css'
import productDesign from '../productDesign'

const ProductsDesignScreen = () => {
  return <div style={{ backgroundColor: '#F3F9FC', color: '#0E2C55' }} className='mt-20 p-12'>
    <div className="flex flex-row text">
      <h2></h2>
      <p>what we do</p>
      <h3>/Branding</h3>
    </div>
    <p className="mt-5">Meeting brand objectives is made simpler with Blueprints Pathway since we provide strategy services with great brains that thoroughly investigate the best communication model and approach for your company.</p>
    <Cards cards={productDesign} />
  </div>;
};

export default ProductsDesignScreen;
