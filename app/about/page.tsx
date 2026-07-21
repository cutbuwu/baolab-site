import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BAOLAB",
  description:
    "BAOLAB is Australia's destination for premium aftermarket Denza & BYD accessories. Born from passion, built for enthusiasts.",
};

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <p className="news-label">ABOUT</p>
        <h1>Built for the Brave</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 8 }}>
          Australia&apos;s home for premium Denza &amp; BYD accessories.
        </p>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Who We Are</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            BAOLAB was born from a simple observation: Denza and BYD owners in Australia 
            deserve access to the same premium aftermarket accessories available overseas. 
            We source, test, and curate the best accessories for Denza B5, B8, D9, Z9 GT, 
            and BYD N7 — so you can personalise your vehicle without compromising on quality.
          </p>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>What We Do</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            We partner directly with trusted manufacturers to bring accessories that are 
            designed specifically for your vehicle. Every product we stock has been vetted 
            for fitment, durability, and finish. From interior upgrades to off-road gear, 
            we focus on accessories that enhance your driving experience — not just fill a catalogue.
          </p>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Our Range</h2>
          <ul style={{ color: "rgba(255,255,255,0.7)", lineHeight: 2, paddingLeft: 20 }}>
            <li><strong>Premium Accessories</strong> — interior trims, ambient lighting, seat upgrades</li>
            <li><strong>Travel &amp; Camping</strong> — roof racks, storage solutions, camping gear</li>
            <li><strong>Retrofits</strong> — practical upgrades for daily driving</li>
            <li><strong>Protection</strong> — floor mats, boot liners, paint protection</li>
          </ul>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Vehicles We Support</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {["Denza B5", "Denza B8", "Denza D9", "Denza Z9 GT", "BYD N7"].map((v) => (
              <div key={v} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "16px 12px",
                textAlign: "center",
                fontSize: 14,
                color: "rgba(255,255,255,0.8)",
              }}>
                {v}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Get in Touch</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            Questions about a product, compatibility, or your order? 
            Email us at <a href="mailto:hello@baolab.au">hello@baolab.au</a> — 
            we respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
