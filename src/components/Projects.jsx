import React from 'react'
import { Link } from 'react-router'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center bg-[#f5f5f4] pt-16">
      {/* section title */}
      <div className="self-center">
        <h1 className="text-3xl sm:text-5xl font-black text-black">Projects</h1>
      </div>
      {/* projects list */}
      <div className="grid grid-cols-1 sm:grid-cols-3 py-24 px-4 sm:px-8 gap-6">
        <div className="relative overflow-hidden object-center rounded-lg shadow-md lg:hover:shadow-xl transition-shadow duration-300">
          <img className="w-full aspect-square object-cover" src="/img/gilla_thumbnail.svg" alt="gilla_thumbnail" />
          <Link to='gilla-case-study'>
            <div className="absolute top-0 bottom-0 left-0 right-0 sm:hover:bg-black/40 sm:hover:backdrop-blur-sm lg:opacity-0 lg:hover:opacity-100 transition-all duration-300 cursor-pointer">
              <div className="h-full flex items-end text-white lg:p-2.5 lg:translate-y-4 lg:hover:-translate-y-4 transition-transform duration-300">
                <div className="flex items-center gap-8 p-2.5 bg-gradient-to-t from-black/80 to-black/5 via-black/50 lg:bg-transparent">
                  <div className="flex flex-col gap-2">
                    <div className='flex items-center justify-between'>
                      <h3 className="font-black text-xl sm:text-2xl">Gilla Market</h3>
                      <img className="h-4" src="/img/right_arrow.svg" alt="right arrow" />
                    </div>
                    <p className="text-sm font-extralight leading-5">Gilla Market is an E-commerce project that aims to help grow small businesses by providing them a platform for their store to grow online.</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative overflow-hidden object-center rounded-lg shadow-md lg:hover:shadow-xl transition-shadow duration-300">
          <img className="w-full aspect-square object-cover" src="/img/good_food.svg" alt="good_food_thumbnail" />
          <Link to='gf-case-study'>
            <div className="absolute top-0 bottom-0 left-0 right-0 lg:hover:bg-black/40 lg:hover:backdrop-blur-sm lg:opacity-0 lg:hover:opacity-100 transition-all duration-300 cursor-pointer">
              <div className="h-full flex items-end text-white lg:p-2.5 lg:translate-y-4 lg:hover:-translate-y-4 transition-transform duration-300">
                <div className="flex items-center gap-8 p-2.5 bg-gradient-to-t from-black/80 to-black/5 via-black/50 lg:bg-transparent">
                  <div className="flex flex-col gap-2 ">
                    <div className='flex items-center justify-between'>
                      <h3 className="font-black text-xl sm:text-2xl">Good Food</h3>
                      <img className="h-4" src="/img/right_arrow.svg" alt="right arrow" />
                    </div>
                    <p className="text-sm font-extralight leading-5">Good food is a food delivery app that is a user friendly platform designed to connect customers with their favorite local restaurants.</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative overflow-hidden object-center rounded-lg shadow-md lg:hover:shadow-xl transition-shadow duration-300">
          <img className="w-full aspect-square object-cover" src="/img/chestnut_thumbnail.svg" alt="health_hub_thumbnail" />
          <Link to='chestnut-case-study'>
            <div className="absolute top-0 bottom-0 left-0 right-0 lg:hover:bg-black/40 lg:hover:backdrop-blur-sm lg:opacity-0 lg:hover:opacity-100 transition-all duration-300 cursor-pointer">
              <div className="h-full flex items-end text-white lg:p-2.5 lg:translate-y-4 lg:hover:-translate-y-4 transition-transform duration-300">
                <div className="flex items-center gap-8 p-2.5 bg-gradient-to-t from-black/80 to-black/5 via-black/50 lg:bg-transparent">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-2xl">Chestnut</h3>
                      <img className="h-4" src="/img/right_arrow.svg" alt="right arrow" />
                    </div>
                    <p className="text-sm font-extralight">Chestnut is an inventory management system that helps businesses track, take orders, and analyse their products' sales.</p>
                  </div>                  
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}




    



export default Projects
