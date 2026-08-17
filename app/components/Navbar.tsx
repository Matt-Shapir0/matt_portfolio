// import React from 'react';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav className="absolute top-0 w-full h-25 z-50 overflow-hidden shadow-sm">
//       {/* Cloud Background Layer */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src="/nav/moving-clouds.png" 
//           alt="background" 
//           fill 
//           className="object-cover opacity-65"
//           priority
//         />
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-10 max-w-8xl mx-auto px-12 h-full flex justify-between items-center">
//         <div className="flex items-center">
//           <Image 
//             src="/nav/website-logo.png" 
//             alt="Matt Logo" 
//             width={180} 
//             height={40} 
//             className="object-contain"
//           />
//         </div>
        
//         <div className="flex space-x-4 sm:space-x-4 md:space-x-10 lg:space-x-16 font-sans text-sm  sm:text-base font-bold tracking-widest text-brand">
//           <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT ME</a>
//           <a href="#projects" className="hover:opacity-70 transition-opacity">PROJECTS</a>
//           <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full h-20 md:h-24 z-50 shadow-sm">
      {/* Cloud Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/nav/moving-clouds.png" 
          alt="background" 
          fill 
          className="object-cover opacity-65"
          priority
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/nav/website-logo.png" 
            alt="Matt Logo" 
            width={140} 
            height={32} 
            className="object-contain md:w-[180px] md:h-[40px]"
          />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex md:space-x-8 lg:space-x-14 font-sans text-sm md:text-base font-bold tracking-widest text-brand">
          <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT ME</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">PROJECTS</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand outline-none focus:outline-none focus:ring-0 select-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.59 7.12 4.7a1 1 0 00-1.42 1.42L10.59 11l-4.89 4.88a1 1 0 001.42 1.42L12 12.41l4.88 4.89a1 1 0 001.42-1.42L13.41 11l4.89-4.29z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden relative z-20 bg-white/90 backdrop-blur-md px-6 py-4 flex flex-col space-y-4 font-sans text-sm font-bold tracking-widest text-brand border-t border-gray-100 shadow-md">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="hover:opacity-70 transition-opacity"
          >
            ABOUT ME
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)} 
            className="hover:opacity-70 transition-opacity"
          >
            PROJECTS
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;