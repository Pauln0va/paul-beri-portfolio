import React from 'react'

const FindingsCard = ({finding, index}) => {

  return (
    <div className='flex flex-col items-center gap-8 p-4 rounded-2xl hover:scale-120 hover:shadow-xl transtition-all duration-300'>
      <div className='aspect-square shadow-xl rounded-full bg-white p-6 flex-center'> <span className='text-[#f29900] font-black text-2xl'>{index+1}</span> </div>
      <p className='text-white max-w-xs text-center'>
        {finding}
      </p>
    </div>
  )
}

export default FindingsCard
