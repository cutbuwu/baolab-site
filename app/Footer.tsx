"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  const socials = [
    { name: "YouTube", href: "https://www.youtube.com/@baolab_au", icon: "YT" },
    { name: "TikTok", href: "https://www.tiktok.com/@baolab_au", icon: "TT" },
    { name: "Reddit", href: "https://www.reddit.com/user/baolab_au", icon: "RD" },
    { name: "Instagram", href: "https://www.instagram.com/baolab_au", icon: "IG" },
  ];

  const links = [
    { name: "Home", href: "https://baolab.au" },
    { name: "Shop", href: "https://shop.baolab.au" },
    { name: "Lab", href: "https://baolab.au/lab" },
    { name: "News", href: "https://baolab.au/news" },
    { name: "Terms", href: "https://baolab.au/terms" },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Country flags - social proof */}
        <div className="footer-flags">
          <span className="footer-flags-label">Trusted worldwide</span>
          <div className="footer-flag-row">
            <span>Australia</span>
            <span>United Kingdom</span>
            <span>Croatia</span>
            <span>Turkey</span>
            <span>Ukraine</span>
            <span>Qatar</span>
            <span>Egypt</span>
            <span>Austria</span>
            <span>Brazil</span>
          </div>
        </div>

        {/* Main footer content */}
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>BAOLAB</h3>
            <p>Premium Denza accessories & ADB unlock service for BYD/Denza vehicles worldwide.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} BaoLab. All rights reserved.</p>
          <a href="mailto:hello@baolab.au">hello@baolab.au</a>
        </div>
      </div>
    </footer>
  );
}
