import React from 'react';
import HeroSection from '../../../components/molecules/herosection/HeroSection';
import PopularRestaurant from '../../../components/organisms/popularrestaurant/PopularRestaurant';
import OurCategories from '../../../components/organisms/ourcategories/OurCategories';

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurCategories />
      <PopularRestaurant />
    </>
  );
};

export default Home;
