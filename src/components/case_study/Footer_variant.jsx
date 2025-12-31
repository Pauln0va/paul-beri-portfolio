import React from 'react'

const Footer_variant = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md flex items-center py-2.5 px-4 sm:px-16 md:px-32 justify-between'>
      <div className='flex gap-2.5'>
        <a 
          href='https://www.linkedin.com/in/paulos-mesfin-696783381/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className="rounded-full p-1.5 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
        >
          <img src="/img/linkedin.png" alt="linkedin handle" className="size-4" />
        </a>
        <a
          href='https://www.facebook.com/share/1Bn2nHJ2ss/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'
          className="rounded-full p-1.5 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
        >
          <img src="/img/facebook.png" alt="facebook handle" className="size-4" />          
        </a>
        <a
          href='mailto:paulmesfin1@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Gmail'
          className="rounded-full p-1.5 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
        >
          <img src="/img/gmail.svg" alt="gmail handle" className="size-4" />
        </a>
      </div>
      <p className='text-xs font-light text-stone-600'>&copy; 2026 Paul B Mesfin</p>
    </div>
  )
}

export default Footer_variant
