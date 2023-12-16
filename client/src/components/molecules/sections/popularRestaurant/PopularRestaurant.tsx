import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeading from '../../sectionheading/SectionHeading';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import { RootState } from '../../../../store/store';
import {
  Restaurant,
  fetchAllRestaurants,
} from '../../../../store/restaurant.slice';

const PopularRestaurant = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector(
    (state: RootState) => state.restaurant.restaurants as Restaurant[],
  );

  useEffect(() => {
    // Dispatch the action to fetch all restaurants when the component mounts
    dispatch(fetchAllRestaurants() as any);
  }, [dispatch]);

  return (
    <>
      <div className='popular-restaurant-section bg-gray'>
        <div className='container max-w-screen-xl mx-auto text-center'>
          <SectionHeading
            headertitle='Top Restaurant'
            subheadertitle='Popular Restaurant'
          />
          <div className='grid grid-cols-3 gap-4'>
            {restaurants
              ? restaurants.map(element => {
                  return (
                    <RestaurantCard
                      title={element?.name}
                      address={element?.address}
                      openingHours={element?.openingHours[0]}
                    />
                  );
                })
              : 'No Restauarants Available'}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularRestaurant;
