import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

interface Project {
  slug: string;
  title: string;
  date?: string;
  description: string;
  role?: string;
  outcome?: string;
  tags: string[];
  images?: string[];
  videos?: string;
}

const ProjectsSection: React.FC = () => {
  const projects = projectsData as Project[];

  return (
    <section
      id="projects"
      className="relative py-20 px-4 md:px-8 lg:px-12 bg-dark min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        {/* الوصف تحت العنوان */}
        <motion.p
          className="text-base md:text-lg text-white/70 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Selected achievements, volunteering, and projects from COBS and my
          personal work.
        </motion.p>

        {/* بطاقات المشاريع */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const date = project.date2 ?? project.date ?? "";
            const role = project.role2 ?? project.role ?? "";
            const outcome = project.outcome2 ?? project.outcome ?? "";

            return (
              <motion.div
                key={project.slug ?? index}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {date && (
                  <p className="text-sm text-white/60 mb-2">
                    <span className="font-semibold">Date:</span> {date}
                  </p>
                )}

                {role && (
                  <p className="text-sm text-white/60 mb-2">
                    <span className="font-semibold">Role:</span> {role}
                  </p>
                )}

                <p className="text-sm md:text-base text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {outcome && (
                  <p className="text-xs md:text-sm text-emerald-300/90 mb-4">
                    <span className="font-semibold">Outcome:</span> {outcome}
                  </p>
                )}

                {/* التاغز */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
