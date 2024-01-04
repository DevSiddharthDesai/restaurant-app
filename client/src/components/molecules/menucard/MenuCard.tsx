import React, { useState, useRef, useEffect } from 'react';
import './MenuCard.css';

import { P1 } from '../../../utils/images';

const MenuCard = ({
  itemId,
  itemName,
  itemDescription,
  itemPrice,
  addToCart,
}: {
  itemId: string;
  itemName: string;
  itemDescription: string;
  itemPrice: string;
  addToCart: (menuId: string, quantity: number) => void;
}) => {
  const [qty, setQty] = useState('1');
  useEffect(() => {
    setQty('1');
  }, [itemId]);
  return (
    <div className='flex mb-10' key={itemName}>
      <div className='menu-card-image'>
        <img src={P1} />
      </div>
      <div className='menu-card-details'>
        <h2 className='menu-card-title font-bold text-2xl mb-2'>{itemName}</h2>
        <div className='menu-card-description mb-2'>{itemDescription}</div>
        <div className='menu-card-price text-red-500 font-bold'>
          $ {Number(itemPrice).toFixed(2)}
        </div>
      </div>
      <div className='menu-card-quantity'>
        <input
          type='number'
          min='1'
          max='10'
          value={qty}
          onChange={event => setQty(event.target.value)}
        />
      </div>
      <div className='menu-card-add-cart'>
        <button
          className='bg-primary p-2'
          onClick={() => addToCart(itemId, Number(qty))}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
