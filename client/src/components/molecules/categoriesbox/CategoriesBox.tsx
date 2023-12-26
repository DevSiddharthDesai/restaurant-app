import React from 'react';
import Slider from 'react-slick';
import Bottomdots from '../../atoms/bottomdots/Bottomdots';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoriesBox = () => {
  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='restaurant-details-section-heading bg-white p-5'>
        <h2 className='font-bold text-xl'>Categories</h2>
        <Bottomdots />
      </div>
      <Slider {...settings}>
        <div>
          <h3>SLIDE 1</h3>
        </div>
        <div>
          <h3>SLIDE 2</h3>
        </div>
        <div>
          <h3>SLIDE 3</h3>
        </div>
        <div>
          <h3>SLIDE 4</h3>
        </div>
        <div>
          <h3>SLIDE 5</h3>
        </div>
        <div>
          <h3>SLIDE 6</h3>
        </div>
      </Slider>
    </>
  );
};

export default CategoriesBox;
