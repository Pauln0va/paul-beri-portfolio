import React from 'react'

const ListCard = ({icon, title, description}) => {
  return (
    <div className='flex flex-col lg:flex-row flex-auto justify-between items-center gap-4'>
      <div className='flex flex-col lg:flex-row flex-1 items-center gap-4'>
        <img className='h-12' src={icon} alt="icon" />
        <p className='text-xl font-semibold text-nowrap '>{title}</p>
      </div>
      <div className='flex-1'>
        <p className='text-center lg:text-left text-base font-light max-w-72'>{description}</p>
      </div>

    </div>
  )
}

export default ListCard;
