import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

type Certificate = {
  id: string;
  title: string;
  title_ar: string;
  issuer: string;
  issuer_ar: string;
  date: string;
  date_ar: string;
  description: string;
  description_ar: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    id: "injaz-innovation-camp",
    title: "Innovation Camp Program",
    title_ar: "برنامج مخيم الابتكار",
    issuer: "INJAZ Bahrain – University of Bahrain",
    issuer_ar: "إنجاز البحرين – جامعة البحرين",
    date: "Academic Year 2024–2025",
    date_ar: "العام الدراسي 2024–2025",
    description: "Completed the Innovation Camp Program, working on creative problem-solving, teamwork, and entrepreneurial thinking in intensive workshop-style sessions.",
    description_ar: "أتممت برنامج مخيم الابتكار، وعملت على حل المشكلات الإبداعية والعمل الجماعي والتفكير الريادي في جلسات ورش عمل مكثفة.",
    image: "/Cert2.jpeg.jpeg",
  },
  {
    id: "maryland-corporate-entrepreneurs",
    title: "Building the Business Model for Corporate Entrepreneurs",
    title_ar: "بناء نموذج الأعمال لرواد الأعمال المؤسسيين",
    issuer: "University of Maryland – Coursera",
    issuer_ar: "جامعة ماريلاند – كورسيرا",
    date: "April 19, 2024",
    date_ar: "19 أبريل 2024",
    description: "Online course focused on how to design, test, and refine business models inside existing organizations, with a strong emphasis on corporate entrepreneurship.",
    description_ar: "دورة إلكترونية تركز على كيفية تصميم واختبار وتحسين نماذج الأعمال داخل المنظمات القائمة، مع التركيز على ريادة الأعمال المؤسسية.",
    image: "/Cert1.jpeg.jpeg",
  },
];

const BlogSection: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="certificates" className="relative py-20 px-4 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {isArabic ? "الشهادات والبرامج" : "Certificates & Programs"}
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-white/60 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isArabic
            ? "شهادات شكّلت مسيرتي — وإنجازات أكبر لا تزال في الطريق."
            : "Certifications that shaped my journey — with bigger achievements still ahead."}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -3 }}
            >
              {/* Left accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-l-2xl" />

              <div className="flex gap-4 p-6">
                {/* Main content */}
                <div className="flex-1 min-w-0">

                  {/* Date badge */}
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 mb-3 tracking-wide">
                    {isArabic ? cert.date_ar : cert.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors leading-snug">
                    {isArabic ? cert.title_ar : cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">
                    {isArabic ? cert.issuer_ar : cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-white/65 text-sm leading-relaxed line-clamp-3">
                    {isArabic ? cert.description_ar : cert.description}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-white/10 self-start mt-1">
                  <img
                    src={cert.image}
                    alt={isArabic ? cert.title_ar : cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
