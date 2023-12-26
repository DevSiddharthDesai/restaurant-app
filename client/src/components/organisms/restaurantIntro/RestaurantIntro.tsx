import React from 'react';
import './RestaurantIntro.css';
import { Address } from '../../../store/restaurant.slice';
import Dropdown from '../../atoms/dropdown/Dropdown';

interface partialRestaurantInfo {
  name: string;
  premiumProdutPicture: string;
  address: Address;
}

export const RestaurantIntro = ({
  name,
  premiumProdutPicture,
  address,
}: partialRestaurantInfo) => {
  return (
    <>
      <div className='grid grid-cols-[80%_20%]'>
        <div className='grid grid-cols-[30%_70%] items-end'>
          <div className='restaurant-logo'>
            <img
              src={`http://localhost:4000/assets/images/${premiumProdutPicture}`}
              alt='restaurant-logo'
            />
          </div>
          <div className='restaurant-details'>
            <h1 className='restaurant-title'>{name}</h1>
            <p>
              {address.street},{address.city}, {address.state},{' '}
              {address.country} - {address.postalCode}
            </p>
          </div>
        </div>
        <div className='grid items-end'>
          <Dropdown />
        </div>
      </div>
    </>
  );
};
