import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isActive, setIsactive] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsactive(!isActive);
  }
  const handleLinkClick = (e) => {
    e.stopPropagation();
    setIsactive(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open AND the click was NOT inside the menuRef
      if (isActive && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsactive(false);
      }
    };
    // Attach the listener to the whole document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the listener when the component unmounts
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive])

  // measure header height to render a spacer so layout doesn't shift
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // show/hide header based on scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full transform bg-[#f5f5f4] transition-transform duration-300 z-[1000] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Main header content */}
        <div className="flex justify-between sm:justify-around items-center gap-8 px-8 shadow-xs">
          <div className="flex flex-col gap-2 justify-center items-center py-2 px-8">
            <div className="flex justify-center items-center rounded-full p-2 sm:p-4">
              <Link to='/'>
                <img src="/img/pb2.svg" alt="profile" className="h-10 sm:h-12 aspect-square cursor-pointer" />
              </Link>
            </div>
            {/* <p className="text-sm font-medium hover:text-gray-700 hover:underline cursor-pointer transition-all duration-200 text-nowrap">My Journey &rarr;</p> */}
          </div>
          <div ref={menuRef} 
               onClick={handleMenuClick} 
               className="relative flex p-4 transition-all duration-200 sm:hidden"
          >
            <img className={`${isActive ? 'hidden' : "flex"} active:rotate-180 transition-all duration-300`} src="/icons/menu.svg" alt="menu" />
            <img className={`${isActive ? 'flex' : 'hidden'} active:rotate-180 transition-all duration-300`} src="/icons/close.svg" alt="close" />
            {isActive &&
            <div className="absolute -bottom-28 bg-white rounded-md -right-2 flex flex-col shadow-lg w-32">
              <Link onClick={handleLinkClick} to='/'>
                <p className="px-4 py-2.5 text-sm cursor-pointer active:bg-gray-200 transition-colors duration-200">Home</p>
              </Link>
              <Link onClick={handleLinkClick} to='journey'>
                <p className="px-4 py-2.5 text-sm cursor-pointer active:bg-gray-200 transition-colors duration-200">Journey</p>
              </Link>
              <Link onClick={handleLinkClick} to='about'>
                <p className="py-2.5 px-4 text-sm cursor-pointer active:bg-gray-200 transition-colors duration-200">About</p>
              </Link>
            </div>}
          </div>
          <div className="hidden sm:flex gap-8">
            <NavLink to='/'>
              <p className="text-sm cursor-pointer hover:text-black/60 transition-colors duration-200">Home</p>
            </NavLink>
            <NavLink to='journey'>
              <p className="text-sm cursor-pointer hover:text-black/60 transition-colors duration-200">Journey</p>
            </NavLink>
            <NavLink to='about'>
              <p className="text-sm cursor-pointer hover:text-black/60 transition-colors duration-200">About</p>
            </NavLink>
          </div>
          
        </div>
        {/* <ProgressBar /> */}
      </header>

      {/* Spacer keeps the flow height the same as the fixed header */}
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
};

export default Header;
