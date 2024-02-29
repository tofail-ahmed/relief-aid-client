import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeGoods from './HomeGoods'
import HomeGallery from './HomeGallery'
import Testimonial from './Testimonial'
const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeGoods></HomeGoods>
      <HomeGallery/>
      <Testimonial/>
    </div>
  )
}

export default Home