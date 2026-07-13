import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { useLanguage } from "../context/LanguageContext";

const ProjectsSection: React.FC = () => {
  const { isArabic } = useLanguage();
  const cobsProjects = projectsData;

  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-7xl mx-auto">

        {/* Section title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {isArabic ? "التطوع والقيادة" : "Volunteering & Leadership"}
        </motion.h2>

        <motion.p
          className="text-base text-white/60 mt-4 mb-10 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {isArabic
            ? "أعمال مجتمعية وفعاليات وأنشطة قيادية على مدار رحلتي."
            : "Community work, events, and leadership activities throughout my journey."}
        </motion.p>

        {/* President highlight banner */}
        <motion.div
          className="relative rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 mb-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-2 block">
                {isArabic ? "إنجاز بارز" : "Highlight Achievement"}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {isArabic ? "رئيس الجمعية" : "President"}
              </h3>
              <p className="text-white/60 text-base mt-1">
                {isArabic ? "جمعية كلية إدارة الأعمال · جامعة البحرين" : "College of Business Administration Society · University of Bahrain"}
              </p>
              <ul className="mt-4 space-y-1 text-white/70 text-sm list-disc pl-5">
                {isArabic ? (
                  <>
                    <li>قدت وأدرت جمعية طلابية تضم أكثر من 100 عضو نشط.</li>
                    <li>خططت ونظّمت فعاليات ثقافية وتوعوية وترفيهية داخل الحرم الجامعي وخارجه.</li>
                    <li>نسّقت الشراكات والرعايات لدعم مبادرات الجمعية.</li>
                  </>
                ) : (
                  <>
                    <li>Led and managed a student society of 100+ active members.</li>
                    <li>Planned and organized cultural, awareness, and entertainment events on and off campus.</li>
                    <li>Coordinated partnerships and sponsorships to support society initiatives.</li>
                  </>
                )}
              </ul>
            </div>
            <div className="text-right shrink-0">
              <span className="text-white/50 text-sm">
                {isArabic ? "نوفمبر 2024 – ديسمبر 2025" : "Nov 2024 – Dec 2025"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* New card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cobsProjects.map((project: any, index: number) => {
            const title = isArabic && project.title_ar ? project.title_ar : project.title;
            const description = isArabic && project.description_ar ? project.description_ar : project.description;
            const outcome = isArabic && project.outcome_ar ? project.outcome_ar : project.outcome;
            const tags = isArabic && project.tags_ar ? project.tags_ar : project.tags;
            const thumbnail = project.images && project.images.length > 0 ? project.images[0] : null;

            return (
              <motion.div
                key={project.slug ?? index}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -3 }}
              >
                {/* Left accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-l-2xl" />

                <div className="flex gap-4 p-6">
                  {/* Main content */}
                  <div className="flex-1 min-w-0">

                    {/* Top row: date badge */}
                    {project.date && (
                      <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 mb-3 tracking-wide">
                        {project.date}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors leading-snug">
                      {title}
                    </h3>

                    {/* Role */}
                    {project.role && (
                      <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">
                        {isArabic && project.role_ar ? project.role_ar : project.role}
                      </p>
                    )}

                    {/* Description */}
                    {description && (
                      <p className="text-white/65 text-sm leading-relaxed mb-4 line-clamp-3">
                        {description}
                      </p>
                    )}

                    {/* Outcome */}
                    {outcome && (
                      <div className="rounded-xl bg-white/[0.04] border border-white/8 px-4 py-3 mb-4">
                        <p className="text-green-300/80 text-xs leading-relaxed">
                          <span className="font-semibold text-green-300/90">
                            {isArabic ? "النتيجة: " : "Outcome: "}
                          </span>
                          {outcome}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.slice(0, 4).map((tag: string, i: number) => (
                          <span
                            key={i}
                            className="text-[10px] px-2.5 py-1 bg-black/40 border border-white/8 rounded-full text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {tags.length > 4 && (
                          <span className="text-[10px] px-2.5 py-1 bg-black/40 border border-white/8 rounded-full text-white/30">
                            +{tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* View project link */}
                    {(project.slug || project.url) && (
                      <a
                        href={project.url || `/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group/link"
                      >
                        {isArabic ? (
                          <>
                            <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover/link:-translate-x-0.5 transition-transform" />
                            <span>عرض المشروع</span>
                          </>
                        ) : (
                          <>
                            <span>View Project</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </a>
                    )}
                  </div>

                  {/* Thumbnail image */}
                  {thumbnail && (
                    <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-white/10 self-start mt-1">
                      <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
