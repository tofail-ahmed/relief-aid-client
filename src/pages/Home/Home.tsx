import React from 'react'
import Banner from '../../components/Banner/Banner'
import HomeGoods from './HomeGoods'
import Gallery from '../Gallery/Gallery'
const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeGoods></HomeGoods>
      <Gallery/>
    </div>
  )
}

export default Home