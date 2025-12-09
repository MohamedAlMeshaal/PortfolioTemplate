// src/components/ProjectsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Subtitle – COBS + personal + volunteering */}
        <motion.p
          className="text-base text-white/70 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Curated highlights of what I’ve built and led — from COBS initiatives
          to personal projects and volunteering that created real impact.
        </motion.p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Card بدون GlowCard */}
              <div
                className="group h-full rounded-2xl border border-white/10 
                           bg-gradient-to-br from-white/5 via-white/0 to-white/5 
                           p-6 shadow-[0_0_40px_rgba(255,255,255,0.08)] 
                           hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.18)] 
                           transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-white/5 border border-white/10 
                                     rounded-full text-white/70 group-hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Optional link */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm text-white/80 group-hover:text-white gap-2"
                  >
                    View Project
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
