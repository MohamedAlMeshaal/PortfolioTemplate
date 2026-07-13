import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 pb-8 md:py-20 relative overflow-hidden">

      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: 0, left: "auto", transform: "rotate(90deg)" }}></div>
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Greeting */}
      <motion.p
        className="relative text-white/40 text-sm md:text-base uppercase tracking-[0.3em] mb-4 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isArabic ? "أهلاً بكم" : "Welcome"}
      </motion.p>

      {/* Name */}
      <motion.h1
        className="relative text-4xl md:text-7xl font-extrabold text-white leading-tight z-10 mb-4"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariants}
      >
        {isArabic ? "أنا محمد المشعل" : "I'm Mohamed Almeshal"}
      </motion.h1>

      {/* Role */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white/60 text-sm max-w-lg text-center leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block"></span>
          {isArabic
            ? "منسق عمليات طموح بإدارة عمليات الشركة بكفاءة عالية وتحويل الأعمال اليدوية إلى تلقائية"
            : "An ambitious Operations Coordinator driving high-efficiency operations and turning manual workflows into automated systems"}
        </span>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-sm md:text-lg font-light text-white/60 leading-relaxed max-w-xl mx-auto mb-8 px-2 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8 }}
      >
        {isArabic
          ? "هذه الصفحة تجمع أفضل ما صنعت من أعمال، مبادرات، وتجارب شكّلت رحلتي وصنعت فرقاً حقيقياً."
          : "A collection of work, initiatives, and experiences that shaped my journey and created meaningful impact."}
      </motion.p>

      {/* Social icons */}
      <motion.div
        className="relative z-10 flex items-center gap-3 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/mohamed-meshaal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/966560578827"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/40 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#work"
        className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.8 }}
      >
        {isArabic ? "عرض المشاريع" : "View Projects"}
        <ArrowRight size={16} />
      </motion.a>

    </section>
  );
};

export default HeroSection;
