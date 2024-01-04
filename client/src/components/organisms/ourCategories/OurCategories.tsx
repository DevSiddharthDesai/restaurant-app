import React, { useEffect } from 'react';
import { RootState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeading from '../../molecules/sectionheading/SectionHeading';
import { Category, fetchAllCategories } from '../../../store/categories.slice';
import CategoriesCard from '../categoriescard/CategoriesCard';

const OurCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state.categories.categories as Category[],
  );

  useEffect(() => {
    // Dispatch the action to fetch all restaurants when the component mounts
    dispatch(fetchAllCategories() as any);
  }, [dispatch]);

  return (
    <>
      <div className='container max-w-screen-xl mx-auto text-center'>
        <SectionHeading
          headertitle='Top Foods'
          subheadertitle='Our Categories'
        />
        <div className='grid grid-cols-4 gap-4'>
          {categories
            ? categories.map(element => {
                return (
                  <>
                    <CategoriesCard
                      categoryName={element.name}
                      categoryImage={element.imageUrl}
                    />
                  </>
                );
              })
            : 'No Restauarants Available'}
        </div>
      </div>
    </>
  );
};

export default OurCategories;
