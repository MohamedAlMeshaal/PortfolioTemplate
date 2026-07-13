import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface Experience {
  role: string;
  role_ar: string;
  company: string;
  company_ar: string;
  date: string;
  date_ar: string;
  bullets: string[];
  bullets_ar: string[];
}

const experiences: Experience[] = [
  {
    role: "Operations Coordinator",
    role_ar: "منسق العمليات",
    company: "Upturn Leader",
    company_ar: "أبتيرن ليدرز",
    date: "July 2025 – Present",
    date_ar: "يوليو 2025 – حتى اليوم",
    bullets: [
      "Coordinated large-scale leadership bootcamps for 70+ participants per cohort.",
      "Managed volunteer teams, daily schedules, logistics, and on-ground operations.",
      "Handled registrations, check-in, and communication with participants and guardians.",
    ],
    bullets_ar: [
      "نسّقت معسكرات قيادة كبيرة تضم أكثر من 70 مشاركاً في كل دفعة.",
      "أدرت فرق المتطوعين والجداول اليومية والخدمات اللوجستية والعمليات الميدانية.",
      "تولّيت التسجيلات وإجراءات الدخول والتواصل مع المشاركين وأولياء الأمور.",
    ],
  },
  {
    role: "Salesperson",
    role_ar: "مندوب مبيعات",
    company: "Metals International",
    company_ar: "العالمية للمعادن",
    date: "Jan 2024 – July 2025",
    date_ar: "يناير 2024 – يوليو 2025",
    bullets: [
      "Prepared quotations and sales orders for customers.",
      "Communicated with clients and handled follow-ups.",
      "Coordinated with purchasing and accounts teams for smooth transactions.",
    ],
    bullets_ar: [
      "أعددت عروض الأسعار وأوامر البيع للعملاء.",
      "تواصلت مع العملاء وتابعت الطلبات.",
      "نسّقت مع فرق المشتريات والحسابات لضمان سير المعاملات بسلاسة.",
    ],
  },
  {
    role: "Purchasing Assistant",
    role_ar: "مساعد مشتريات",
    company: "Metals International",
    company_ar: "العالمية للمعادن",
    date: "Jan 2023 – Dec 2023",
    date_ar: "يناير 2023 – ديسمبر 2023",
    bullets: [
      "Prepared purchase orders and tracked supplier deliveries.",
      "Maintained vendor records and coordinated with suppliers.",
      "Supported inventory checks and ensured timely procurement.",
    ],
    bullets_ar: [
      "أعددت أوامر الشراء وتتبّعت تسليمات الموردين.",
      "حافظت على سجلات الموردين ونسّقت معهم.",
      "دعمت عمليات جرد المخزون وضمنت التوريد في الوقت المناسب.",
    ],
  },
  {
    role: "Accounts Assistant",
    role_ar: "مساعد محاسبة",
    company: "Metals International",
    company_ar: "العالمية للمعادن",
    date: "Jan 2022 – Dec 2022",
    date_ar: "يناير 2022 – ديسمبر 2022",
    bullets: [
      "Processed invoices, tracked payments, and maintained accurate records.",
      "Assisted with preparing financial reports and reconciling basic accounts.",
      "Supported daily office tasks and organized accounting documents.",
    ],
    bullets_ar: [
      "عالجت الفواتير وتتبّعت المدفوعات وحافظت على سجلات دقيقة.",
      "ساعدت في إعداد التقارير المالية وتسوية الحسابات الأساسية.",
      "دعمت المهام المكتبية اليومية ونظّمت وثائق المحاسبة.",
    ],
  },
  {
    role: "Project Coordinator",
    role_ar: "منسق مشاريع",
    company: "Malaeb",
    company_ar: "ملاعب",
    date: "July 2023 – Oct 2023",
    date_ar: "يوليو 2023 – أكتوبر 2023",
    bullets: [
      "Organized football matches and tournaments at multiple venues across Bahrain.",
      "Managed bookings, schedules, and on-site logistics for teams and officials.",
      "Coordinated with venues, partners, and teams to ensure smooth event operations.",
    ],
    bullets_ar: [
      "نظّمت مباريات وبطولات كرة القدم في عدة ملاعب عبر البحرين.",
      "أدرت الحجوزات والجداول الزمنية والخدمات اللوجستية للفرق والمسؤولين.",
      "نسّقت مع الملاعب والشركاء والفرق لضمان سير العمليات بسلاسة.",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-20 text-white space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {isArabic ? "الخبرة المهنية" : "Professional Experience"}
      </h2>

      <div className={`relative pl-8 space-y-12 ${isArabic ? "border-r border-white/20 pr-8 pl-0" : "border-l border-white/20"}`}>
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            <span className={`absolute top-1.5 w-3 h-3 bg-white rounded-full shadow-lg ${isArabic ? "-right-4" : "-left-4"}`} />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold">
                {isArabic ? exp.role_ar : exp.role} —{" "}
                <span className="text-white/70">
                  {isArabic ? exp.company_ar : exp.company}
                </span>
              </h3>
              <p className="text-white/50 text-sm mt-1 md:mt-0">
                {isArabic ? exp.date_ar : exp.date}
              </p>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-white/80">
              {(isArabic ? exp.bullets_ar : exp.bullets).map((b, idx) => (
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
