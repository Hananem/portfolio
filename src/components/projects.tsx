'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
type Project = {
  title: string;
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
    text: string[];   // 👈 مهم
    images: string[];
  }[];
};

const projects: Project[] = [
  {
    title: 'ERP Clinic Hariri',
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
  category: 'Gym Management ERP',

  description:
    'My first real client project — a full gym ERP system serving 18,000 real members, managing subscriptions, finance, employees, trainers, and daily operations.',

  learnings: [
    'First time working directly with a real client and meeting production-level expectations',
    'First collaboration with another developer using a Python backend — mastered Git & GitHub workflows',
    'Handled real production data with 18,000 active gym members',
    'Learned professional time management and delivering features under deadlines',
    'Worked on complex ERP modules including finance, subscriptions, staff management, and ticket systems',
  ],

  details:
    'My first real-world client experience. A complete gym ERP platform built for a real gym in Egypt with live data from over 18,000 members. The system includes member management, subscription plans, recurring memberships, attendance tracking, accounting and finance dashboards, employee management, trainer scheduling, ticket/support systems, and operational reporting. I collaborated closely with a Python backend developer, which pushed me to master Git, GitHub branching strategies, and team-based workflows. This project taught me how to build software that real businesses rely on every day while managing deadlines, production requirements, and large-scale data.',

  bg: '#fb923c',
  textColor: '#fff',

  gridClass: 'md:col-span-4 md:row-span-2',

  tag: 'Completed',

  accent: '#f97316',
isPrivate: true,
  liveUrl: '',

  githubUrl: {
    frontend: '',
    backend: '',
  },
},
  {
    title: 'EduSaaS Platform',
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
  title: 'SubTrack',
  category: 'Full Stack SaaS · Subscription Management',
  description:
    'A full-stack subscription tracking platform that helps users manage recurring payments, receive renewal reminders, and avoid forgotten charges.',

  learnings: [
    'Built a complete SaaS-style architecture with Next.js and NestJS',
    'Implemented JWT authentication and protected REST APIs',
    'Created automated cron jobs for reminders and subscription expiration handling',
    'Integrated email notifications using Nodemailer and Gmail App Passwords',
    'Designed scalable database models with Prisma and PostgreSQL',
    'Learned how to structure a real-world backend with modules, services, guards, and scheduled tasks',
  ],

  details:
    'SubTrack is a full-stack subscription management platform built to solve a common real-world problem: forgetting recurring payments and getting charged unexpectedly. Users can register, manage all their subscriptions in one dashboard, and receive automated email reminders before renewals. The backend was built with NestJS using a modular architecture, Prisma ORM, JWT authentication, cron jobs, and notification systems. The frontend was developed with Next.js App Router, React Query, Zod, and React Hook Form to provide a modern and responsive user experience. The system also includes dashboard analytics, unread notification management, and automated subscription status handling.',

  bg: '#231731',
  textColor: '#ede6e6',

  gridClass: 'md:col-span-3 md:row-span-1',

  tag: 'Full Stack SaaS',

  accent: '#13042d',

  liveUrl: '',

  githubUrl: {
    frontend: '',
    backend: '',
  },
},
 {
    title: 'Industrial ERP',
    category: 'Enterprise ERP',
    description: 'A self-initiated ERP built after two real ERP experiences — applying everything I learned and pushing further with new tools and a modern stack.',
    learnings: [
      'Applied all previous ERP experience into one refined project',
      'First time using Lovable for rapid frontend prototyping',
      'Built a real backend with NestJS and Neon DB for the first time',
      'Learned to move faster and smarter using AI-assisted development',
    ],
    details: 'After shipping two real ERP systems, I decided to build my own from scratch — applying every lesson learned and adding new ones. I used Lovable to handle the frontend faster, and built the backend myself using NestJS and Neon DB (serverless PostgreSQL). This project was about working smarter: combining my hands-on ERP experience with modern tooling to deliver a full industrial management system covering production, inventory, HR and operations.',
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
   {
    title: 'Vidly',
    category: 'Fullstack · Video Platform',
    description: 'Not just a YouTube clone — a fully featured video platform with a unique design, real-time notifications and social features built from scratch.',
    learnings: [
      'Built a real-time notification system using WebSockets (Socket.io)',
      'Implemented online presence — knowing who is currently connected',
      'Handled video uploads with custom thumbnail support',
      'Built a full social layer: follows, comments and emoji reactions',
      'Focused on original UI/UX design instead of copying existing platforms',
    ],
    details: 'Vidly is a video sharing platform inspired by YouTube but built with its own identity. Users can upload videos with custom thumbnails, follow profiles, leave comments and react with emoji reactions. What made this project different was the real-time layer — using Socket.io to power live notifications and show who is currently online. A project where I pushed myself on both the technical and design sides at the same time.',
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
      'Video title, description and publish details',
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
    title: 'Jobify',
    category: 'Fullstack · Job Board Platform',
    description: 'My biggest personal project — 4 months of work, built fully from scratch with React, Node and Express. The project that took me beyond tutorials forever.',
    learnings: [
      'First major project built completely outside of tutorials and simple websites',
      'Learned how frontend and backend communicate through REST APIs',
      'Mastered Redux Toolkit for complex global state management',
      'Learned professional file and folder structure for large-scale apps',
      'Built and consumed my own API from scratch for the first time',
    ],
    details: 'Jobify took 4 months and was a turning point. A fullstack platform built with React, Node.js and Express — featuring job listings, candidate search, a blog, events, an admin dashboard and much more. This was my first real fullstack project built entirely from scratch, no tutorials, no shortcuts. It taught me how APIs work, how the backend talks to the frontend, how to structure a large codebase, and how to manage complex state with Redux Toolkit. The project that separated me from beginner territory for good.',
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
  'Company name and company logo displayed on each job post',
  'Clear salary range for every job listing',
  'View counter to track job post engagement',
  'Save / Unsave toggle for bookmarking jobs',
  'Full apply system allowing users to submit CV (PDF) and cover letter',
  'Clean job board UI focused on fast browsing and usability',
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
    'Users can also post "Looking for Employees" listings',
    'Role-based system controlling permissions and actions',
    'Separate flows for recruiters and candidates',
    'Full activity history tracking all user actions',
    'Saved jobs section for bookmarked listings',
    'Applied jobs tracking with status updates',
    'Hire interactions: tracking candidates who clicked "Hire"',
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
    'Events are published and moderated by platform admins',
    'Each event card includes company name, event date and location',
    'Interested / Not Interested toggle for user engagement',
    'Advanced filtering system for browsing events easily',
    'Clean event cards designed for fast discovery and readability',
    'Integrated blog system for publishing articles and updates',
    'Dedicated blog details page with full article content',
    'Modern blog layout optimized for reading experience',
    'Support for featured posts, categories and recent articles',
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
    'Users can edit personal information and professional details',
    'Projects section for showcasing previous work and achievements',
    'Certificates section to display completed courses and certifications',
    'Skills management system with categorized technical skills',
    'Languages section showing spoken languages and proficiency levels',
    'Social links integration including LinkedIn and Facebook URLs',
    'Profile image and cover image customization',
    'Professional bio/about section for personal introduction',
    'Experience and education sections for career history',
    'Clean portfolio-style layout designed for recruiters and companies',
    'Responsive profile pages optimized for desktop and mobile devices',
  ],
  images: [
    '/images/projects/job5.png',
    '/images/projects/job4.png',
    '/images/projects/job29.png',
    '/images/projects/job30.png',
    '/images/projects/job31.png',
    '/images/projects/job32.png',
  ],
},
{
  title: 'Admin Dashboard',
  text: [
    'Role-based admin access system',
    'Dashboard button visible only for admins',
    'Manage users, jobs, blogs and events',
    'Platform analytics and activity tracking',
    'Approve or delete platform content',
    'Protected admin routes and secure authentication',
    'Modern dashboard UI with management tables and filters',
  ],
  images: [
    '/images/projects/job15.png',
    '/images/projects/job16.png',
    '/images/projects/job17.png',
    '/images/projects/job18.png',
    '/images/projects/job19.png',
    '/images/projects/job20.png',
    '/images/projects/job21.png',
    '/images/projects/job22.png',
    '/images/projects/job23.png',
    '/images/projects/job24.png',
    '/images/projects/job25.png',
    '/images/projects/job26.png',
  ],
},

],
  },
 
];

// Starburst SVG decoration
function Starburst({ color, size = 60 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <polygon
        points="30,2 34,22 52,14 40,28 58,30 40,32 52,46 34,38 30,58 26,38 8,46 20,32 2,30 20,28 8,14 26,22"
        fill={color}
        stroke="#111"
        strokeWidth="2"
      />
    </svg>
  );
}

// Wavy badge
function WavyBadge({ text, color }: { text: string; color: string }) {
  return (
    <div style={{
      background: color,
      border: '3px solid #111',
      borderRadius: 999,
      padding: '6px 20px',
      display: 'inline-block',
      boxShadow: '3px 3px 0 #111',
    }}>
      <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>
        {text}
      </span>
    </div>
  );
}

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [galleryProject, setGalleryProject] = useState<(typeof projects)[0] | null>(null);
const [activeGalleryIndexes] = useState<Record<number, number>>({});

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#f5f0e8', fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">

   {/* Heading */}
<div className="mb-14">


  <div style={{ position: 'relative', display: 'inline-block' }}>
    <div style={{
      background: '#3a5bbf',
      border: '4px solid #111',
      borderRadius: 16,
      boxShadow: '7px 7px 0 #111',
      display: 'inline-block',
    }}>
      {/* macOS dots */}
<div
  style={{
    display: 'flex',
    gap: 7,
    marginBottom: 12,
    background: '#faf7ed',
    padding: '8px 10px',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  }}
>
  {['#e05252', '#e0a852', '#52c25a'].map((c, i) => (
    <div
      key={i}
      style={{
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: c,
        border: '2px solid #111',
      }}
    />
  ))}
</div>

   <h2
  style={{
    fontFamily: "'boogaloo', sans-serif",
    fontSize: 'clamp(64px, 10vw, 96px)',
    fontWeight: 400,
    lineHeight: 0.95,
    color: '#f5a623',
    letterSpacing: 1,
    textTransform: 'lowercase',
    padding: '18px 40px 22px',
    margin: 0,

    /* shadow لكل حرف */
    WebkitTextStroke: '3px #000000',
    textShadow: `
      2px 2px 0 #111,
      4px 4px 0 #111,
      6px 6px 0 #111
    `,
  }}
>
  my projects
</h2>

      <span style={{
        fontFamily: "'boogaloo', sans-serif",
        fontSize: 13,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.85)',
        marginTop: 25,
           padding: '18px 40px 22px',
        display: 'block',
      }}>
        fullstack · frontend 
      </span>
    </div>
      <p style={{
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: '#fff',
     position: 'absolute', top: -18, right: -18,
    fontWeight: 700,
    background: '#c1705a',
    display: 'inline-block',
    padding: '6px 18px',
    borderRadius: 8,
    border: '3px solid #111',
    boxShadow: '3px 3px 0 #111',
    fontFamily: "'Boogaloo', sans-serif",
  }}>
    Selected Work
  </p>

    {/* Green star badge */}
    <div style={{
      position: 'absolute', bottom: -18, right: -18,
      background: '#6dbf8a', border: '3px solid #111',
      borderRadius: '50%', width: 44, height: 44,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '3px 3px 0 #111',
    }}>
      ✦
    </div>
  </div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]" style={{ position: 'relative' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0px #111', transition: { duration: 0.15 } }}
              whileTap={{ x: 3, y: 3, boxShadow: '3px 3px 0px #111', transition: { duration: 0.1 } }}
              onClick={() => setSelectedProject(project)}
              className={`${project.gridClass} relative overflow-hidden cursor-pointer`}
              style={{
                background: project.bg, borderRadius: 4, padding: 24,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                border: '3px solid #111', boxShadow: '6px 6px 0px #111',
              }}
            >
              <div>
                <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em', color: project.textColor, opacity: 0.65, fontWeight: 700 }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 900, color: project.textColor, lineHeight: 1.1, marginTop: 6, textTransform: 'uppercase' }}>
                  {project.title}
                </h3>
              </div>
              <p style={{ fontSize: 12, color: project.textColor, opacity: 0.75, lineHeight: 1.5, marginTop: 10, maxWidth: 280 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
  <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: project.textColor, opacity: 0.5, border: `1.5px solid ${project.textColor}`, padding: '2px 8px', borderRadius: 2 }}>
    {project.tag}
  </span>
  {project.isPrivate && (
    <span style={{
      fontSize: 9, fontWeight: 900, textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#111',
      background: '#fef9c3',
      border: '1.5px solid #111',
      padding: '2px 8px', borderRadius: 2,
    }}>
      🔒 Private
    </span>
  )}
</div>
               <div
  style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  }}
>
  {/* Gallery button */}
  {project.gallery && (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setGalleryProject(project);
      }}
      style={{
        width: 36,
        height: 36,
        border: `2.5px solid ${project.textColor}`,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        color: project.textColor,
        fontWeight: 900,
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      🖼
    </button>
  )}

  {/* Main modal button */}
  <div
    style={{
      width: 36,
      height: 36,
      border: `2.5px solid ${project.textColor}`,
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      color: project.textColor,
      fontWeight: 900,
    }}
  >
    ↗
  </div>
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── POSTER MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.85, rotate: -2, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.9, rotate: 2, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 1500,
                maxHeight: '92vh',
                overflowY: 'auto',
                background: '#fef9c3',
                border: '5px solid #111',
                borderRadius: 8,
                boxShadow: '14px 14px 0 #111',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {/* ── Grid background pattern ── */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                borderRadius: 4,
                pointerEvents: 'none',
              }} />

              {/* Close btn */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute', top: 16, right: 16, zIndex: 20,
                  width: 44, height: 44,
                  background: '#111', color: '#fef9c3',
                  border: '3px solid #111', borderRadius: 4,
                  fontSize: 20, fontWeight: 900, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '4px 4px 0 #555',
                }}
              >✕</button>

              {/* ── Content ── */}
              <div style={{ position: 'relative', zIndex: 1, padding: '36px 36px 28px' }}>

                {/* Top: "Your Project" label */}
                <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#555', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>
                  Featured Project
                </p>

                {/* Big title block */}
                <div style={{
                  background: '#fff',
                  border: '4px solid #111',
                  borderRadius: 8,
                  padding: '22px 28px',
                  marginBottom: 20,
                  boxShadow: '6px 6px 0 #111',
                  position: 'relative',
                  textAlign: 'center',
                }}>
                  {/* Starburst decorations */}
                  <div style={{ position: 'absolute', top: -22, right: -22 }}>
                    <Starburst color={selectedProject.bg} size={54} />
                  </div>
                  <div style={{ position: 'absolute', top: -14, left: -14 }}>
                    <Starburst color={selectedProject.accent} size={36} />
                  </div>

                  {/* Category pill */}
                  <div style={{ marginBottom: 14 }}>
                    <WavyBadge text={selectedProject.category} color={selectedProject.accent} />
                  </div>

                  <h2 style={{
                    fontSize: 'clamp(28px, 5vw, 52px)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    color: '#111',
                    textShadow: `4px 4px 0 ${selectedProject.bg}`,
                  }}>
                    {selectedProject.title}
                  </h2>
                </div>

                {/* ── Two columns ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 16, marginBottom: 20 }}>

                  {/* Left — Skills/Learnings */}
                  <div style={{
                    background: selectedProject.bg,
                    border: '4px solid #111',
                    borderRadius: 8,
                    padding: '20px 20px',
                    boxShadow: '6px 6px 0 #111',
                  }}>
                    <h3 style={{
                      fontSize: 13, fontWeight: 900, textTransform: 'uppercase',
                      letterSpacing: '0.2em', color: '#111',
                      background: '#fef9c3',
                      border: '3px solid #111',
                      borderRadius: 4,
                      padding: '6px 12px',
                      display: 'inline-block',
                      marginBottom: 18,
                      boxShadow: '3px 3px 0 #111',
                    }}>
                      What I Learned
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {selectedProject.learnings.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <div style={{
                            width: 10, height: 10, borderRadius: '50%',
                            background: '#fef9c3',
                            border: '2px solid #111',
                            marginTop: 5, flexShrink: 0,
                          }} />
                          <p style={{ fontSize: 13, color: '#fff', lineHeight: 1.55, fontWeight: 600 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — Details */}
                  <div>
                    {/* About box */}
                    <div style={{
                      background: '#fff',
                      border: '4px solid #111',
                      borderRadius: 8,
                      padding: '18px 20px',
                      boxShadow: '6px 6px 0 #111',
                      marginBottom: 14,
                    }}>
                      <p style={{ fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#111', marginBottom: 10, borderBottom: '2px solid #111', paddingBottom: 8 }}>
                        About
                      </p>
                      <p style={{ fontSize: 13.5, color: '#333', lineHeight: 1.7 }}>
                        {selectedProject.details}
                      </p>
                    </div>

                    {/* Status box */}
                    <div style={{
                      background: '#111',
                      border: '4px solid #111',
                      borderRadius: 8,
                      padding: '14px 20px',
                      boxShadow: '6px 6px 0 #555',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <div>
                        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>Status</p>
                        <p style={{ fontSize: 16, fontWeight: 900, color: '#fef9c3' }}>{selectedProject.tag}</p>
                      </div>
                      <Starburst color={selectedProject.bg} size={42} />
                    </div>
                  </div>
                </div>

                {/* ── Bottom CTA bar ── */}
             {/* ── Bottom CTA bar ── */}

             {selectedProject.isPrivate ? (
  <div style={{
    background: '#111',
    border: '4px solid #111',
    borderRadius: 8,
    padding: '18px 24px',
    boxShadow: '6px 6px 0 #111',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  }}>
    <div style={{
      fontSize: 32,
      background: '#fef9c3',
      width: 52, height: 52,
      border: '3px solid #fef9c3',
      borderRadius: 8,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>🔒</div>
    <div>
      <p style={{ fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fef9c3', marginBottom: 4 }}>
        Private Project
      </p>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0, maxWidth: 500 }}>
        This project was built for a real client under a confidentiality agreement. Source code and live demo are not publicly available.
      </p>
    </div>
  </div>
) : (
<div
  style={{
    background: selectedProject.accent,
    border: '4px solid #111',
    borderRadius: 8,
    padding: '18px 24px',
    boxShadow: '6px 6px 0 #111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
  }}
>
  <div>
    <p
      style={{
        fontSize: 11,
        color: 'rgba(255,255,255,0.7)',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
      }}
    >
      {'View the project'}
    </p>

    <p
      style={{
        fontSize: 22,
        fontWeight: 900,
        color: '#fff',
        textShadow: '2px 2px 0 #111',
      }}
    >
      {selectedProject.liveUrl || 'Coming Soon'}
    </p>
  </div>

  <div
    style={{
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
    }}
  >
    {/* Live */}
    <a
      href={selectedProject.liveUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!selectedProject.liveUrl) e.preventDefault();
      }}
      style={{
        background: '#fef9c3',
        color: '#111',
        border: '3px solid #111',
        borderRadius: 6,
        padding: '12px 22px',
        fontWeight: 900,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        cursor: selectedProject.liveUrl
          ? 'pointer'
          : 'not-allowed',
        boxShadow: '4px 4px 0 #111',
        textDecoration: 'none',
        opacity: selectedProject.liveUrl ? 1 : 0.4,
        display: 'inline-block',
      }}
    >
      {'View Live ↗'}
    </a>

    {/* Frontend */}
    <a
      href={selectedProject.githubUrl.frontend || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (!selectedProject.githubUrl.frontend)
          e.preventDefault();
      }}
      style={{
        background: '#111',
        color: '#fef9c3',
        border: '3px solid #111',
        borderRadius: 6,
        padding: '12px 22px',
        fontWeight: 900,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        cursor: selectedProject.githubUrl.frontend
          ? 'pointer'
          : 'not-allowed',
        boxShadow: '4px 4px 0 #555',
        textDecoration: 'none',
        opacity: selectedProject.githubUrl.frontend
          ? 1
          : 0.4,
        display: 'inline-block',
      }}
    >
      {'Frontend ↗'}
    </a>

    {/* Backend */}
    {selectedProject.githubUrl.backend && (
      <a
        href={selectedProject.githubUrl.backend}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#27272a',
          color: '#fef9c3',
          border: '3px solid #111',
          borderRadius: 6,
          padding: '12px 22px',
          fontWeight: 900,
          fontSize: 13,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          cursor: 'pointer',
          boxShadow: '4px 4px 0 #555',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        {'Backend ↗'}
      </a>
    )}
  </div>
</div>
)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───────── GALLERY MODAL ───────── */}
{/* ───────── GALLERY MODAL ───────── */}
{/* ───────── GALLERY MODAL ───────── */}
{/* ───────── GALLERY MODAL ───────── */}
<AnimatePresence>
  {galleryProject && (() => {

    // ✅ الحل هنا
    const gallery = galleryProject.gallery || [];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setGalleryProject(null)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 70,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: 1500,
            height: '88vh',
            position: 'relative',
            background: '#fef9c3',
            border: '5px solid #111',
            borderRadius: 10,
            overflow: 'hidden',
            boxShadow: '14px 14px 0 #111',
          }}
        >

          {/* CLOSE */}
          <button
            onClick={() => setGalleryProject(null)}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              zIndex: 100,
              width: 48,
              height: 48,
              borderRadius: 8,
              border: '3px solid #111',
              background: '#111',
              color: '#fff',
              fontWeight: 900,
              fontSize: 20,
              cursor: 'pointer',
            }}
          >
            ✕
          </button>

          {/* ───── PARENT GALLERY ───── */}
          <div
            id="parent-gallery"
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              width: '100%',
              height: '100%',
              scrollbarWidth: 'none',
            }}
          >
            {gallery.map((section, sectionIndex) => {
              const activeIndex =
                activeGalleryIndexes[sectionIndex] || 0;

              return (
                <div
                  key={sectionIndex}
                  style={{
                    minWidth: '100%',
                    height: '100%',
                    scrollSnapAlign: 'start',
                    padding: '28px 90px',
                    overflowY: 'auto',
                  }}
                >

                  {/* TITLE */}
                  <h2 style={{
                    fontSize: 'clamp(34px,4vw,62px)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: '#111',
                  }}>
                    {section.title}
                  </h2>

                  {/* IMAGE */}
                  <div style={{ marginTop: 20 }}>
                    <img
                      src={section.images[activeIndex]}
                      style={{
                        width: '100%',
                        borderRadius: 8,
                        border: '4px solid #111',
                      }}
                    />
                  </div>

                  {/* TEXT */}
                  <ul style={{ marginTop: 20 }}>
                    {section.text.map((item, i) => (
                      <li key={i} style={{ marginBottom: 8 }}>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              );
            })}
          </div>

        </motion.div>
      </motion.div>
    );

  })()}
</AnimatePresence>
    </section>
  );
}