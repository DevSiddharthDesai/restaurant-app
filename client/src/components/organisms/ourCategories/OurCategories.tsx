import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeading from '../../molecules/sectionheading/SectionHeading';

const OurCategories = () => {
  return (
    <>
      <div className='container max-w-screen-xl mx-auto text-center'>
        <SectionHeading
          headertitle='Top Foods'
          subheadertitle='Our Categories'
        />
        <div className='grid grid-cols-4 gap-4'></div>
      </div>
    </>
  );
};

export default OurCategories;
