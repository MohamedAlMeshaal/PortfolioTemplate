import React from "react";
import { motion } from "framer-motion";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
};

const certifications: Certificate[] = [
  {
    title: "Google Project Management Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    image: "/cert-google-pm.jpg",
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "Meta Blueprint",
    date: "2023",
    image: "/cert-digital-marketing.jpg",
  },
  {
    title: "Entrepreneurship & Innovation Program",
    issuer: "University of Bahrain",
    date: "2023",
    image: "/cert-entrepreneurship.jpg",
  },
  {
    title: "Leadership & Youth Development",
    issuer: "The Leader Program",
    date: "2022",
    image: "/cert-leadership.jpg",
  },
];

const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-20 px-4 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-white/60 mt-4 mb-10 text-base tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          A collection of professional certifications in business, leadership,
          and digital skills.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="bg-neutral-900/40 border border-white/10 rounded-xl overflow-hidden hover:bg-neutral-900/60 transition-all flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full aspect-video object-cover"
                />
              )}

              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-white/70 mt-1">{cert.issuer}</p>
                <p className="text-white/40 text-sm mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
