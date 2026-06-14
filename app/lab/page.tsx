"use client";

import Link from "next/link";
import { useState } from "react";

const apps = [
  {
    name: "Sentry Mode",
    description:
      "Turn your Denza's cameras into a parking surveillance system. Motion detection, hazard light alerts, horn activation, and phone notifications — all from the factory cameras.",
    version: "1.0",
    size: "~15MB",
    compatibility: "B5, B8, D9, Z9 GT, N7",
    downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/sentry-mode.apk",
    icon: "📹",
    category: "Safety",
  },
  {
    name: "Quad-View Dashcam",
    description:
      "Record while driving using the car's 360° cameras. Four simultaneous angles — front, left, right, rear — with timestamp, speed, and pedal position overlays. No aftermarket hardware needed.",
    version: "1.0",
    size: "~12MB",
    compatibility: "B5, B8, D9, Z9 GT, N7",
    downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/quad-view-dashcam.apk",
    icon: "🎬",
    category: "Recording",
  },
  {
    name: "Baidu CarLink",
    description:
      'The "CarPlay equivalent" for Chinese phones. Connects wirelessly the moment you start the car — supports Oppo, Vivo, Xiaomi, OnePlus, Huawei, and more. No cables, no pairing menus.',
    version: "latest",
    size: "~80MB",
    compatibility: "B5, B8, D9, Z9 GT, N7",
    downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/baidu-carlink.apk",
    icon: "📱",
    category: "Connectivity",
  },
];

export default function LabPage() {
  const [search, setSearch] = useState("");

  const filteredApps = apps.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase()) ||
      app.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="section container" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <p
            style={{
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: 12,
              color: "var(--muted2)",
              marginBottom: 8,
            }}
          >
            BaoLab Lab
          </p>
          <h2 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2 }}>
            Denza App Library
          </h2>
          <p
            style={{
              marginTop: 16,
              color: "var(--muted)",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            Free third-party apps for Denza vehicles. Unlock features that BYD
            didn&apos;t include from the factory — sentry mode, dashcam recording,
            wireless CarPlay for Chinese phones, and more.
          </p>
          <p style={{ marginTop: 12, color: "var(--muted2)", fontSize: 13 }}>
            Requires ADB access.{" "}
            <Link
              href="https://shop.baolab.au/products/adb-unlocking-service"
              style={{ color: "var(--text)", textDecoration: "underline" }}
            >
              Get it unlocked →
            </Link>
          </p>
        </div>

        {/* Search */}
        <div style={{ marginTop: 32, maxWidth: 400 }}>
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid var(--border-soft)",
              background: "var(--panel)",
              color: "var(--text)",
              fontSize: 14,
              outline: "none",
            }}
          />
        </div>
      </section>

      {/* Apps Grid */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {filteredApps.map((app) => (
            <div
              key={app.name}
              style={{
                border: "1px solid var(--border-soft)",
                borderRadius: 16,
                padding: "28px 32px",
                background: "var(--panel)",
                transition: "border-color 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border-soft)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <span style={{ fontSize: 32 }}>{app.icon}</span>
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {app.name}
                  </h3>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--muted2)",
                      background: "rgba(255,255,255,0.04)",
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {app.category}
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: 13,
                  lineHeight: 1.65,
                  marginBottom: 14,
                }}
              >
                {app.description}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 11,
                  color: "var(--muted2)",
                  marginBottom: 16,
                }}
              >
                <span>v{app.version}</span>
                <span>·</span>
                <span>{app.size}</span>
                <span>·</span>
                <span>{app.compatibility}</span>
              </div>
              <a
                href={app.downloadUrl}
                className="primary-btn"
                style={{
                  display: "inline-block",
                  fontSize: 13,
                  padding: "10px 22px",
                }}
              >
                Download APK ↓
              </a>
            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <p style={{ color: "var(--muted)", textAlign: "center", padding: 40 }}>
            No apps found matching &quot;{search}&quot;
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div
          style={{
            border: "1px solid var(--border-soft)",
            borderRadius: 16,
            padding: "40px 32px",
            textAlign: "center",
            background: "var(--panel)",
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>
            Don&apos;t have ADB access yet?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 14,
              lineHeight: 1.65,
              maxWidth: 480,
              margin: "0 auto 24px",
            }}
          >
            You&apos;ll need factory-level ADB access to install these apps. We
            offer a remote unlock service that takes 10 minutes.
          </p>
          <Link
            href="https://shop.baolab.au/products/adb-unlocking-service"
            className="primary-btn"
            style={{ display: "inline-block" }}
          >
            Get ADB Unlock Service →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container" style={{ paddingBottom: 60 }}>
        <p style={{ fontSize: 11, color: "var(--muted2)", lineHeight: 1.6 }}>
          All apps are provided as-is. Use at your own risk. BaoLab is not
          responsible for any issues caused by third-party software. Apps are
          compatible with Denza B5, B8, D9, Z9 GT, N7 and select BYD models
          with ADB access enabled.
        </p>
      </section>
    </>
  );
}
