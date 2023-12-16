import React from 'react';

interface RestaurantInfo {
  headertitle: string;
  subheadertitle: string;
}

const SectionHeading = ({ headertitle, subheadertitle }: RestaurantInfo) => {
  return (
    <div className='section-heading pt-16'>
      <div className='section-heading-top uppercase text-primary sm:text-[22px] md:text-[22px] lg:text-[22px] tracking-wider pb-3'>
        {headertitle}
      </div>
      <h3 className='section-heading-middle text-secondary sm:text-[50px] md:text-[50px] lg:text-[50px] tracking-wider mb-3 font-bold'>
        {subheadertitle}
      </h3>
      <div className='bottom-dots'>
        <span
          className='dot line-dot'
          style={{
            borderRight: '40px solid #FFCC00',
            width: '4px',
            height: '3px',
            position: 'relative',
            display: 'inline-block',
            marginRight: '1px',
          }}
        ></span>
        <span
          className='dot'
          style={{
            borderRight: '3px solid #FFCC00',
            width: '4px',
            height: '3px',
            position: 'relative',
            display: 'inline-block',
            marginRight: '1px',
          }}
        ></span>
        <span
          className='dot'
          style={{
            borderRight: '3px solid #FFCC00',
            width: '4px',
            height: '3px',
            position: 'relative',
            display: 'inline-block',
            marginRight: '1px',
          }}
        ></span>
        <span
          className='dot'
          style={{
            borderRight: '3px solid #FFCC00',
            width: '4px',
            height: '3px',
            position: 'relative',
            display: 'inline-block',
            marginRight: '1px',
          }}
        ></span>
      </div>
    </div>
  );
};

export default SectionHeading;
