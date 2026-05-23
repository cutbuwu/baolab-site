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
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-16 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
          BaoLab Hub
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Denza App Library
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Free third-party apps for Denza vehicles. Unlock features that BYD
          didn&apos;t include from the factory — sentry mode, dashcam recording,
          wireless CarPlay for Chinese phones, and more.
        </p>
        <p className="text-sm text-neutral-600 mt-4">
          Requires ADB access.{" "}
          <Link
            href="/products/adb-unlock-service"
            className="underline text-neutral-400 hover:text-white transition"
          >
            Get it unlocked →
          </Link>
        </p>
      </section>

      {/* Apps Grid */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="grid gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-neutral-600 transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{app.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold">{app.name}</h2>
                    <span className="text-xs text-neutral-600 bg-neutral-900 px-2 py-0.5 rounded">
                      v{app.version}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-4">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-neutral-600 mb-4">
                    <span>Size: {app.size}</span>
                    <span>•</span>
                    <span>Compatibility: {app.compatibility}</span>
                  </div>
                  <a
                    href={app.downloadUrl}
                    className="inline-block bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-neutral-200 transition"
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
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="border border-neutral-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Don&apos;t have ADB access yet?
          </h2>
          <p className="text-neutral-400 mb-6 max-w-lg mx-auto">
            You&apos;ll need factory-level ADB access to install these apps. We
            offer a remote unlock service that takes 10 minutes.
          </p>
          <Link
            href="/products/adb-unlock-service"
            className="inline-block bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition"
          >
            Get ADB Unlock Service →
          </Link>
        </div>
      </section>

      {/* Footer note */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <p className="text-xs text-neutral-700">
          All apps are provided as-is. Use at your own risk. BaoLab is not
          responsible for any issues caused by third-party software. Apps are
          compatible with Denza B5, B8, D9, Z9 GT, N7 and select BYD models
          with ADB access enabled.
        </p>
      </section>
    </main>
  );
}
