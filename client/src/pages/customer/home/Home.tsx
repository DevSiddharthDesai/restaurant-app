import React from 'react';
import HeroSection from '../../../components/molecules/herosection/HeroSection';
import PopularRestaurant from '../../../components/organisms/popularRestaurant/PopularRestaurant';
import OurCategories from '../../../components/organisms/ourCategories/OurCategories';

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
