
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
      {/* Premium corner light effects */}
      <div className="corner-light-premium"></div>
      <div
        className="corner-light-premium"
        style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}
      ></div>

      {/* Light rays */}
      <div
        className="light-ray-premium opacity-30"
        style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}
      ></div>
      <div
        className="light-ray-premium opacity-20"
        style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}
      ></div>
      <div
        className="light-ray-premium opacity-10"
        style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}
      ></div>

      {/* Central premium glow effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          className="relative !text-3xl md:!text-5xl lg:!text-6xl font-extrabold italic mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="absolute -inset-x-10 -inset-y-6 bg-white/5 rounded-3xl blur-3xl -z-10"></span>
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
<motion.h1
  className="text-4xl md:text-6xl font-extrabold text-white leading-tight space-y-4"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>

  {/* AR: Welcome Heading */}
  <motion.span
    className="block"
    initial="hidden"
    animate="visible"
    custom={0}
    variants={textVariants}
  >
    أهلاً بكم
  </motion.span>

  {/* EN: Welcome Heading */}
  <motion.span
    className="block hero-text-gradient"
    initial="hidden"
    animate="visible"
    custom={1}
    variants={textVariants}
  >
    Welcome
  </motion.span>

  {/* AR: Name */}
  <motion.span
    className="block"
    initial="hidden"
    animate="visible"
    custom={2}
    variants={textVariants}
  >
    أنا محمد سائد المشعل
  </motion.span>

  {/* EN: Name */}
  <motion.span
    className="block hero-text-gradient"
    initial="hidden"
    animate="visible"
    custom={3}
    variants={textVariants}
  >
    I’m Mohamed Saed Al Meshaal
  </motion.span>
</motion.h1>



{/* Description Paragraphs */}
<motion.p
  className="text-xl md:text-2xl font-light italic text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto space-y-2"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>

  {/* AR Description */}
  <span className="block mb-2">
    هذه الصفحة تجمع أفضل ما صنعت: أعمال، مبادرات، تجارب، ومحطات شكّلت رحلتي وصنعت فرقاً حقيقياً.
  </span>

  {/* EN Description */}
  <span className="block">
    This page showcases the work, initiatives, experiences, and milestones that shaped my journey and created real impact.
  </span>

</motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
