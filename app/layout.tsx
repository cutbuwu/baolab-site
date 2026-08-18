import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Cursor from "./components/Cursor";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "BAOLAB — Denza Accessories and ADB Enablement Service Australia",
  description:
    "Australia's first dedicated Denza accessory store. Premium B5, B8, D9 upgrades. ADB enablement and app sideloading service for BYD/Denza vehicles.",
  metadataBase: new URL("https://baolab.au"),
  openGraph: {
    title: "BAOLAB — Denza Accessories and ADB Enablement Service Australia",
    description:
      "Australia's first dedicated Denza accessory store. Premium B5, B8, D9 upgrades. ADB enablement and app sideloading service.",
    url: "https://baolab.au",
    siteName: "BAOLAB",
    locale: "en_AU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BAOLAB",
  url: "https://baolab.au",
  logo: "https://baolab.au/logo.png",
  description:
    "Australia's first dedicated Denza accessory store. Premium B5, B8, D9, Z9 GT, N7 upgrades. ADB enablement and app sideloading service for BYD/Denza vehicles.",
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

            {/* nav-lens: gradient displacement map (feImage), not noise.
                R = horizontal push, G = vertical, 128 = neutral. Gradient bands
                at each edge fade to neutral grey in the middle, so refraction
                is strongest at the rim and falls off SMOOTHLY — a real bevel,
                no hard ring boundary. All edges sample inward (magnifying), so
                it can never read outside the captured backdrop = no edge cracks.
                Map is built for a 1060x56 pill; matches .header exactly.
                IMPORTANT: keep scale under ~55. Rim values are capped at
                208/48 over 18px bands so the vertical mapping stays monotonic;
                past ~57 the rim folds and shows INVERTED content (real thick-
                lens physics, wrong look for UI glass). 36 = iOS-like. */}
            <filter id="nav-lens" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feImage href="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'1060'%20height%3D'56'%3E%20%3Cdefs%3E%20%3ClinearGradient%20id%3D'l'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'0'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'rgb(255%2C128%2C128)'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'rgb(128%2C128%2C128)'%2F%3E%3C%2FlinearGradient%3E%20%3ClinearGradient%20id%3D'r'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'0'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'rgb(128%2C128%2C128)'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'rgb(0%2C128%2C128)'%2F%3E%3C%2FlinearGradient%3E%20%3ClinearGradient%20id%3D't'%20x1%3D'0'%20y1%3D'0'%20x2%3D'0'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'rgb(128%2C208%2C128)'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'rgb(128%2C128%2C128)'%2F%3E%3C%2FlinearGradient%3E%20%3ClinearGradient%20id%3D'b'%20x1%3D'0'%20y1%3D'0'%20x2%3D'0'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'rgb(128%2C128%2C128)'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'rgb(128%2C48%2C128)'%2F%3E%3C%2FlinearGradient%3E%20%3C%2Fdefs%3E%20%3Crect%20width%3D'1060'%20height%3D'56'%20fill%3D'rgb(128%2C128%2C128)'%2F%3E%20%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'70'%20height%3D'56'%20fill%3D'url(%23l)'%2F%3E%20%3Crect%20x%3D'990'%20y%3D'0'%20width%3D'70'%20height%3D'56'%20fill%3D'url(%23r)'%2F%3E%20%3Crect%20x%3D'70'%20y%3D'0'%20width%3D'920'%20height%3D'18'%20fill%3D'url(%23t)'%2F%3E%20%3Crect%20x%3D'70'%20y%3D'38'%20width%3D'920'%20height%3D'18'%20fill%3D'url(%23b)'%2F%3E%20%3C%2Fsvg%3E" x="0%" y="0%" width="100%" height="100%" preserveAspectRatio="none" result="map"/>
              <feGaussianBlur in="map" stdDeviation="2" result="softmap"/>
              <feDisplacementMap in="SourceGraphic" in2="softmap" scale="36" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
        </svg>

        {/* CRITICAL: these filter refs MUST live in an inline <style> in the
            document. From an external stylesheet (globals.css -> /_next/static/css/)
            `url(#id)` resolves against the CSS file's URL, never finds the filter,
            and silently does nothing. Do NOT move these into globals.css. */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Both states use the SAME filter function list
             (url + blur + saturate + brightness, in this order) so CSS can
             interpolate between them — the glass visibly "opens up" as you
             scroll. Change the order or drop a function from one state and
             the transition snaps instead of animating. */
          html.lg-displace .header {
            backdrop-filter: url(#nav-lens) blur(20px) saturate(1.8) brightness(1.02);
            -webkit-backdrop-filter: url(#nav-lens) blur(20px) saturate(1.8) brightness(1.02);
          }
          html.lg-displace .header-scrolled {
            backdrop-filter: url(#nav-lens) blur(1px) saturate(2.0) brightness(1.06);
            -webkit-backdrop-filter: url(#nav-lens) blur(1px) saturate(2.0) brightness(1.06);
          }
        `}} />

        <Header />
        <Cursor />
        {children}
        <Footer />
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
