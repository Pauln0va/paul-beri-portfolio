import React from 'react'
import PersonaCard from './components/personaCard';
import InsightCard from './components/InsightCard';

const User_section = ({userResearchObject = []}) => {
  const [{ user_research, personas = [], problem_statement, insights = [] } = {}] = userResearchObject;

  return (
    <div className='flex flex-col bg-[#ea4335] px-4 md:px-16 lg:24 gap-25'>
      <div className='w-full flex justify-center pt-16 pb-8'>
        <p className="text-white text-2xl md:text-5xl font-black">Understanding the user</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-36">
        <div className=''>
          <ul className='w-full flex flex-col sm:flex-row sm:divide-white sm:divide-x-8 justify-between gap-4'>
            <li className='flex flex-col sm:flex-row items-center gap-4 px-8'>
                <img className='h-16' src="/icons/avatar_magnified.svg" alt="avatar-magnified" />
                <p className='text-white text-xl font-semibold'>User research</p>
            </li>
            <li className='flex px-8'>
                <p className='text-white max-w-sm text-center sm:text-left'>
                    {user_research}
                </p>
            </li>
          </ul>
        </div>
        {/* personas */}
        <div className='w-full flex flex-col '>
            <div className='flex items-center justify-center gap-4 py-8'>
                <img className='h-16' src="/icons/avatars.svg" alt="personas" />
                <p className='text-white text-2xl md:text-4xl font-black'>Personas</p>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-8 py-25 justify-evenly'>
                {
                  personas.map((persona, index) => (
                    <PersonaCard key={index} persona={persona} />
                  ))
                }
            </div>
        </div>
        <div className=''>
          <ul className='w-full flex flex-col sm:flex-row sm:divide-white sm:divide-x-8 justify-between gap-4'>
            <li className='flex flex-col sm:flex-row items-center gap-4 px-8'>
                <img className='h-16' src="/icons/list_paper.svg" alt="avatar-magnified" />
                <p className='text-white text-xl font-semibold'>Problem statement</p>
            </li>
            <li className='flex px-8'>
                <p className='text-white max-w-sm text-center sm:text-left'>
                    {problem_statement}
                </p>
            </li>
          </ul>
        </div>
        <div className='w-full flex flex-col '>
            <div className='flex items-center justify-center gap-4 py-8'>
                <img className='h-16' src="/icons/light_bulb.svg" alt="light_bulb" />
                <p className='text-white text-2xl md:text-4xl font-black'>Insights</p>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-8 py-25 justify-evenly'>
                {
                  insights.map((insight, index) => (
                    <InsightCard key={index} insight={insight} />
                  ))
                }       
            </div>
        </div>
      </div>
    </div>
  );
}

export default User_section;
