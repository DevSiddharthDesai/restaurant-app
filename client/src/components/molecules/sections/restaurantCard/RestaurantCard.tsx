import React from 'react';
import { FcShop, FcClock } from 'react-icons/fc';
import { I1, P1 } from '../../../../utils/images';

interface RestaurantInfo {
  title: string;
  address: { street?: string; city?: string; state?: string };
  openingHours: { openingHours: string; closingHours: string };
  restaurantId: string;
}

const RestaurantCard = ({
  restaurantId,
  title,
  address,
  openingHours,
}: RestaurantInfo) => {
  return (
    <div className='mb-10 overflow-hidden rounded-lg bg-white'>
      <img src={I1} alt='arcadian' className='w-full' />
      <div className='p-1 sm:p-4 md:p-4 xl:p-4 text-left'>
        <h3>
          <a
            href='www.google.com'
            className='mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'
          >
            {title}
          </a>
        </h3>
        <div className='flex'>
          <div className='w-1/6'>
            <img src={P1} alt='p-2' />
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
