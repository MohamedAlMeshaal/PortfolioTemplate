import React from "react";

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Operations Coordinator",
    company: "The Leader – Youth Leadership Programs",
    location: "Khobar, Riyadh, Jeddah (KSA)",
    period: "2023 – Present",
    bullets: [
      "Coordinated large-scale leadership bootcamps for 70+ participants per cohort.",
      "Managed volunteer teams, daily schedules, logistics, and on-ground operations.",
      "Collaborated with parents, schools, and partners to ensure a smooth program experience.",
      "Handled registrations, check-in, and communication with participants and guardians."
    ]
  },
  {
    role: "President – College of Business Society (COBS)",
    company: "University of Bahrain",
    location: "Sakhir, Bahrain",
    period: "2023 – Present",
    bullets: [
      "Led the College of Business Society representing thousands of students.",
      "Designed and executed events such as Carnival COBS, Ramadan tournaments, and workshops.",
      "Built and managed cross-functional student teams for marketing, logistics, and sponsorship.",
      "Worked closely with Dean of Student Affairs and faculty on approvals and budgeting."
    ]
  },
  {
    role: "Administrative, Sales & Operations Assistant",
    company: "Family Business – Trading & Services",
    location: "Manama, Bahrain",
    period: "2021 – 2023",
    bullets: [
      "Supported day-to-day office operations, documentation, and customer follow-up.",
      "Assisted in sales, order processing, and basic purchasing coordination.",
      "Maintained records, handled phone/email inquiries, and ensured smooth workflows."
    ]
  },
  {
    role: "Accounts Assistant",
    company: "Metals International W.L.L",
    location: "Bahrain",
    period: "Jan 2023 – Dec 2023",
    bullets: [
      "Processed invoices and tracked payments with accuracy and attention to detail.",
      "Supported preparation of simple financial reports and reconciliations.",
      "Organized accounting documents and assisted with daily office tasks."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative max-w-5xl mx-auto py-20 px-4 space-y-10"
    >
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold italic">
          Professional & leadership experience.
        </h2>
        <p className="text-sm md:text-base text-white/60 max-w-2xl">
          A mix of youth leadership programs, student leadership, and
          administrative work across Bahrain and Saudi Arabia.
        </p>
      </header>

      <div className="border-l border-white/10 space-y-8">
        {experience.map((item, index) => (
          <article key={index} className="relative pl-6 pb-6 group">
            {/* نقطة التايم لاين */}
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-white group-hover:scale-110 transition-transform" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-lg md:text-xl font-semibold">
                {item.role}
              </h3>
              <span className="text-xs md:text-sm text-white/50">
                {item.period}
              </span>
            </div>

            <p className="text-sm md:text-base text-white/70">
              {item.company} — {item.location}
            </p>

            <ul className="mt-3 space-y-1.5 text-sm text-white/70 list-disc pl-4">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
