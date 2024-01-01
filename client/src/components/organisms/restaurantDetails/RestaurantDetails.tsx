import React from 'react';
import { Category } from '../../../store/categories.slice';
import AllDetailsBox from '../../molecules/alldetailsbox/AllDetailsBox';
import CategoriesBox from '../../molecules/categoriesbox/CategoriesBox';
import { menu } from '../../../store/restaurant.slice';

const RestaurantDetails = ({
  categories,
  menus,
  onCategoryClick,
}: {
  categories: Category[];
  menus: menu[];
  onCategoryClick: (categoryId: string) => void;
}) => {
  return (
    <div className='bg-gray'>
      <div className='container mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-[30%_70%] gap-3'>
          <div>
            <AllDetailsBox />
          </div>
          <div>
            <CategoriesBox
              categories={categories}
              menus={menus}
              onCategoryClick={onCategoryClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
