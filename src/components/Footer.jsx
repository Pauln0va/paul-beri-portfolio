import React from "react";

const Footer = () => {    
    
    return (
      <div id="contact" className="relative flex flex-col items-center justify-start gap-16 bg-gray-900 h-64 overflow-hidden">
          <div className="flex flex-col justify-between items-center absolute left-0 right-0 bottom-0 top-0 bg-gray-900/50 z-50 py-4 pointer-events-auto">
                      
              <p className="text-white text-center text-2xl font-bold">Contact</p>            
              {/* Name and email */}
              
            
            <div className="flex flex-col justify-between items-center gap-4">
              {/* <div className="border border-white h-6"></div> */}
              <div className="flex gap-4">              
                <a
                  href='https://www.linkedin.com/in/paulos-mesfin-696783381/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  className="bg-white rounded-full p-1.5 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
                >
                  <img src="/img/linkedin.png" alt="linkedin handle" className="size-4" />
                </a>
                <a
                  href='https://www.facebook.com/share/1Bn2nHJ2ss/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label="Facebook"
                  className="bg-white rounded-full p-1.5 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
                >
                  <img src="/img/facebook.png" alt="facebook handle" className="size-4" />          
                </a>
                <a
                  href='mailto:paulmesfin1@gmail.com'
                  aria-label='Email'
                  className="bg-white rounded-full p-1.5 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
                >
                  <img src="/img/gmail.svg" alt="gmail handle" className="size-4" />
                </a>
              </div>
              {/* <div className="border border-white h-6"></div> */}
              <ul className="flex flex-col sm:gap-y-2 text-white uppercase font-semibold">
                <li className="flex px-4">
                  <span className="text-sm font-thin">&copy; Paulos B Mesfin 2025, All rights reserved</span>
                </li>
              </ul>              
            </div>
          </div>        
        {/* slides */}
        <div className="flex animate-scroll">
          <img
            className="object-cover h-100"
            src="/img/slide-1.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-2.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-3.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-4.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-5.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-6.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-7.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-8.png"
            alt=""
          />
          <img
            className="object-cover h-100"
            src="/img/slide-9.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default Footer;
