// 

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      
      {/* 1. Background Swirly Lines */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero/intro-image.png" 
          alt="Background pattern" 
          fill
          className="object-cover object-center opacity-100"
          priority
        />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center w-full">
        
        {/* Left Side: Text */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy leading-tight">
            Hi, I'm Matt
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight max-w-md">
            Product Engineer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-navy max-w-lg leading-relaxed font-medium">
            Cornell Tech CS MEng graduate building and shipping full stack applications. I'm bridging engineering and product design to turn complex systems into intuitive user experiences.
          </p>
          
          {/* About Me Button */}
          <div className="pt-2 sm:pt-4">
            <a 
              href="#about"
              className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 bg-[#E8F1F8] text-brand font-bold rounded-full text-xs sm:text-sm tracking-widest hover:bg-[#D0E4F2] transition-colors uppercase shadow-sm"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="flex justify-center md:justify-end items-center mt-6 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
            
            {/* 1. The Maroon Ring (Behind) */}
            <div className="absolute w-full h-full rounded-full border-[18px] sm:border-[24px] md:border-[30px] border-brand z-0"></div>
            
            {/* 2. The Photo Container */}
            <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden shadow-xl z-10">
              <Image 
                src="/hero/my-photo.png" 
                alt="Matthew Shapiro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;