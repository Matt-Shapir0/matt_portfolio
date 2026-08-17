import React from 'react';
import Image from 'next/image';

const projectData = [
  {
    title: "GameShelf: Video Game Ranking SaaS",
    description: "Full-stack web application featuring user authentication, custom collection management, and responsive interfaces powered by a relational database backend.",
    tags: ["Ruby on Rails", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    image: "/projects/gaming.png",
    bgColor: "bg-[#FFF3E0]",
  },
  {
    title: "RetinaLiteNet: Medical Segmentation",
    description: "Hybrid CNN-Transformer architecture built in PyTorch for high-precision retinal analysis, reaching a 0.755 Dice score and 90% classification accuracy.",
    tags: ["PyTorch", "Transformers", "Computer Vision", "Python"],
    image: "/projects/retina.png",
    bgColor: "bg-[#FCE4EC]",
  },
  {
    title: "Next-Query Predictive Search Engine",
    description: "Comparative sequence modeling engine utilizing fine-tuned T5 transformers to predict search intent, outperforming scratch-trained baseline models by 15x.",
    tags: ["T5 Transformer", "NLP", "Fine-Tuning", "Search Systems"],
    image: "/projects/markov.png",
    bgColor: "bg-[#E1F5FE]",
  },
  {
    title: "Automated Content Moderation Pipeline",
    description: "Neural network moderation service classifying toxic language with 92% accuracy, optimized for low-latency batch inferences and automated filtering.",
    tags: ["TensorFlow", "FastAPI", "Supervised Learning", "Python"],
    image: "/projects/network.png",
    bgColor: "bg-[#E8F5E9]",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-14 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/projects/background.png" 
          alt="background" 
          fill 
          className="object-cover opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-navy text-center mb-10 md:mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-black/5`}
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-navy mb-2.5 leading-tight">
                  {project.title}
                </h3>
                <p className="text-navy/80 text-sm sm:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-xs font-bold text-navy border border-white/60 shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Visual */}
              <div className="relative w-full h-44 sm:h-52 md:h-60 mt-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-black/5 bg-white/30">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// import React from 'react';
// import Image from 'next/image';

// const projectData = [
//   {
//     title: "RetinaLiteNet: Medical Image Segmentation & Disease Classification",
//     description: "Developed a hybrid CNN-Transformer architecture in PyTorch for retinal analysis. Achieved a 0.755 Dice score and 98.3% specificity on segmentation while reaching 90% accuracy for 15-class disease classification.",
//     tags: ["PyTorch", "Transformers", "Computer Vision"],
//     image: "/projects/retina.png",
//     bgColor: "bg-[#FCE4EC]", // Soft Pink from your design
//   },
//   {
//     title: "Next-Query Prediction: Comparative Sequence Modeling",
//     description: "Systematic study of paradigms including Markov chains, ALBERT+GRU, and T5 models. Fine-tuning a T5 transformer outperformed deep learning models trained from scratch by over 15x.",
//     tags: ["Fine Tuning", "Predictive Modeling", "NLP"],
//     image: "/projects/markov.png",
//     bgColor: "bg-[#E1F5FE]", // Soft Blue from your design
//   },
//   {
//     title: "Automated Toxic Comment Classification Model",
//     description: "Designed a feed-forward neural network using Python and TensorFlow to identify harmful content. Optimized architecture and training to achieve a 92% accuracy rate in detecting identity-based hate.",
//     tags: ["TensorFlow", "Supervised Learning", "Neural Networks"],
//     image: "/projects/network.png",
//     bgColor: "bg-[#E8F5E9]", // Soft Green from your design
//   },
//   {
//     title: "GameShelf: Video Game Ranking SaaS Application",
//     description: "Engineered a full-stack SaaS application using Ruby on Rails and JavaScript. Implemented a responsive front end with TailwindCSS and integrated secure user authentication with a relational database.",
//     tags: ["Ruby on Rails", "Relational Databases", "Full Stack"],
//     image: "/projects/gaming.png",
//     bgColor: "bg-[#FFF3E0]", // Soft Orange from your design
//   }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="relative py-10 px-6 overflow-hidden">
//       {/* Background Image Layer (Optional) */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src="/projects/background.png" 
//           alt="background" 
//           fill 
//           className="object-cover opacity-90"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <h2 className="font-serif text-6xl font-bold text-navy text-center mb-16">Projects</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projectData.map((project, index) => (
//             <div 
//               key={index} 
//               className={`${project.bgColor} rounded-xl p-4 md:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-black/5`}
//             >
//               <div>
//                 <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2 leading-tight">
//                   {project.title}
//                 </h3>
//                 <p className="text-navy/80 text-sm md:text-base leading-relaxed mb-2">
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span 
//                       key={tag} 
//                       className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs font-bold text-navy border border-white/40 shadow-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Project Visual */}
//               <div className="relative w-full h-24 md:h-60 mt-auto rounded-3xl overflow-hidden shadow-inner border border-black/5 bg-white/20">
//                 <Image 
//                   src={project.image} 
//                   alt={project.title} 
//                   fill 
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;