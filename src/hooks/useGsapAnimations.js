import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin once for the whole app.
gsap.registerPlugin(ScrollTrigger);

/**
 * Central animation hook.
 * - Hero entrance (fade + small vertical move)
 * - Section headings reveal on scroll
 * - Staggered card entrances
 * - Animated stat counters
 * Respects prefers-reduced-motion and cleans up on unmount.
 */
export function useGsapAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return; // keep everything visible, skip animation

      // --- Hero entrance ---
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(".hero-image-wrap", {
        y: 36,
        scale: 0.96,
        duration: 1.25,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-impact-note", {
        opacity: 0,
        x: -24,
        duration: 0.7,
        delay: 0.8,
        ease: "power2.out",
      });

      gsap.to(".hero-image-frame img", {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // --- Section headings ---
      gsap.utils.toArray(".section-head").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // --- Staggered card grids ---
      gsap.utils.toArray(".stagger-grid").forEach((grid) => {
        gsap.from(grid.children, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 85%" },
        });
      });

      gsap.utils.toArray(".volunteer-photo").forEach((photo) => {
        gsap.from(photo, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: photo, start: "top 88%" },
        });
      });

      // --- Stat counters ---
      gsap.utils.toArray(".stat-number").forEach((el) => {
        const target = Number(el.dataset.value || 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent =
              (el.dataset.prefix || "") +
              Math.round(obj.val).toLocaleString() +
              (el.dataset.suffix || "");
          },
        });
      });
    });

    return () => ctx.revert(); // clean up timelines + ScrollTriggers
  }, []);
}
