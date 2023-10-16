import React from 'react';
import SectionHeading from '../../sectionheading/SectionHeading';
import RestaurantCard from '../../restaurantCard/RestaurantCard';

const PopularRestaurant = () => {
  return (
    <>
      <div className='popular-restaurant-section bg-gray'>
        <div className='container max-w-screen-xl mx-auto text-center'>
          <SectionHeading />
          <div className='grid grid-cols-3 gap-4'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularRestaurant;
