"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   MAGNETIC BUTTON
   Subtle cursor-following pull on hover
───────────────────────────────────────────── */
function MagBtn({
  children, href, className, onClick, style,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.28;
    const y = (e.clientY - r.top  - r.height / 2) * 0.28;
    el.style.transform = `translate(${x}px,${y}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={style}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────
   MARQUEE STRIP
───────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "B5", "B8", "D9", "Z9 GT", "N7",
  "OEM-FIT", "AUSTRALIA", "BAOLAB",
  "PREMIUM EV", "OVERLAND READY", "FREE SHIPPING",
];

function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-sep">·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const vehicles = useMemo(() => [
    {
      key: "b5",   note: "Premium Off-Road SUV",
      image: "/images/vehicles/b5.png",
      logo:  "/images/vehicle-logos/b5.png",
      shop:  "https://shop.baolab.au/collections/b5",
    },
    {
      key: "b8",   note: "Full-Size Adventure SUV",
      image: "/images/vehicles/b8.png",
      logo:  "/images/vehicle-logos/b8.png",
      shop:  "https://shop.baolab.au/collections/b8",
    },
    {
      key: "d9",   note: "Luxury Electric MPV",
      image: "/images/vehicles/d9.png",
      logo:  "/images/vehicle-logos/d9.png",
      shop:  "https://shop.baolab.au/collections/d9",
    },
    {
      key: "z9gt", note: "Performance Grand Tourer",
      image: "/images/vehicles/z9gt.png",
      logo:  "/images/vehicle-logos/z9gt.png",
      shop:  "https://shop.baolab.au/collections/z9gt",
    },
    {
      key: "n7",   note: "Premium Electric SUV",
      image: "/images/vehicles/n7.png",
      logo:  "/images/vehicle-logos/n7.png",
      shop:  "https://shop.baolab.au/collections/n7",
    },
  ], []);

  const [selected, setSelected] = useState("b5");
  const selectedVehicle = vehicles.find(v => v.key === selected);
  const [scrollY, setScrollY] = useState(0);

  /* ── Parallax ── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scroll reveal (IntersectionObserver) ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .v-reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Derived hero values ── */
  const heroImgTransform    = `translateY(${scrollY * 0.22}px) scale(${1 + Math.min(scrollY * 0.0001, 0.1)})`;
  const heroContentTransform = `translateY(${scrollY * -0.10}px)`;
  const heroContentOpacity  = Math.max(1 - scrollY / 460, 0);
  const heroOverlayOpacity  = Math.min(0.50 + scrollY / 1100, 0.82);

  /* ── Pillar data ── */
  const pillars = [
    { href: "https://shop.baolab.au",                                    img: "/images/premium.jpg",  title: "Premium Accessories", desc: "High-quality upgrades that improve daily comfort and interior finish." },
    { href: "https://shop.baolab.au/collections/travel-and-camping",    img: "/images/camping.jpg",  title: "Travel & Camping",     desc: "Roof platforms, storage solutions and gear built for road trips and outdoor use." },
    { href: "https://shop.baolab.au/collections/retrofits",             img: "/images/retrofit.jpg", title: "Retrofits",            desc: "Bring back selected China-spec features such as dashcams and internal V2L." },
    { href: "/lab",                                                       img: "/sentry_demo.jpg",     title: "Lab",                  desc: "Free apps for your Denza — sentry mode, dashcam, wireless CarPlay and more." },
    { href: "/news",                                                      img: "/images/premium.jpg",  title: "News",                 desc: "Latest Denza updates, tech explainers, and BAOLAB guides." },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="hero">
        {/* Background */}
        <div className="hero-bg" style={{ transform: heroImgTransform }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero.jpg" alt="Denza vehicle" />
          <div className="hero-overlay" style={{ opacity: heroOverlayOpacity }} />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
        </div>

        {/* Content */}
        <div
          className="hero-content container"
          style={{ transform: heroContentTransform, opacity: heroContentOpacity }}
        >
          <span className="eyebrow hero-eyebrow">BAOLAB — AUSTRALIA</span>

          <h1 className="hero-h1">
            <span className="line-clip">
              <span className="line-inner line-a">Premium Accessories</span>
            </span>
            <span className="line-clip">
              <span className="line-inner line-b">for Denza Owners</span>
            </span>
          </h1>

          <p className="hero-sub">
            From daily essentials to overland builds, BAOLAB curates OEM-fit
            accessories engineered for modern electric mobility.
          </p>

          <div className="hero-btns">
            <MagBtn className="btn-primary" href="#vehicles">
              Explore Accessories
            </MagBtn>
            <MagBtn className="btn-ghost" href="https://shop.baolab.au/pages/compatibility">
              View Compatibility
            </MagBtn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-hint" aria-hidden="true">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ═══════════════════════════════════════
          VEHICLE CONFIGURATOR
      ═══════════════════════════════════════ */}
      <section id="vehicles" className="section">
        <div className="container">
          <div className="s-head reveal">
            <p className="eyebrow">CONFIGURE</p>
            <h2>Select your vehicle</h2>
            <p className="s-sub">
              {selectedVehicle?.note ?? "Browse accessories curated for each Denza model."}
            </p>
          </div>

          <div className="vehicle-grid">
            {vehicles.map((v, i) => {
              const active = v.key === selected;
              return (
                <button
                  key={v.key}
                  className={`vehicle-card vehicle-reveal${active ? " active" : ""}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                  onAnimationEnd={e => e.currentTarget.classList.remove("vehicle-reveal")}
                  onClick={() => {
                    setSelected(v.key);
                    window.location.href = v.shop;
                  }}
                  onMouseMove={e => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--mx", `${(x - rect.width  / 2) / 40}px`);
                    card.style.setProperty("--my", `${(y - rect.height / 2) / 40}px`);
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.setProperty("--mx", "0px");
                    e.currentTarget.style.setProperty("--my", "0px");
                  }}
                  type="button"
                >
                  <div className="vehicle-image">
                    <div className="vehicle-logo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={v.logo} alt={v.key} />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="vehicle-car" src={v.image} alt={v.key} />
                    <div className="vehicle-desc">{v.note}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 28 }} className="reveal">
            <MagBtn className="btn-ghost" href="https://shop.baolab.au">
              Browse all accessories →
            </MagBtn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAND
      ═══════════════════════════════════════ */}
      <div className="stats-band">
        <div className="container stats-inner">
          {[
            { num: "5",    label: "Denza Models Supported" },
            { num: "OEM",  label: "Factory-Fit Precision"  },
            { num: "AU",   label: "Australia-Wide Shipping" },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              className="stat-item reveal"
              style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          PILLARS — BAOLAB ECOSYSTEM
      ═══════════════════════════════════════ */}
      <section id="pillars" className="section">
        <div className="container">
          <div className="s-head reveal">
            <p className="eyebrow">EXPLORE</p>
            <h2>The BAOLAB ecosystem</h2>
            <p className="s-sub">
              Curated for Denza owners — from daily protection to overland
              builds and software unlocks.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((p, i) => (
              <a
                key={p.title}
                href={p.href}
                className="pillar-card reveal"
                style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="pillar-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} />
                  <div className="pillar-img-overlay" />
                </div>
                <div className="pillar-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="pillar-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
