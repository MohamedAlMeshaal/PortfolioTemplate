import React from "react";

interface Experience {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    role: "Operations Coordinator",
    company: "The Leader | Youth Leadership Programs",
    date: "July 2025 – Present",
    bullets: [
      "Coordinated large-scale leadership bootcamps for 70+ participants per cohort.",
      "Managed volunteer teams, daily schedules, logistics, and on-ground operations.",
      "Handled registrations, check-in, and communication with participants and guardians.",
    ],
  },

  {
    role: "President",
    company:
      "College of Business Administration Society — University of Bahrain",
    date: "Nov 2024 – Present",
    bullets: [
      "Lead and manage a student society of 100+ active members.",
      "Plan and organize cultural, awareness, and entertainment events on and off campus.",
      "Coordinate partnerships and sponsorships to support society initiatives.",
    ],
  },

  {
    role: "Salesperson",
    company: "METALS INTERNATIONAL W.L.L",
    date: "Jan 2024 – July 2025",
    bullets: [
      "Prepared quotations and sales orders for customers.",
      "Communicated with clients and handled follow-ups.",
      "Coordinated with purchasing and accounts teams for smooth transactions.",
    ],
  },

  {
    role: "Purchasing Assistant",
    company: "METALS INTERNATIONAL W.L.L",
    date: "Jan 2023 – Dec 2023",
    bullets: [
      "Prepared purchase orders and tracked supplier deliveries.",
      "Maintained vendor records and coordinated with suppliers.",
      "Supported inventory checks and ensured timely procurement.",
    ],
  },

  {
    role: "Accounts Assistant",
    company: "METALS INTERNATIONAL W.L.L",
    date: "Jan 2022 – Dec 2022",
    bullets: [
      "Processed invoices, tracked payments, and maintained accurate records.",
      "Assisted with preparing financial reports and reconciling basic accounts.",
      "Supported daily office tasks and organized accounting documents.",
    ],
  },

  {
    role: "Project Coordinator",
    company: "MALAEB",
    date: "July 2023 – Oct 2023",
    bullets: [
      "Organized football matches and tournaments at multiple venues across Bahrain.",
      "Managed bookings, schedules, and on-site logistics for teams and officials.",
      "Coordinated with venues, partners, and teams to ensure smooth event operations.",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-4 py-20 text-white space-y-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Professional Experience
      </h2>

      <div className="relative border-l border-white/20 pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-4 top-1.5 w-3 h-3 bg-white rounded-full shadow-lg" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold">
                {exp.role} —{" "}
                <span className="text-white/70">{exp.company}</span>
              </h3>
              <p className="text-white/50 text-sm mt-1 md:mt-0">{exp.date}</p>
            </div>

            <ul className="list-disc pl-5 mt-3 space-y-1 text-white/80">
              {exp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
