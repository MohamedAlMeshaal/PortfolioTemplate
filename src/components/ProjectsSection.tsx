
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url: string;
}

const ProjectsSection: React.FC = () => {
 const projects: Project[] = [
  {
    id: 1,
    title: "Welcome Back Event – Walhana Alaikom",
    description:
      "Ramadan-themed welcome event for semester 2024/2. Re-energized students and celebrated community spirit. Managed 70+ volunteers and 500+ attendees; secured sponsorship and media coverage; organized in less than a week.",
    techStack: [
      "Event Design",
      "Leadership",
      "Operations",
      "Volunteers",
      "Sponsorship",
      "Media Coverage",
    ],
    url: "#",
  },
  {
    id: 2,
    title: "COBS Ramadan Football Tournament",
    description:
      "Student football tournament uniting diverse teams with excitement and sportsmanship. 150+ participants, large audience turnout, external sponsorship, media coverage; managed 30+ volunteers and overcame logistics challenges.",
    techStack: [
      "Sports Event",
      "Team Management",
      "Leadership",
      "Sponsorship",
      "Media Coverage",
      "Volunteers",
    ],
    url: "#",
  },
  {
    id: 3,
    title: "COBS Carnival",
    description:
      "Vibrant handmade carnival with creative booth games, festive decorations, popcorn, and ice cream. 80+ volunteers, 1,000+ attendees, major sponsorships, wide media coverage; high event impact.",
    techStack: [
      "Carnival Design",
      "Operations",
      "Volunteers",
      "Sponsorship",
      "Media Coverage",
    ],
    url: "#",
  },
  {
    id: 4,
    title: "Guests of COBS – A Talk with an Inspiring Figure",
    description:
      "Open talk with Mr. Suheil Al-Qusaibi on challenges and lessons from his entrepreneurial journey. High student turnout; boosted interest in inspirational sessions and career dialogues.",
    techStack: [
      "Leadership Talk",
      "Organization",
      "Public Speaking",
      "Event Planning",
    ],
    url: "#",
  },
  {
    id: 5,
    title: "COBS Carnival 2",
    description:
      "Second edition: handmade games, popcorn, cotton candy, face painting, and music. Managed 100+ volunteers; 2,000+ attendees; major sponsorships; wide media coverage; boosted society recognition and membership interest.",
    techStack: [
      "Event Design",
      "Leadership",
      "Operations",
      "Volunteers",
      "Sponsorship",
      "Media Coverage",
    ],
    url: "#",
  },
];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
       <p className="text-base text-white/60 mt-4 mb-6 tracking-wide">
  COBS Flagship Events
</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Premium highlight effect on hover */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-500"></div>
                  
                  <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white group-hover:text-white/90 transition-colors relative mt-auto"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
