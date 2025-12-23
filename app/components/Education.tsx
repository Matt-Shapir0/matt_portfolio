import React from 'react';
import Image from 'next/image';

const Education = () => {
  return (
    <section className="pb-6 mt-12 bg-white px-6 max-w-6xl mx-auto">

      <h2 className="font-serif text-5xl font-bold text-navy text-center mb-16">My Experience</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Cornell Tech Card */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-[#FDFDFD] p-6 rounded-2xl border border-gray-50 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-brand/20">
          <div className="relative w-24 h-24 shrink-0">
            <Image src="/experience/cornell.png" alt="Cornell Logo" fill className="object-contain" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold font-serif text-brand">Cornell Tech</h3>
            <p className="text-lg font-bold text-navy">Master of Engineering</p>
            <p className="text-xs font-bold text-azure flex items-center gap-1 uppercase tracking-wider">
              <Image src="/experience/calendar.png" alt="date" width={12} height={12} />
              2025 - 2026
            </p>
            <div className="pt-3">
              <p className="text-xs font-bold text-navy mb-1">Areas of Study:</p>
              <p className="text-xs text-azure leading-tight">
                Deep Learning, Applied Machine Learning, Data Science, HCI
              </p>
            </div>
          </div>
        </div>

        {/* Colgate University Card */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-[#FDFDFD] p-6 rounded-2xl border border-gray-50 shadow-sm duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-brand/20">
          <div className="relative w-24 h-24 shrink-0">
            <Image src="/experience/colgate.png" alt="Colgate Logo" fill className="object-contain" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold font-serif text-brand">Colgate University</h3>
            <p className="text-lg font-bold text-navy">Bachelor of Arts</p>
            <p className="text-xs font-bold text-azure flex items-center gap-1 uppercase tracking-wider">
              <Image src="/experience/calendar.png" alt="date" width={12} height={12} />
              2021 - 2025
            </p>
            <div className="pt-3">
              <p className="text-xs font-bold text-navy mb-1">Relevant Coursework:</p>
              <p className="text-xs text-azure leading-tight">
                Software Engineering, NLP, Database Systems, DSA
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* Horizontal Divider*/}
      <hr className="my-16 border-t-2 border-azure opacity-20" />

    </section>
  );
};

export default Education;