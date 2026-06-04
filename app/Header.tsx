"use client";

import { useEffect, useState, useRef } from "react";
import LiquidGlass from "liquid-glass-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9000 }}>
      <LiquidGlass
        displacementScale={scrolled ? 35 : 50}
        blurAmount={scrolled ? 0.2 : 0.15}
        saturation={scrolled ? 180 : 160}
        aberrationIntensity={2}
        elasticity={0.2}
        cornerRadius={999}
        mouseContainer={containerRef}
        style={{
          position: "fixed",
          top: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          width: scrolled ? "min(920px, calc(100% - 40px))" : "min(1060px, calc(100% - 40px))",
          height: "56px",
          display: "flex",
          alignItems: "center",
          pointerEvents: "auto",
          transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="container nav" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" className="logo">
            <img src="/baolab-logo.png" alt="BaoLab" className="logo-img" />
          </a>

          <nav className="main-nav">
            <a href="https://shop.baolab.au">Products</a>
            <a href="/lab">Lab</a>
            <a href="/news">News</a>
            <a href="https://shop.baolab.au/pages/compatibility">Compatibility</a>
            <a href="https://shop.baolab.au/pages/shipping">Shipping</a>
            <a href="https://shop.baolab.au/pages/contact">Contact</a>
          </nav>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span /><span /><span />
          </button>
        </div>
      </LiquidGlass>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="container mobile-menu-inner">
          <a href="https://shop.baolab.au" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="/lab" onClick={() => setMenuOpen(false)}>Lab</a>
          <a href="/news" onClick={() => setMenuOpen(false)}>News</a>
          <a href="https://shop.baolab.au/pages/compatibility" onClick={() => setMenuOpen(false)}>Compatibility</a>
          <a href="https://shop.baolab.au/pages/shipping" onClick={() => setMenuOpen(false)}>Shipping</a>
          <a href="https://shop.baolab.au/pages/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </div>
  );
}
