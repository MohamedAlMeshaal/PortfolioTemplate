// src/lib/projectsData.ts
export type ProjectDetails = {
  slug: string;          // عنوان URL قصير وفريد (بدون مسافات)
  title: string;         // عنوان المشروع
  date?: string;         // تاريخ اختياري
  description: string;   // وصف مختصر
  role?: string;         // دورك
  outcome?: string;      // النتائج/الأثر
  tags: string[];        // البادجز (بالإنجليزي)
  images?: string[];     // روابط صور (اختياري)
  videos?: string;     // رابط فيديو (اختياري)
};

export const projectsData: ProjectDetails[] = [
  {
    slug: "cobs-walhana",
    title: "Welcome Back Event – Walhana Alaikom",
    date: "February 27, 2025",
    description:
      "Ramadan-themed welcome event for semester 2024/2. Re-energized students and celebrated community spirit.",
    role: "General Leader (COBS President)",
    outcome:
      "Managed 70+ volunteers · 500+ attendees · sponsorship & media coverage · organized in < 1 week",
    tags: ["Event Design", "Leadership", "Operations", "Volunteers", "Sponsorship", "Media Coverage"],
    images: ["/cobs-walhana-1.jpeg"],
    videos:  [
    "/cobs-walhana-video1.mp4.mp4",
    "/cobs-walhana-video2.mp4.mp4  "
  ]
  },
  {
    slug: "cobs-ramadan-football",
    title: "COBS Ramadan Football Tournament",
    date: "March 16, 2025",
    description:
      "Student football tournament uniting diverse teams with excitement and sportsmanship.",
    role: "General Leader (COBS President)",
    outcome:
      "150+ participants · large audience turnout · sponsorship · media coverage · 30+ volunteers",
    tags: ["Sports Event", "Team Management", "Leadership", "Sponsorship", "Media Coverage", "Volunteers"],
    images: [],
  },
  {
    slug: "cobs-carnival",
    title: "COBS Carnival",
    date: "May 4, 2025",
    description:
      "Vibrant handmade carnival with creative booth games, festive decor, popcorn and ice cream.",
    role: "General Leader (COBS President)",
    outcome:
      "80+ volunteers · 1,000+ attendees · major sponsorships · media coverage",
    tags: ["Carnival Design", "Operations", "Volunteers", "Sponsorship", "Media Coverage"],
    images: [],
  },
  {
    slug: "cobs-inspiring-talk",
    title: "Guests of COBS – A Talk with an Inspiring Figure",
    date: "October 12, 2025",
    description:
      "Open talk with Mr. Suheil Al-Qusaibi on challenges and lessons from his entrepreneurial journey.",
    role: "Event Lead / Producer",
    outcome:
      "High student turnout · boosted interest in inspirational sessions and career dialogues",
    tags: ["Leadership Talk", "Organization", "Public Speaking", "Event Planning"],
    images: [],
  },
  {
    slug: "cobs-carnival-2",
    title: "COBS Carnival 2",
    date: "October 23, 2025",
    description:
      "Second edition carnival for the College of Business — handmade games, popcorn, cotton candy, face painting, and live vibes created fully by the student team.",
    role: "General Leader / Executive Director",
    outcome:
      "100+ volunteers · 2,000+ attendees · major sponsorships · strong media coverage · higher recognition inside the university.",
    tags: [
      "Event Design",
      "Leadership",
      "Operations",
      "Volunteers",
      "Sponsorship",
      "Media Coverage",
    ],
    images: [
      "/cobs-carnival2-1.jpeg",
      "/cobs-carnival2-2.jpeg",
      "/cobs-carnival2-3.jpeg",
      "/cobs-carnival2-4.jpeg",
      "/cobs-carnival2-5.jpeg",
    ],
    videos: ["/cobs-carnival2-video1.mp4", "/cobs-carnival2-video2.mp4"],
  },
];

export default projectsData;
