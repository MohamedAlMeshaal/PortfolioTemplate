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
    // 1) ورشة تعريف جمعية كلية إدارة الأعمال
  {
    slug: "cobs-intro-workshop-2024",
    title: "COBS Introductory",
    date: "November 24, 2024",
    description:
      "Introductory workshop at the University of Bahrain to present the College of Business Administration Society: who we are, our vision, mission, and how students can be part of the journey.",
    role: "Speaker & COBS President",
    outcome:
      "80+ interested students attended · clarified the society’s identity and role · increased awareness and applications to join COBS.",
    tags: [
      "Workshop",
      "Student Leadership",
      "Community Engagement",
      "Public Speaking",
      "University Life",]
      
      images: [
    "/cobs-Introductory1.jpeg",
    "/cobs-Introductory2.jpeg",
    "/cobs-Introductory3.jpeg",
    "/cobs-Introductory4.jpeg",
    "/cobs-Introductory5.jpeg",
  ],

  videos: [
    "/cobs-Introductory1.mp4.mp4",
    "/cobs-Introductory2.mp4.mp4",
    ],
  },

  // 2) فعالية يوم المرأة البحرينية
  {
    slug: "cobs-bahraini-womens-day-2024",
    title: "Bahraini Women’s Day",
    date: "December 1, 2024",
    description:
      "Led the College of Business Administration Society in organizing a special event for Bahraini Women’s Day, celebrating the achievements of Bahraini women and highlighting their impact in society and business.",
    role: "General Leader – Event Director",
    outcome:
      "Created a respectful and inspiring celebration · strengthened the society’s connection with female students · highlighted role models from Bahraini women.",
    tags: [
      "Event Design",
      "Cultural Event",
      "Community Engagement",
      "Student Leadership",
    ],
  },

  // 3) زيارة مصرف البحرين المركزي
  {
    slug: "cobs-cbb-visit-2024",
    title: "Central Bank of Bahrain Visit",
    date: "December 3, 2024",
    description:
      "Organized and led a COBS delegation visit to the Central Bank of Bahrain to learn about money flow, financial systems, and how the national banking ecosystem operates.",
    role: "COBS Delegation Leader",
    outcome:
      "Introduced members to real-world finance and monetary policy · first exposure to banking operations, investment, and physical vs. digital currencies.",
    tags: [
      "Industry Visit",
      "Finance",
      "Banking",
      "Experiential Learning",
      "Career Awareness",
    ],
  },

  {
    slug: "cobs-walhana",
    title: "Walhana Alaikom Event",
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
    title: "Guests of COBS",
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
      "/cobs-carnival2-2.jpeg.jpeg",
      "/cobs-carnival2-3.jpeg.jpeg",
      "/cobs-carnival2-4.jpeg.jpeg",
      "/cobs-carnival2-5.jpeg.jpeg",
      "/cobs-carnival2-6.jpeg.jpeg",
      "/cobs-carnival2-7.jpeg.jpeg",
    ],
    videos: ["/cobs-carnival2-video1.mp4.mp4", "/cobs-carnival2-video2.mp4.mp4"],
  },
  
  // 4) زيارة خليجي بنك
  {
    slug: "cobs-khaleeji-bank-visit-2024",
    title: "Khaleeji Bank Visit",
    date: "October 20, 2024",
    description:
      "Coordinated a focused visit for COBS members to Khaleeji Bank, exploring daily operations across departments and understanding how banking roles connect to what students study in class.",
    role: "COBS Visit Coordinator",
    outcome:
      "Increased financial awareness among members · built relationships with bank professionals · showed students how academic knowledge links to real banking careers.",
    tags: [
      "Industry Visit",
      "Banking",
      "Career Development",
      "Networking",
      "Student Leadership",
    ],
  },
];

export default projectsData;
