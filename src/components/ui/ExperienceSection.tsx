import React from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Operations Coordinator",
    company: "The Leader – Youth Leadership Bootcamps",
    location: "Khobar, Riyadh, Jeddah",
    period: "2023 – Present",
    type: "Part-time / Project-based",
    bullets: [
      "Coordinated large-scale leadership bootcamps for children and youth across multiple cities.",
      "Handled end-to-end logistics: venues, registrations, buses, catering, volunteers, and materials.",
      "Managed on-ground operations during the program, ensuring safety, timing, and smooth flow of activities.",
      "Led communication with parents and partners, and solved last-minute operational issues under pressure.",
    ],
  },
  {
    id: 2,
    role: "President",
    company: "College of Business Society (COBS), University of Bahrain",
    location: "Sakhir, Bahrain",
    period: "2023 – Present",
    type: "Student Leadership Role",
    bullets: [
      "Elected student leader representing College of Business students at the University of Bahrain.",
      "Planned and executed large events such as COBS Carnival, sports tournaments, and onboarding programs.",
      "Led a team of 80+ active members, delegated responsibilities, and created systems for smooth operations.",
      "Collaborated with university administration and external partners to secure approvals, sponsorships, and support.",
    ],
  },
  {
    id: 3,
    role: "Accounts Assistant",
    company: "METALS INTERNATIONAL W.L.L",
    location: "Bahrain",
    period: "Jan 2023 – Dec 2023",
    type: "Full-time",
    bullets: [
      "Supported daily accounting operations, invoice handling, and data entry on ERP/Excel systems.",
      "Coordinated with suppliers and customers regarding payments, quotations, and documentation.",
      "Assisted in preparing basic financial reports and organizing supporting documents for auditing.",
    ],
  },
  {
    id: 4,
    role: "Salesperson & Purchasing Assistant",
    company: "Family Business – Retail & Trading",
    location: "Bahrain",
    period: "2019 – 2022",
    type: "Part-time",
    bullets: [
      "Handled front-line customer service and sales in a fast-paced retail environment.",
      "Assisted with purchasing, stock control, and coordination with suppliers.",
      "Learned negotiation, basic pricing strategies, and dealing with different customer types.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto relative">
        {/* العنوان */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.p
          className="mt-2 text-sm md:text-base text-white/60 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          A mix of leadership, operations, and business roles that shaped how I
          think, work, and lead teams.
        </motion.p>

        {/* الكروت */}
        <div className="mt-10 space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-white/[0.02] to-black/80 p-5 md:p-6 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
            >
              {/* العنوان + المكان + الفترة */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-white/70">
                    {exp.company} • {exp.location}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs md:text-sm text-white/60">
                    {exp.period}
                  </p>
                  {exp.type && (
                    <span className="inline-flex mt-1 px-3 py-1 rounded-full border border-white/10 text-[11px] uppercase tracking-wide text-white/60">
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>

              {/* التفاصيل */}
              <ul className="mt-4 space-y-2 text-sm md:text-[0.95rem] text-white/80 leading-relaxed">
                {exp.bullets.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
