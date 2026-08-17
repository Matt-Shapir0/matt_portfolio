"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const languages = [
  { name: "TypeScript", logo: "/skills/ts-logo.png" },
  { name: "JavaScript", logo: "/skills/js-logo.png" },
  { name: "Python", logo: "/skills/python-logo.png" },
  { name: "SQL", logo: "/skills/sql-logo.png" },
  { name: "HTML", logo: "/skills/html-logo.png" },
  { name: "CSS", logo: "/skills/css-logo.png" },
  { name: "Java", logo: "/skills/java-logo.png" },
  { name: "Ruby", logo: "/skills/ruby-logo.png" },
  { name: "Swift", logo: "/skills/swift-logo.png" },
  { name: "C", logo: "/skills/c-logo.png" },
];

const categories = [
  {
    id: 'product',
    title: 'Product & Full Stack',
    skills: [
      'Next.js',
      'React & React Native',
      'TypeScript & Node.js',
      'FastAPI',
      'Tailwind CSS',
      'PostgreSQL / Redis',
      'RESTful APIs & GraphQL',
      'Authentication & Security (OAuth / JWT)'
    ],
    images: ['next', 'react', 'node', 'fast', 'tailwind', 'post', 'api', 'oauth']
  },
  {
    id: 'ai',
    title: 'Applied AI & Data Systems',
    skills: [
      'PyTorch & Scikit-learn',
      'RAG Architecture',
      'LLM Orchestration & Agents (LangChain, MCP)',
      'Vector Databases (Pinecone / pgvector)',
      'Fine-Tuning & Transfer Learning',
      'Data Science (Pandas, NumPy, Matplotlib)',
      'Statistical Modeling (Regression, Clustering)',
      'Context & Prompt Engineering',
    ],
    images: ['torch', 'rag', 'langchain', 'pinecone', 'finetuning', 'pandas', 'statistics', 'prompt']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      'AWS (Lambda, S3, EC2)',
      'Docker & Containerization',
      'CI/CD Pipelines (GitHub Actions)',
      'Vercel & Cloud Hosting',
      'Infrastructure as Code (Terraform)',
      'Automated Testing (Jest, PyTest, RTL)',
      'Browser Automation (Playwright, Selenium)',
      'Git & Version Control'
    ],
    images: ['aws', 'docker', 'cicd', 'host', 'iac', 'jest', 'playwright', 'git']
  }
];

const Skills = () => {
  const [openId, setOpenId] = useState<string | null>('product');
  
  return (
    <section id="about" className="relative w-full py-16 md:py-24 overflow-hidden border-t border-brand/10">
      
      {/* 1. Beach Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/skills/beach-background.jpg" 
          alt="Beach Background" 
          fill
          className="object-cover object-center opacity-50"
          priority
        />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy text-center mb-8 md:mb-12 px-4">
          Technologies I Use
        </h2>

        {/* 3. Infinite Scrolling Language Pills */}
        <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
          <div className="flex animate-infinite-scroll whitespace-nowrap gap-4 md:gap-8 py-2">
            {[...languages, ...languages].map((lang, index) => (
              <div 
                key={`lang-${index}`} 
                className="flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-brand/5 min-w-fit transition-all duration-200 hover:bg-white/80"
              >
                <span className="text-brand font-bold text-base md:text-xl">{lang.name}</span>
                <div className="relative w-6 h-6 md:w-8 md:h-8">
                  <Image 
                    src={lang.logo} 
                    alt={lang.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Modern Accordion Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-10 md:mt-14 space-y-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="overflow-hidden rounded-2xl border border-brand/20 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/30"
          >
            <button 
              onClick={() => setOpenId(openId === cat.id ? null : cat.id)}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left transition-colors focus:outline-none"
              aria-expanded={openId === cat.id}
            >
              <span className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-navy">
                {cat.title}
              </span>
              <ChevronDown 
                className={`text-brand transition-transform duration-300 shrink-0 ${openId === cat.id ? 'rotate-180' : ''}`} 
                size={28} 
              />
            </button>

            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openId === cat.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-5 md:p-6 pt-0">
                {cat.skills?.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-brand/10 transition-all duration-150 hover:bg-white/80 hover:shadow-sm"
                  >
                    <div className="relative w-6 h-6 md:w-7 md:h-7 shrink-0">
                      <Image 
                        src={`/skills/${cat.images?.[index]}.png`} 
                        alt={skill} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                    <span className="font-bold text-navy text-xs md:text-sm leading-tight">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';

// const languages = [
//   { name: "Python", logo: "/skills/python-logo.png" },
//   { name: "SQL", logo: "/skills/sql-logo.png" },
//   { name: "TypeScript", logo: "/skills/ts-logo.png" },
//   { name: "JavaScript", logo: "/skills/js-logo.png" },
//   { name: "Java", logo: "/skills/java-logo.png" },
//   { name: "Ruby", logo: "/skills/ruby-logo.png" },
//   { name: "C", logo: "/skills/c-logo.png" },
//   { name: "HTML", logo: "/skills/html-logo.png" },
//   { name: "CSS", logo: "/skills/css-logo.png" },
//   { name: "Swift", logo: "/skills/swift-logo.png" },
// ];

// const categories = [
//   { id: 'ai', 
//     title: 'AI & Machine Learning',
//     skills: ['Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'PyTorch', 'Transformers', 'Fine-tuning', 'Vector Databases', 'LangChain', 'Natural Language Processing (NLP)', 'Transfer Learning'],
//     images: ['llm', 'rag', 'torch', 'transformer', 'finetuning', 'sql-logo', 'langchain', 'nlp', 'transfer-learning'] },
//   { id: 'fs', 
//     title: 'Full Stack',
//     skills: ['Next.js', 'React', 'Node.js', 'Ruby on Rails', 'Tailwind CSS', 'PostgeSQL / NoSQL', 'RESTful APIs', 'Cloud Migration'],
//     images: ['next', 'react', 'node', 'rails', 'tailwind', 'post', 'api', 'cloud']  },
//   { id: 'cd', 
//     title: 'Cloud & DevOps',
//     skills: ['AWS (Certified Cloud Practitioner)', 'Github Actions', 'Infrastructure as Code (IaC)', 'Docker', 'CI/CD Pipelines', 'Automated Testing (PyTest/Jest)', 'ETL Pipelines', 'AWS Lambda', 'Amazon S3 & EC2'],
//     images: ['aws', 'git-a', 'iac', 'docker', 'cicd', 'jest', 'etl', 'lambda', 's3'] }
// ];

// const Skills = () => {
//   const [openId, setOpenId] = useState<string | null>('ai');
  
//   return (
//     <section id="about" className="relative w-full py-18 overflow-hidden border-t border-brand/10">
      
//       {/* 1. Beach Background (Centered & Cropped) */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src="/skills/beach-background.jpg" 
//           alt="Beach Background" 
//           fill
//           className="object-cover object-center opacity-50"
//           priority
//         />
//       </div>

//       {/* 2. Content Container */}
//       <div className="relative z-10 w-full">
//         <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand text-center mb-12">
//           Technologies I Use
//         </h2>

//         {/* 3. Infinite Scrolling Language Pills */}
//         <div className="flex w-full overflow-hidden">
//           <div className="flex animate-infinite-scroll whitespace-nowrap gap-8">
//             {/* First Set of Languages */}
//             {languages.map((lang, index) => (
//               <div 
//                 key={`lang-1-${index}`} 
//                 className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-brand/5 min-w-fit transition-all duration-200 hover:bg-white/70 hover:shadow-md"
//               >
//                 <span className="text-brand font-bold text-xl">{lang.name}</span>
//                 <div className="relative w-10 h-10">
//                   <Image 
//                     src={lang.logo} 
//                     alt={lang.name} 
//                     fill 
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//             {/* Duplicate Set for Seamless Loop */}
//             {languages.map((lang, index) => (
//               <div 
//                 key={`lang-2-${index}`} 
//                 className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-brand/5 min-w-fit transition-all duration-200 hover:bg-white/70 hover:shadow-md"
//               >
//                 <span className="text-brand font-bold text-xl">{lang.name}</span>
//                 <div className="relative w-10 h-10">
//                   <Image 
//                     src={lang.logo} 
//                     alt={lang.name} 
//                     fill 
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 4. Modern Accordion Table */}
//       <div className="space-y-4 mt-12 mx-10 flex flex-col">
//         {categories.map((cat) => (
//           <div 
//             key={cat.id} 
//             className="overflow-hidden rounded-2xl border border-brand/20 bg-white/10 backdrop-blur-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-white/20"
//           >
//             <button 
//               onClick={() => setOpenId(openId === cat.id ? null : cat.id)}
//               className="flex w-full items-center justify-between p-6 text-left hover:bg-white/10 transition-colors"
//             >
//               <span className="font-sans text-2xl md:text-3xl font-bold text-navy">{cat.title}</span>
//               <ChevronDown 
//                 className={`text-brand transition-transform duration-300 ${openId === cat.id ? 'rotate-180' : ''}`} 
//                 size={32} 
//               />
//             </button>

//             <div 
//               className={`transition-all duration-500 ease-in-out ${openId === cat.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
//             >
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 pt-0">
//                 {cat.skills?.map((skill, index) => (
//                   <div key={skill} className="flex items-center gap-3 p-3 bg-white/30 rounded-xl border border-brand/10 transition-all duration-100 hover:shadow-md hover:-translate-y-0.5 hover:bg-white/50">
//                     <div className="relative w-8 h-8 shrink-0">
//                       <Image src={`/skills/${cat.images?.[index]}.png`} alt="sample" fill className="object-contain" />
//                     </div>
//                     <span className="font-bold text-navy text-sm">{skill}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;