"use client";

import { useEffect, useRef } from "react";

const SKILLS = [
  "React", "Next.js", "Node.js", "Express", "NestJS",
  "TypeScript", "JavaScript", "HTML5", "Tailwind CSS",
  "Redux Toolkit", "TanStack Query", "GitHub", "Git",
  "MongoDB", "PostgreSQL", "Framer Motion", "GSAP", "MUI",
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pillsAreaRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    let rafId: number;
    let cleanupPhysics: (() => void) | null = null;

    async function initPhysics() {
      const Matter = await import("matter-js");
      const { Engine, Bodies, Body, World, Runner, MouseConstraint, Mouse } = Matter;

      const area = pillsAreaRef.current;
      if (!area) return;

      const W = area.offsetWidth;
      const H = area.offsetHeight;

      const engine = Engine.create({ gravity: { x: 0, y: 1.4 } });
      const world = engine.world;

      const T = 60;
      World.add(world, [
        Bodies.rectangle(W / 2, H + T / 2,  W + 200, T, { isStatic: true }),
        Bodies.rectangle(-T / 2, H / 2,     T, H * 3,  { isStatic: true }),
        Bodies.rectangle(W + T / 2, H / 2,  T, H * 3,  { isStatic: true }),
        Bodies.rectangle(W / 2, -T / 2,     W + 200, T, { isStatic: true }),
      ]);

      function measure(text: string): { w: number; h: number } {
        const s = document.createElement("span");
        s.style.cssText =
          "position:absolute;visibility:hidden;font-family:'Space Grotesk',sans-serif;" +
          "font-size:13px;font-weight:700;padding:9px 22px;white-space:nowrap;" +
          "border-radius:60px;border:1.5px solid transparent;box-sizing:border-box;";
        s.textContent = text;
        document.body.appendChild(s);
        const r = { w: s.offsetWidth, h: s.offsetHeight };
        document.body.removeChild(s);
        return r;
      }

      const bodies: Matter.Body[] = [];
      const els: HTMLDivElement[] = [];
      const sizes: { w: number; h: number }[] = [];

      SKILLS.forEach((name) => {
        const { w, h } = measure(name);

        const x = 40 + Math.random() * (W - 80);
        const y = h + Math.random() * (H * 0.3);

        const body = Bodies.rectangle(x, y, w, h, {
          restitution: 0.5,
          friction: 0.1,
          frictionAir: 0.022,
          chamfer: { radius: h / 2 },
          angle: (Math.random() - 0.5) * Math.PI * 0.85,
        });

        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 7,
          y: (Math.random() - 0.5) * 7,
        });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.35);

        World.add(world, body);
        bodies.push(body);

        const el = document.createElement("div");
        el.textContent = name;
        Object.assign(el.style, {
          position:      "absolute",
          left:          "0",
          top:           "0",
          width:         w + "px",
          height:        h + "px",
          lineHeight:    h + "px",
          textAlign:     "center",
          padding:       "0",
          borderRadius:  "60px",
          border:        "1.5px solid rgba(255,255,255,0.75)",
          color:         "#ffffff",
          fontFamily:    "'Space Grotesk','Segoe UI',sans-serif",
          fontSize:      "13px",
          fontWeight:    "700",
          letterSpacing: ".03em",
          whiteSpace:    "nowrap",
          cursor:        "pointer",
          userSelect:    "none",
          boxSizing:     "border-box",
          willChange:    "transform",
          transition:    "border-color 0.15s, background 0.15s",
        });

        el.addEventListener("mouseenter", () => {
          const dx = body.position.x - W / 2;
          const dy = body.position.y - H / 2;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const k = 0.22 + Math.random() * 0.14;
          Body.applyForce(body, body.position, {
            x: (dx / dist) * k + (Math.random() - 0.5) * 0.05,
            y: (dy / dist) * k + (Math.random() - 0.5) * 0.05,
          });
          Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.7);
          el.style.borderColor = "#fff";
          el.style.background  = "rgba(255,255,255,0.12)";
          setTimeout(() => {
            el.style.borderColor = "rgba(255,255,255,0.75)";
            el.style.background  = "";
          }, 280);
        });

        area.appendChild(el);
        els.push(el);
        sizes.push({ w, h });
      });

      const mc = MouseConstraint.create(engine, {
        mouse: Mouse.create(area),
        constraint: { stiffness: 0.22, render: { visible: false } },
      });
      World.add(world, mc);

      const runner = Runner.create();
      Runner.run(runner, engine);

      const loop = () => {
        rafId = requestAnimationFrame(loop);
        bodies.forEach((b, i) => {
          const { w, h } = sizes[i];
          els[i].style.transform =
            `translate(${b.position.x - w / 2}px, ${b.position.y - h / 2}px) rotate(${b.angle}rad)`;
        });
      };
      loop();

      cleanupPhysics = () => {
        cancelAnimationFrame(rafId);
        Runner.stop(runner);
        els.forEach((el) => el.remove());
      };
    }

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !initializedRef.current) {
          initializedRef.current = true;
          initPhysics();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      if (cleanupPhysics) cleanupPhysics();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@500;700&display=swap');

        .sk {
          width: 100%;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: #1d4ed8;
          background-image:
            radial-gradient(ellipse 90% 70% at 5%  45%, #1e40af 0%, transparent 55%),
            radial-gradient(ellipse 65% 80% at 95% 15%, #1e3a8a 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 55% 95%, #172554 0%, transparent 60%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sk-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .sk-in {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 56px;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 60px;
          align-items: center;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .sk-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: rgba(147,197,253,.85);
          margin-bottom: 20px;
        }
        .sk-label::before {
          content: '';
          width: 30px;
          height: 1.5px;
          background: rgba(147,197,253,.7);
          display: block;
        }
        .sk-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(52px, 7vw, 90px);
          font-weight: 800;
          line-height: .88;
          letter-spacing: -.04em;
          color: #fff;
          margin: 0 0 24px;
        }
        .sk-ghost {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,.3);
          font-size: clamp(56px, 7.5vw, 96px);
        }
        .sk-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          line-height: 1.82;
          color: rgba(191,219,254,.78);
          max-width: 320px;
          margin: 0 0 44px;
        }
        .sk-stats { display: flex; }
        .sk-stat {
          padding-right: 24px;
          margin-right: 24px;
          border-right: 1px solid rgba(255,255,255,.1);
        }
        .sk-stat:last-child { border: none; padding: 0; margin: 0; }
        .sk-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 34px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .sk-stat-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(147,197,253,.6);
          margin-top: 5px;
        }

        .sk-pills-area {
          position: relative;
          height: 560px;
          border-radius: 16px;
          overflow: hidden;
        }

        @media (max-width: 860px) {
          .sk-in {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 60px 24px;
          }
          .sk-pills-area { height: 420px; }
        }
      `}</style>

      <section className="sk" ref={sectionRef}>
        <div className="sk-grid" />

        <div className="sk-in">
          <div>
            <div className="sk-label">My Toolkit</div>
            <h2 className="sk-title">
              SKILLS
              <span className="sk-ghost">&amp; TOOLS</span>
            </h2>
            <p className="sk-desc">
              A carefully chosen stack of technologies I use daily — from crafting
              fast, beautiful UIs to building scalable back-end systems.
            </p>
          </div>

          <div className="sk-pills-area" ref={pillsAreaRef} />
        </div>
      </section>
    </>
  );
}