import Link from "next/link";

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
  },
];

export default function HubPage() {
  return (
    <>
      <section className="section container" style={{ paddingTop: 140 }}>
        <div className="section-head">
          <p style={{ letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 12, color: "var(--muted2)", marginBottom: 8 }}>
            BaoLab Hub
          </p>
          <h2 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.2 }}>
            Denza App Library
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 600 }}>
            Free third-party apps for Denza vehicles. Unlock features that BYD
            didn&apos;t include from the factory — sentry mode, dashcam recording,
            wireless CarPlay for Chinese phones, and more.
          </p>
          <p style={{ marginTop: 12, color: "var(--muted2)", fontSize: 13 }}>
            Requires ADB access.{" "}
            <Link
              href="/products/adb-unlock-service"
              style={{ color: "var(--text)", textDecoration: "underline" }}
            >
              Get it unlocked →
            </Link>
          </p>
        </div>
      </section>

      {/* Apps */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {apps.map((app) => (
            <div
              key={app.name}
              style={{
                border: "1px solid var(--border-soft)",
                borderRadius: 16,
                padding: "28px 32px",
                background: "var(--panel)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-soft)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span style={{ fontSize: 28 }}>{app.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--text)" }}>
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
                      v{app.version}
                    </span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>
                    {app.description}
                  </p>
                  <div style={{ display: "flex", gap: 16, fontSize: 11, color: "var(--muted2)", marginBottom: 16 }}>
                    <span>Size: {app.size}</span>
                    <span>·</span>
                    <span>Compatibility: {app.compatibility}</span>
                  </div>
                  <a
                    href={app.downloadUrl}
                    className="primary-btn"
                    style={{ display: "inline-block", fontSize: 13, padding: "10px 22px" }}
                  >
                    Download APK ↓
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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
          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.65, maxWidth: 480, margin: "0 auto 24px" }}>
            You&apos;ll need factory-level ADB access to install these apps. We
            offer a remote unlock service that takes 10 minutes.
          </p>
          <Link
            href="/products/adb-unlock-service"
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
