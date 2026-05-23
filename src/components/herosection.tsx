"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  x: number;
  y: number;
  color: { bg: string; text: string };
  word: string;
  rotate: number;
  delay: number;
}

const CODE_WORDS = [
  "React",
  "useState",
  "API",
  "async",
  "TypeScript",
  "useEffect",
  "CSS",
  "Git",
  "Node.js",
  "Redux",
  "MongoDB",
  "REST",
  "GraphQL",
  "Docker",
  "Tailwind",
  "Next.js",
  "Python",
  "SQL",
  "JSON",
  "fetch()",
  "npm",
  "CI/CD",
  "UI/UX",
  "JWT",
];

const CARD_COLORS = [
  { bg: "#FF5A14", text: "#fff7f2" },
  { bg: "#F7E7DB", text: "#FF5A14" },
  { bg: "#F2B4D8", text: "#5E4052" },
];

const TICKER_TEXT =
  "HANA NEMSI • FRONT-END DEV • REACT • NEXT.JS • TYPESCRIPT • UI/UX • NODE.JS • OPEN TO WORK •    ";

let cardIdCounter = 0;

function MouseCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 8,
        top: pos.y - 8,
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "#FF5A14",
        border: "2px solid #fff6ef",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}

function TickerBar() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "10px 0",
        zIndex: 20,
      }}
    >
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        style={{
          display: "inline-block",
          fontFamily: "'Baloo 2', cursive",
          color: "#FF5A14",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        {TICKER_TEXT.repeat(5)}
      </motion.div>
    </div>
  );
}

function StickerBadge() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: -10 }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 10,
      }}
      style={{
        position: "absolute",
        left: "clamp(10px, 3vw, 40px)",
        bottom: "clamp(60px, 10vh, 120px)",
        zIndex: 30,
      }}
    >
      <div
        style={{
          background: "#FF5A14",
          borderRadius: "999px",
          padding:
            "clamp(14px, 2vw, 28px) clamp(16px, 2.5vw, 32px)",
          border: "5px solid #F6E7DC",
          boxShadow: "0 0 0 5px #F4B6D8",
        }}
      >
        <div
          style={{
            fontFamily: "'Baloo 2', cursive",
            color: "#FFF8F2",
            fontSize: "clamp(14px, 2.5vw, 28px)",
            lineHeight: 1,
            textAlign: "center",
            fontWeight: 800,
            textShadow: "2px 2px 0 #D84A11",
          }}
        >
          FRONT-END
          <br />
          DEVELOPER
        </div>
      </div>
    </motion.div>
  );
}

function NameSticker() {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, rotate: -4 }}
      animate={{ scale: 1, opacity: 1, rotate: -4 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1100px",
        aspectRatio: "800 / 380",
      }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter
            id="cream-outline"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="45"
              result="big"
            />
            <feMorphology
              in="big"
              operator="erode"
              radius="32"
              result="eroded"
            />
            <feMorphology
              in="eroded"
              operator="dilate"
              radius="32"
              result="bumpy"
            />
            <feGaussianBlur
              in="bumpy"
              stdDeviation="2"
              result="blurred"
            />
            <feComponentTransfer
              in="blurred"
              result="clipped"
            >
              <feFuncA
                type="discrete"
                tableValues="0 1"
              />
            </feComponentTransfer>
            <feFlood
              floodColor="#fae6f2"
              result="cream"
            />
            <feComposite
              in="cream"
              in2="clipped"
              operator="in"
              result="cream-shape"
            />
            <feMerge>
              <feMergeNode in="cream-shape" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div
        className="relative z-10 text-center"
        style={{ padding: "0 20px" }}
      >
        <h1
          style={{
            fontFamily: "ChunkyRetro, sans-serif",
            fontSize: "clamp(60px, 18vw, 340px)",
            lineHeight: "0.82",
            fontWeight: "400",
            color: "#FFB3E1",
            letterSpacing: "-0.035em",
            WebkitTextStroke: "2.8px #FF5C2D",
            paintOrder: "stroke fill",
            filter: "url(#cream-outline)",
            textShadow: `
              3px 3px 0 #FF5C2D,
              6px 6px 0 #FF5C2D,
              9px 9px 0 #FF5C2D,
              12px 12px 0 #FF5C2D,
              15px 15px 0 #FF5C2D,
              18px 18px 0 #FF5C2D,
              21px 21px 0 #FF5C2D,
              24px 24px 0 #FF5C2D
            `,
          }}
        >
          Hana
          <br />
          Nemsi
        </h1>
      </div>
    </motion.div>
  );
}

function Tagline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      style={{
        position: "relative",
        marginTop: 50,
      }}
    >
      <div
        style={{
          fontFamily: "'Baloo 2', cursive",
          color: "#FF5A14",
          fontSize: "clamp(14px, 2vw, 42px)",
          lineHeight: 1,
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        ✦ BUILDING BEAUTIFUL INTERFACES ✦
      </div>

      <div
        style={{
          position: "absolute",
          width: "105%",
          height: 55,
          border: "4px solid #F6E7DC",
          borderRadius: 999,
          left: "-2%",
          bottom: -8,
          transform: "rotate(-4deg)",
        }}
      />
    </motion.div>
  );
}

export default function HeroSection() {
  const [cards, setCards] = useState<Card[]>([]);

  const lastPos = useRef({ x: 0, y: 0 });

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const wordIndexRef = useRef(0);

  const spawnCards = useCallback((x: number, y: number) => {
    const count = 2;

    const newCards: Card[] = Array.from(
      { length: count },
      (_, i) => {
        const colorIndex = Math.floor(
          Math.random() * CARD_COLORS.length
        );

        const word =
          CODE_WORDS[
            wordIndexRef.current % CODE_WORDS.length
          ];

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
      }
    );

    setCards((prev) => [...prev.slice(-18), ...newCards]);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect =
        sectionRef.current?.getBoundingClientRect();

      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;

      if (Math.sqrt(dx * dx + dy * dy) < 28) return;

      lastPos.current = { x, y };

      spawnCards(x, y);

      if (timeoutRef.current)
        clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(
        () => setCards([]),
        600
      );
    },
    [spawnCards]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');

        * {
          cursor: none;
        }
      `}</style>

      <MouseCursor />

      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background: "#E7A3D1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "120px 20px 80px",
        }}
      >
        <TickerBar />

        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{
                opacity: 0,
                scale: 0.5,
                x: card.x - 40,
                y: card.y - 20,
                rotate: card.rotate - 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: card.x - 40,
                y: card.y - 20,
                rotate: card.rotate,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                y: card.y - 50,
              }}
              transition={{
                duration: 0.25,
                delay: card.delay,
              }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                padding: "8px 14px",
                borderRadius: 999,
                background: card.color.bg,
                color: card.color.text,
                fontFamily: "'Baloo 2', cursive",
                fontSize: 16,
                fontWeight: 800,
                zIndex: 50,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {card.word}
            </motion.div>
          ))}
        </AnimatePresence>

        <StickerBadge />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NameSticker />

          <Tagline />

         
        </div>
      </section>
    </>
  );
}