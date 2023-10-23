import React from 'react';
import { FcShop, FcClock } from 'react-icons/fc';
import P1 from '../../../assets/images/p-1.jpg';
import P2 from '../../../assets/images/p-2.jpg';
import P3 from '../../../assets/images/p-3.jpg';
import P4 from '../../../assets/images/p-4.jpg';
import P5 from '../../../assets/images/p-5.jpg';
import P6 from '../../../assets/images/p-6.jpg';
import P7 from '../../../assets/images/p-7.jpg';

interface RestaurantInfo {
  title: string;
  address: object;
  openingHours: { openingHours: string; closingHours: string };
}

const RestaurantCard = ({ title, address, openingHours }: RestaurantInfo) => {
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
            {title}
          </a>
        </h3>
        <div className='flex'>
          <div className='w-1/6'>
            <img src={P1} alt='Picture' />
          </div>
          <div className='w-5/6 p-1'>
            <div className='opening-hours flex pb-2'>
              <div className='w-1/12'>
                <FcClock fontSize='1.5em' />
              </div>
              <div className='w-11/12'>
                {openingHours.openingHours} - {openingHours.closingHours}{' '}
              </div>
            </div>
            <div className='address flex'>
              <div className='w-1/12'>
                <FcShop fontSize='1.5em' />
              </div>
              <div className='w-11/12'>
                {address['street']}, {address['city']}, {address['state']}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
