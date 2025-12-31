import React from 'react'
import ListCard from './components/ListCard'

const Project_section = ({overviewObject}) => {
  return (
    <div className='flex flex-col px-4 md:px-32 lg:64 py-16 gap-16'>
        <div className='flex justify-center lg:justify-start'>
            <p className='text-3xl font-black'>Project Overview</p>
        </div>
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-300">
                {
                    overviewObject.map((data, index) => <ListCard key={index} icon={data.icon} title={data.title} description={data.description} />)
                }
            </div>  
        </div>    
    </div>
  )
}

export default Project_section;
