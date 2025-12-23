import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full h-25 z-50 overflow-hidden shadow-sm">
      {/* Cloud Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/nav/moving-clouds.png" 
          alt="background" 
          fill 
          className="object-cover opacity-65"
          priority
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-8xl mx-auto px-12 h-full flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/nav/website-logo.png" 
            alt="Matt Logo" 
            width={180} 
            height={40} 
            className="object-contain"
          />
        </div>
        
        <div className="flex space-x-4 sm:space-x-4 md:space-x-10 lg:space-x-16 font-sans text-sm  sm:text-base font-bold tracking-widest text-brand">
          <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT ME</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">PROJECTS</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;