"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const vehicles = useMemo(
    () => [
      {
        key: "b5",
        note: "Premium Off-Road SUV",
        image: "/images/vehicles/b5.png",
        logo: "/images/vehicle-logos/b5.png",
        shop: "https://shop.baolab.au/collections/b5",
      },
      {
        key: "b8",
        note: "Full-Size Adventure SUV",
        image: "/images/vehicles/b8.png",
        logo: "/images/vehicle-logos/b8.png",
        shop: "https://shop.baolab.au/collections/b8",
      },
      {
        key: "d9",
        note: "Luxury Electric MPV",
        image: "/images/vehicles/d9.png",
        logo: "/images/vehicle-logos/d9.png",
        shop: "https://shop.baolab.au/collections/d9",
      },
      {
        key: "z9gt",
        note: "Performance Grand Tourer",
        image: "/images/vehicles/z9gt.png",
        logo: "/images/vehicle-logos/z9gt.png",
        shop: "https://shop.baolab.au/collections/z9gt",
      },
      {
        key: "n7",
        note: "Premium Electric SUV",
        image: "/images/vehicles/n7.png",
        logo: "/images/vehicle-logos/n7.png",
        shop: "https://shop.baolab.au/collections/n7",
      },
    ],
    []
  );

  const [selected, setSelected] = useState("b5");
  const selectedVehicle = vehicles.find((v) => v.key === selected);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(currentY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroImageTransform = `translateY(${scrollY * 0.24}px) scale(${1 + Math.min(scrollY * 0.00012, 0.1)})`;
  const heroContentTransform = `translateY(${scrollY * -0.12}px)`;
  const heroContentOpacity = Math.max(1 - scrollY / 400, 0.1);
  const heroOverlayOpacity = Math.min(0.55 + scrollY / 1400, 0.78);

  return (
    <>
      <div>

        {/* HERO */}
        <section className="hero">
          <div
            className="hero-image"
            style={{ transform: heroImageTransform }}
          >
            <img src="/images/hero.jpg" alt="Denza vehicle" />
            <div
              className="hero-overlay"
              style={{ opacity: heroOverlayOpacity }}
            ></div>
          </div>

          <div
            className="hero-content container"
            style={{
              transform: heroContentTransform,
              opacity: heroContentOpacity,
            }}
          >
            <h1>
              Premium Accessories <br /> for Denza Owners
            </h1>

            <p>
              From daily essentials to overland builds, Baolab curates OEM-fit
              accessories engineered for modern electric mobility.
            </p>

            <div style={{ marginTop: 40 }}>
              <a className="primary-btn" href="#vehicles">
                Explore Accessories
              </a>

              <a
                className="secondary-btn"
                href="#pillars"
                style={{ marginLeft: 20 }}
              >
                View Compatibility
              </a>
            </div>
          </div>
        </section>

        {/* VEHICLE PICKER */}
        <section id="vehicles" className="section container">
          <div className="section-head">
            <h2>Select your vehicle</h2>
            <p>
              {selectedVehicle?.note ||
                "Browse accessories curated for each Denza model."}
            </p>
          </div>

          <div className="vehicle-grid">
  {vehicles.map((v, index) => {
    const active = v.key === selected;

    return (
      <button
        key={v.key}
        className={`vehicle-card vehicle-reveal ${active ? "active" : ""}`}
        style={{ animationDelay: `${index * 120}ms` }}
        onClick={() => {
          setSelected(v.key);
          window.location.href = v.shop;
        }}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const moveX = (x - centerX) / 40;
          const moveY = (y - centerY) / 40;

          card.style.setProperty("--mx", `${moveX}px`);
          card.style.setProperty("--my", `${moveY}px`);
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget;
          card.style.setProperty("--mx", `0px`);
          card.style.setProperty("--my", `0px`);
        }}
        type="button"
      >
        <div className="vehicle-image">
          <div className="vehicle-logo">
            <img src={v.logo} alt={v.key} />
          </div>

          <img className="vehicle-car" src={v.image} alt={v.key} />

          <div className="vehicle-desc">{v.note}</div>
        </div>
      </button>
    );
  })}
</div>

          <div style={{ marginTop: 22 }}>
            <a
              className="secondary-btn"
              href="https://shop.baolab.au"
            >
              Browse compatible accessories
            </a>
          </div>
        </section>

        {/* PILLARS */}
        <section id="pillars" className="section container">
          <div className="pillar-grid">
            <a href="https://shop.baolab.au" className="pillar-card">
              <img src="/images/premium.jpg" alt="Premium accessories" />
              <h3>Premium Accessories</h3>
              <p>
                High-quality upgrades that improve daily comfort and interior
                finish.
              </p>
            </a>

            <a href="https://shop.baolab.au/collections/travel-and-camping" className="pillar-card">
              <img src="/images/camping.jpg" alt="Travel and camping" />
              <h3>Travel &amp; Camping</h3>
              <p>
                Roof platforms, storage solutions and gear built for road trips
                and outdoor use.
              </p>
            </a>

            <a href="https://shop.baolab.au/collections/retrofits" className="pillar-card">
              <img src="/images/retrofit.jpg" alt="Advanced retrofits" />
              <h3>Retrofits</h3>
              <p>
                Bring back selected China-spec features such as dashcams and
                internal V2L.
              </p>
            </a>

            <a href="/lab" className="pillar-card">
              <img src="/sentry_demo.jpg" alt="Denza Lab" />
              <h3>Denza Lab</h3>
              <p>
                Free apps for your Denza — sentry mode, dashcam, wireless
                CarPlay for Chinese phones, and more.
              </p>
            </a>

            <a href="/news" className="pillar-card">
              <img src="/images/premium.jpg" alt="News" />
              <h3>News</h3>
              <p>
                Latest Denza updates, tech explainers, and BaoLab guides.
              </p>
            </a>
          </div>
        </section>

      </div>
    </>
  );
}