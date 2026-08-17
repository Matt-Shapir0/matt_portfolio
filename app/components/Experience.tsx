import React from 'react';
import Image from 'next/image';

const experiences = [
  {
    company: "Atlantic Group",
    role: "Product Engineer",
    location: "New York, NY",
    date: "May 2026 – Present",
    color: "#0F2D59",
    logo: "/experience/atl.jpeg",
    description: "Leading the end-to-end product lifecycle for internal recruiting tools from requirements discovery to full-stack development, cloud deployment, and user adoption."
  },
  {
    company: "Johnson & Johnson",
    role: "Platform Operations Engineer Intern",
    location: "Titusville, NJ",
    date: "Summer 2025",
    color: "#EB1701",
    logo: "/experience/jj.png",
    description: "Designed, built, and deployed a GenAI support agent using LLMs, RAG architecture, and vector databases."
  },
  {
    company: "Principal Financial Group",
    role: "Full Stack Software Engineer Intern",
    location: "Charlotte, NC",
    date: "Summer 2024",
    color: "#003A76",
    logo: "/experience/principal.png",
    description: "Developed and migrated full stack applications to the cloud utilizing AWS, Next.js, TypeScript, and CI/CD DevOps deployment techniques."
  },
  {
    company: "Bridgify",
    role: "Back End Developer Intern",
    location: "Tel Aviv, IS",
    date: "Summer 2023",
    color: "#2C6B56",
    logo: "/experience/bridgify.png",
    description: "Utilized Python and AWS to efficiently retrieve and process data from multiple sources, optimizing data handling and storage throughout the ETL pipeline."
  }
];

const Experience = () => {
  return (
    <section className="pb-16 md:pb-24 bg-white px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group transition-all duration-300 ease-out hover:-translate-y-1"
          >
            {/* Company Logo Box */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative shrink-0 rounded-xl overflow-hidden shadow-sm ">
              <Image 
                src={exp.logo} 
                alt={exp.company} 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Content Area */}
            <div className="space-y-2.5">
              <h3 
                className="text-2xl sm:text-3xl font-bold font-serif" 
                style={{ color: exp.color }}
              >
                {exp.company}
              </h3>
              <p className="text-lg sm:text-xl font-bold text-navy italic">
                {exp.role}
              </p>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-azure">
                <span className="flex items-center gap-1.5">
                  <Image src="/experience/location.png" alt="location" width={14} height={14} />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Image src="/experience/calendar.png" alt="date" width={14} height={14} />
                  {exp.date}
                </span>
              </div>
              
              <p className="text-navy text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

// import React from 'react';
// import Image from 'next/image';

// const experiences = [
//   {
//     company: "Johnson & Johnson",
//     role: "Platform Operations Engineer Intern",
//     location: "New Jersey",
//     date: "Summer 2025",
//     color: "#EB1701",
//     logo: "/experience/jj.png",
//     description: "Designed, built, and deployed a GenAI support agent using LLMs, RAG architecture, and vector databases."
//   },
//   {
//     company: "Principal Financial Group",
//     role: "Full Stack Software Engineer Intern",
//     location: "Charlotte, North Carolina",
//     date: "Summer 2024",
//     color: "#003A76",
//     logo: "/experience/principal.png",
//     description: "Developed and migrated full stack applications to the cloud utilizing AWS, Next.js, TypeScript, and CI/CD DevOps deployment techniques."
//   },
//   {
//     company: "Bridgify",
//     role: "Back End Developer Intern",
//     location: "Tel Aviv",
//     date: "Summer 2023",
//     color: "#C2DED0",
//     logo: "/experience/bridgify.png",
//     description: "Utilized Python and AWS to efficiently retrieve and process data from multiple sources, optimizing data handling and storage throughout the ETL pipeline."
//   }
// ];

// const Experience = () => {
//   return (
//     <section className="pb-24 bg-white px-6 max-w-5xl mx-auto">
      
//       <div className="space-y-12">
//         {experiences.map((exp, index) => (
//           <div key={index} className="flex flex-col md:flex-row gap-8 items-start group transition-all duration-300 ease-out hover:-translate-y-1">
//             {/* Company Logo Box */}
//             <div className="w-40 h-40 relative shrink-0 rounded-xl overflow-hidden shadow-md">
//               <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
//             </div>

//             {/* Content Area */}
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold font-serif" style={{ color: exp.color }}>{exp.company}</h3>
//               <p className="text-xl font-bold text-navy italic">{exp.role}</p>
              
//               <div className="flex flex-wrap gap-6 text-sm font-medium text-azure">
//                 <span className="flex items-center gap-2">
//                   <Image src="/experience/location.png" alt="location" width={16} height={16} />
//                   {exp.location}
//                 </span>
//                 <span className="flex items-center gap-2">
//                   <Image src="/experience/calendar.png" alt="date" width={16} height={16} />
//                   {exp.date}
//                 </span>
//               </div>
              
//               <p className="text-navy leading-relaxed max-w-3xl pt-0">{exp.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default Experience;