import React from 'react'

const InsightCard = ({insight}) => {
  return (
    <div className='flex flex-col items-center gap-8 p-4 rounded-2xl hover:scale-120 hover:shadow-xl transtition-all duration-300'>
        <img className='shadow-xl rounded-4xl' src="/icons/light_bulb_big.svg" alt="avatar" />
        <p className='text-white max-w-xs text-center'>
        {insight}
        </p>
    </div>  
  )
}

export default InsightCard
