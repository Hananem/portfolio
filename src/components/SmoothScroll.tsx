"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // إعداد Lenis
    const lenis = new Lenis({
      duration: 1.5, // زدت المدة قليلاً لتلاحظي النعومة بوضوح أكبر
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // دالة التحديث المستمر
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // للتأكد في الـ Console أن المكتبة تعمل بنجاح
    console.log("Lenis has been initialized successfully!");

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}