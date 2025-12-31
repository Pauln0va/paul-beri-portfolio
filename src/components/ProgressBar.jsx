import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'ux', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      // Calculate overall scroll progress
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);

      // Determine which section is currently in view
      let currentSection = 'about';
      
      // Check if we're at the bottom of the page
      if (scrollTop >= documentHeight - 50) {
        currentSection = 'contact';
      } else {
        // Find which section is most visible in the viewport
        let maxVisibleRatio = 0;
        
        for (let i = 0; i < sectionElements.length; i++) {
          const element = sectionElements[i];
          if (element) {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate how much of the section is visible
            const visibleTop = Math.max(0, -rect.top);
            const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleRatio = visibleHeight / rect.height;
            
            // If this section is more visible than the current best, select it
            if (visibleRatio > maxVisibleRatio && visibleRatio > 0.3) {
              maxVisibleRatio = visibleRatio;
              currentSection = sections[i];
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'General' },
    { id: 'ux', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height to account for sticky positioning
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Calculate the position to scroll to (top of section minus header height)
      const elementPosition = element.offsetTop - headerHeight;
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 flex items-center justify-center w-full px-4 py-1 bg-[#f5f5f4] border-b border-gray-200 z-1000">
      <div className="relative w-64">
        {/* Progress track */}
        <div className="h-1 bg-gray-300 rounded-full relative overflow-hidden">
          {/* Progress fill */}
          <div 
            className="h-full bg-black rounded-full transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        
        {/* Section stops */}
        <div className="flex justify-between mt-1">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col items-center">
              {/* Stop indicator */}
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                  activeSection === section.id 
                    ? 'bg-black border-black' 
                    : 'bg-gray-400 border-none hover:bg-gray-600'
                }`}
                onClick={() => scrollToSection(section.id)}
              />
              {/* Label */}
              <span 
                className={`text-xs mt-1 transition-colors duration-300 cursor-pointer ${
                  activeSection === section.id 
                    ? 'text-black font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
