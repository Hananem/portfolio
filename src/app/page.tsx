"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import Experience from "@/components/experience"
import Intro from "@/components/intro"
import About from "@/components/about"
import HireMe from "@/components/hire"
import MyProjects from "@/components/projects"
import SkillsSection from "@/components/skills"
import QuoteSection from "@/components/last"
import HeroSection from "@/components/herosection"

const CODE_WORDS = [
  "React", "useState", "API", "async", "TypeScript", "useEffect",
  "CSS", "Git", "Node.js", "Redux", "MongoDB", "REST",
  "GraphQL", "Docker", "Tailwind", "Next.js", "Python", "SQL",
  "JSON", "OAuth", "Webpack", "Vite", "Linux", "Bash",
  "forEach", "Promise", "useRef", "fetch()", "npm", "CI/CD",
  "UI/UX", "CORS", "JWT", "WebSocket", "Axios", "ESLint",
];

const CARD_COLORS = [
  { bg: "#10637D", text: "#ffffff" },
  { bg: "#E34256", text: "#ffffff" },
  { bg: "#1a1a2e", text: "#ffffff" },
  { bg: "#2d6a4f", text: "#ffffff" },
  { bg: "#7B2D8B", text: "#ffffff" },
  { bg: "#c77d12", text: "#ffffff" },
  { bg: "#1b4f72", text: "#ffffff" },
  { bg: "#922b21", text: "#ffffff" },
];

let cardIdCounter = 0;

interface Card {
  id: number;
  x: number;
  y: number;
  color: { bg: string; text: string };
  word: string;
  rotate: number;
  delay: number;
}

function MouseCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 6,
        top: pos.y - 6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "#E34256",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "multiply",
        transition: "left 0.05s, top 0.05s",
      }}
    />
  );
}

// ─── Hero content: dot bounces then letters burst from it ─────────────────────
function HeroContent() {
  const dotControls = useAnimation();
  const [lettersVisible, setLettersVisible] = useState(false);

  useEffect(() => {
    async function run() {
      // سقوط الكرة
      await dotControls.start({
        y: 0,
        scaleX: 1,
        scaleY: 1,
        transition: {
          duration: 0.65,
          ease: [0.55, 0, 1, 0.45],
        },
      });

      // squash
      await dotControls.start({
        scaleX: 1.6,
        scaleY: 0.5,
        transition: { duration: 0.07 },
      });

      await dotControls.start({
        scaleX: 1,
        scaleY: 1,
        transition: { duration: 0.06 },
      });

      // الارتدادات
      const bounces = [
        { up: -140, dur: 0.28 },
        { up: -70, dur: 0.2 },
        { up: -30, dur: 0.14 },
        { up: -10, dur: 0.1 },
      ];

      for (const b of bounces) {
        await dotControls.start({
          y: b.up,
          scaleX: 0.88,
          scaleY: 1.15,
          transition: {
            duration: b.dur,
            ease: "easeOut",
          },
        });

        await dotControls.start({
          y: 0,
          scaleX: 1.45,
          scaleY: 0.6,
          transition: {
            duration: b.dur * 0.85,
            ease: "easeIn",
          },
        });

        await dotControls.start({
          scaleX: 1,
          scaleY: 1,
          transition: { duration: 0.06 },
        });
      }

      // انزلاق الكرة لليمين
      await dotControls.start({
        x: [0, 355, 335],
        y: [0, 3, 1],
        transition: {
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      // ظهور الاسم من الكرة
      setLettersVisible(true);
    }

    run();
  }, [dotControls]);

  const name = "Hana Nemsi";
  const chars = name.split("");

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {/* الحروف */}
      {chars.map((char, i) => {
        const isSpace = char === " ";

        return (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: 320,
            }}
            animate={
              lettersVisible
                ? {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              delay: i * 0.055,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
           style={{
  display: "inline-block",
  fontFamily: "ChunkyRetro, serif",
  color: "#e6c005",
  fontSize: "clamp(80px, 12vw, 280px)",
  lineHeight: 1,
  width: isSpace ? "0.3em" : undefined,
  transformOrigin: "center center",
 textShadow: `
  2px 2px 0 #fcfceb,
  4px 4px 0 #f4f5d3,
  6px 6px 0 #fcfce8,
  8px 8px 0 #f4f5d3,
  10px 10px 0 #fcfceb
`,
}}
          >
            {isSpace ? "\u00A0" : char}
          </motion.span>
        );
      })}

      {/* الكرة */}
      <motion.div
        animate={dotControls}
        initial={{
          y: "-50vh",
          scaleX: 1,
          scaleY: 1,
          x: 0,
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          width: "clamp(16px, 2.2vw, 38px)",
          height: "clamp(16px, 2.2vw, 38px)",
          borderRadius: "50%",
          background: "#e6c005",
          
          zIndex: 30,
        }}
      />
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wordIndexRef = useRef(0);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowModal(true), 1000);
    const hideTimer = setTimeout(() => setShowModal(false), 10000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const spawnCards = useCallback((x: number, y: number) => {
    const count = Math.floor(Math.random() * 2) + 2;
    const newCards: Card[] = Array.from({ length: count }, (_, i) => {
      const colorIndex = Math.floor(Math.random() * CARD_COLORS.length);
      const word = CODE_WORDS[wordIndexRef.current % CODE_WORDS.length];
      wordIndexRef.current++;
      return {
        id: ++cardIdCounter,
        x: x + (Math.random() - 0.5) * 60,
        y: y + (Math.random() - 0.5) * 40,
        color: CARD_COLORS[colorIndex],
        word,
        rotate: (Math.random() - 0.5) * 18,
        delay: i * 0.04,
      };
    });
    setCards((prev) => [...prev.slice(-16), ...newCards]);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 30) {
        lastPos.current = { x, y };
        spawnCards(x, y);
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCards([]), 500);
    },
    [spawnCards]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#011a14] text-emerald-50">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
     <HeroSection />
      {/* ─────────────────────────────────────────────────────────────────── */}

      <Intro />
      <div>
        <About />
      </div>

      <Experience />

     <QuoteSection />
      <SkillsSection />
      <MyProjects />
      <HireMe />
    </main>
  );
}