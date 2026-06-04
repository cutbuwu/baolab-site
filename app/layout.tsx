import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Cursor from "./components/Cursor";


export const metadata: Metadata = {
  title: "BaoLab — Premium Denza Accessories Australia",
  description:
    "Premium aftermarket accessories for Denza B5, B8, D9, Z9 GT, and N7. Quality tested, shipped from China. Free shipping over $99.",
  metadataBase: new URL("https://baolab.au"),
  openGraph: {
    title: "BaoLab — Premium Denza Accessories Australia",
    description:
      "Premium aftermarket accessories for Denza B5, B8, D9, Z9 GT, and N7.",
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
    "Premium aftermarket accessories for Denza B5, B8, D9, Z9 GT, and N7. Quality tested, shipped from China.",
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
              x="-20%" y="-120%"
              width="140%" height="340%"
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
              <feDisplacementMap
                in="SourceGraphic"
                in2="smooth"
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

              /* navbar cursor-light shimmer overlay */
              .header::before { filter: url(#liquid-refract); }

              /* button specular rim */
              .btn-primary::after,
              .btn-ghost::after { filter: url(#glass-specular); }
            `,
          }}
        />

        <Cursor />
        <Header />

        <main className="page-spotlight">{children}</main>

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
