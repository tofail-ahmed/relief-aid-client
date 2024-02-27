import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'


const MainLayout = () => {
  return (
    <div>
      <Navbar/>
    
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout