import React from 'react';
import AllDetailsBox from '../../molecules/alldetailsbox/AllDetailsBox';
import CategoriesBox from '../../molecules/categoriesbox/CategoriesBox';

const RestaurantDetails = () => {
  return (
    <div className='bg-gray'>
      <div className='container mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-[30%_70%] gap-3'>
          <div>
            <AllDetailsBox />
          </div>
          <div>
            <CategoriesBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
