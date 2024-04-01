import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
  const { product } = props;

  // Check if product exists before accessing its properties
  if (!product) {
    return null; // or any fallback UI if needed
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
