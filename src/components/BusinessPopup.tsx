import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const BusinessPopup = () => {
  const { isArabic } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show once per session
    const shown = sessionStorage.getItem("business-popup-shown");
    if (shown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShown) {
            setTimeout(() => {
              setVisible(true);
              setHasShown(true);
              sessionStorage.setItem("business-popup-shown", "true");
            }, 600);
          }
        });
      },
      { threshold: 0.3 }
    );

    const target = document.getElementById("work");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [hasShown]);

  const handleContact = () => {
    setVisible(false);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleDismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={handleDismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Card */}
          <motion.div
            className="relative z-10 max-w-lg w-full bg-neutral-900 border border-white/15 rounded-2xl p-8 shadow-2xl overflow-hidden"
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            {/* Glow top */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Content */}
            <div className={`relative z-10 ${isArabic ? "text-right" : "text-left"}`}>

              {/* Eyebrow */}
              <p className="text-xs uppercase tracking-widest text-white/30 mb-4">
                {isArabic ? "لحظة قبل أن تكمل" : "Before you scroll further"}
              </p>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
                {isArabic
                  ? <>إذا كنت تبحث عن شخص<br />يُنجز الأعمال فعلاً —<br /><span className="text-white/50">أنت في المكان الصح.</span></>
                  : <>If you need someone who<br />actually gets things done —<br /><span className="text-white/50">you're already in the right place.</span></>
                }
              </h2>

              {/* Body */}
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {isArabic
                  ? "أنسّق العمليات، أبني الأنظمة الداخلية، وأقود التنفيذ من الصفر. إذا كان عندك مشروع أو فرصة تستاهل — خلنا نتكلم."
                  : "I coordinate operations, build internal systems, and lead execution from the ground up. If you have a project or opportunity worth pursuing — let's talk."}
              </p>

              {/* Buttons */}
              <div className={`flex gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <button
                  onClick={handleContact}
                  className="flex-1 py-3 px-5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  {isArabic ? "تواصل معي" : "Get In Touch"}
                </button>
                <button
                  onClick={handleDismiss}
                  className="flex-1 py-3 px-5 rounded-xl border border-white/10 bg-white/5 text-white/60 font-medium text-sm hover:bg-white/10 hover:text-white transition-colors"
                >
                  {isArabic ? "أكمل التصفح" : "Continue Exploring"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessPopup;
