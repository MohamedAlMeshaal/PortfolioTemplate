import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">

      {/* Background Lighting */}
      <div className="corner-light-premium"></div>
      <div
        className="corner-light-premium"
        style={{ right: 0, left: "auto", transform: "rotate(90deg)" }}
      ></div>

      {/* Central Glow */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* MAIN TEXT */}
      <motion.h1
        className="relative text-3xl md:text-6xl font-extrabold text-white leading-tight space-y-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* AR Welcome */}
        <motion.span
          className="block"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          أهلاً بكم
        </motion.span>

        {/* AR Name */}
        <motion.span
          className="block hero-text-gradient"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          أنا محمد سائد المشعل
        </motion.span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        className="text-xl md:text-2xl font-light italic text-white/80 leading-relaxed max-w-3xl mx-auto space-y-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* AR Description */}
        <span className="block mb-2">
          هذه الصفحة تجمع أفضل ما صنعت: أعمال، مبادرات، تجارب، ومحطات شكّلت رحلتي وصنعت فرقاً حقيقياً.
        </span>

        {/* EN Description */}
        <span className="block">
          This page brings together the work, initiatives, and experiences that shaped my journey and created meaningful impact.
        </span>
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        className="cta-button-premium text-lg px-6 py-3 mt-10 inline-flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        استعراض المشاريع <ArrowRight size={20} />
      </motion.a>

    </section>
  );
};

export default HeroSection;
