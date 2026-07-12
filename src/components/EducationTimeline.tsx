import React from "react";
import { motion } from "framer-motion";

type EducationItem = {
  period: string;
  title: string;
  institution: string;
  location?: string;
  details: string;
};

const education: EducationItem[] = [
  {
    period: "2021 – 2025",
    title:
      "B.Sc. in Science of Entrepreneurship & Marketing",
    institution: "University of Bahrain",
    location: "Sakhir, Bahrain",
    details:
      "Focused on entrepreneurship, innovation, marketing, and business development, with strong involvement in academic and extracurricular activities.",
  },
];

const EducationTimeline: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-4 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="max-w-5xl mx-auto">
        {/* العنوان الرئيسي */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Education
        </motion.h2>

        <motion.p
          className="text-base text-white/60 mt-4 mb-10 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Academic background and formal studies that shaped my foundation in
          business and entrepreneurship.
        </motion.p>

        {/* التايم لاين */}
        <div className="space-y-8 border-l border-white/10 pl-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* النقطة */}
              <span className="absolute -left-3.5 top-1 w-3 h-3 rounded-full bg-white shadow-lg" />

              <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-1">
                {item.period}
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-white/70 mb-1">
                {item.institution}
                {item.location && (
                  <span className="text-white/40"> • {item.location}</span>
                )}
              </p>

              <p className="text-sm text-white/60 mb-3">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
