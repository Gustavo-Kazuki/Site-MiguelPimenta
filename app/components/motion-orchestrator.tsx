"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionOrchestrator() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      if (document.querySelector(".hero")) {
        const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
        hero
          .from(".state-mark__one", { scale: 0.7, rotate: -12, opacity: 0, duration: 0.8 })
          .from(".state-mark__two", { scale: 0.6, x: 80, opacity: 0, duration: 0.6 }, "<.1")
          .from(".portrait-frame", { clipPath: "polygon(48% 48%, 52% 48%, 52% 52%, 48% 52%, 48% 48%)", y: 30, opacity: 0, duration: 0.95 }, "<.05")
          .from(".hero-number span", { yPercent: 110, opacity: 0, stagger: 0.08, duration: 0.65 }, "<.2")
          .from(".hero__copy > *", { y: 26, opacity: 0, stagger: 0.08, duration: 0.55 }, "<-.25");
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 38,
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      const line = document.querySelector<HTMLElement>("[data-timeline-line]");
      if (line) {
        gsap.fromTo(line, { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-timeline]", start: "top 70%", end: "bottom 70%", scrub: 0.4 },
        });
      }
    });

    return () => context.revert();
  }, []);

  return null;
}
