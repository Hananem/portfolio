export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  learnings: string[];
  details: string;
  bg: string;
  textColor: string;
  gridClass: string;
  tag: string;
  accent: string;
  liveUrl: string;
  isPrivate?: boolean;
  githubUrl: {
    frontend: string;
    backend: string;
  };
  gallery?: {
    title: string;
    text: string[];
    images: string[];
  }[];
};

export const projects: Project[] = [
  {
    title: 'ERP Clinic Hariri',
    slug: 'erp-clinic-hariri',
    category: 'Medical ERP System',
    description: 'My biggest project to date — a complete ERP platform for clinic management, still actively maintained and improved with ongoing client support.',
    learnings: [
      'First time working with a real team of experts & professionals',
      'Learned professional workflow organization and task management',
      'Handled a high-profile client with strict deadlines',
      'First experience with TanStack Query, i18n and PDF generation in React',
      'Built medical analysis reports, prescriptions, hospitalization invoices and medical visit billing systems',
      'Worked on employee & patient identification cards and healthcare-related workflows',
      'Took full responsibility for frontend technical support during the maintenance phase',
      'Communicated directly with the client to understand requested modifications and business needs',
      'Collaborated closely with backend developers and designers to translate client requirements into implementation tasks',
    ],
    details: 'My largest project so far and still going. Built with Next.js, TypeScript, React Hook Form and TanStack Query — this ERP covers appointments, patient records, billing and analytics. My first real team project alongside experienced developers, where I learned professional-grade organization, client communication and meeting tight deadlines. Also my first hands-on experience with i18n internationalization and handling PDFs inside React. I additionally worked on medical analysis reports, prescriptions, hospitalization invoices, visit billing systems, and employee/patient identification cards.',
    bg: '#c084fc', textColor: '#fff',
    gridClass: 'md:col-span-5 md:row-span-2', tag: 'Ongoing · Active Support',
    accent: '#a855f7',
    isPrivate: true,
    liveUrl: '',
    githubUrl: { frontend: '', backend: '' },
  },
  {
    title: 'ERP Gym Egypt',
    slug: 'erp-gym-egypt',
    category: 'Gym Management ERP',
    description: 'My first real client project — a full gym ERP system serving 18,000 real members, managing subscriptions, finance, employees, trainers, and daily operations.',
    learnings: [
      'First time working directly with a real client and meeting production-level expectations',
      'First collaboration with another developer using a Python backend — mastered Git & GitHub workflows',
      'Handled real production data with 18,000 active gym members',
      'Learned professional time management and delivering features under deadlines',
      'Worked on complex ERP modules including finance, subscriptions, staff management, and ticket systems',
    ],
    details: 'My first real-world client experience. A complete gym ERP platform built for a real gym in Egypt with live data from over 18,000 members. The system includes member management, subscription plans, recurring memberships, attendance tracking, accounting and finance dashboards, employee management, trainer scheduling, ticket/support systems, and operational reporting. I collaborated closely with a Python backend developer, which pushed me to master Git, GitHub branching strategies, and team-based workflows.',
    bg: '#fb923c', textColor: '#fff',
    gridClass: 'md:col-span-4 md:row-span-2', tag: 'Completed',
    accent: '#f97316',
    isPrivate: true,
    liveUrl: '',
    githubUrl: { frontend: '', backend: '' },
  },
  {
    title: 'EduSaaS Platform',
    slug: 'edusaas-platform',
    category: 'SaaS · Education',
    description: 'A modern SaaS platform for online education — courses, progress tracking, payments and instructor dashboards.',
    learnings: [
      'Building multi-tenant SaaS architecture',
      'Integrating subscription billing with Stripe',
      'Designing scalable course content systems',
      'Working with real-time progress tracking',
    ],
    details: 'An education SaaS platform started in May 2026, featuring course management, student progress tracking, instructor dashboards and subscription billing.',
    bg: '#0ea5e9', textColor: '#fff',
    gridClass: 'md:col-span-3 md:row-span-1', tag: 'In Progress · May 2026',
    accent: '#0284c7',
    isPrivate: true,
    liveUrl: '',
    githubUrl: { frontend: '', backend: '' },
  },
   {
    title: 'Jobify',
    slug: 'jobify',
    category: 'Fullstack · Job Board Platform',
    description: 'My biggest personal project — 4 months of work, built fully from scratch with React, Node and Express. The project that took me beyond tutorials forever.',
    learnings: [
      'First major project built completely outside of tutorials and simple websites',
      'Learned how frontend and backend communicate through REST APIs',
      'Mastered Redux Toolkit for complex global state management',
      'Learned professional file and folder structure for large-scale apps',
      'Built and consumed my own API from scratch for the first time',
    ],
    details: 'Jobify took 4 months and was a turning point. A fullstack platform built with React, Node.js and Express — featuring job listings, candidate search, a blog, events, an admin dashboard and much more. This was my first real fullstack project built entirely from scratch, no tutorials, no shortcuts.',
    bg: '#16a34a', textColor: '#fff',
    gridClass: 'md:col-span-12 md:row-span-1', tag: 'Completed · 4 Months',
    accent: '#15803d',
    liveUrl: 'https://jobify-mwbz.onrender.com',
    githubUrl: { frontend: 'https://github.com/Hananem/Jobify-frontend', backend: 'https://github.com/Hananem/Jobify-backend' },
    gallery: [
      {
        title: 'Jobs Platform Overview',
        text: [
          'Advanced job filtering system (by role, category, etc.)',
          'Company name and logo displayed on each job post',
          'Clear salary range for every job listing',
          'View counter to track job post engagement',
          'Save / Unsave toggle for bookmarking jobs',
          'Full apply system allowing users to submit CV and cover letter',
        ],
        images: [
          '/images/projects/job1.png',
          '/images/projects/job2.png',
          '/images/projects/job3.png',
          '/images/projects/job4.png',
        ],
      },
      {
        title: 'User Roles & Activity System',
        text: [
          'Users can create job posts to hire candidates',
          'Role-based system controlling permissions and actions',
          'Full activity history tracking all user actions',
          'Saved jobs section for bookmarked listings',
          'Applied jobs tracking with status updates',
        ],
        images: [
          '/images/projects/job11.png',
          '/images/projects/job12.png',
          '/images/projects/job13.png',
          '/images/projects/job14.png',
        ],
      },
      {
        title: 'Events & Blog Platform',
        text: [
          'Dedicated events page showcasing company-organized events',
          'Each event card includes company name, date and location',
          'Integrated blog system for publishing articles and updates',
          'Modern blog layout optimized for reading experience',
        ],
        images: [
          '/images/projects/job8.png',
          '/images/projects/job9.png',
        ],
      },
      {
        title: 'User Profiles & Portfolio System',
        text: [
          'Every user has a fully customizable public profile page',
          'Projects section for showcasing previous work',
          'Skills management system with categorized technical skills',
          'Experience and education sections for career history',
        ],
        images: [
          '/images/projects/job5.png',
          '/images/projects/job29.png',
          '/images/projects/job30.png',
          '/images/projects/job31.png',
        ],
      },
      {
        title: 'Admin Dashboard',
        text: [
          'Role-based admin access system',
          'Manage users, jobs, blogs and events',
          'Platform analytics and activity tracking',
          'Approve or delete platform content',
          'Protected admin routes and secure authentication',
        ],
        images: [
          '/images/projects/job15.png',
          '/images/projects/job16.png',
          '/images/projects/job17.png',
          '/images/projects/job18.png',
        ],
      },
    ],
  },
   {
    title: 'Vidly',
    slug: 'vidly',
    category: 'Fullstack · Video Platform',
    description: 'Not just a YouTube clone — a fully featured video platform with a unique design, real-time notifications and social features built from scratch.',
    learnings: [
      'Built a real-time notification system using WebSockets (Socket.io)',
      'Implemented online presence — knowing who is currently connected',
      'Handled video uploads with custom thumbnail support',
      'Built a full social layer: follows, comments and emoji reactions',
      'Focused on original UI/UX design instead of copying existing platforms',
    ],
    details: 'Vidly is a video sharing platform inspired by YouTube but built with its own identity. Users can upload videos with custom thumbnails, follow profiles, leave comments and react with emoji reactions. What made this project different was the real-time layer — using Socket.io to power live notifications and show who is currently online.',
    bg: '#111', textColor: '#fff',
    gridClass: 'md:col-span-5 md:row-span-1', tag: 'Completed',
    accent: '#27272a',
    liveUrl: 'https://vidly-eo5p.onrender.com',
    githubUrl: { frontend: 'https://github.com/Hananem/video-platform-frontend', backend: 'https://github.com/Hananem/videoPlatform-backend' },
    gallery: [
      {
        title: 'Video Feed & Discovery',
        text: [
          'Homepage showing latest uploaded videos',
          'Video categories for easier content discovery',
          'Modern feed UI focused on browsing and engagement',
          'Trending and recently uploaded video sections',
        ],
        images: [
          '/images/projects/video1.png',
          '/images/projects/video2.png',
          '/images/projects/video3.png',
          '/images/projects/video4.png',
        ],
      },
      {
        title: 'Video Player & Interactions',
        text: [
          'Reaction system including like, angry, sad and funny reactions',
          'Save video functionality for later watching',
          'Video views counter and uploader information',
          'Comment system with replies and comment likes',
        ],
        images: [
          '/images/projects/video5.png',
          '/images/projects/video6.png',
          '/images/projects/video7.png',
          '/images/projects/video8.png',
        ],
      },
      {
        title: 'Uploads & Playlists',
        text: [
          'Upload videos with custom thumbnails',
          'Automatic video duration detection',
          'Playlist creation and management system',
          'Video management dashboard for creators',
        ],
        images: [
          '/images/projects/video9.png',
          '/images/projects/video10.png',
          '/images/projects/video11.png',
          '/images/projects/video12.png',
        ],
      },
      {
        title: 'Profiles & Social Features',
        text: [
          'Custom user profiles with bio, avatar and background image',
          'Followers and following pages for social interaction',
          'Editable profile information and creator customization',
          'Clean social-focused profile experience',
        ],
        images: [
          '/images/projects/video13.png',
          '/images/projects/video14.png',
          '/images/projects/video15.png',
          '/images/projects/video16.png',
        ],
      },
      {
        title: 'Library & User Activity',
        text: [
          'Library page containing watched and saved videos',
          'Access to personal playlists and saved content',
          'History tracking for previously watched videos',
          'Organized dashboard for user activity management',
        ],
        images: [
          '/images/projects/video17.png',
          '/images/projects/video18.png',
          '/images/projects/video19.png',
          '/images/projects/video20.png',
        ],
      },
    ],
  },
  {
    title: 'SubTrack',
    slug: 'subtrack',
    category: 'Full Stack SaaS · Subscription Management',
    description: 'A full-stack subscription tracking platform that helps users manage recurring payments, receive renewal reminders, and avoid forgotten charges.',
    learnings: [
      'Built a complete SaaS-style architecture with Next.js and NestJS',
      'Implemented JWT authentication and protected REST APIs',
      'Created automated cron jobs for reminders and subscription expiration handling',
      'Integrated email notifications using Nodemailer and Gmail App Passwords',
      'Designed scalable database models with Prisma and PostgreSQL',
      'Learned how to structure a real-world backend with modules, services, guards, and scheduled tasks',
    ],
    details: 'SubTrack is a full-stack subscription management platform built to solve a common real-world problem: forgetting recurring payments and getting charged unexpectedly. Users can register, manage all their subscriptions in one dashboard, and receive automated email reminders before renewals.',
    bg: '#231731', textColor: '#ede6e6',
    gridClass: 'md:col-span-3 md:row-span-1', tag: 'Full Stack SaaS',
    accent: '#13042d',
    liveUrl: '',
    githubUrl: { frontend: '', backend: '' },
  },
  {
    title: 'Industrial ERP',
    slug: 'industrial-erp',
    category: 'Enterprise ERP',
    description: 'A self-initiated ERP built after two real ERP experiences — applying everything I learned and pushing further with new tools and a modern stack.',
    learnings: [
      'Applied all previous ERP experience into one refined project',
      'First time using Lovable for rapid frontend prototyping',
      'Built a real backend with NestJS and Neon DB for the first time',
      'Learned to move faster and smarter using AI-assisted development',
    ],
    details: 'After shipping two real ERP systems, I decided to build my own from scratch — applying every lesson learned and adding new ones. I used Lovable to handle the frontend faster, and built the backend myself using NestJS and Neon DB (serverless PostgreSQL).',
    bg: '#1e293b', textColor: '#fff',
    gridClass: 'md:col-span-5 md:row-span-1', tag: 'Completed',
    accent: '#334155',
    liveUrl: '',
    githubUrl: { frontend: 'https://github.com/Hananem/harmony-erp-dashboard', backend: 'https://github.com/Hananem/erp-inventory-backend' },
    gallery: [
      {
        title: 'ERP Overview & Modules',
        text: [
          'Project is currently 60% completed',
          'Frontend fully built using Lovable',
          'Multi-language support (Arabic / French / English)',
          'System divided into main modules: HR, Admin, Stock, Invoicing, Clients',
          'Role-based access system prepared for admin control',
        ],
        images: [
          '/images/projects/erp1.jpeg',
          '/images/projects/erp2.jpeg',
          '/images/projects/erp3.jpeg',
          '/images/projects/erp4.jpeg',
          '/images/projects/erp5.jpeg',
        ],
      },
      {
        title: 'Stock, HR & Invoicing',
        text: [
          'Products, categories and suppliers management',
          'Employees and departments management',
          'Salary and payroll system design',
          'Invoice generation and client management',
          'ERP financial workflow foundation',
        ],
        images: [
          '/images/projects/erp9.jpeg',
          '/images/projects/erp10.jpeg',
          '/images/projects/erp13.png',
          '/images/projects/erp14.png',
          '/images/projects/erp17.png',
        ],
      },
    ],
  },
 
 
];