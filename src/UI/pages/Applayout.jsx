import React from 'react'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router'

const Applayout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Applayout
