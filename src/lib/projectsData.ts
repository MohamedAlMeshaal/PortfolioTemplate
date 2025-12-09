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
  slug: "cobs-introductory",
  title: "COBS Introductory",
  date: "November 24, 2024",
  category: "cobs",
  role: "Speaker",
  description:
    "Introductory workshop at the University of Bahrain to present the College of Business Society: who we are, our vision, mission, and how students can join and be part of the journey.",
  outcome:
    "80+ interested students attended · clarified the society’s identity and role · increased awareness and applications to join COBS.",
  tags: [
    "Workshop",
    "Student Leadership",
    "Community Engagement",
    "Public Speaking",
    "University Life",
  ],
  images: [
    "/cobs-Introductory1.jpeg.jpeg",
    "/cobs-Introductory2.jpeg.jpeg",
    "/cobs-Introductory3.jpeg.jpeg",
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
    category: "cobs",
    description:
      "Led the College of Business Administration Society in organizing a special event for Bahraini Women’s Day, celebrating the achievements of Bahraini women and highlighting their impact in society and business.",
    role: "Leader of the Event",
    outcome:
      "Created a respectful and inspiring celebration · strengthened the society’s connection with female students · highlighted role models from Bahraini women.",
    tags: [
      "Event Design",
      "Cultural Event",
      "Community Engagement",
      "Student Leadership",
    ],
    videos: [
    "/Bahraini-Women’s-Day.mp4",
  ],
  },

  // 3) زيارة مصرف البحرين المركزي
  {
    slug: "cobs-cbb-visit-2024",
    title: "Central Bank of Bahrain Visit",
    date: "December 3, 2024",
    category: "cobs",
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
     images: [
    "/Central-Bank-of-Bahrain-Visit.jpeg.jpeg",
  ],
  videos: [
    "/Central-Bank-of-Bahrain-Visit.mp4.mp4",
  ],
  },

  {
    slug: "cobs-walhana",
    title: "Walhana Alaikom Event",
    date: "February 27, 2025",
    category: "cobs",
    description:
      "Ramadan-themed welcome event for semester 2024/2. Re-energized students and celebrated community spirit.",
    role: "Leader of the Event",
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
    category: "cobs",
    description:
      "Student football tournament uniting diverse teams with excitement and sportsmanship.",
    role: "General Leader (COBS President)",
    outcome:
      "150+ participants · large audience turnout · sponsorship · media coverage · 30+ volunteers",
    tags: ["Sports Event", "Team Management", "Leadership", "Sponsorship", "Media Coverage", "Volunteers"],
     videos: [
       "/cobs-tournament1.mp4.mp4",
       "/cobs-tournament2.mp4.mp4"
             ]
  },
  {
    slug: "cobs-carnival",
    title: "Carnival COBS 1",
    date: "May 4, 2025",
    category: "cobs",
    description:
      "Vibrant handmade carnival with creative booth games, festive decor, popcorn and ice cream.",
    role: "Part of the tournament organizer",
    outcome:
      "80+ volunteers · 1,000+ attendees · major sponsorships · media coverage",
    tags: ["Carnival Design", "Operations", "Volunteers", "Sponsorship", "Media Coverage"],
    images: [
      "/carnival-cobs1.jpeg.jpeg",
      "/carnival-cobs2.jpeg.jpeg"
    ],
    videos:  [
    "/carnival-cobs1.mp4.mp4",
    "/carnival-cobs2.mp4.mp4"
  ],
  },
  {
    slug: "cobs-inspiring-talk",
    title: "Guests of COBS",
    date: "October 12, 2025",
    category: "cobs",
    description:
      "Open talk with Mr. Suheil Al-Qusaibi on challenges and lessons from his entrepreneurial journey.",
    role: "Event Lead",
    outcome:
      "High student turnout · boosted interest in inspirational sessions and career dialogues",
    tags: ["Leadership Talk", "Organization", "Public Speaking", "Event Planning"],
    images: [],
  },
  
  // 4) زيارة خليجي بنك
  {
    slug: "cobs-khaleeji-bank-visit-2024",
    title: "Khaleeji Bank Visit",
    date: "October 20, 2024",
    category: "cobs",
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
  {
    slug: "cobs-carnival-2",
    title: "Carnival COBS 2",
    date: "October 23, 2025",
    category: "cobs",
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
];

export default projectsData;
