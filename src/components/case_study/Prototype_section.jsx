import React from 'react'
import FindingsCard from './components/FindingsCard';

const Prototype_section = ({prototypeObject}) => {
  const [{wireframes, 
        lowfiPrototype, 
        usabilityStudy, 
        findings = [], 
        improvedLowfiPrototype} = {}] = prototypeObject;

  return (
    <div className='flex flex-col bg-[#f29900] px-4 md:px-16 lg:24 gap-25'>
      <div className='w-full flex justify-center pt-16 pb-8'>
        <p className="text-white text-2xl md:text-5xl font-black">Prototyping</p>
      </div>
      {/* wireframes */}
      <div className="flex flex-col md:flex-row justify-evenly items-center py-4 md:py-8 gap-8">
        <p className='text-2xl md:text-4xl text-white font-black'>Wireframes</p>
        <div className='overflow-hidden rounded-xl max-w-xl'>
          <img className='w-full' src={wireframes} alt="wire frames" />
        </div>
      </div>
      {/* lowfi prototype  */}
      <div className="hidden md:flex justify-evenly items-center py-4 md:py-8 gap-8">
        <div className='overflow-hidden rounded-xl max-w-xl'>
          <img className='w-full' src={lowfiPrototype} alt="low-fidelity prototype" />
        </div>
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>Low-fidelity Prototype</p>
      </div>
      <div className="flex flex-col md:hidden justify-evenly items-center py-4 md:py-8 gap-8">
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>Low-fidelity Prototype</p>
        <div className='overflow-hidden rounded-xl max-w-md'>
          <img className='w-full' src={lowfiPrototype} alt="wire frames" />
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
              <FindingsCard key={index} finding={finding} index={index} />
            ))}
          </div>
        </div>
      {/* lowfi prototype improved */}
      <div className="flex flex-col md:flex-row justify-evenly items-center py-4 md:py-8 gap-8">
        <p className='text-2xl md:text-4xl text-white font-black max-w-sm'>Improved Low-fidelity Prototype</p>
        <div className='overflow-hidden rounded-xl max-w-xl'>
          <img className='w-full' src={improvedLowfiPrototype} alt="low fidelity mockup" />
        </div>
      </div>
    </div>
  )
};

export default Prototype_section
