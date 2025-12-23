"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const languages = [
  { name: "Python", logo: "/skills/python-logo.png" },
  { name: "SQL", logo: "/skills/sql-logo.png" },
  { name: "TypeScript", logo: "/skills/ts-logo.png" },
  { name: "JavaScript", logo: "/skills/js-logo.png" },
  { name: "Java", logo: "/skills/java-logo.png" },
  { name: "Ruby", logo: "/skills/ruby-logo.png" },
  { name: "C", logo: "/skills/c-logo.png" },
  { name: "HTML", logo: "/skills/html-logo.png" },
  { name: "CSS", logo: "/skills/css-logo.png" },
  { name: "Swift", logo: "/skills/swift-logo.png" },
];

const categories = [
  { id: 'ai', 
    title: 'AI & Machine Learning',
    skills: ['Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'PyTorch', 'Transformers', 'Fine-tuning', 'Vector Databases', 'LangChain', 'Natural Language Processing (NLP)', 'Transfer Learning'],
    images: ['llm', 'rag', 'torch', 'transformer', 'finetuning', 'sql-logo', 'langchain', 'nlp', 'transfer-learning'] },
  { id: 'fs', 
    title: 'Full Stack',
    skills: ['Next.js', 'React', 'Node.js', 'Ruby on Rails', 'Tailwind CSS', 'PostgeSQL / NoSQL', 'RESTful APIs', 'Cloud Migration'],
    images: ['next', 'react', 'node', 'rails', 'tailwind', 'post', 'api', 'cloud']  },
  { id: 'cd', 
    title: 'Cloud & DevOps',
    skills: ['AWS (Certified Cloud Practitioner)', 'Github Actions', 'Infrastructure as Code (IaC)', 'Docker', 'CI/CD Pipelines', 'Automated Testing (PyTest/Jest)', 'ETL Pipelines', 'AWS Lambda', 'Amazon S3 & EC2'],
    images: ['aws', 'git-a', 'iac', 'docker', 'cicd', 'jest', 'etl', 'lambda', 's3'] }
];

const Skills = () => {
  const [openId, setOpenId] = useState<string | null>('ai');
  
  return (
    <section id="about" className="relative w-full py-18 overflow-hidden border-t border-brand/10">
      
      {/* 1. Beach Background (Centered & Cropped) */}
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
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-brand text-center mb-12">
          Technologies I Use
        </h2>

        {/* 3. Infinite Scrolling Language Pills */}
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-infinite-scroll whitespace-nowrap gap-8">
            {/* First Set of Languages */}
            {languages.map((lang, index) => (
              <div 
                key={`lang-1-${index}`} 
                className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-brand/5 min-w-fit"
              >
                <span className="text-brand font-bold text-xl">{lang.name}</span>
                <div className="relative w-10 h-10">
                  <Image 
                    src={lang.logo} 
                    alt={lang.name} 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {languages.map((lang, index) => (
              <div 
                key={`lang-2-${index}`} 
                className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm border border-brand/5 min-w-fit"
              >
                <span className="text-brand font-bold text-xl">{lang.name}</span>
                <div className="relative w-10 h-10">
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

      {/* 4. Modern Accordion Table */}
      <div className="space-y-4 mt-12 mx-10 flex flex-col">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="overflow-hidden rounded-2xl border border-brand/20 bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            <button 
              onClick={() => setOpenId(openId === cat.id ? null : cat.id)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="font-sans text-2xl md:text-3xl font-bold text-navy">{cat.title}</span>
              <ChevronDown 
                className={`text-brand transition-transform duration-300 ${openId === cat.id ? 'rotate-180' : ''}`} 
                size={32} 
              />
            </button>

            <div 
              className={`transition-all duration-500 ease-in-out ${openId === cat.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 pt-0">
                {cat.skills?.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 p-3 bg-white/30 rounded-xl border border-brand/10">
                    <div className="relative w-8 h-8 shrink-0">
                      <Image src={`/skills/${cat.images?.[index]}.png`} alt="sample" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-navy text-sm">{skill}</span>
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