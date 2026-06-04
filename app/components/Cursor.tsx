"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // backdrop-filter: url(#svg) displacement is Chromium-only. Gate the
    // dramatic nav refraction so Safari/Firefox fall back to plain blur
    // (otherwise the whole backdrop-filter declaration would be dropped).
    const ua = navigator.userAgent;
    const isChromium = /Chrome|Chromium|Edg|OPR/.test(ua) && !/Firefox/.test(ua);
    if (isChromium) document.documentElement.classList.add("lg-displace");

    const ring = ringRef.current;
    const dot  = dotRef.current;
    if (!ring || !dot) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let raf: number;

    const GLASS_SELECTOR =
      ".header, .vehicle-card, .pillar-card, .product-card, .btn-primary, .btn-ghost, .filter-chip";

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;

      // page-level ambient spotlight
      document.documentElement.style.setProperty("--ax", `${e.clientX}px`);
      document.documentElement.style.setProperty("--ay", `${e.clientY}px`);

      // cursor acts as a light source on whichever glass element it's over
      const target = e.target as Element | null;
      const glass = target?.closest?.(GLASS_SELECTOR) as HTMLElement | null;
      if (glass) {
        const r = glass.getBoundingClientRect();
        glass.style.setProperty("--lx", `${((e.clientX - r.left) / r.width) * 100}%`);
        glass.style.setProperty("--ly", `${((e.clientY - r.top) / r.height) * 100}%`);
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.095;
      ry += (my - ry) * 0.095;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => ring.classList.add("is-hovering");
    const onLeave = () => ring.classList.remove("is-hovering");

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    const attachListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
    </>
  );
}
