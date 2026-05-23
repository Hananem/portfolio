"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const passionRef = useRef<HTMLSpanElement>(null);

  // Kite motion values driven manually each frame
  const kiteX      = useMotionValue(-200);
  const kiteY      = useMotionValue(0);
  const kiteRotate = useMotionValue(0);
  const kiteScale  = useMotionValue(0.5);
  const kiteOp     = useMotionValue(0);

  // Landing target (computed once after mount)
  const landTarget = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    function computeTarget() {
      if (!sectionRef.current || !passionRef.current) return;
      const sr = sectionRef.current.getBoundingClientRect();
      const pr = passionRef.current.getBoundingClientRect();
      landTarget.current = {
        // center of "passion" horizontally, just above it
        x: pr.left - sr.left + pr.width / 2 - 55,
        y: pr.top  - sr.top  - 80,
      };
    }
    // compute on mount and on resize
    computeTarget();
    window.addEventListener("resize", computeTarget);
    return () => window.removeEventListener("resize", computeTarget);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 15,
    restDelta: 0.001,
  });

  const accSpin = useRef(0);
  const lastT   = useRef(0);

  useAnimationFrame(() => {
    const section = sectionRef.current;
    if (!section) return;

    const W = section.offsetWidth;
    const H = section.offsetHeight;
    const t = smooth.get();
    const dt = Math.abs(t - lastT.current);
    lastT.current = t;

    // ─── opacity: fade in quickly ───
    kiteOp.set(Math.min(1, t / 0.08));

    // ─── LANDING: last 15% of scroll ───
    if (t >= 0.85 && landTarget.current) {
      const lp   = Math.min(1, (t - 0.85) / 0.15); // 0→1
      const ease = 1 - Math.pow(1 - lp, 3);          // ease-out cubic

      // where the flight path ends (t=0.85)
      const flightEndX = 0.75 * W - 55;
      const flightEndY = 0.05 * H - 55;

      const tx = landTarget.current.x;
      const ty = landTarget.current.y;

      kiteX.set(flightEndX + (tx - flightEndX) * ease);
      kiteY.set(flightEndY + (ty - flightEndY) * ease);

      // level out rotation as it lands
      const currentSpin = accSpin.current % 360;
      kiteRotate.set(currentSpin * (1 - ease));
      kiteScale.set(0.95 + 0.05 * (1 - ease));

    } else {
      // ─── FLIGHT: curved S-path across section ───
      accSpin.current += dt * 500;

      // S-shaped parametric path (t: 0→0.85 mapped to st: 0→1)
      const st = t / 0.85;

      // X: left→right sweep
      const x = (-0.1 + st * 1.2) * W - 55;

      // Y: S-curve using sine — dips then rises
      const y = (
        0.85                          // start near bottom
        - st * 0.9                    // general upward trend
        + Math.sin(st * Math.PI) * 0.35  // the S belly
      ) * H - 55;

      kiteX.set(x);
      kiteY.set(y);
      kiteRotate.set(accSpin.current);
      kiteScale.set(0.8 + Math.sin(st * Math.PI * 3) * 0.15);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-white overflow-hidden"
    >
      {/* Decorative shape */}
      <Image
        src="/images/shape7.png"
        alt="shape"
        width={64}
        height={64}
        className="absolute top-33 left-1/2 -translate-x-1/2 z-20"
      />

      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* ── Kite ── */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 110,
          height: 110,
          x: kiteX,
          y: kiteY,
          rotate: kiteRotate,
          scale: kiteScale,
          opacity: kiteOp,
          zIndex: 15,
          pointerEvents: "none",
          transformOrigin: "55px 55px",
          filter: "drop-shadow(3px 6px 14px rgba(0,0,0,0.22))",
        }}
      >
        <Image
          src="/images/sticker1.png"
          alt="kite"
          width={110}
          height={110}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* ── Text content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <p
          className="text-center text-6xl md:text-[120px] leading-[1] text-black max-w-7xl font-black tracking-[-0.04em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Built with code, driven by{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2">creativity</span>
            <span className="absolute left-0 bottom-[10%] w-full h-[0.55em] bg-pink-200 -rotate-2 rounded-sm" />
          </span>
          , powered by{" "}
          <span ref={passionRef} className="relative inline-block">
            passion
          </span>
          .
        </p>

        <div className="relative mt-[-10px] ml-10 flex justify-start">
          <div
            className="relative bg-[#9DB154] text-[#141a38] px-2 py-2 shadow-md max-w-xs text-center"
          >
            <p
              className="text-sm md:text-base"
              style={{ fontFamily: "'Share Tech', sans-serif" }}
            >
              &quot;Great design is not what you see, it&apos;s what you feel.&quot;
            </p>
            <div
              className="absolute -top-[10px] left-[62%] w-0 h-0"
              style={{
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "10px solid #9DB154",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}