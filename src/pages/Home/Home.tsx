import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeGoods from './HomeGoods'
import HomeGallery from './HomeGallery'
import Testimonial from './Testimonial'
import Deliver from './Deliver'
const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeGoods></HomeGoods>
      <HomeGallery/>
      <Testimonial/>
      <Deliver/>
    </div>
  )
}

export default Home