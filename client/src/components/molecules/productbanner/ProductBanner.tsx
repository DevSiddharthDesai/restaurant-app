import React from 'react';
import './ProductBanner.css';

const ProductBanner = ({ image }: { image: string }) => {
  return (
    <section className='productbanner'>
      <img className='bannerimage' src={image} alt='Hot Drinks' />
    </section>
  );
};

export default ProductBanner;
