"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type TransitionType =
  | "cube-x"
  | "cube-y"
  | "prism"
  | "flip-h"
  | "flip-v"
  | "door"
  | "carousel"
  | "fold";

export interface SectionConfig {
  id: string;
  transition: TransitionType;
}

export function use3DTransition(sections: SectionConfig[]) {
  const lockRef = useRef(false);

  useEffect(() => {
    const overlay = document.createElement("div");
    overlay.id = "transition-overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      zIndex: "9999",
      pointerEvents: "none",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      willChange: "transform, opacity",
      opacity: "0",
    });
    document.body.appendChild(overlay);

    const curtain = document.createElement("div");
    Object.assign(curtain.style, {
      position: "absolute",
      inset: "0",
      background: "#011a14",
    });
    overlay.appendChild(curtain);

    function getOutProps(type: TransitionType): gsap.TweenVars {
      switch (type) {
        case "cube-x":   return { rotateX: 15, scaleY: 0.9, y: "-8%" };
        case "cube-y":   return { rotateY: 15, scaleX: 0.9, x: "-8%" };
        case "prism":    return { rotateY: 20, skewY: -5, x: "-10%" };
        case "flip-h":   return { rotateY: 90, scaleX: 0 };
        case "flip-v":   return { rotateX: 90, scaleY: 0 };
        case "door":     return { rotateY: 45, transformOrigin: "left center", x: "5%" };
        case "carousel": return { rotateY: 30, z: -300, scale: 0.85 };
        case "fold":     return { rotateX: 45, transformOrigin: "top center", y: "5%" };
        default:         return { rotateY: 15, scaleX: 0.9 };
      }
    }

    function runTransition(nextSection: HTMLElement, type: TransitionType, nextBg: string) {
      if (lockRef.current) return;
      lockRef.current = true;

      curtain.style.background = nextBg;

      const tl = gsap.timeline({
        onComplete: () => {
          nextSection.scrollIntoView({ behavior: "instant" });
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.35,
            onComplete: () => {
              gsap.set(overlay, {
                rotateX: 0, rotateY: 0, rotateZ: 0,
                scaleX: 1, scaleY: 1, z: 0,
                skewY: 0, x: 0, y: 0,
                transformOrigin: "center center",
              });
              lockRef.current = false;
            },
          });
        },
      });

      tl.set(overlay, {
        opacity: 1,
        rotateX: 0, rotateY: 0, rotateZ: 0,
        scaleX: 1, scaleY: 1, z: 0,
        skewY: 0, x: 0, y: 0,
        transformOrigin: "center center",
      });

      tl.to(overlay, {
        ...getOutProps(type),
        opacity: 0.6,
        duration: 0.55,
        ease: "power2.in",
      });

      tl.to(overlay, {
        opacity: 1,
        scale: 1,
        rotateX: 0, rotateY: 0,
        skewY: 0, x: 0, y: 0,
        transformOrigin: "center center",
        duration: 0.2,
        ease: "power3.out",
      });
    }

    const triggers: ScrollTrigger[] = [];

    sections.forEach((sec, i) => {
      if (i === sections.length - 1) return;

      const el = document.getElementById(sec.id);
      const nextEl = document.getElementById(sections[i + 1].id);
      if (!el || !nextEl) return;

      const nextBg = getComputedStyle(nextEl).backgroundColor || "#011a14";

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "bottom bottom-=80px",
        end: "bottom bottom-=80px",
        onEnter: () => {
          runTransition(nextEl, sections[i + 1].transition, nextBg);
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      overlay.remove();
    };
  }, [sections]);

  return lockRef;
}