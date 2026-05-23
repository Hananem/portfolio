'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: 'Who Am I?',
    description:
      'A self-taught fullstack developer from Algeria — started coding in June 2021 and never stopped. I build real products for real clients, not just tutorial projects.',
    bg: '#7C5CBF',
    color: '#fff',
    accent: '#f5c842',
  },
  {
    id: 2,
    title: 'My Journey',
    description:
      'From YouTube tutorials to 18,000-user production apps. I went from zero to freelancing in under 4 years — working with real teams, real deadlines and real clients .',
    bg: '#E8394D',
    color: '#fff',
    accent: '#fff',
  },
  {
    id: 3,
    title: 'Frontend Stack',
    description:
      'React, Next.js, TypeScript, Tailwind, Redux Toolkit, TanStack Query, React Hook Form, Framer Motion, GSAP — I care about every pixel and every animation.',
    bg: '#F5C842',
    color: '#1a1a1a',
    accent: '#E8394D',
  },
  {
    id: 4,
    title: 'Backend Stack',
    description:
      'Node.js, Express, NestJS, Neon DB, PostgreSQL — I build my own APIs, design database schemas and connect everything together. I ship fullstack.',
    bg: '#3AB8A8',
    color: '#fff',
    accent: '#F5C842',
  },
  {
    id: 5,
    title: 'Fullstack Projects',
    description:
      'Jobify — a fullstack job board built in 4 months. Vidly — a video platform with real-time Socket.io notifications. Industrial ERP — built with NestJS and Neon DB. End-to-end, alone.',
    bg: '#E8823A',
    color: '#fff',
    accent: '#fff',
  },
  {
    id: 6,
    title: 'How I Work',
    description:
      'I collaborate with backend developers, communicate directly with clients, respect deadlines and use Git and GitHub for clean team workflows. Both in teams and solo.',
    bg: '#4A7FB5',
    color: '#fff',
    accent: '#F5C842',
  },
  {
    id: 7,
    title: 'My Vision',
    description:
      'To keep shipping real products that solve real problems. I want to grow into a developer who builds things that scale globally and matter to people.',
    bg: '#A0C878',
    color: '#1a1a1a',
    accent: '#E8394D',
  },
];

const StarIcon = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
  </svg>
);

const CircleIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const About: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotate: 0 },
          {
            y: 0,
            opacity: 1,
            rotate: index % 2 === 0 ? -1.5 : 1.5,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background: '#111111',
        minHeight: '100vh',
        padding: '80px 24px 120px',
        fontFamily: "'Space Grotesk', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle noise texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(124,92,191,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(232,57,77,0.06) 0%, transparent 50%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>

        {/* Label */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <span style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            padding: '6px 20px',
            borderRadius: 999,
          }}>
            About Me
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
          fontWeight: 900,
          textAlign: 'center',
          color: '#ffffff',
          marginBottom: '3.5rem',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
        }}>
          Who&apos;s Behind the Code?
        </h2>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              style={{
                background: card.bg,
                borderRadius: 20,
                padding: '28px 32px',
                opacity: 0,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              {/* Decorative elements */}
              <div style={{ position: 'absolute', top: 16, right: 20, display: 'flex', gap: 8, alignItems: 'center' }}>
                <StarIcon color={card.accent} />
                {index % 3 === 0 && <CircleIcon color={card.accent} />}
              </div>

              {/* Card number */}
              <span style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: card.color,
                opacity: 0.45,
                display: 'block',
                marginBottom: 10,
              }}>
                0{card.id}
              </span>

              <h3 style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                fontWeight: 900,
                color: card.color,
                marginBottom: 10,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: '0.97rem',
                color: card.color,
                lineHeight: 1.7,
                margin: 0,
                opacity: 0.88,
                maxWidth: 560,
              }}>
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                background: card.accent,
                opacity: 0.5,
                borderRadius: '0 0 20px 20px',
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;