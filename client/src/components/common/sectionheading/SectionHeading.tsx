import React from 'react';

const SectionHeading = () => {
  return (
    <div className='section-heading pt-16'>
      <div className='section-heading-top uppercase text-primary sm:text-[22px] md:text-[22px] lg:text-[22px] tracking-wider pb-3'>
        Top Restaurant
      </div>
      <h3 className='section-heading-middle text-secondary sm:text-[50px] md:text-[50px] lg:text-[50px] tracking-wider mb-3 font-bold'>
        Popular Restaurants
      </h3>
      <div className='bottom-dots'></div>
    </div>
  );
};

export default SectionHeading;
