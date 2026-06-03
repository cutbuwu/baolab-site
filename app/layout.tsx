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
          </defs>
        </svg>

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
