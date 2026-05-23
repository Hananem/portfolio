"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
  {
    step: "1",
    title: "Started Programming",
    duration: "4 Years",
    date: "Jun 2021",
    desc: "I started my coding journey in June 2021, exploring web fundamentals and building a strong foundation in frontend development.",
    color: "bg-[#064e3b]",
  },
  {
    step: "2",
    title: "Freelance Projects",
    duration: "6 Months",
    date: "Feb 2025",
    desc: "Jumped into freelancing in early 2025, delivering clean and modern web solutions for real clients with real deadlines.",
    color: "bg-[#1c1917]",
  },
  {
    step: "3",
    title: "HOSKADEV",
    duration: "9 Months",
    date: "Aug 2025",
    desc: "Landed my first professional role at HOSKADEV in August 2025, working on production-grade apps and sharpening my skills in a real team environment.",
    color: "bg-[#1c1917]",
  },
  {
    step: "4",
    title: "EURL Fennec — SaaS Platform",
    duration: "Now",
    date: "May 2026",
    desc: "Joined EURL Fennec in May 2026 as a freelance contributor, building a full SaaS platform from the ground up — scalable, modern, and built to last.",
    color: "bg-[#064e3b]",
  },
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const cards = containerRef.current!.querySelectorAll(".exp-card")

      cards.forEach((card, i) => {
        const sidebar = card.querySelector(".sidebar")
        const title = card.querySelector(".title-text")
        const desc = card.querySelector(".desc")

        // CARD SCROLL ANIMATION
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 140,
            rotate: i % 2 === 0 ? -4 : 4,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 50%",
              scrub: 1,
            },
          }
        )

        // SIDEBAR
        if (sidebar) {
          gsap.fromTo(
            sidebar,
            {
              scaleY: 0,
              opacity: 0,
            },
            {
              scaleY: 1,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                scrub: 1,
              },
            }
          )
        }

        // TITLE
        gsap.fromTo(
          title,
          {
            opacity: 0,
            x: i % 2 === 0 ? -80 : 80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              scrub: 1,
            },
          }
        )

        // DESCRIPTION
        gsap.fromTo(
          desc,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 72%",
              scrub: 1,
            },
          }
        )

        // HOVER
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
          })
        })
      })

      // CONNECTING LINES
      const lines =
        containerRef.current!.querySelectorAll(".connecting-line")

      lines.forEach((line) => {
        gsap.fromTo(
          line,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: "100%",
            opacity: 1,
            duration: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              scrub: 1,
            },
          }
        )
      })

      // ONLY TAGS FLOAT
      gsap.to(".tag-float", {
        y: -20,
        rotate: "+=6",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#14532d] py-40 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
    {/* REPLACE ONLY THE BACKGROUND SECTION WITH THIS */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* TOP AREA */}
  <div className="absolute -top-32 -left-24 text-[420px] font-black text-[#fcf59f] rotate-[-18deg] leading-none">
    r
  </div>

  <div className="absolute -top-20 left-[12%] text-[340px] font-black text-[#fcf59f] rotate-[8deg] leading-none">
    e
  </div>

  <div className="absolute top-[-40px] left-[35%] text-[260px] font-black text-[#fcf59f] rotate-[22deg] leading-none">
    v
  </div>

  <div className="absolute top-[2%] right-[18%] text-[300px] font-black text-[#fcf59f] rotate-[-16deg] leading-none">
    i
  </div>

  <div className="absolute top-[4%] right-[-80px] text-[420px] font-black text-[#fcf59f] rotate-[20deg] leading-none">
    e
  </div>

  {/* UPPER MIDDLE */}
  <div className="absolute top-[18%] left-[-60px] text-[320px] font-black text-[#fcf59f] rotate-[12deg] leading-none">
    w
  </div>



  <div className="absolute top-[24%] left-[48%] text-[380px] font-black text-[#fcf59f] rotate-[10deg] leading-none">
    r
  </div>

  <div className="absolute top-[18%] right-[10%] text-[240px] font-black text-[#fcf59f] rotate-[30deg] leading-none">
    e
  </div>

  {/* CENTER */}
  <div className="absolute top-[38%] left-[-80px] text-[380px] font-black text-[#fcf59f] rotate-[14deg] leading-none">
    v
  </div>

  <div className="absolute top-[42%] left-[16%] text-[260px] font-black text-[#fcf59f] rotate-[-20deg] leading-none">
    i
  </div>

  <div className="absolute top-[46%] left-[36%] text-[420px] font-black text-[#fcf59f] rotate-[16deg] leading-none">
    e
  </div>

  <div className="absolute top-[42%] right-[18%] text-[320px] font-black text-[#fcf59f] rotate-[-18deg] leading-none">
    w
  </div>

  <div className="absolute top-[50%] right-[-60px] text-[260px] font-black text-[#fcf59f] rotate-[24deg] leading-none">
    s
  </div>

  {/* LOWER */}
  <div className="absolute bottom-[22%] left-[-40px] text-[300px] font-black text-[#fcf59f] rotate-[20deg] leading-none">
    r
  </div>

  <div className="absolute bottom-[18%] left-[18%] text-[420px] font-black text-[#fcf59f] rotate-[-16deg] leading-none">
    e
  </div>

  <div className="absolute bottom-[14%] left-[46%] text-[240px] font-black text-[#fcf59f] rotate-[28deg] leading-none">
    v
  </div>

  <div className="absolute bottom-[18%] right-[16%] text-[360px] font-black text-[#fcf59f] rotate-[-12deg] leading-none">
    i
  </div>

  <div className="absolute bottom-[8%] right-[-80px] text-[440px] font-black text-[#fcf59f] rotate-[18deg] leading-none">
    e
  </div>

  {/* BOTTOM */}
  <div className="absolute -bottom-24 left-[5%] text-[420px] font-black text-[#fcf59f] rotate-[24deg] leading-none">
    w
  </div>

  <div className="absolute -bottom-16 left-[38%] text-[280px] font-black text-[#fcf59f] rotate-[-26deg] leading-none">
    s
  </div>

  <div className="absolute -bottom-28 right-[8%] text-[500px] font-black text-[#fcf59f] rotate-[14deg] leading-none">
    .
  </div>

  {/* TAGS */}
  <div className="tag-float absolute top-32 right-12 rotate-[70deg] bg-[#fcf59f] text-[#14532d] px-6 py-2 rounded-full font-black shadow-2xl">
    #review
  </div>

  <div className="tag-float absolute bottom-24 left-8 rotate-[-70deg] bg-[#fcf59f] text-[#14532d] px-6 py-2 rounded-full font-black shadow-2xl">
    #experience
  </div>

  <div className="tag-float absolute top-[55%] right-[20%] rotate-[22deg] bg-[#fcf59f] text-[#14532d] px-5 py-2 rounded-full font-black shadow-2xl">
    #frontend
  </div>

  <div className="tag-float absolute top-[18%] left-[42%] rotate-[-30deg] bg-[#fcf59f] text-[#14532d] px-5 py-2 rounded-full font-black shadow-2xl">
    #design
  </div>

  <div className="tag-float absolute bottom-[38%] left-[30%] rotate-[18deg] bg-[#fcf59f] text-[#14532d] px-5 py-2 rounded-full font-black shadow-2xl">
    #motion
  </div>

  {/* QUOTES */}
  <div className="absolute top-[28%] left-[5%] text-[150px] text-[#fcf59f] font-black rotate-12">
    “
  </div>

  <div className="absolute bottom-[18%] right-[10%] text-[150px] text-[#fcf59f] font-black rotate-[-12deg]">
    ”
  </div>

 
</div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-24">
          <span className="bg-[#d9f99d] text-[#365314] px-5 py-2 rounded-full text-sm font-black">
            Project Details
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight">
            Building a Seamless <br />
            Professional Experience
          </h2>

          <p className="text-[#dcfce7] mt-8 max-w-2xl text-lg leading-relaxed">
            Beyond just writing code, I craft experiences that motivate users at
            every step—from clean visuals to scalable systems.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative flex flex-col gap-16">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className={`exp-card flex flex-col md:flex-row items-center gap-8 relative ${
                i % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* CARD */}
              <div className="bg-[#fefce8] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] rounded-[40px] p-8 flex gap-6 w-full md:w-[68%] relative z-10 backdrop-blur-xl">

                {/* SIDEBAR */}
                <div
                  className={`sidebar ${exp.color} w-12 rounded-full flex flex-col items-center justify-center py-6 text-white shrink-0`}
                >
                  <span className="[writing-mode:vertical-lr] rotate-180 text-xs font-medium tracking-widest uppercase">
                    {exp.duration}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="title-text text-[#365314] font-black text-2xl">
                      {exp.step}. {exp.title}
                    </span>
                  </div>

                  <p className="desc text-[#44403c] text-base leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* LINE */}
              {i < EXPERIENCES.length - 1 && (
                <div
                  className={`connecting-line hidden md:block absolute top-full w-full h-28 border-dashed border-[#d9f99d]/40 ${
                    i % 2 === 0
                      ? "left-1/3 border-l-2 border-b-2 rounded-bl-[60px]"
                      : "right-1/3 border-r-2 border-b-2 rounded-br-[60px]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}