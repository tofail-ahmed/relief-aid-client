import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeGoods from './HomeGoods'
import HomeGallery from './HomeGallery'
import Deliver from './Deliver'
import Contact from './Contact'
import TestimonialGlider from "./TestimonialGlider";
const Home = () => {
  return (
    <div>
      <Banner />
      <HomeGoods></HomeGoods>
      <HomeGallery />
      <TestimonialGlider />
      <Deliver />
     
      <Contact />
    </div>
  );
};

export default Home