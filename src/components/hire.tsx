'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function HireMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => setPhase(3), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [isInView]);

  useEffect(() => {
    const gfonts = document.createElement('link');
    gfonts.href = 'https://fonts.googleapis.com/css2?family=Fugaz+One&family=Pacifico&display=swap';
    gfonts.rel = 'stylesheet';
    document.head.appendChild(gfonts);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatA {
        0%, 100% { transform: translateY(0) rotate(-3deg); }
        50%       { transform: translateY(-14px) rotate(3deg); }
      }
      @keyframes floatB {
        0%, 100% { transform: translateY(0) rotate(5deg); }
        50%       { transform: translateY(-12px) rotate(-5deg); }
      }
      @keyframes floatC {
        0%, 100% { transform: translateY(-50%) rotate(-6deg); }
        50%       { transform: translateY(calc(-50% - 18px)) rotate(4deg); }
      }
      @keyframes floatD {
        0%, 100% { transform: translateY(0) rotate(4deg); }
        50%       { transform: translateY(-10px) rotate(-4deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(gfonts);
      document.head.removeChild(style);
    };
  }, []);

  const thankYouVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    big: {
      opacity: 1, scale: 2.4, y: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
    normal: {
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 1.0, ease: [0.55, 0, 0.1, 1] },
    },
  };

  const thankYouState =
    phase === 0 ? 'hidden' :
    phase === 1 ? 'big' : 'normal';

  const paraVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const byeVariants = {
    hidden: { opacity: 0, scale: 0.4, rotate: -12 },
    visible: {
      opacity: 1, scale: 1, rotate: 0,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const emojiVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay: number) => ({
      opacity: 1, scale: 1,
      transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const whatsappNumber = '213782247685';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div style={{ position: 'relative', zIndex: 20 }}>
      <section
        ref={sectionRef}
        style={{
          background: '#4905a3',
          boxShadow: '0 -40px 100px rgba(0,0,0,0.4)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'clamp(600px, 100vh, 1000px)',
          display: 'flex',
          alignItems: 'center',
         
          justifyContent: 'center',
          padding: '60px 20px',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.1)' }} />

        {/* 💻 Laptop */}
        <motion.div
          variants={emojiVariants}
          custom={0.1}
          initial="hidden"
          animate={phase >= 2 ? 'visible' : 'hidden'}
          className="hidden md:flex"
          style={{
            position: 'absolute', width: 88, height: 88, borderRadius: '50%',
            background: '#f5c842', top: 'calc(50% + 20px)', left: 'calc(50% - 280px)',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 44, userSelect: 'none',
            animation: phase >= 2 ? 'floatA 3.5s ease-in-out infinite' : 'none',
          }}
        >💻</motion.div>

        {/* ⚡ Lightning */}
        <motion.div
          variants={emojiVariants}
          custom={0.2}
          initial="hidden"
          animate={phase >= 2 ? 'visible' : 'hidden'}
          className="hidden md:flex"
          style={{
            position: 'absolute', width: 74, height: 74, borderRadius: '50%',
            background: '#4a90d9', top: 'calc(50% + 30px)', left: 'calc(50% - 200px)',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 36, userSelect: 'none',
            animation: phase >= 2 ? 'floatB 4s ease-in-out infinite' : 'none',
            animationDelay: '-1.3s',
          }}
        >⚡</motion.div>

        {/* 🚀 Rocket */}
        <motion.div
          variants={emojiVariants}
          custom={0.3}
          initial="hidden"
          animate={phase >= 2 ? 'visible' : 'hidden'}
          className="hidden md:flex"
          style={{
            position: 'absolute', width: 68, height: 68, borderRadius: '50%',
            background: '#f4b8c8', top: 'calc(50% - 100px)', left: 'calc(50% + 60px)',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 32, userSelect: 'none',
            animation: phase >= 2 ? 'floatD 3.8s ease-in-out infinite' : 'none',
            animationDelay: '-0.7s',
          }}
        >🚀</motion.div>

        {/* 🧠 Brain */}
        <motion.div
          variants={emojiVariants}
          custom={0.4}
          initial="hidden"
          animate={phase >= 2 ? 'visible' : 'hidden'}
          className="hidden md:flex"
          style={{
            position: 'absolute', width: 72, height: 72, borderRadius: '50%',
            background: '#c9b8e8', top: 'calc(50% + 10px)', left: 'calc(50% + 200px)',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 34, userSelect: 'none',
            animation: phase >= 2 ? 'floatC 4.1s ease-in-out infinite' : 'none',
            animationDelay: '-2.1s',
          }}
        >🧠</motion.div>

        {/* Center text */}
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, width: '100%', maxWidth: 600 }}>
          <h2 style={{
            fontFamily: "'Fugaz One', cursive",
            fontSize: 'clamp(32px, 7vw, 72px)',
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            flexWrap: 'wrap',
          }}>
            <motion.span
              variants={thankYouVariants}
              initial="hidden"
              animate={thankYouState}
              style={{ display: 'inline-block', transformOrigin: 'center center' }}
            >
              Thank You,&nbsp;
            </motion.span>

            <motion.span
              variants={byeVariants}
              initial="hidden"
              animate={phase >= 3 ? 'visible' : 'hidden'}
              style={{
                fontFamily: "'Pacifico', cursive",
                color: '#ff4d1c',
                WebkitTextStroke: '2px #ff4d1c',
                fontSize: 'clamp(40px, 9vw, 90px)',
                fontWeight: 1000,
                display: 'inline-block',
                transformOrigin: 'center center',
              }}
            >
              bye!
            </motion.span>
          </h2>

          <motion.p
            variants={paraVariants}
            initial="hidden"
            animate={phase >= 2 ? 'visible' : 'hidden'}
            style={{
              fontFamily: "'Fugaz One', cursive",
              fontSize: 'clamp(13px, 2vw, 16px)',
              color: 'rgba(255, 255, 255, 0.65)',
              marginTop: 14,
              letterSpacing: '0.03em',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Don&apos;t forget to contact me.<br />
            Hope to see you later!
          </motion.p>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 28,
              padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 32px)',
              background: '#25D366',
              color: '#fff',
              fontFamily: "'Fugaz One', cursive",
              fontSize: 'clamp(13px, 2vw, 15px)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              borderRadius: 999,
              border: '1.5px solid rgba(255,255,255,0.25)',
              cursor: 'pointer',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="#fff">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.669 4.83 1.836 6.84L2 30l7.363-1.812A13.933 13.933 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.88-1.607l-.422-.25-4.37 1.075 1.113-4.258-.277-.438A11.563 11.563 0 0 1 4.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.29-8.663c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.674-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.869s1.233 3.328 1.405 3.558c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.036-.832 2.324-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z" />
            </svg>
            Chat on WhatsApp
          </motion.a>

          <motion.a
  href="mailto:nemsihana@gmail.com"
  initial={{ opacity: 0, y: 16 }}
  animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
  transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    width: 48,
    height: 48,
    background: '#ffffff',
    borderRadius: 999,
    border: '1.5px solid rgba(255,255,255,0.25)',
    cursor: 'pointer',
    textDecoration: 'none',
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M6 40h6V22L4 16v20a4 4 0 0 0 4 4z" />
    <path fill="#34A853" d="M36 40h6a4 4 0 0 0 4-4V16l-8 6z" />
    <path fill="#FBBC05" d="M36 10v12l8-6V12a2 2 0 0 0-3.2-1.6z" />
    <path fill="#EA4335" d="M12 22V10l12 9 12-9v12L24 31z" />
    <path fill="#C5221F" d="M4 12v4l8 6V10L9.2 8.4A2 2 0 0 0 6 10z" />
  </svg>
</motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute', bottom: 16, right: 20,
            fontFamily: "'Fugaz One', cursive",
            fontSize: 10,
            color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Open to remote &amp; on-site
        </motion.p>
      </section>
    </div>
  );
}