import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { worksData } from "@/lib/worksData";

const WorkSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const labels = {
    sectionTitle: isArabic ? "مشاريع ذات قيمة" : "Work That Matters",
    sectionSubtitle: isArabic
      ? "أنظمة رقمية وعمليات ميدانية بنيتها وقدتها من الصفر."
      : "Digital systems and field operations I built and led from the ground up.",
    viewProject: isArabic ? "عرض المشروع" : "View Project",
    digitalBuild: isArabic ? "بناء رقمي" : "Digital Build",
    fieldOps: isArabic ? "عمليات ميدانية" : "Field Operations",
  };

  const works = [
    {
      ...worksData[0],
      title_ar: "إتقان",
      subtitle_ar: "نظام إدارة العمليات الداخلية",
      description_ar: "تطبيق ويب تقدمي عربي كامل مبني من الصفر لإدارة عمليات البرامج التدريبية. يغطي مراحل ما قبل وأثناء وبعد البرنامج، تذكيرات تيليغرام، تقارير تنفيذية بالذكاء الاصطناعي، تصدير PDF لعمليات الفنادق، والإدارة المالية للموردين.",
    },
    {
      ...worksData[1],
      title_ar: "تطبيق ذا ليدر",
      subtitle_ar: "منصة إدارة المخيم الصيفي",
      description_ar: "منصة تدير العمليات الكاملة لمخيم ذا ليدر الصيفي — قوائم الطلاب وتتبع الحضور والتسجيل وإصدار الشهادات وتقارير واتساب وإدارة الجدول الزمني.",
    },
    {
      ...worksData[2],
      title_ar: "نظام تتبع المنتجات",
      subtitle_ar: "إدارة المخزون والمنتجات",
      description_ar: "نظام مخزون منتجات يعمل على المتصفح مبني للاستخدام الداخلي، يتضمن أدوار المدير والموظف وتتبع المنتجات وإدارة المخزون في الوقت الفعلي.",
    },
    {
      ...worksData[3],
      title_ar: "تنظيم أكثر من 20 برنامج",
      subtitle_ar: "مسؤولية تشغيلية كاملة",
      description_ar: "خططت ونسّقت ونفّذت أكثر من 20 برنامجاً من البداية للنهاية — تغطي الخدمات اللوجستية وإدارة المتطوعين والجدولة والعمليات الميدانية والرعايات والتقارير.",
    },
  ];

  return (
    <section id="work" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {labels.sectionTitle}
        </motion.h2>

        <motion.p
          className="text-base text-white/60 mt-4 mb-16 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {labels.sectionSubtitle}
        </motion.p>

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
              <span className="absolute -right-4 -top-6 text-[120px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-widest text-white/30">
                      {work.type === "Digital Build" ? labels.digitalBuild : labels.fieldOps}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {isArabic ? work.title_ar : work.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {isArabic ? work.subtitle_ar : work.subtitle}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    {isArabic ? work.description_ar : work.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href={`/work/${work.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                      <span>{labels.viewProject}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-col gap-2 md:items-end shrink-0">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50">
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
