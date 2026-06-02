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

        {/* Custom cursor (pointer devices only) */}
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
