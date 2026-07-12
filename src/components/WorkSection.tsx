import React from "react";
import { motion } from "framer-motion";
import { worksData } from "@/lib/worksData";

const works = worksData;

const WorkSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Work That Matters
        </motion.h2>

        <motion.p
          className="text-base text-white/60 mt-4 mb-16 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Digital systems and field operations I built and led from the ground up.
        </motion.p>

        {/* Cards */}
        <div className="space-y-6">
          {works.map((work, index) => (
            <motion.div
              key={work.slug}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 p-8 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              {/* Background number */}
              <span className="absolute -right-4 -top-6 text-[120px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                {/* Left side */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-widest text-white/30">
                      {work.type}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {work.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{work.subtitle}</p>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    {work.description}
                  </p>

                  <div className="mt-6">
                    <a
                      href={`/work/${work.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                      <span>View Project</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                {/* Right side — tags */}
                <div className="flex flex-wrap md:flex-col gap-2 md:items-end shrink-0">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
