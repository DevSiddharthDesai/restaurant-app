import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import { Category } from '../../../store/categories.slice';
import useCustomToast from '../../../hooks/useCustomToast';
import Bottomdots from '../../atoms/bottomdots/Bottomdots';
import './CategoriesBox.css';
import { menu } from '../../../store/restaurant.slice';
import MenuCard from '../menucard/MenuCard';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { addToCart } from '../../../store/cart.slice';

const CategoriesBox = ({
  categories,
  menus,
  onCategoryClick,
}: {
  categories: Category[];
  menus: menu[];
  onCategoryClick: (categoryId: string) => void;
}) => {
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();

  const menu = useSelector(
    (state: RootState) => state.restaurant.menu as menu[],
  );

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button type='button' className='slick-arrow-left' onClick={onClick}>
        <FaAngleLeft />
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        type='button'
        className='slick-arrow slick-arrow-right'
        onClick={onClick}
      >
        <FaAngleRight />
      </button>
    );
  };

  const addtoCart = (menuId: string, quantity: number) => {
    if (quantity < 1) {
      showToast('error', 'Quantity is not valid');
    }
    dispatch(addToCart(menuId, quantity) as any);
  };

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div className='bg-white p-5'>
        <h2 className='restaurant-details-section-heading font-bold text-xl'>
          Categories
        </h2>
        <Bottomdots />
        <div className='pt-5'>
          <Slider {...settings}>
            {categories &&
              categories.map(element => (
                <div
                  className='slider-item'
                  key={element._id}
                  onClick={() => onCategoryClick(element._id)}
                >
                  {element.name}
                </div>
              ))}
          </Slider>
        </div>
        {menus.map(element => {
          return (
            <MenuCard
              itemId={element._id}
              itemName={element.name}
              itemDescription={element.description}
              itemPrice={element.price}
              addToCart={addtoCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoriesBox;
