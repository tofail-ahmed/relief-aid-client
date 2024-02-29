import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeGoods from './HomeGoods'
import HomeGallery from './HomeGallery'
const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeGoods></HomeGoods>
      <HomeGallery/>
    </div>
  )
}

export default Home