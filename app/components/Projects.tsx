import React from 'react';
import Image from 'next/image';

const projectData = [
  {
    title: "RetinaLiteNet: Medical Image Segmentation & Disease Classification",
    description: "Developed a hybrid CNN-Transformer architecture in PyTorch for retinal analysis. Achieved a 0.755 Dice score and 98.3% specificity on segmentation while reaching 90% accuracy for 15-class disease classification.",
    tags: ["PyTorch", "Transformers", "Computer Vision"],
    image: "/projects/retina.png",
    bgColor: "bg-[#FCE4EC]", // Soft Pink from your design
  },
  {
    title: "Next-Query Prediction: Comparative Sequence Modeling",
    description: "Systematic study of paradigms including Markov chains, ALBERT+GRU, and T5 models. Fine-tuning a T5 transformer outperformed deep learning models trained from scratch by over 15x.",
    tags: ["Fine Tuning", "Predictive Modeling", "NLP"],
    image: "/projects/markov.png",
    bgColor: "bg-[#E1F5FE]", // Soft Blue from your design
  },
  {
    title: "Automated Toxic Comment Classification Model",
    description: "Designed a feed-forward neural network using Python and TensorFlow to identify harmful content. Optimized architecture and training to achieve a 92% accuracy rate in detecting identity-based hate.",
    tags: ["TensorFlow", "Supervised Learning", "Neural Networks"],
    image: "/projects/network.png",
    bgColor: "bg-[#E8F5E9]", // Soft Green from your design
  },
  {
    title: "GameShelf: Video Game Ranking SaaS Application",
    description: "Engineered a full-stack SaaS application using Ruby on Rails and JavaScript. Implemented a responsive front end with TailwindCSS and integrated secure user authentication with a relational database.",
    tags: ["Ruby on Rails", "Relational Databases", "Full Stack"],
    image: "/projects/gaming.png",
    bgColor: "bg-[#FFF3E0]", // Soft Orange from your design
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-10 px-6 overflow-hidden">
      {/* Background Image Layer (Optional) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/projects/background.png" 
          alt="background" 
          fill 
          className="object-cover opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-brand text-center mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} rounded-xl p-4 md:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-black/5`}
            >
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-navy/80 text-sm md:text-base leading-relaxed mb-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs font-bold text-navy border border-white/40 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Visual */}
              <div className="relative w-full h-24 md:h-60 mt-auto rounded-3xl overflow-hidden shadow-inner border border-black/5 bg-white/20">
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