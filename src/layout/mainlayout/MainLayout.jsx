import React from 'react'
import Homepage from '../../pages/homepage/Homepage'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router'

import Footer from '../../components/footer/Footer'

function MainLayout() {
  return (
    <div className='space-y-10'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout
