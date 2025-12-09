import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { projectsData } from "@/lib/projectsData";

const ProjectsSection: React.FC = () => {
  // حالياً نستخدم كل المشاريع (COBS + الشخصية) من نفس الأري
  const cobsProjects = projectsData;

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08,
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
        {/* العنوان الرئيسي */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h2>

        {/* الوصف تحت العنوان */}
        <motion.p
          className="text-base text-white/60 mt-4 mb-8 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Selected achievements, volunteering, and projects from COBS and my
          personal work.
        </motion.p>

        {/* كروت المشاريع */}
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
                  {/* العنوان */}
                  <h3 className="text-xl md:text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* الوصف */}
                  {project.description && (
                    <p className="text-white/80 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                  )}

                  {/* نتيجة / Outcome */}
                  {project.outcome && (
                    <p className="text-green-300/90 text-sm font-semibold mb-3">
                      <span className="font-semibold">Outcome:</span>{" "}
                      {project.outcome}
                    </p>
                  )}

                  {/* التاقات */}
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

                  {/* زر View Project مع الرابط */}
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
