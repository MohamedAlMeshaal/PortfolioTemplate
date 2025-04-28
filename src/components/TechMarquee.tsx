
import React from 'react';
import { 
  Github, React as ReactIcon, Code, Database, 
  Server, Docker, Cpu, Cloud, TerminalSquare, 
  PenTool, Layers, Verified, Award, LineChart
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "React", icon: <ReactIcon className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Code className="w-5 h-5 mr-2" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5 mr-2" /> },
    { name: "TailwindCSS", icon: <PenTool className="w-5 h-5 mr-2" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5 mr-2" /> },
    { name: "Docker", icon: <Docker className="w-5 h-5 mr-2" /> },
    { name: "GraphQL", icon: <Cpu className="w-5 h-5 mr-2" /> }
  ];
  
  const techStackRow2 = [
    { name: "Java", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Python", icon: <TerminalSquare className="w-5 h-5 mr-2" /> },
    { name: "TypeScript", icon: <Code className="w-5 h-5 mr-2" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Redis", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Kubernetes", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "GitHub Actions", icon: <Github className="w-5 h-5 mr-2" /> }
  ];
  
  const renderMarqueeItems = (items: Array<{ name: string, icon: React.ReactNode }>) => {
    // Duplicate items to create seamless loop
    const duplicatedItems = [...items, ...items];
    
    return duplicatedItems.map((tech, index) => (
      <span key={index} className="tech-badge-premium mx-3 flex items-center">
        {tech.icon}
        {tech.name}
      </span>
    ));
  };
  
  return (
    <section className="py-20 overflow-hidden bg-dark-100/30 relative">
      {/* Light effect for tech section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      {/* Top row - scrolling right */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll-right py-5 flex whitespace-nowrap">
          {renderMarqueeItems(techStackRow1)}
        </div>
        <div className="absolute top-0 animate-scroll-right py-5 flex whitespace-nowrap" style={{ left: '100%' }}>
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll-left py-5 flex whitespace-nowrap">
          {renderMarqueeItems(techStackRow2)}
        </div>
        <div className="absolute top-0 animate-scroll-left py-5 flex whitespace-nowrap" style={{ left: '100%' }}>
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
