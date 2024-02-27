import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import Banner from '../Banner/Banner'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout