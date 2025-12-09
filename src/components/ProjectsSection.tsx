// الأفضل إذا كان عندك alias "@"
import { projectsData } from "@/lib/projectsData";

// لو ما يشتغل alias "@", استخدم المسار النسبي من هذا الملف إلى src/lib
// import { projectsData } from "../../lib/projectsData";

import React from "react";
import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import { projects } from "@/lib/projectsData";

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
              <GlowCard
                intensity={index % 3 === 0 ? "high" : index % 3 === 1 ? "medium" : "low"}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col justify-between relative z-10">
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
                            className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/70 group-hover:text-white"
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
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
