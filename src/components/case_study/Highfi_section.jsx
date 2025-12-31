import React from 'react'
import HiFindingsCard from './components/HiFindingsCard';

const Highfi_section = ({hifiObject}) => {
  const { mockups, hifiPrototype, usabilityStudy, findings, improvedHifiPrototype } = hifiObject[0];
  return (
    <div className='flex flex-col bg-[#34a853] px-4 md:px-16 lg:24 gap-25'>
      <div className='w-full flex justify-center pt-16 pb-8'>
        <p className="text-white text-2xl md:text-5xl font-black">Refining the design</p>
      </div>
      {/* wireframes */}
      <div className="flex flex-col md:flex-row justify-evenly items-center py-4 md:py-8 gap-8">
        <p className='text-2xl md:text-4xl text-white font-black'>Mockups</p>
        <div className='overflow-hidden rounded-xl max-w-xl'>
          <img className='w-full' src={mockups} alt="wire frames" />
        </div>
      </div>
      {/* highfi prototype  */}
      <div className="hidden md:flex justify-evenly items-center py-4 md:py-8 gap-8">
        <div className='overflow-hidden rounded-xl max-w-xl'>
          <img className='w-full' src={hifiPrototype} alt="mockups" />
        </div>
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>High-fidelity Prototype</p>
      </div>
      <div className="flex flex-col md:hidden justify-evenly items-center py-4 md:py-8 gap-8">
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>High-fidelity Prototype</p>
        <div className='overflow-hidden rounded-xl max-w-md'>
          <img className='w-full' src={hifiPrototype} alt="high-fidelity prototype" />
        </div>
      </div>
      {/* usability testing */}
      <div className="flex flex-col items-center gap-8 p-8">
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>Usability testing</p>
        <p className='text-base text-white font-medium max-w-md text-center'>
          {usabilityStudy}
        </p>
      </div>
      {/* findings */}
        <div className="flex flex-col items-center">
          <p className='text-2xl md:text-4xl text-white font-black'>Findings</p>
          <div className='w-full flex flex-col md:flex-row gap-8 py-25 justify-evenly'>
            {findings.map((finding, index) => (
              <HiFindingsCard key={index} finding={finding} index={index} />
            ))}
          </div>
        </div>
      {/* highfi prototype improved */}
      <div className="flex flex-col md:flex-row justify-evenly items-center py-25 mb-24 md:py-8 gap-8">
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>Improved High-fidelity Prototype</p>
        <div className='overflow-hidden rounded-xl max-w-xl'>
          <img className='w-full' src={improvedHifiPrototype} alt="improved high-fidelity prototype" />
        </div>
      </div>
    </div>
  )
}

export default Highfi_section
