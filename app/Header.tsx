"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container nav">
        <a href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
    </header>
  );
}
