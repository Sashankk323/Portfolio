import type { Project } from "@/components/ProjectCard";
import type { Experience } from "@/components/ExperienceCard";

export const about = {
  name: "Sashank Sharma",
  role: "Software Engineering Student",
  blurb:
    "I'm a Software Engineering student at UT Arlington with a 3.7 GPA, passionate about building AI-powered automation tools and full-stack applications that solve real-world problems. I love turning complex challenges into elegant, measurable solutions.",
  location: "Arlington, Texas",
  graduation: "August 2027",
  interests: ["AI Automation", "Full‑stack Development", "Mobile Development", "System Design", "Cloud Architecture"],
};

export const skills = {
  languages: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL", "MATLAB"],
  frameworks: ["React", "Node.js", "Express", "HTML/CSS", "Tailwind CSS", "RESTful APIs", "Flutter"],
  tools: ["Git", "PostgreSQL", "MongoDB", "Supabase", "Render", "Vercel", "Heroku"],
};

export const projects: Project[] = [
  {
    title: "Campus Roommate Finder",
    description:
      "Cross-platform mobile app using Flutter and Supabase that helps university students discover compatible roommates through intelligent matching algorithms.",
    tech: ["Flutter", "Supabase", "Real-time Database", "Authentication", "Cloud Storage"],
    bullets: [
      "Implemented profile matching algorithms based on lifestyle preferences, study habits, and interests, increasing successful roommate connections by 60% compared to traditional housing boards.",
      "Built Supabase backend with real-time synchronization, secure authentication, and cloud storage, supporting 500+ active users with seamless real-time updates.",
      "Designed search filters, compatibility scoring system, and push notifications for new matches, improving user engagement and connection rates.",
    ],
    github: "https://github.com/sashankk323/campus-roommate-finder",
    demo: "https://roommate-finder.vercel.app",
  },
  {
    title: "Job Application Tracker",
    description:
      "Full-stack web application with React, Node.js, and PostgreSQL that streamlines job application management with automated deadline reminders.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT Authentication"],
    bullets: [
      "Implemented authentication, CRUD operations, and automated deadline reminders that reduced missed application deadlines by 90%.",
      "Designed responsive UI with intuitive navigation and status filters, improving user task completion rate by 45% through streamlined tracking.",
      "Optimized PostgreSQL queries ensuring sub-200ms page load times with 99.9% uptime and support for concurrent users.",
    ],
    github: "https://github.com/sashankk323/job-tracker",
    demo: "https://job-tracker.vercel.app",
  },
  {
    title: "Prep67 - AI Interview Coach",
    description:
      "AI-driven mock interview platform that provides real-time feedback on speech patterns, eye contact, and posture using MediaPipe and computer vision.",
    tech: ["React", "TypeScript", "MediaPipe", "Tailwind CSS", "Computer Vision"],
    bullets: [
      "Developed frontend interface with MediaPipe Face Mesh and Pose Detection to monitor user attention and body language during interviews.",
      "Implemented real-time speech pattern analysis and feedback system, helping candidates improve their interview performance.",
      "Created actionable insights dashboard with detailed performance metrics and improvement recommendations.",
    ],
    github: "https://github.com/sashankk323/prep67",
    demo: "https://prep67.vercel.app",
  },
];

export const experience: Experience[] = [
  {
    role: "AI and Data Automation Extern",
    org: "Wayfair (via Extern)",
    period: "October 2025 - January 2026",
    location: "Remote, USA",
    bullets: [
      "Built AI agents using n8n and Google Gemini to automate design trend tracking, competitor monitoring, and content strategy generation, reducing manual research time by 40% and providing daily insights on 50+ competitor products.",
      "Developed and presented AI-powered automated dashboard delivering real-time insights to Wayfair's Supply Chain Vendor Management team, streamlining vendor performance analysis and reducing report generation time from 4 hours to 15 minutes.",
    ],
  },
  {
    role: "Website Development Intern",
    org: "TLT - Tomorrow's Leader Today, Inc",
    period: "March 2026 - Present",
    location: "Frisco, TX",
    bullets: [
      "Engineered and maintained web platform for nonprofit organization, implementing feature enhancements and optimizing performance, responsiveness, and accessibility.",
      "Designed, developed, and tested online course modules, ensuring scalability and smooth user experience for educational content delivery.",
      "Leveraged SEO strategies and structured content architecture to improve search visibility and user engagement across digital platforms.",
    ],
  },
];
