
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3 } from 'lucide-react';
import ContentSection from './ContentSection';
import { projectsData } from '../data/content';

const ProjectCard: React.FC<{ project: any; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: Move image on Y axis as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3] bg-gray-100">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
        <motion.img 
          src={project.image} 
          alt={project.client} 
          style={{ y }}
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="object-cover w-full h-full"
        />
        
        {/* Floating Stat Card */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-lg">
            <div className="font-heading font-bold text-3xl text-dark">{project.stat}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{project.statDesc}</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-heading font-bold text-2xl md:text-3xl group-hover:underline decoration-2 underline-offset-4 transition-all">
          {project.client}
        </h3>
        <p className="text-gray-600 text-lg">{project.title}</p>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const activeProject = selectedProjectId
    ? projectsData.find(p => p.id === selectedProjectId)
    : null;

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProjectId(null);
    window.scrollTo(0, 0);
  };

  if (activeProject) {
    return (
      <div className="pt-12 min-h-screen bg-white">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 pb-24">
          <button 
            onClick={handleBack}
            className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-forest mb-12 transition-colors pt-8"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex gap-2 mb-6">
                   {activeProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wide text-gray-600">{tag}</span>
                   ))}
                </div>
                <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-[1.05] mb-8">
                  {activeProject.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  {/* Using the challenge as intro text */}
                  {activeProject.challenge}
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                   <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Client</p>
                      <p className="font-heading font-bold text-xl">{activeProject.client}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key Result</p>
                      <p className="font-heading font-bold text-xl text-forest">{activeProject.stat}</p>
                   </div>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-[4/5]"
             >
                <img src={activeProject.image} alt={activeProject.client} className="object-cover w-full h-full" />
             </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
             <div>
                <h3 className="font-heading font-bold text-3xl mb-4">The Challenge</h3>
             </div>
             <div className="lg:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed">{activeProject.challenge}</p>
             </div>

             <div className="col-span-full h-px bg-gray-200"></div>

             <div>
                <h3 className="font-heading font-bold text-3xl mb-4">The Solution</h3>
             </div>
             <div className="lg:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed">{activeProject.solution}</p>
             </div>

             <div className="col-span-full h-px bg-gray-200"></div>

             <div>
                <h3 className="font-heading font-bold text-3xl mb-4">The Results</h3>
             </div>
             <div className="lg:col-span-2">
                <div className="bg-forest text-white p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
                   <div className="bg-white/20 p-4 rounded-xl">
                      <BarChart3 size={32} className="text-white" />
                   </div>
                   <div>
                      <p className="text-xl font-medium mb-2">{activeProject.result}</p>
                      <p className="text-white/60 text-sm">Verified outcomes 90 days post-launch.</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="mt-24 text-center">
             <h2 className="font-heading font-bold text-3xl mb-8">Ready for similar results?</h2>
             <button onClick={() => navigate('/audit')} className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors">
                Get Your Free Audit
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Selected <span className="italic font-light text-[#8C8C8C]">Works.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We don't just make things look pretty. We solve business problems through design, technology, and strategy. Here are a few examples.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {projectsData.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx} 
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContentSection />
    </div>
  );
};

export default CaseStudies;
