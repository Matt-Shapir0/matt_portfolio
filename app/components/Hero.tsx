import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    // mt-25 = right under Navbar
    <section className="relative w-full min-h-[600px] mt-25 flex items-center overflow-hidden">
      
      {/* 1. Background Swirly Lines */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero/intro-image.png" 
          alt="Background pattern" 
          fill
          className="object-cover object-center opacity-100" // Adjust opacity to match your design
          priority
        />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Text */}
        <div className="space-y-6 mt-6">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-navy">
            Hi, I'm Matt
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-tight max-w-md">
            AI/ML Focused Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-navy max-w-lg leading-relaxed font-medium">
            Cornell Tech CS Master’s student and Full-Stack Engineer. I specialize in deploying high-impact ML solutions to solve real-world data challenges.
          </p>
          
          {/* About Me Pill Button */}
          <div className="pt-4">
            <button className="px-10 py-3 bg-[#E8F1F8] text-brand font-bold rounded-full text-sm tracking-widest hover:bg-[#D0E4F2] transition-colors uppercase">
              <a href="#about">About Me</a>
            </button>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
            
            {/* 1. The Maroon Ring (Behind) */}
            <div className="absolute w-[100%] h-[100%] rounded-full border-[30px] border-brand z-0"></div>
            
            {/* 2. The Photo Container (Clipped to a perfect circle) */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden shadow-2xl z-10">
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