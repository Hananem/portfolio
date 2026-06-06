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

// ─── مكون تحريك الكلمات المبتكر ───
const AnimatedWords = ({ passionRef }: { passionRef: React.RefObject<HTMLSpanElement | null> }) => {
  // تفكيك النص الكامل إلى كلمات منفصلة
  const phrase = "Built with code , driven by creativity , powered by passion .";
  const words = phrase.split(" ");

  // إعدادات تتابع الظهور (Stagger) لكل كلمة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // الوقت بين ظهور كل كلمة والملقبة لها
      },
    },
  };

  // حركة الكلمة الفردية: تظهر من الأسفل مع زاوية ميلان (Skew) مرنة
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      skewY: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="inline-flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2"
    >
      {words.map((word, index) => {
        // التعامل الخاص مع علامات الترقيم لمنع انفصالها بصرياً
        if (word === "," || word === ".") {
          return (
            <motion.span key={index} variants={wordVariants} className="text-black -ml-4 md:-ml-6">
              {word}
            </motion.span>
          );
        }

        // تمييز كلمة creativity بخلفية مميزة
        if (word === "creativity") {
          return (
            <motion.span key={index} variants={wordVariants} className="relative inline-block text-black">
              <span className="relative z-10 px-2">creativity</span>
              <span className="absolute left-0 bottom-[10%] w-full h-[0.45em] bg-pink-200 -rotate-2 rounded-sm" />
            </motion.span>
          );
        }

        // ربط الـ Ref الخاص بكلمة passion لتستهدفه الطائرة الورقية عند الهبوط
        if (word === "passion") {
          return (
            <motion.span
              key={index}
              ref={passionRef}
              variants={wordVariants}
              className="relative inline-block text-black font-extrabold italic"
            >
              passion
            </motion.span>
          );
        }

        // باقي الكلمات العادية
        return (
          <motion.span key={index} variants={wordVariants} className="inline-block text-black">
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const passionRef = useRef<HTMLSpanElement>(null);

  // قيم الحركة اليدوية للطائرة الورقية لكل إطار (Frame)
  const kiteX = useMotionValue(-200);
  const kiteY = useMotionValue(0);
  const kiteRotate = useMotionValue(0);
  const kiteScale = useMotionValue(0.5);
  const kiteOp = useMotionValue(0);

  // حساب إحداثيات الهبوط فوق كلمة passion
  const landTarget = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    function computeTarget() {
      if (!sectionRef.current || !passionRef.current) return;
      const sr = sectionRef.current.getBoundingClientRect();
      const pr = passionRef.current.getBoundingClientRect();
      landTarget.current = {
        x: pr.left - sr.left + pr.width / 2 - 55,
        y: pr.top - sr.top - 80,
      };
    }
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
  const lastT = useRef(0);

  useAnimationFrame(() => {
    const section = sectionRef.current;
    if (!section) return;

    const W = section.offsetWidth;
    const H = section.offsetHeight;
    const t = smooth.get();
    const dt = Math.abs(t - lastT.current);
    lastT.current = t;

    // تدرج الشفافية في البداية
    kiteOp.set(Math.min(1, t / 0.08));

    // مرحلة الهبوط (آخر 15% من السكرول)
    if (t >= 0.85 && landTarget.current) {
      const lp = Math.min(1, (t - 0.85) / 0.15);
      const ease = 1 - Math.pow(1 - lp, 3); // smooth ease-out cubic

      const flightEndX = 0.75 * W - 55;
      const flightEndY = 0.05 * H - 55;

      const tx = landTarget.current.x;
      const ty = landTarget.current.y;

      kiteX.set(flightEndX + (tx - flightEndX) * ease);
      kiteY.set(flightEndY + (ty - flightEndY) * ease);

      const currentSpin = accSpin.current % 360;
      kiteRotate.set(currentSpin * (1 - ease));
      kiteScale.set(0.95 + 0.05 * (1 - ease));
    } else {
      // مرحلة الطيران العشوائي (S-Curve)
      accSpin.current += dt * 500;
      const st = t / 0.85;
      const x = (-0.1 + st * 1.2) * W - 55;
      const y = (0.85 - st * 0.9 + Math.sin(st * Math.PI) * 0.35) * H - 55;

      kiteX.set(x);
      kiteY.set(y);
      kiteRotate.set(accSpin.current);
      kiteScale.set(0.8 + Math.sin(st * Math.PI * 3) * 0.15);
    }
  });

  return (
    <section ref={sectionRef} className="relative py-40 bg-white overflow-hidden">
      {/* أيقونة الشكل الهندسي الزخرفي */}
      <Image
        src="/images/shape7.png"
        alt="shape"
        width={64}
        height={64}
        className="absolute top-33 left-1/2 -translate-x-1/2 z-20"
      />

      {/* شبكة الخلفية المتقاطعة (Grid Background) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* ── الطائرة الورقية متحركة المحاور ── */}
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
          filter: "drop-shadow(3px 6px 14px rgba(0,0,0,0.18))",
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

      {/* ── المحتوى النصي التفاعلي ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <h2
          className="text-center text-5xl md:text-[90px] lg:text-[110px] leading-[1.1] max-w-7xl font-black tracking-[-0.04em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <AnimatedWords passionRef={passionRef} />
        </h2>

        {/* فقاعة الاقتباس الكلامية بظهور مطاطي ناعم (Pop-in) */}
        <motion.div
          initial={{ scale: 0, rotate: -8 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.6 }}
          className="relative mt-12 md:mt-8 flex justify-center"
        >
          <div className="relative bg-[#9DB154] text-[#141a38] px-5 py-3 shadow-lg max-w-xs text-center border border-black/10 rounded-sm">
            <p className="text-sm md:text-base font-medium" style={{ fontFamily: "'Share Tech', sans-serif" }}>
              &quot;Great design is not what you see, it&apos;s what you feel.&quot;
            </p>
            {/* سهم الفقاعة السفلي */}
            <div
              className="absolute -top-[10px] left-[50%] -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "10px solid #9DB154",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}