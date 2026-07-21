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

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <img src="/baolab-logo.png" alt="BaoLab" className="footer-logo" />
            <p>Premium aftermarket accessories for Denza vehicles in Australia. OEM-fit parts, product warranty included, local support.</p>
          </div>

          {/* Shop column */}
          <div className="footer-links">
            <h4>SHOP</h4>
            <ul>
              <li><a href="https://shop.baolab.au/collections/b5">Denza B5</a></li>
              <li><a href="https://shop.baolab.au/collections/b8">Denza B8</a></li>
              <li><a href="https://shop.baolab.au/collections/d9">Denza D9</a></li>
              <li><a href="https://shop.baolab.au/collections/z9gt">Denza Z9 GT</a></li>
              <li><a href="https://shop.baolab.au/collections/n7">Denza N7</a></li>
            </ul>
          </div>

          {/* Support column */}
          <div className="footer-links">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="https://baolab.au/about">Contact us</a></li>
              <li><a href="https://shop.baolab.au/policies/shipping-policy">Shipping & returns</a></li>
              <li><a href="https://baolab.au/compatibility">Compatibility</a></li>
              <li><a href="https://baolab.au/about">About Baolab</a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="footer-links">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="https://baolab.au/terms">Privacy policy</a></li>
              <li><a href="https://baolab.au/terms">Terms of service</a></li>
              <li><a href="https://shop.baolab.au/policies/refund-policy">Refund policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social media row */}
        <div className="footer-socials">
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

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} BaoLab. All rights reserved.</p>
          <p className="footer-disclaimer">BaoLab is an independent aftermarket accessories brand. Not affiliated with, endorsed by, or connected to BYD Company Ltd. or any of its subsidiaries.</p>
          <a href="https://baolab.au">www.baolab.au</a>
        </div>
      </div>
    </footer>
  );
}
