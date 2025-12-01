import React from "react";

type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "President – College of Business Administration Society (COBS)",
    organization: "University of Bahrain",
    period: "Nov 2024 – Present",
    location: "Sakhir, Bahrain",
    points: [
      "Leading 100+ active society members across multiple committees.",
      "Planning and executing cultural, awareness, and entertainment events on and off campus.",
      "Managing volunteers, operations, and logistics for high-impact university events.",
      "Developing sponsorships and partnerships with external organizations.",
      "Creating leadership opportunities and enhancing student engagement in the College of Business.",
    ],
  },
  {
    role: "Operations Coordinator – The Leader Bootcamp",
    organization: "The Leader Programs",
    period: "2023 – Present",
    location: "Khobar, Riyadh, Jeddah",
    points: [
      "Coordinating youth leadership bootcamps with 70+ participants per program.",
      "Managing registrations, logistics, venue setup, volunteers, and full-day event operations.",
      "Supporting training delivery and facilitating group challenges and activities.",
      "Leading media coverage, documentation, and parent communication.",
      "Building improved operational flows using WhatsApp Business and Google Sheets.",
    ],
  },
  {
    role: "Project Coordinator",
    organization: "MALAEB",
    period: "Jul 2023 – Oct 2023",
    location: "Bahrain",
    points: [
      "Coordinated football matches and tournaments across multiple venues.",
      "Managed bookings, match schedules, and on-site logistics for teams and referees.",
      "Communicated with venues, partners, and teams to ensure smooth operations.",
    ],
  },
  {
    role: "Salesperson",
    organization: "Metals International W.L.L",
    period: "Jan 2024 – Jul 2025",
    location: "Bahrain",
    points: [
      "Prepared quotations and handled customer follow-ups and sales orders.",
      "Coordinated with purchasing and accounting teams for smooth workflow.",
      "Maintained daily client communication and updated sales documentation.",
    ],
  },
  {
    role: "Purchasing Assistant",
    organization: "Metals International W.L.L",
    period: "Jan 2023 – Dec 2023",
    location: "Bahrain",
    points: [
      "Issued purchase orders and tracked supplier deliveries.",
      "Coordinated with local and international vendors for procurement.",
      "Supported inventory checks and ensured timely material availability.",
    ],
  },
  {
    role: "Accounts Assistant",
    organization: "Metals International W.L.L",
    period: "Jan 2022 – Dec 2022",
    location: "Bahrain",
    points: [
      "Processed invoices, tracked payments, and maintained accounting records.",
      "Assisted in preparing basic financial reports and reconciliations.",
      "Supported daily office tasks and document organization.",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-neutral-900/40 px-6 py-6 md:px-8 md:py-7 shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {exp.role}
                </h3>
                <span className="text-sm text-white/60">{exp.period}</span>
              </div>

              <p className="text-white/70 text-sm md:text-base mb-1">
                {exp.organization}
                {exp.location ? ` • ${exp.location}` : ""}
              </p>

              <ul className="mt-3 space-y-2 text-sm md:text-base text-white/80 list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
