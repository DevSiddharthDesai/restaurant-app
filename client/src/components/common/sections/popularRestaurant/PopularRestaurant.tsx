import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeading from '../../sectionheading/SectionHeading';
import RestaurantCard from '../../restaurantCard/RestaurantCard';
import { fetchRestaurants } from '../../../../store/Restaurant/restaurant.actions';

const PopularRestaurant = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state: any) => state.restaurant.restaurants);

  useEffect(() => {
    dispatch<any>(fetchRestaurants());
  }, [dispatch]);
  return (
    <>
      <div className='popular-restaurant-section bg-gray'>
        <div className='container max-w-screen-xl mx-auto text-center'>
          <SectionHeading />
          <div className='grid grid-cols-3 gap-4'>
            {restaurants.map(element => {
              return (
                <RestaurantCard
                  title={element.name}
                  address={element.address}
                  openingHours={element.openingHours[0]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularRestaurant;
