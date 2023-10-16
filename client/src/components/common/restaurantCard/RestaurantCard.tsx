import React from 'react';

const RestaurantCard = () => {
  return (
    <div className='mb-10 overflow-hidden rounded-lg bg-white'>
      <img
        src='assets/images/cards/card-01/image-01.jpg'
        alt='image'
        className='w-full'
      />
      <div className='p-1 sm:p-4 md:p-4 xl:p-4 text-left'>
        <h3>
          <a
            href='javascript:void(0)'
            className='mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'
          >
            Organic Arcadian Food
          </a>
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
