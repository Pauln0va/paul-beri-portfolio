import React from 'react'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'

const Home = () => {
  return (
    <>
      <div id="about">
        <Hero />
      </div>
      <div className="bg-[#f3f2f2] h-1"></div>
      <div id="ux">
        <Projects />
      </div>
    </>
  )
}

export default Home
