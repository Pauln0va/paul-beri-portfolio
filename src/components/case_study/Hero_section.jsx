import React from 'react'

const Hero_section = ({image}) => {
  return (
    <div className='relative overflow-hidden h-150'>
      <img className='h-full w-full object-cover' src={image} alt="hero image" />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 from-20% to-transparent'></div>
    </div>
  )
}

export default Hero_section
