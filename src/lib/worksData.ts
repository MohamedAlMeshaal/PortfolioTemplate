export type WorkItem = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  tags: string[];
  details?: string;
  images?: string[];
};

export const worksData: WorkItem[] = [
  {
    slug: "itqanops",
    title: "ItqanOps",
    subtitle: "Internal Operations System",
    type: "Digital Build",
    description:
      "A full Arabic RTL mobile-first PWA built from scratch to manage training program operations. Covers pre/during/post program phases, Telegram reminders, AI-generated executive reports, hotel operations PDF export, vendor financials, and multi-program management.",
    details:
      "Built entirely using Next.js, TypeScript, Tailwind CSS, and Supabase. Features include dual Telegram reminders with Asia/Riyadh timezone support, Claude AI Arabic executive report generation, branded hotel operations PDF export, multi-program management dashboard, and vendor financials tracking. Deployed as a PWA to itqanops.vercel.app.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PWA"],
  },
  {
    slug: "the-leader-app",
    title: "The Leader App",
    subtitle: "Summer Camp Management Platform",
    type: "Digital Build",
    description:
      "A platform managing The Leader Summer Camp's full operations — student rosters, attendance tracking, scoring, certificate generation, WhatsApp reports, and timetable management.",
    details:
      "Built with Next.js, TypeScript, Supabase, and Clerk authentication. Features include student auto-grouping algorithm with gender separation and age distribution, debounced timetable admin grid, WhatsApp report generation with gender-aware Arabic wording, PDF certificate delivery, and full RLS security implementation.",
    tags: ["Next.js", "TypeScript", "Supabase", "Clerk", "Vercel"],
  },
  {
    slug: "product-tracking-system",
    title: "Product Tracking System",
    subtitle: "Inventory & Product Management",
    type: "Digital Build",
    description:
      "A browser-based product inventory system built for internal use, featuring admin and employee roles, product tracking, and real-time stock management.",
    details:
      "Built using React, TypeScript, and Tailwind CSS with localStorage for data persistence. Features role-based access control with separate admin and employee views, product catalog management, stock level tracking, and a clean dashboard interface.",
    tags: ["React", "TypeScript", "localStorage", "Tailwind CSS"],
  },
  {
    slug: "20-programs",
    title: "20+ Programs Organized",
    subtitle: "Full Operational Responsibility",
    type: "Field Operations",
    description:
      "Planned, coordinated, and executed more than 20 programs end-to-end — covering logistics, volunteer management, scheduling, on-ground operations, sponsorships, and post-event reporting.",
    details:
      "Programs ranged from university events and leadership workshops to large-scale carnivals with 2,000+ attendees. Responsibilities included full budget management, volunteer coordination (up to 100+ volunteers), sponsor acquisition, media coverage coordination, on-ground logistics, and post-event reporting.",
    tags: ["Event Operations", "Team Leadership", "Logistics", "Sponsorship"],
  },
];

export default worksData;
