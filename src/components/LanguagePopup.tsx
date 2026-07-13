import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LanguagePopup = () => {
  const { setLanguage } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("portfolio-language");
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (lang: "en" | "ar") => {
    setLanguage(lang);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="text-4xl mb-4">🌐</div>
            <h2 className="text-white text-xl font-semibold mb-1">
              Choose Your Language
            </h2>
            <p className="text-zinc-400 text-base mb-6" dir="rtl">
              اختر لغتك المفضلة
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleSelect("en")}
                className="flex-1 py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                English
              </button>
              <button
                onClick={() => handleSelect("ar")}
                className="flex-1 py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                العربية
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguagePopup;
