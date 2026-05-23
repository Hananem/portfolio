"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, Variants } from "framer-motion"
import gsap from "gsap"

/* ═══════════════════════════════════════════════════
   VARIANTS — many types, all slower
═══════════════════════════════════════════════════ */

// 1. سطر يصعد ببطء
const vSlideUp: Variants = {
  hidden: { opacity: 0, y: 90 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

// 2. سطر يأتي من اليسار
const vSlideLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

// 3. سطر يأتي من اليمين
const vSlideRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

// 4. fade بطيء جداً + blur
const vFadeBlur: Variants = {
  hidden: { opacity: 0, filter: "blur(18px)", scale: 0.94 },
  visible: (d = 0) => ({
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: 1.6, ease: "easeOut", delay: d },
  }),
}

// 5. flip vertical — ينقلب للأمام
const vFlipY: Variants = {
  hidden: { opacity: 0, rotateX: -90, y: 40 },
  visible: (d = 0) => ({
    opacity: 1, rotateX: 0, y: 0,
    transition: { duration: 1.4, ease: [0.34, 1.2, 0.64, 1], delay: d },
  }),
}

// 6. zoom من الصفر
const vZoom: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (d = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: d },
  }),
}

// 7. skew + slide
const vSkew: Variants = {
  hidden: { opacity: 0, skewY: 8, y: 60 },
  visible: (d = 0) => ({
    opacity: 1, skewY: 0, y: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

// 8. badge pop elastic
const vBadge: Variants = {
  hidden: { opacity: 0, scale: 0.1, rotate: -20 },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: d },
  }),
}

// 9. shape elastic
const vShape: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -40 },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 1.4, ease: [0.34, 1.56, 0.64, 1], delay: d },
  }),
}

/* ═══════════════════════════════════════════════════
   Hook — triggers when element enters viewport
═══════════════════════════════════════════════════ */
function useScrollReveal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -70px 0px" })
  const controls = useAnimation()
  useEffect(() => { if (inView) controls.start("visible") }, [inView, controls])
  return { ref, controls }
}

/* ═══════════════════════════════════════════════════
   Generic reveal wrapper
═══════════════════════════════════════════════════ */
function Rev({
  children, variants, delay = 0, className = "", style = {},
  tag = "div",
}: {
  children: React.ReactNode
  variants: Variants
  delay?: number
  className?: string
  style?: React.CSSProperties
  tag?: "div" | "span" | "p"
}) {
  const { ref, controls } = useScrollReveal()
  const Tag = tag === "span" ? motion.span : tag === "p" ? motion.p : motion.div
  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
      className={className}
      style={style as never}
    >
      {children}
    </Tag>
  )
}

/* ═══════════════════════════════════════════════════
   Animated Badge
═══════════════════════════════════════════════════ */
function AnimBadge({
  children, bg, color, rot, delay = 0,
  px = 20, py = 9, size = 14, round = 12, floatY = -12,
}: {
  children: string; bg: string; color: string; rot: number
  delay?: number; px?: number; py?: number; size?: number; round?: number; floatY?: number
}) {
  const { ref, controls } = useScrollReveal()
  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={vBadge}
      custom={delay}
      style={{ rotate: rot, display: "inline-block", flexShrink: 0 }}
    >
      <motion.span
        animate={{ y: [0, floatY, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ background: bg, color, fontWeight: 700, fontSize: size, padding: `${py}px ${px}px`, borderRadius: round, display: "inline-block" }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}

/* ═══════════════════════════════════════════════════
   Animated Shape (float after reveal)
═══════════════════════════════════════════════════ */
function AnimShape({
  children, delay = 0, floatY = -18, dur = 3.5, style = {},
}: {
  children: React.ReactNode; delay?: number; floatY?: number; dur?: number; style?: React.CSSProperties
}) {
  const { ref, controls } = useScrollReveal()
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={vShape} custom={delay} style={style}>
      <motion.div
        animate={{ y: [0, floatY, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════
   Static marquee badge (no scroll trigger)
═══════════════════════════════════════════════════ */
function MBadge({ children, bg, color, rot }: { children: string; bg: string; color: string; rot: number }) {
  return (
    <span style={{ background: bg, color, fontWeight: 700, fontSize: 14, padding: "9px 20px", borderRadius: 12, display: "inline-block", transform: `rotate(${rot}deg)`, flexShrink: 0 }}>
      {children}
    </span>
  )
}

/* ═══════════════════════════════════════════════════
   Big text word
═══════════════════════════════════════════════════ */
function BigWord({ text, outline, red }: { text: string; outline?: boolean; red?: boolean }) {
  return (
    <span style={{
      fontSize: "clamp(58px,9.5vw,128px)", fontWeight: 900, letterSpacing: "-0.04em",
      color: red ? "#E34256" : outline ? "transparent" : "#fff",
      WebkitTextStroke: outline ? "2px #ffffff18" : undefined,
      flexShrink: 0, display: "inline-block",
    }}>
      {text}
    </span>
  )
}

const skills = [
  "React", "Next.js", "TypeScript", "Framer Motion",
  "GSAP", "Tailwind CSS", "Node.js", "Figma",
  "Three.js", "CSS Animations", "REST APIs", "Git",
]

/* ═══════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════ */
export default function IntroSection() {
  useEffect(() => {
    gsap.to(".mtrack-a", { x: "-50%", duration: 24, repeat: -1, ease: "none" })
    gsap.to(".mtrack-b", { x: "50%",  duration: 20, repeat: -1, ease: "none" })
    gsap.to(".mtrack-c", { x: "-50%", duration: 30, repeat: -1, ease: "none" })
    return () => gsap.killTweensOf(".mtrack-a,.mtrack-b,.mtrack-c")
  }, [])

  return (
    <section
      className="relative bg-[#0f0f0f] overflow-hidden"
      style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", perspective: "1200px" }}
    >

      {/* ════════════════════════════════════════
          BLOCK 1 — 3 marquee rows + shapes
      ════════════════════════════════════════ */}
      <div className="relative overflow-hidden py-16">

       

        {/* ROW A */}
        <div style={{ overflow: "hidden", lineHeight: 0.88, marginBottom: 3 }}>
          <div className="mtrack-a" style={{ display: "flex", gap: 28, whiteSpace: "nowrap", width: "max-content", alignItems: "center" }}>
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28 }}>
                <BigWord text="CREATE" />
                {i === 1 && <MBadge bg="#E34256" color="#fff" rot={-7}>Frontend Dev</MBadge>}
                {i === 3 && <MBadge bg="#f97316" color="#fff" rot={6}>That&apos;s right!</MBadge>}
              </span>
            ))}
          </div>
        </div>

        {/* ROW B */}
        <div style={{ overflow: "hidden", lineHeight: 0.88, marginBottom: 3 }}>
          <div className="mtrack-b" style={{ display: "flex", gap: 28, whiteSpace: "nowrap", width: "max-content", alignItems: "center", transform: "translateX(-50%)" }}>
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28 }}>
                <BigWord text="ANIMATE" outline />
                {i === 2 && <MBadge bg="#4ade80" color="#000" rot={-9}>Nice &amp; Easy</MBadge>}
              </span>
            ))}
          </div>
        </div>

        {/* ROW C */}
        <div style={{ overflow: "hidden", lineHeight: 0.88 }}>
          <div className="mtrack-c" style={{ display: "flex", gap: 28, whiteSpace: "nowrap", width: "max-content", alignItems: "center" }}>
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28 }}>
                <BigWord text="INSPIRE." red={i % 2 === 0} />
                {i === 1 && <MBadge bg="#d8b4fe" color="#1e1b4b" rot={8}>Plug-and-play</MBadge>}
                {i === 4 && <MBadge bg="#4ade80" color="#000" rot={-5}>Super smooth</MBadge>}
              </span>
            ))}
          </div>
        </div>

        {/* organic cluster */}
        <div className="absolute top-10 right-6 md:right-14 pointer-events-none">
          <AnimShape delay={0.1} floatY={-18} dur={3.5}>
            <div style={{ position: "relative", width: 170, height: 205 }}>
              <div style={{ position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:80,height:80,borderRadius:"50%",background:"radial-gradient(circle at 38%,#f9a8d4,#ec4899)" }} />
              <div style={{ position:"absolute",top:40,left:0,width:80,height:80,borderRadius:"50%",background:"radial-gradient(circle at 38%,#fbb6ce,#db2777)" }} />
              <div style={{ position:"absolute",top:40,right:0,width:80,height:80,borderRadius:"50%",background:"radial-gradient(circle at 62%,#f472b6,#be185d)" }} />
              <div style={{ position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:148,height:80,borderRadius:"80px 80px 0 0",background:"radial-gradient(ellipse at 50% 80%,#4ade80,#16a34a)" }} />
            </div>
          </AnimShape>
          <AnimShape delay={0.35} floatY={10} dur={2.8} style={{ marginTop: 2, marginLeft: 74 }}>
            <div style={{ width:20,height:20,background:"linear-gradient(135deg,#fb923c,#f97316)",transform:"rotate(45deg)" }} />
          </AnimShape>
        </div>

        {/* hourglass */}
        <div className="absolute pointer-events-none" style={{ left:"36%",top:"42%" }}>
          <AnimShape delay={0.2} floatY={14} dur={4}>
            <svg width="36" height="46" viewBox="0 0 40 50"><path d="M2 2L38 2L20 25L38 48L2 48L20 25Z" fill="#a78bfa"/></svg>
          </AnimShape>
        </div>

        <div style={{ position:"absolute",right:0,top:"30%",width:5,height:75,background:"linear-gradient(#4ade80,#16a34a)",borderRadius:"3px 0 0 3px" }} />
      </div>

      <div style={{ height:1,background:"#ffffff10",margin:"0 40px" }} />

      {/* ════════════════════════════════════════
          BLOCK 2 — "I BUILD experiences that move."
      ════════════════════════════════════════ */}
      <div className="relative px-8 md:px-16 py-24 overflow-hidden">

        <Rev variants={vSlideLeft} delay={0} style={{ marginBottom: 20 }}>
          <span style={{ fontFamily:"monospace",fontSize:10,letterSpacing:"0.3em",color:"#ffffff35" }}>001 / WHAT I DO</span>
        </Rev>

        <div style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:14 }}>
          <AnimBadge bg="linear-gradient(135deg,#4ade80,#16a34a)" color="#000" rot={-3} size={48} px={26} py={10} round={16} delay={0} floatY={-10}>
            I BUILD
          </AnimBadge>
          <AnimBadge bg="#d8b4fe" color="#1e1b4b" rot={9} size={13} px={15} py={7} round={10} delay={0.15} floatY={10}>
            Easy
          </AnimBadge>
          <Rev variants={vSlideLeft} delay={0.25} tag="span" style={{ fontSize:"clamp(34px,5.5vw,72px)",fontWeight:900,color:"#f5f0e8",letterSpacing:"-0.03em" }}>
            experiences
          </Rev>
          <AnimBadge bg="#fb923c" color="#fff" rot={-6} size={13} px={15} py={7} round={10} delay={0.35} floatY={-12}>
            Easing
          </AnimBadge>
          <Rev variants={vSlideRight} delay={0.45} tag="span" style={{ fontSize:"clamp(34px,5.5vw,72px)",fontWeight:900,color:"#f5f0e8",letterSpacing:"-0.03em" }}>
            that move.
          </Rev>
        </div>

        <div className="absolute pointer-events-none" style={{ bottom:14,right:36 }}>
          <AnimShape delay={0.2} floatY={14} dur={4}>
            <svg width="76" height="50" viewBox="0 0 80 54" fill="none">
              <path d="M5 50 Q5 5 40 5 Q75 5 75 50" stroke="url(#pg)" strokeWidth="9" fill="none" strokeLinecap="round"/>
              <defs><linearGradient id="pg" x1="5" y1="27" x2="75" y2="27" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f472b6"/><stop offset="1" stopColor="#a78bfa"/>
              </linearGradient></defs>
            </svg>
          </AnimShape>
        </div>
        <div className="absolute pointer-events-none" style={{ bottom:18,left:"44%" }}>
          <AnimShape delay={0.3} floatY={-14} dur={3.2}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              {([[22,22,22,4],[22,22,22,40],[22,22,6,13],[22,22,38,31],[22,22,6,31],[22,22,38,13]] as number[][]).map(([x1,y1,x2,y2],i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#sg)" strokeWidth="4" strokeLinecap="round"/>
              ))}
              <defs><linearGradient id="sg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fb923c"/><stop offset="1" stopColor="#f97316"/>
              </linearGradient></defs>
            </svg>
          </AnimShape>
        </div>
      </div>

      <div style={{ height:1,background:"#ffffff10",margin:"0 40px" }} />

      {/* ════════════════════════════════════════
          BLOCK 3 — philosophy
          vFlipY على كل سطر + vFadeBlur على الـ label
  

      <div style={{ height:1,background:"#ffffff10",margin:"0 40px" }} />

   
      <div style={{ height:1,background:"#ffffff10",margin:"0 40px" }} />

      {/* ════════════════════════════════════════
          BLOCK 5 — finale
      ════════════════════════════════════════ */}
      <div className="px-8 py-28 text-center" style={{ borderTop:"1px solid #ffffff10" }}>

        {[
          { text:"Not just a developer.", solid:true,  delay:0    },
          { text:"A digital craftsman.", solid:false, delay:0.22  },
        ].map((line,i) => (
          <div key={i} style={{ overflow:"hidden",marginBottom:10 }}>
            <Rev variants={vSlideUp} delay={line.delay}>
              <p style={{
                fontSize:"clamp(36px,7vw,96px)",fontWeight:900,lineHeight:1,letterSpacing:"-0.04em",
                color: line.solid ? "#fff" : "transparent",
                WebkitTextStroke: line.solid ? undefined : "1.5px #ffffff22",
              }}>
                {line.text}
              </p>
            </Rev>
          </div>
        ))}

        <div style={{ display:"flex",justifyContent:"center",gap:20,marginTop:48 }}>
          {[
            { el:<svg width="38" height="38" viewBox="0 0 36 36"><polygon points="18,2 35,34 1,34" fill="#E34256"/></svg>, delay:0.1 },
            { el:<svg width="38" height="38" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#22c55e"/></svg>, delay:0.22 },
            { el:<svg width="44" height="34" viewBox="0 0 40 32" fill="none"><path d="M3 28 Q20 3 37 28" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round"/></svg>, delay:0.34 },
            { el:<svg width="38" height="38" viewBox="0 0 36 36"><polygon points="18,2 35,34 1,34" fill="none" stroke="#a78bfa" strokeWidth="2.5"/></svg>, delay:0.46 },
          ].map(({ el, delay },i) => (
            <motion.span
              key={i}
              initial={{ opacity:0, scale:0, rotate:-25 }}
              whileInView={{ opacity:1, scale:1, rotate:0 }}
              viewport={{ once:true, margin:"0px 0px -40px 0px" }}
              transition={{ duration:1, ease:[0.34,1.56,0.64,1], delay }}
              style={{ display:"inline-block" }}
            >
              <motion.span
                animate={{ y:[0,-10,0] }}
                transition={{ duration:3+i*0.4, repeat:Infinity, ease:"easeInOut", delay:1+i*0.2 }}
                style={{ display:"inline-block" }}
              >
                {el}
              </motion.span>
            </motion.span>
          ))}
        </div>
      </div>

    </section>
  )
}