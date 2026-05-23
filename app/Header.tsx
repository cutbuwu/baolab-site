"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container nav">
        <a href="/" className="logo">
          <img src="/baolab-logo.png" alt="BaoLab" className="logo-img" />
        </a>

        <nav className="main-nav">
          <a href="https://shop.baolab.au">Products</a>
          <a href="/hub">Hub</a>
          <a href="/news">News</a>
          <a href="https://shop.baolab.au/pages/compatibility">Compatibility</a>
          <a href="https://shop.baolab.au/pages/shipping">Shipping</a>
          <a href="https://shop.baolab.au/pages/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}