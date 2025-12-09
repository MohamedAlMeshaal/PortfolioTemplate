import React from "react";
import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    id: "unido-volunteers-conference",
    title: "Volunteers Convention & Conference Management Training",
    issuer: "UNIDO ITPO Bahrain & International Center for Entrepreneurship & Innovation (ICE)",
    date: "May 6, 2024 – Manama, Bahrain",
    description:
      "Participated in and successfully completed an intensive training on volunteers convention and conference management, focusing on organizing large-scale events professionally.",
    image: "/Cert5.jpeg.jpeg",
  },
  {
    id: "sustainable-islamic-business-conference",
    title:
      "4th International Conference on Sustainable Islamic Business and Finance",
    issuer:
      "College of Business Administration – University of Bahrain",
    date: "November 27, 2024",
    description:
      "Recognized for contributing to the organization of an international conference on sustainable Islamic business and finance alongside the College of Business Administration.",
    image: "/Cert4.jpeg.jpeg",
  },
  {
    id: "injaz-career-speakers-series",
    title: "Career Speakers Series",
    issuer: "INJAZ Bahrain – University of Bahrain",
    date: "Academic Year 2024–2025",
    description:
      "Successfully completed the Career Speakers Series program, exploring real-world career paths and gaining insights from professional speakers.",
    image: "/Cert3.jpeg.jpeg",
  },
  {
    id: "injaz-innovation-camp",
    title: "Innovation Camp Program",
    issuer: "INJAZ Bahrain – University of Bahrain",
    date: "Academic Year 2024–2025",
    description:
      "Completed the Innovation Camp Program, working on creative problem-solving, teamwork, and entrepreneurial thinking in intensive workshop-style sessions.",
    image: "/Cert2.jpeg.jpeg",
  },
  {
    id: "maryland-corporate-entrepreneurs",
    title: "Building the Business Model for Corporate Entrepreneurs",
    issuer: "University of Maryland – Coursera",
    date: "April 19, 2024",
    description:
      "Online course focused on how to design, test, and refine business models inside existing organizations, with a strong emphasis on corporate entrepreneurship.",
    image: "/Cert1.jpeg.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const BlogSection: React.FC = () => {
  return (
    <section
      id="certificates"
      className="relative py-20 px-4 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Certificates & Programs
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-white/70 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Selected certificates, volunteering experiences, and training programs
          that shaped my academic and professional journey.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="h-full"
            >
              <GlowCard
                intensity={index % 2 === 0 ? "high" : "medium"}
                className="group h-full"
              >
                <div className="p-5 md:p-6 flex flex-col gap-4 h-full">
                  {/* صورة الشهادة */}
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 aspect-video">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* النص */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-white/70">{cert.issuer}</p>
                    <p className="text-xs text-white/50">{cert.date}</p>
                  </div>

                  <p className="text-sm text-white/80 mt-1">
                    {cert.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
