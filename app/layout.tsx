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
          </defs>
        </svg>

        <Header />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
