// الأفضل إذا كان عندك alias "@"
import { projectsData } from "@/lib/projectsData";

// لو ما يشتغل alias "@", استخدم المسار النسبي من هذا الملف إلى src/lib
// import { projectsData } from "../../lib/projectsData";

import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
const projects: Project[] = projectsData.map((p, idx) => ({
  id: idx + 1,
  title: p.title,
  description: `${p.description}${p.outcome ? ` ${p.outcome}` : ""}`.trim(),
  techStack: p.tags,
  url: `/projects/${p.slug}`,
}));

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
              {/* Featured Projects title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold italic tracking-tight text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      {/* ---- Section 1: COBS Achievements ---- */}
      <p className="text-base text-white/60 mt-4 mb-6 tracking-wide">
        College of Business Society (COBS) Achievements
      </p>

      {/* COBS projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 overflow-hidden"
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlowCard
              intensity={index % 3 === 0 ? "high" : index % 2 === 0 ? "medium" : "low"}
              className="group h-full"
              hoverScale={1.03}
            >
              <div className="p-6 h-full flex flex-col relative z-10">
                <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  className="inline-flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      {/* ---- Section 2: Personal Achievements ---- */}
      <p className="text-base text-white/60 mt-16 mb-6 tracking-wide">
        Personal Achievements
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="group relative rounded-2xl border border-dashed border-white/20 bg-black/30 p-6 md:p-8 overflow-hidden"
          variants={cardVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="p-6 h-full flex flex-col items-center text-center relative z-10">
            <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">
              Personal Achievements
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Personal projects and achievements will be added here soon.
            </p>
          </div>
        </motion.div>
      </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
