import React from 'react';
import Image from 'next/image';

const Education = () => {
  return (
    <section className="mt-8 md:mt-12 bg-white px-4 sm:px-6 max-w-6xl mx-auto">
      
      <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy text-center mb-10 md:mb-14">
        Education
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        
        {/* Cornell Tech Card */}
        <div className="flex flex-row gap-5 sm:gap-6 items-center bg-[#FDFDFD] p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-brand/20">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0">
            <Image 
              src="/experience/cornell.png" 
              alt="Cornell Tech Logo" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand">
              Cornell Tech
            </h3>
            <p className="text-base sm:text-lg font-bold text-navy">
              M.Eng. in Computer Science
            </p>
            <p className="text-xs font-bold text-azure flex items-center gap-1.5 uppercase tracking-wider">
              <Image src="/experience/calendar.png" alt="date" width={12} height={12} />
              2025 – 2026
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-navy mb-0.5">Focus Areas:</p>
              <p className="text-xs text-azure leading-relaxed">
                Applied Machine Learning, Deep Learning, Systems, HCI
              </p>
            </div>
          </div>
        </div>

        {/* Colgate University Card */}
        <div className="flex flex-row gap-5 sm:gap-6 items-center bg-[#FDFDFD] p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-brand/20">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0">
            <Image 
              src="/experience/colgate.png" 
              alt="Colgate University Logo" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand">
              Colgate University
            </h3>
            <p className="text-base sm:text-lg font-bold text-navy">
              B.A. in Computer Science
            </p>
            <p className="text-xs font-bold text-azure flex items-center gap-1.5 uppercase tracking-wider">
              <Image src="/experience/calendar.png" alt="date" width={12} height={12} />
              2021 – 2025
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-navy mb-0.5">Core Coursework:</p>
              <p className="text-xs text-azure leading-relaxed">
                Software Engineering, Database Systems, NLP, Algorithms & Data Structures
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Divider */}
      <hr className="my-12 md:my-16 border-t-2 border-azure opacity-20" />

    </section>
  );
};

export default Education;

// import React from 'react';
// import Image from 'next/image';

// const Education = () => {
//   return (
//     <section className="mt-12 bg-white px-6 max-w-6xl mx-auto">

//       <h2 className="font-serif text-5xl font-bold text-navy text-center mb-16">My Experience</h2>
      
//       <div className="grid md:grid-cols-2 gap-12 items-start">
        
//         {/* Cornell Tech Card */}
//         <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-[#FDFDFD] p-6 rounded-2xl border border-gray-50 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-brand/20">
//           <div className="relative w-24 h-24 shrink-0">
//             <Image src="/experience/cornell.png" alt="Cornell Logo" fill className="object-contain" />
//           </div>
//           <div className="space-y-1">
//             <h3 className="text-2xl font-bold font-serif text-brand">Cornell Tech</h3>
//             <p className="text-lg font-bold text-navy">Master of Engineering</p>
//             <p className="text-xs font-bold text-azure flex items-center gap-1 uppercase tracking-wider">
//               <Image src="/experience/calendar.png" alt="date" width={12} height={12} />
//               2025 - 2026
//             </p>
//             <div className="pt-3">
//               <p className="text-xs font-bold text-navy mb-1">Areas of Study:</p>
//               <p className="text-xs text-azure leading-tight">
//                 Deep Learning, Applied Machine Learning, Data Science, HCI
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Colgate University Card */}
//         <div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-[#FDFDFD] p-6 rounded-2xl border border-gray-50 shadow-sm duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-brand/20">
//           <div className="relative w-24 h-24 shrink-0">
//             <Image src="/experience/colgate.png" alt="Colgate Logo" fill className="object-contain" />
//           </div>
//           <div className="space-y-1">
//             <h3 className="text-2xl font-bold font-serif text-brand">Colgate University</h3>
//             <p className="text-lg font-bold text-navy">Bachelor of Arts</p>
//             <p className="text-xs font-bold text-azure flex items-center gap-1 uppercase tracking-wider">
//               <Image src="/experience/calendar.png" alt="date" width={12} height={12} />
//               2021 - 2025
//             </p>
//             <div className="pt-3">
//               <p className="text-xs font-bold text-navy mb-1">Relevant Coursework:</p>
//               <p className="text-xs text-azure leading-tight">
//                 Software Engineering, NLP, Database Systems, DSA
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//       {/* Horizontal Divider*/}
//       <hr className="my-16 border-t-2 border-azure opacity-20" />

//     </section>
//   );
// };

// export default Education;