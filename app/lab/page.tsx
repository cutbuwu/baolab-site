"use client";

import Link from "next/link";
import { useState } from "react";

const apps = [


  {
    name: "Baidu CarLink",
    description:
      'The "CarPlay equivalent" for Chinese phones. Connects wirelessly the moment you start the car — supports Oppo, Vivo, Xiaomi, OnePlus, Huawei, and more. No cables, no pairing menus.',
    version: "latest",
    size: "~80MB",
        downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/baidu-carlink.apk",
    icon: "📱",
    category: "Connectivity",
  },
  {
    name: "DiPlus",
    description:
      "The largest 3rd-party BYD companion app from China. Includes sentry mode, quad-view dashcam, remote vehicle control, automations, energy tracking, and more. Works with all Denza models. Requires ADB unlock for full features.",
    version: "1.3.8-beta21",
    size: "~50MB",
        downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/%E8%BF%AA%E5%8A%A0.1.3.8-beta21.apk",
    icon: "🚗",
    category: "Connectivity",
  },
  {
    name: "车鱼视听",
    description:
      "ByteDance's official 2-in-1 app with Douyin and Qishui Music. Car-optimized entertainment for your Denza's centre screen.",
    version: "3.20.1",
    size: "~40MB",
        downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/%E8%BD%A6%E9%B1%BC%E8%A7%86%E5%90%AC3.20.1(%E8%BD%A6%E6%9C%BA%E7%89%88%E6%8A%96%E9%9F%B3%2B%E6%B1%BD%E6%B0%B4%E9%9F%B3%E4%B9%90).apk",
    icon: "🎵",
    category: "Entertainment",
  },
  {
    name: "Baidu CarLife",
    description:
      "Car connectivity for Chinese Android phones without Google Services. This is your ONLY option for phone mirroring, navigation, and music. Supports Oppo, Vivo, Xiaomi, OnePlus, and more. Works with most Chinese Android phones.",
    version: "4.0",
    size: "~60MB",
        downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/%E6%9C%80%E6%96%B04.0%E8%BD%A6%E6%9C%BA%E7%89%88%E7%99%BE%E5%BA%A6CarLife.apk",
    icon: "🗺️",
    category: "Connectivity",
  },
  {
    name: "全民K歌 (Karaoke)",
    description:
      "Sing karaoke in your Denza! BYD-customized version with lyrics display on the centre screen. Great for waiting while charging.",
    version: "1.5.1.137",
    size: "~35MB",
        downloadUrl:
      "https://pub-e837942233b04df9a2c9004f84601ce7.r2.dev/%E5%85%A8%E6%B0%91K%E6%AD%8C%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%AE%9A%E5%88%B6%E7%89%88-1.5.1.137.apk",
    icon: "🎤",
    category: "Entertainment",
  },
  {
    name: "Electro",
    description:
      "Brazilian EV companion app. View charging stations, track energy consumption, and connect with the EV community. Popular in South America.",
    version: "latest",
    size: "~25MB",
        downloadUrl: "https://electro.app.br/car-apk",
    icon: "⚡",
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
            App Library
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
              borderRadius: 999,
              border: "1px solid rgba(255, 255, 255, 0.18)",
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px) saturate(1.8)",
              WebkitBackdropFilter: "blur(16px) saturate(1.8)",
              color: "var(--text)",
              fontSize: 14,
              outline: "none",
              boxShadow: "0 1.5px 0 rgba(255, 255, 255, 0.22) inset, 0 -1px 0 rgba(0, 0, 0, 0.08) inset, 0 8px 24px rgba(0, 0, 0, 0.18)",
              transition: "all 0.2s ease",
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
                display: "flex",
                flexDirection: "column",
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
                  flex: 1,
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
              </div>
              <a
                href={app.downloadUrl}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  padding: "10px 24px",
                  borderRadius: 999,
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(16px) saturate(1.8)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 1.5px 0 rgba(255, 255, 255, 0.22) inset, 0 -1px 0 rgba(0, 0, 0, 0.08) inset, 0 8px 24px rgba(0, 0, 0, 0.18)",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.14)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
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
