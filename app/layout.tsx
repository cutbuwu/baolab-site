import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Cursor from "./components/Cursor";


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
          style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter
              id="liquid-refract"
              x="-15%" y="-15%"
              width="130%" height="130%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.022"
                numOctaves="3"
                seed="7"
                result="noise"
              />
              <feColorMatrix
                type="matrix"
                values="3 0 0 0 -1
                        0 3 0 0 -1
                        0 0 3 0 -1
                        0 0 0 1 0"
                in="noise"
                result="sharpNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="sharpNoise"
                scale="9"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />
              <feGaussianBlur in="displaced" stdDeviation="0.5" result="soft" />
              <feComposite in="soft" in2="SourceGraphic" operator="in" />
            </filter>

            <filter
              id="glass-specular"
              x="-10%" y="-10%"
              width="120%" height="120%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.2" result="glow" />
              <feComposite in="glow" in2="SourceGraphic" operator="over" />
            </filter>

            {/*
              nav-glass: DRAMATIC backdrop refraction for the navbar only.
              Applied via backdrop-filter (Chromium-only) so it warps the actual
              page content scrolling BEHIND the fixed navbar. The filter region is
              deliberately oversized (y/height) so displaced pixels near the short
              bar's edges still have backdrop to sample — otherwise the warp goes
              transparent at the edges. `scale` is the drama knob.
            */}
            <filter
              id="nav-glass"
              x="-40%" y="-150%"
              width="180%" height="400%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.009 0.016"
                numOctaves="2"
                seed="11"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="1.1" result="smooth" />
              {/*
                EDGE-CRACK FIX: backdrop-filter only captures the element's own
                box as backdrop. On a 56px-tall bar, large VERTICAL displacement
                samples below the bar where no backdrop exists -> transparent
                cracks at the bottom edge. So we flatten the green (vertical)
                channel toward neutral 0.5 — G_out = 0.12*G_in + 0.44 — leaving
                max ~2.7px of vertical shift. The red (horizontal) channel stays
                at full scale 45: the bar is ~1000px wide, so 22px of horizontal
                sampling stays safely inside the captured backdrop. Result: full
                dramatic horizontal refraction, no edge cracks.
                Knob: to eliminate vertical entirely, set row 2 to "0 0 0 0 0.5".
              */}
              <feColorMatrix
                in="smooth"
                type="matrix"
                values="1 0    0 0 0
                        0 0.12 0 0 0.44
                        0 0    1 0 0
                        0 0    0 1 0"
                result="dispMap"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="dispMap"
                scale="45"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/*
          CRITICAL: filter references MUST live in an inline <style> in the
          document — NOT in globals.css. From an external stylesheet, `url(#id)`
          resolves against the stylesheet's URL and the filter is never found, so
          it silently does nothing. Inline here, it resolves against this
          document where the <svg> filters live. Do not move into globals.css.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* DRAMATIC backdrop refraction — navbar only, Chromium only.
                 Warps the real page content scrolling behind the fixed nav.
                 .lg-displace is added to <html> by Cursor.tsx when the browser
                 supports it; Safari/Firefox keep the plain blur fallback in
                 globals.css so nothing breaks. */
              html.lg-displace .header {
                backdrop-filter: url(#nav-glass) blur(5px) saturate(1.7);
                -webkit-backdrop-filter: url(#nav-glass) blur(5px) saturate(1.7);
              }
              html.lg-displace .header-scrolled {
                backdrop-filter: url(#nav-glass) blur(2px) saturate(1.4);
                -webkit-backdrop-filter: url(#nav-glass) blur(2px) saturate(1.4);
              }

              /* navbar cursor spotlight stays a CLEAN radial glow (no
                 displacement) — displacing the bright overlay made the edge
                 cracking more visible. The 40% white radial gradient lives in
                 globals.css and is unaffected. */

              /* button specular rim */
              .btn-primary::after,
              .btn-ghost::after { filter: url(#glass-specular); }
            `,
          }}
        />

        <Cursor />
        <Header />

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/baolab-logo.png" alt="BAOLAB" className="footer-logo-img" />
              <p className="footer-desc">
                Premium accessories designed for Denza owners across Australia.
              </p>
            </div>

            <div className="footer-disclaimer">
              <p>
                Baolab is an independent aftermarket accessories retailer and is
                not affiliated with, endorsed by, or associated with Denza, BYD,
                or any of their subsidiaries. All trademarks and vehicle names
                are the property of their respective owners and are used for
                compatibility reference only.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
