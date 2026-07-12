import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import { projectsData } from "@/lib/projectsData";

const ProjectsSection: React.FC = () => {
  const cobsProjects = projectsData;

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.03,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-4 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
<motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Volunteering & Leadership
        </motion.h2>

        <motion.p
          className="text-base text-white/60 mt-4 mb-8 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Community work, events, and leadership activities throughout my journey.
        </motion.p>

        <motion.div
          className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Glow effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-2 block">
                Highlight Achievement
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                President
              </h3>
              <p className="text-white/60 text-base mt-1">
                College of Business Administration Society · University of Bahrain
              </p>
              <ul className="mt-4 space-y-1 text-white/70 text-sm list-disc pl-5">
                <li>Led and managed a student society of 100+ active members.</li>
                <li>Planned and organized cultural, awareness, and entertainment events on and off campus.</li>
                <li>Coordinated partnerships and sponsorships to support society initiatives.</li>
              </ul>
            </div>
            <div className="text-right shrink-0">
              <span className="text-white/50 text-sm">Nov 2024 – Dec 2025</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cobsProjects.map((project: any, index: number) => (
            <motion.div
              key={project.slug ?? index}
              variants={cardVariants}
              className="h-full"
            >
              <GlowCard
                intensity={index % 3 === 0 ? "high" : index % 2 === 0 ? "medium" : "low"}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="text-white/80 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                  )}

                  {project.outcome && (
                    <p className="text-green-300/90 text-sm font-semibold mb-3">
                      <span className="font-semibold">Outcome:</span>{" "}
                      {project.outcome}
                    </p>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="text-[11px] px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {(project.slug || project.url) && (
                    <div className="mt-auto pt-2">
                      <a
                        href={project.url || `/projects/${project.slug}`}
                        className="inline-flex items-center text-sm text-white/80 group-hover:text-white transition-colors"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;