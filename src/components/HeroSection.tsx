
<motion.h1 
  className="hero-heading relative text-4xl md:text-6xl font-extrabold italic mb-6 leading-tight"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <span className="absolute -inset-x-10 -inset-y-6 bg-white/5 rounded-3xl blur-3xl -z-10"></span>
  <motion.span 
    className="inline-block"
    initial="hidden"
    animate="visible"
    custom={0}
    variants={textVariants}
  >
    Hello, I'm Mohamed Saed Meshaal —
  </motion.span>{' '}
  <motion.span 
    className="inline-block hero-text-gradient"
    initial="hidden"
    animate="visible"
    custom={1}
    variants={textVariants}
  >
    Student leader & operations coordinator — building initiatives, leading teams, and creating impact.
  </motion.span>
</motion.h1>
