import React from 'react';
import './HeroSection.css';
import SearchInput from '../../atoms/inputelements/inputWithSearch/SearchInput';
import { P1, P2, P3, P4, P5, P6, P7 } from '../../../utils/images';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='max-w-screen-xl mx-auto relative pt-[120px] pb-[110px] lg:pt-[150px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 lg:w-6/12'>
              <div className='hero-content'>
                <h1 className='mb-3 text-4xl font-bold leading-snug text-white sm:text-[54px] lg:text-[54px] xl:text-[54px]'>
                  Order Healthy And
                  <br /> Fresh Food Any Time
                </h1>
                <p className='mb-8 max-w-[600px] text-base text-white sm:text-[22px] lg:text-[22px] xl:text-[22px] leading-9'>
                  Italian food makes people think of big family dinners. So you
                  may want to position your restaurant as a place to bring the
                  whole family.
                </p>
                <SearchInput />
                <h3 className='lg:text-[22px] pt-10'>Popular Restaurant</h3>
                <ul className='flex'>
                  <li className='pr-2'>
                    <img src={P1} width='78px' alt='p1' />
                  </li>
                  <li className='pr-2'>
                    <img src={P2} width='78px' alt='p2' />
                  </li>
                  <li className='pr-2'>
                    <img src={P3} width='78px' alt='p3' />
                  </li>
                  <li className='pr-2'>
                    <img src={P4} width='78px' alt='p4' />
                  </li>
                  <li className='pr-2'>
                    <img src={P5} width='78px' alt='p5' />
                  </li>
                  <li className='pr-2'>
                    <img src={P6} width='78px' alt='p6' />
                  </li>
                  <li className='pr-2'>
                    <img src={P7} width='78px' alt='p7' />
                  </li>
                </ul>
              </div>
            </div>
            <div className='hidden px-4 lg:block lg:w-1/12'></div>
            <div className='w-full px-4 lg:w-5/12'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
