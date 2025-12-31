import React from "react";

const Hero = () => {

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else console.warn('Element with id "projects" not found.');
  };

  return (
    <div className="relative flex flex-col h-148 items-center justify-between">
      <div className="w-full flex flex-col gap-24">
        <div className="flex flex-col gap-4 justify-center items-center pt-6">
          <img className="h-24" src="/img/wave.svg" alt="wave" />
          <div className="flex flex-col gap-1 items-center">
            <h1 className=" font-black text-lg sm:text-xl">Hey There, I'm Paulos</h1>
            <h2 className="font-normal text-base font-sans sm:tracking-wider">Welcome to my portfolio!</h2>
          </div>
        </div>
        <div className="flex relative w-full justify-evenly items-center gap-8 bg-stone-100 px-8">
          <div className="flex flex-col gap-8 z-10 border-l pl-8 border-gray-400">
            <h1 className="text-xl sm:text-xl font-extrabold">General</h1>
            <p className="max-w-132 min-w-64 font-light tracking-wider text-base text-justify">
              I am a <span className="font-semibold text-[#e03131]">UX</span> designer,
              <span className="font-semibold text-red-600"> Graphics</span> designer and
              a <span className="font-semibold text-red-600">Frontend Web </span>
              developer that have worked on and contributed to several projects and
              clients and I believe my work to be very straight forward and
              intuitive in a creative way, and here are some of my works.
            </p>
          </div>
          <div className="hidden sm:flex"></div>
        </div>
      </div>
      <div className="absolute bottom-4 pb-6">
        <button onClick={scrollToProjects} aria-label="Scroll to projects" className="cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <img className="h-6" src="/img/downarrow.svg" alt="down arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
