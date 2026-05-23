'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  id: number;
  title: string;
  description: string;
  bg: string;
  rotation: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: 'Who Am I?',
    description:
      'A self-taught fullstack developer from Algeria — started coding in June 2021 and never stopped. I build real products for real clients, not just tutorial projects.',
    bg: '#aecfc8',
    rotation: '-3deg',
  },
  {
    id: 2,
    title: 'My Journey',
    description:
      'From YouTube tutorials to 18,000-user production apps. I went from zero to freelancing in under 4 years — working with real teams, real deadlines and real clients across Algeria and Egypt.',
    bg: '#ffffff',
    rotation: '3deg',
  },
  {
    id: 3,
    title: 'Frontend Stack',
    description:
      'React, Next.js, TypeScript, Tailwind, Redux Toolkit, TanStack Query, React Hook Form, Framer Motion, GSAP — I care about every pixel and every animation.',
    bg: '#c1cfae',
    rotation: '-2.5deg',
  },
  {
    id: 4,
    title: 'Backend Stack',
    description:
      'Node.js, Express, NestJS, Neon DB, PostgreSQL — I build my own APIs, design database schemas and connect everything together. I am not just a frontend dev who touches the backend, I ship fullstack.',
    bg: '#aecfc8',
    rotation: '2deg',
  },
  {
    id: 5,
    title: 'Fullstack Projects',
    description:
      'Jobify — a fullstack job board built in 4 months with React and Express. Videoly — a video platform with real-time notifications via Socket.io. Industrial ERP — built with NestJS and Neon DB. I build end-to-end, alone.',
    bg: '#ffffff',
    rotation: '-2deg',
  },
  {
    id: 6,
    title: 'How I Work',
    description:
      'I collaborate with backend developers, communicate directly with clients, respect deadlines and use Git and GitHub for clean team workflows. I have worked in real teams and solo — both.',
    bg: '#c1cfae',
    rotation: '2.5deg',
  },
  {
    id: 7,
    title: 'My Vision',
    description:
      'To keep shipping real products that solve real problems — like SubsManager, born from a simple frustration. I want to grow into a developer who builds things that scale globally and matter to people.',
    bg: '#aecfc8',
    rotation: '-2deg',
  },
];

const cloudDefs = [
  { id: 'cl1',  dur: 26, xA: 50, yBase: 200,  scrubY: -35, scrub: 1.0, style: { width: 220, left:  60,   top:  200, opacity: 0.92 } },
  { id: 'cl2',  dur: 34, xA: 38, yBase: 160,  scrubY: -40, scrub: 1.2, style: { width: 260, left:  820,  top:  160, opacity: 0.88 } },
  { id: 'cl3',  dur: 21, xA: 28, yBase: 100,  scrubY: -30, scrub: 0.9, style: { width: 170, left:  420,  top:  100, opacity: 0.80 } },
  { id: 'cl4',  dur: 31, xA: 58, yBase: 500,  scrubY: -45, scrub: 1.3, style: { width: 195, left:  10,   top:  500, opacity: 0.74 } },
  { id: 'cl5',  dur: 37, xA: 44, yBase: 420,  scrubY: -38, scrub: 1.0, style: { width: 235, left:  950,  top:  420, opacity: 0.82 } },
  { id: 'cl6',  dur: 19, xA: 34, yBase: 70,   scrubY: -28, scrub: 0.8, style: { width: 140, left:  700,  top:   70, opacity: 0.70 } },
  { id: 'cl7',  dur: 41, xA: 48, yBase: 780,  scrubY: -50, scrub: 1.5, style: { width: 275, left:  370,  top:  780, opacity: 0.65 } },
  { id: 'cl8',  dur: 29, xA: 65, yBase: 360,  scrubY: -42, scrub: 1.1, style: { width: 185, left: -40,   top:  360, opacity: 0.60 } },
  { id: 'cl9',  dur: 35, xA: 38, yBase: 600,  scrubY: -33, scrub: 1.0, style: { width: 200, left: 1100,  top:  600, opacity: 0.63 } },
  { id: 'cl10', dur: 17, xA: 24, yBase: 50,   scrubY: -25, scrub: 0.7, style: { width: 120, left:  260,  top:   50, opacity: 0.55 } },
  { id: 'cl11', dur: 45, xA: 55, yBase: 1100, scrubY: -55, scrub: 1.6, style: { width: 240, left:  580,  top: 1100, opacity: 0.60 } },
  { id: 'cl12', dur: 48, xA: 42, yBase: 1300, scrubY: -48, scrub: 1.4, style: { width: 210, left:  130,  top: 1300, opacity: 0.55 } },
  { id: 'cl13', dur: 32, xA: 46, yBase: 900,  scrubY: -36, scrub: 1.0, style: { width: 155, left:  480,  top:  900, opacity: 0.68 } },
  { id: 'cl14', dur: 27, xA: 30, yBase: 650,  scrubY: -30, scrub: 0.9, style: { width: 290, left:  150,  top:  650, opacity: 0.58 } },
  { id: 'cl15', dur: 39, xA: 52, yBase: 1050, scrubY: -44, scrub: 1.2, style: { width: 175, left:  870,  top: 1050, opacity: 0.62 } },
  { id: 'cl16', dur: 23, xA: 36, yBase: 280,  scrubY: -32, scrub: 1.0, style: { width: 145, left:  560,  top:  280, opacity: 0.72 } },
  { id: 'cl17', dur: 44, xA: 60, yBase: 840,  scrubY: -52, scrub: 1.4, style: { width: 255, left: 1020,  top:  840, opacity: 0.56 } },
  { id: 'cl18', dur: 20, xA: 22, yBase: 130,  scrubY: -22, scrub: 0.7, style: { width: 110, left:  750,  top:  130, opacity: 0.50 } },
  { id: 'cl19', dur: 36, xA: 40, yBase: 1200, scrubY: -46, scrub: 1.3, style: { width: 230, left:  320,  top: 1200, opacity: 0.57 } },
  { id: 'cl20', dur: 50, xA: 48, yBase: 1450, scrubY: -60, scrub: 1.6, style: { width: 200, left:  700,  top: 1450, opacity: 0.53 } },
];

const blimpDefs = [
  { id: 'blimp1', top: 300,  width: 220, flyDur: 58, flyDelay: 0,  bobY: 20, bobDur: 6.5, scrubY: -50, scrub: 1.5 },
  { id: 'blimp2', top: 700,  width: 160, flyDur: 72, flyDelay: 18, bobY: 15, bobDur: 8.0, scrubY: -40, scrub: 1.8 },
  { id: 'blimp3', top: 1150, width: 190, flyDur: 64, flyDelay: 35, bobY: 18, bobDur: 7.2, scrubY: -55, scrub: 1.3 },
];

const planeDefs = [
  { id: 'plane1', top: 180,  width: 180, flyDur: 26, flyDelay: 5,  bobY: 14, bobDur: 3.8, scrubY: -70, scrub: 0.8 },
  { id: 'plane2', top: 550,  width: 130, flyDur: 32, flyDelay: 12, bobY: 10, bobDur: 4.5, scrubY: -58, scrub: 1.0 },
  { id: 'plane3', top: 950,  width: 155, flyDur: 21, flyDelay: 2,  bobY: 12, bobDur: 3.2, scrubY: -65, scrub: 0.9 },
  { id: 'plane4', top: 1350, width: 115, flyDur: 38, flyDelay: 22, bobY: 8,  bobDur: 5.0, scrubY: -45, scrub: 1.2 },
];

const Sparkle = ({ size = 22, color = '#5a7a72' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
  </svg>
);

const badgeBg = (bg: string): string => {
  if (bg === '#aecfc8') return '#5a8a80';
  if (bg === '#c1cfae') return '#6a7d58';
  return '#2c2c2c';
};

const About: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = document.getElementById('about');
      const totalH = 1900;

      // ── clouds ──
      cloudDefs.forEach((c) => {
        const el = document.getElementById(c.id);
        if (!el) return;
        gsap.to(el, {
          x: `random(${-c.xA},${c.xA})`,
          duration: c.dur * 0.55,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: -(totalH + c.style.top + 120),
            duration: c.dur,
            ease: 'none',
            repeat: -1,
            delay: -c.dur * (c.style.top / totalH),
          },
        );
        gsap.to(el, {
          yPercent: c.scrubY,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: c.scrub,
          },
        });
      });

      // ── blimps ──
      blimpDefs.forEach((b) => {
        const el = document.getElementById(b.id);
        if (!el) return;
        gsap.fromTo(el, { x: -280 }, { x: 1480, duration: b.flyDur, ease: 'none', repeat: -1, delay: b.flyDelay });
        gsap.to(el, { y: b.bobY, duration: b.bobDur, ease: 'sine.inOut', repeat: -1, yoyo: true });
        gsap.to(el, {
          yPercent: b.scrubY,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: b.scrub,
          },
        });
      });

      // ── planes ──
      planeDefs.forEach((p) => {
        const el = document.getElementById(p.id);
        if (!el) return;
        gsap.fromTo(el, { x: -250 }, { x: 1520, duration: p.flyDur, ease: 'none', repeat: -1, delay: p.flyDelay });
        gsap.to(el, { y: p.bobY, duration: p.bobDur, ease: 'sine.inOut', repeat: -1, yoyo: true });
        gsap.to(el, {
          yPercent: p.scrubY,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: p.scrub,
          },
        });
      });

      // ── card tilt animation on scroll ──
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const targetRotation = cards[index].rotation;

        gsap.fromTo(
          card,
          { rotation: 0, y: 60, opacity: 0 },
          {
            rotation: parseFloat(targetRotation),
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    });

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="about" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Animated sky background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(180deg,#b8eaff 0%,#87CEEB 55%,#c8f0ff 100%)',
          pointerEvents: 'none',
        }}
      >
        {cloudDefs.map((c) => (
          <div
            key={c.id}
            id={c.id}
            style={{
              position: 'absolute',
              userSelect: 'none',
              pointerEvents: 'none',
              width: c.style.width,
              left: c.style.left,
              top: c.style.top,
              opacity: c.style.opacity,
            }}
          >
            <Image
              src="/images/cloud.png"
              alt=""
              width={c.style.width}
              height={80}
              style={{ width: '100%', height: 'auto' }}
              priority={false}
            />
          </div>
        ))}
        {blimpDefs.map((b) => (
          <div
            key={b.id}
            id={b.id}
            style={{
              position: 'absolute',
              top: b.top,
              left: 0,
              width: b.width,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/images/blimp.png"
              alt=""
              width={b.width}
              height={80}
              style={{ width: '100%', height: 'auto' }}
              priority={false}
            />
          </div>
        ))}
        {planeDefs.map((p) => (
          <div
            key={p.id}
            id={p.id}
            style={{
              position: 'absolute',
              top: p.top,
              left: 0,
              width: p.width,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/images/plane.png"
              alt=""
              width={p.width}
              height={60}
              style={{ width: '100%', height: 'auto' }}
              priority={false}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <section className="relative w-full py-20 px-4" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">

          {/* Pill label */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <span style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(6px)',
              color: '#2a3d38',
              fontWeight: 700,
              fontSize: '0.9rem',
              borderRadius: '999px',
              padding: '0.4rem 1.4rem',
              border: '1.5px solid rgba(255,255,255,0.7)',
              letterSpacing: '0.5px',
            }}>
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            textAlign: 'center',
            color: '#1a2e28',
            marginBottom: '3.5rem',
            lineHeight: 1.15,
          }}>
            Who&apos;s Behind the Code?
          </h2>

          {/* Stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                style={{
                  position: 'sticky',
                  top: `${5 + index * 1.5}rem`,
                  width: '100%',
                  maxWidth: '600px',
                  background: card.bg,
                  padding: '2rem 2rem 2.2rem',
                  marginBottom: index === cards.length - 1 ? '0' : '14vh',
                  zIndex: index + 1,
                  transform: 'rotate(0deg)',
                  opacity: 0,
                  boxSizing: 'border-box',
                  border: card.bg === '#ffffff' ? '1.5px solid #ddd' : 'none',
                }}
              >
                {/* Sparkles */}
                <div style={{ position: 'absolute', top: -12, left: 24 }}>
                  <Sparkle size={26} color={badgeBg(card.bg)} />
                </div>
                <div style={{ position: 'absolute', bottom: -10, right: 28 }}>
                  <Sparkle size={20} color={badgeBg(card.bg)} />
                </div>

                {/* Card content */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#111',
                      marginBottom: '0.4rem',
                      lineHeight: 1.2,
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontSize: '0.97rem',
                      color: '#111',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      &ldquo;{card.description}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[20vh]" />
      </section>
    </div>
  );
};

export default About;