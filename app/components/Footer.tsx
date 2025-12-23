import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-12 my-6 flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Left: Copyright */}
      <p className="text-brand text-sm font-medium">
        © {currentYear} Matthew Shapiro. All rights reserved. 
      </p>

      {/* Center: Quick Links */}
      <div className="flex gap-8 text-xs font-bold tracking-widest text-navy/40 uppercase">
        <a href="#about" className="hover:text-brand transition-colors">About</a>
        <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
        <a href="#" className="hover:text-brand transition-colors">Top</a>
      </div>

      {/* Right: Tech Stack Credits */}
      <p className="text-navy/40 text-[10px] font-bold uppercase tracking-tighter">
        Built with <span className="text-brand">Next.js 15</span> & <span className="text-brand">Tailwind v4</span> 
      </p>
    </footer>
  );
};

export default Footer;