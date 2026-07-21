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
        {/* Main footer content */}
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/baolab-logo.png" alt="BaoLab" className="footer-logo" />
            <p>Premium aftermarket accessories for Denza vehicles in Australia. OEM-fit parts, product warranty included, local support.</p>
          </div>

          <div className="footer-links">
            <h4>SHOP</h4>
            <ul>
              <li><a href="https://shop.baolab.au">Denza B5</a></li>
              <li><a href="https://shop.baolab.au">Denza B8</a></li>
              <li><a href="https://shop.baolab.au">Denza D9</a></li>
              <li><a href="https://shop.baolab.au">Denza Z9 GT</a></li>
              <li><a href="https://shop.baolab.au">Denza N7</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="https://baolab.au/about">Contact us</a></li>
              <li><a href="https://shop.baolab.au/policies/shipping-policy">Shipping & returns</a></li>
              <li><a href="https://baolab.au/compatibility">Compatibility</a></li>
              <li><a href="https://baolab.au/about">About Baolab</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="https://baolab.au/terms">Privacy policy</a></li>
              <li><a href="https://baolab.au/terms">Terms of service</a></li>
              <li><a href="https://shop.baolab.au/policies/refund-policy">Refund policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social media links */}
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
          <a href="https://baolab.au">www.baolab.au</a>
        </div>
      </div>
    </footer>
  );
}
