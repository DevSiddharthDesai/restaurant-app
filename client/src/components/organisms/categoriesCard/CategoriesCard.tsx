import React from 'react';

interface CategoryInfo {
  categoryName: string;
  categoryDescription?: string;
  categoryImage?: string;
}

const CategoriesCard = ({
  categoryName,
  categoryDescription,
  categoryImage,
}: CategoryInfo) => {
  return (
    <>
      <div className='mb-9'>
        <div className='mb-4 flex justify-center'>
          <img src={categoryImage} alt='burger' style={{ height: '200px' }} />
        </div>
        <div className='flex justify-center pt-5'>
          <h2 className='text-xl' style={{ fontSize: '25px' }}>
            {categoryName}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
