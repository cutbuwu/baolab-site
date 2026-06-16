import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BAOLAB — Denza Accessories & ADB Unlock Service Australia",
  description:
    "Australia's first dedicated Denza accessory store. Premium B5, B8, D9 upgrades. ADB unlocking & app sideloading service for BYD/Denza vehicles.",
  metadataBase: new URL("https://baolab.au"),
  openGraph: {
    title: "BAOLAB — Denza Accessories & ADB Unlock Service Australia",
    description:
      "Australia's first dedicated Denza accessory store. Premium B5, B8, D9 upgrades. ADB unlocking & app sideloading service.",
    url: "https://baolab.au",
    siteName: "BaoLab",
    locale: "en_AU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BaoLab",
  url: "https://baolab.au",
  logo: "https://baolab.au/logo.png",
  description:
    "Australia's first dedicated Denza accessory store. Premium B5, B8, D9, Z9 GT, N7 upgrades. ADB unlocking & app sideloading service for BYD/Denza vehicles.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@baolab.au",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressRegion: "VIC",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Liquid glass SVG filter definitions ── */}
        <svg
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter
              id="liquid-refract"
              x="-15%"
              y="-15%"
              width="130%"
              height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015"
                numOctaves="3"
                seed="42"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="45"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feGaussianBlur in="displaced" stdDeviation="0.5" />
            </filter>

            {/* nav-glass: dramatic backdrop refraction for navbar */}
            <filter id="nav-glass" x="-40%" y="-150%" width="180%" height="400%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.009 0.016" numOctaves="2" seed="11" result="noise"/>
              <feGaussianBlur in="noise" stdDeviation="1.1" result="smooth"/>
              <feColorMatrix in="smooth" type="matrix"
                values="1 0    0 0 0
                        0 0.12 0 0 0.44
                        0 0    1 0 0
                        0 0    0 1 0" result="dispMap"/>
              <feDisplacementMap in="SourceGraphic" in2="dispMap" scale="45" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
        </svg>

        {/* Inline style for nav-glass displacement — must be in document, not external CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          html.lg-displace .header {
            backdrop-filter: url(#nav-glass) blur(3px) saturate(1.7);
            -webkit-backdrop-filter: url(#nav-glass) blur(3px) saturate(1.7);
          }
          html.lg-displace .header-scrolled {
            backdrop-filter: url(#nav-glass) blur(3px) saturate(1.9);
            -webkit-backdrop-filter: url(#nav-glass) blur(3px) saturate(1.9);
          }
        `}} />

        <Header />
        <Cursor />
        {children}
        <Analytics />

        {/* Detect Chromium browsers for liquid glass displacement */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent;
                if (/Chrome|Chromium|Edg|OPR/.test(ua) && !/Firefox/.test(ua)) {
                  document.documentElement.classList.add('lg-displace');
                }
              })();
            `,
          }}
        />

        {/* Cursor tracking for spotlight effect on glass elements */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', function(e) {
                document.querySelectorAll('.card, .btn, button[type="submit"], .header').forEach(function(el) {
                  var rect = el.getBoundingClientRect();
                  var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
                  var y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
                  el.style.setProperty('--lx', x + '%');
                  el.style.setProperty('--ly', y + '%');
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
