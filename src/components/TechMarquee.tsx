import React from "react";
import {
  Users, Settings, Target, Mic, Calendar, Lightbulb, HandHelping, FileText, BarChart, BookOpen, Cpu,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const TechMarquee: React.FC = () => {
  const { isArabic } = useLanguage();

  const techStackRow1 = [
    { en: "Leadership & Team Management",        ar: "القيادة وإدارة الفرق",           icon: <Users className="w-5 h-5" /> },
    { en: "Operations & Logistics Coordination", ar: "تنسيق العمليات والخدمات اللوجستية", icon: <Settings className="w-5 h-5" /> },
    { en: "Strategic Planning & Execution",      ar: "التخطيط الاستراتيجي والتنفيذ",    icon: <Target className="w-5 h-5" /> },
    { en: "Communication & Public Speaking",     ar: "التواصل والخطابة العامة",          icon: <Mic className="w-5 h-5" /> },
    { en: "Event Management & Organization",     ar: "إدارة الفعاليات وتنظيمها",         icon: <Calendar className="w-5 h-5" /> },
    { en: "Decision-Making Under Pressure",      ar: "اتخاذ القرار تحت الضغط",           icon: <Lightbulb className="w-5 h-5" /> },
  ];

  const techStackRow2 = [
    { en: "Conflict Resolution & Problem Solving", ar: "حل النزاعات وإيجاد الحلول",   icon: <HandHelping className="w-5 h-5" /> },
    { en: "Microsoft Office Suite",                ar: "حزمة مايكروسوفت أوفيس",        icon: <FileText className="w-5 h-5" /> },
    { en: "Tally ERP",                             ar: "تالي ERP",                      icon: <BarChart className="w-5 h-5" /> },
    { en: "Zoho Books",                            ar: "زوهو بوكس",                     icon: <BookOpen className="w-5 h-5" /> },
    { en: "AI Programs & Automation Tools",        ar: "برامج الذكاء الاصطناعي والأتمتة", icon: <Cpu className="w-5 h-5" /> },
  ];

  const renderMarqueeItems = (items: Array<{ en: string; ar: string; icon: React.ReactNode }>) => {
    return items.map((tech, index) => (
      <span
        key={index}
        className="mx-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/20 backdrop-blur px-4 py-2 text-white/90 shadow-sm whitespace-nowrap text-sm md:text-base"
      >
        <span className="shrink-0">{tech.icon}</span>
        <span className="leading-none">{isArabic ? tech.ar : tech.en}</span>
      </span>
    ));
  };

  return (
    <section className="py-20 bg-dark/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-10 text-center tracking-wide">
        {isArabic ? "المهارات" : "Skills"}
      </h2>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="relative overflow-hidden">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
