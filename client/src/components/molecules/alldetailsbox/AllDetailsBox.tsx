import React from 'react';
import Bottomdots from '../../atoms/bottomdots/Bottomdots';
import { Menus, Reviews, Info } from '../../../utils/images';

const AllDetailsBox = () => {
  return (
    <div className='restaurant-details-box-main bg-white p-5'>
      <div className='restaurant-details-section-heading'>
        <h2 className='font-bold text-xl'>All Details</h2>
        <Bottomdots />
      </div>
      <div className='all-details-content'>
        <ul className='pt-5 pb-5'>
          <li className='pt-3 pb-3'>
            <img src={Menus} className='inline-flex pr-3' />
            Menu
          </li>
          <li className='pt-3 pb-3'>
            <img src={Reviews} className='inline-flex pr-3' />
            Reviews
          </li>
          <li className='pt-3 pb-3'>
            <img src={Info} className='inline-flex pr-3' />
            Restaurant Info
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllDetailsBox;
