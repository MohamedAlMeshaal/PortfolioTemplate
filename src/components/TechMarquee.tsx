import React, { type ReactNode } from "react";
import {
  Users,
  Settings,
  Target,
  Mic,
  Calendar,
  Lightbulb,
  HandHelping, // أضمن من Handshake
  FileText,
  BarChart,
  BookOpen,
  Cpu,
} from "lucide-react";

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "Leadership & Team Management",        icon: <Users className="w-5 h-5 mr-2" /> },
    { name: "Operations & Logistics Coordination", icon: <Settings className="w-5 h-5 mr-2" /> },
    { name: "Strategic Planning & Execution",      icon: <Target className="w-5 h-5 mr-2" /> },
    { name: "Communication & Public Speaking",     icon: <Mic className="w-5 h-5 mr-2" /> },
    { name: "Event Management & Organization",     icon: <Calendar className="w-5 h-5 mr-2" /> },
    { name: "Decision-Making Under Pressure",      icon: <Lightbulb className="w-5 h-5 mr-2" /> },
  ];

  const techStackRow2 = [
    { name: "Conflict Resolution & Problem Solving", icon: <HandHelping className="w-5 h-5 mr-2" /> },
    { name: "Microsoft Office Suite",                icon: <FileText className="w-5 h-5 mr-2" /> },
    { name: "Tally ERP",                             icon: <BarChart className="w-5 h-5 mr-2" /> },
    { name: "Zoho Books",                            icon: <BookOpen className="w-5 h-5 mr-2" /> },
    { name: "AI Programs & Automation Tools",        icon: <Cpu className="w-5 h-5 mr-2" /> },
  ];

  const renderMarqueeItems = (items: Array<{ name: string; icon: React.ReactNode }>) => {
  return items.map((tech, index) => (
    <span
      key={index}
      className="
        mx-5 inline-flex items-center rounded-full
        bg-white/5 border border-white/20 backdrop-blur
        px-4 py-2 text-white/90 shadow-sm
        whitespace-nowrap !w-auto !max-w-none !overflow-visible
        text-sm md:text-base
      "
    >
      <span className="mr-2 shrink-0">{tech.icon}</span>
      <span className="leading-none">{tech.name}</span>
    </span>
  ));
};

  return (
    <section className="py-20 bg-dark/30 relative max-w-screen-xl mx-auto px-10 overflow-hidden">
      {/* Light effect for tech section */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30
                   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Top row - scrolling right */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>

      {/* Bottom row - scrolling left */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
