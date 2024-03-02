import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeGoods from './HomeGoods'
import HomeGallery from './HomeGallery'
import Deliver from './Deliver'
import Contact from './Contact'
import TestimonialGlider from "./TestimonialGlider";
import AboutUs from './AboutUs'
import Counter from './Counter'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Banner />
      <HomeGoods></HomeGoods>
      <Counter/>
      <HomeGallery />
      <TestimonialGlider />
      <Deliver />
     <AboutUs/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home