"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function HeroContent() {
  const dotControls = useAnimation();
  const [lettersVisible, setLettersVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function run() {
      // حساب المسافة بناء على عرض الشاشة
      const slideDistance = window.innerWidth < 640
        ? window.innerWidth * 0.28
        : window.innerWidth < 1024
        ? window.innerWidth * 0.22
        : 355;

      await dotControls.start({
        y: 0, scaleX: 1, scaleY: 1,
        transition: { duration: 0.65, ease: [0.55, 0, 1, 0.45] },
      });

      await dotControls.start({ scaleX: 1.6, scaleY: 0.5, transition: { duration: 0.07 } });
      await dotControls.start({ scaleX: 1, scaleY: 1, transition: { duration: 0.06 } });

      const bounces = [
        { up: -140, dur: 0.28 },
        { up: -70,  dur: 0.2  },
        { up: -30,  dur: 0.14 },
        { up: -10,  dur: 0.1  },
      ];

      for (const b of bounces) {
        await dotControls.start({
          y: b.up, scaleX: 0.88, scaleY: 1.15,
          transition: { duration: b.dur, ease: "easeOut" },
        });
        await dotControls.start({
          y: 0, scaleX: 1.45, scaleY: 0.6,
          transition: { duration: b.dur * 0.85, ease: "easeIn" },
        });
        await dotControls.start({ scaleX: 1, scaleY: 1, transition: { duration: 0.06 } });
      }

      await dotControls.start({
        x: [0, slideDistance, slideDistance - 20],
        y: [0, 3, 1],
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      });

      setLettersVisible(true);
    }

    run();
  }, [dotControls]);

  const name = "Hana Nemsi";
  const chars = name.split("");

  // حساب x الابتدائي للحروف بناء على الشاشة
  const initialX = typeof window !== "undefined"
    ? window.innerWidth < 640
      ? -window.innerWidth * 0.28
      : window.innerWidth < 1024
      ? -window.innerWidth * 0.22
      : -335
    : -335;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        pointerEvents: "none",
        userSelect: "none",
        flexWrap: "nowrap",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* الحروف */}
      {chars.map((char, i) => {
        const isSpace = char === " ";
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0, x: initialX }}
            animate={lettersVisible ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{
              delay: i * 0.055,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "inline-block",
              fontFamily: "ChunkyRetro, serif",
              color: "#10637D",
              fontSize: "clamp(32px, 10vw, 220px)",
              lineHeight: 1,
              width: isSpace ? "0.3em" : undefined,
              transformOrigin: "center center",
            }}
          >
            {isSpace ? "\u00A0" : char}
          </motion.span>
        );
      })}

      {/* الكرة */}
      <motion.div
        animate={dotControls}
        initial={{ y: "-50vh", scaleX: 1, scaleY: 1, x: 0 }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          width: "clamp(12px, 2.2vw, 38px)",
          height: "clamp(12px, 2.2vw, 38px)",
          borderRadius: "50%",
          background: "#10637D",
          zIndex: 30,
        }}
      />
    </div>
  );
}

export default HeroContent;