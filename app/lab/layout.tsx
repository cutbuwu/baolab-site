import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Library — Free Denza Apps | BAOLAB Lab",
  description:
    "Free third-party apps for Denza vehicles. Sentry mode, dashcam recording, wireless CarPlay, and more. Requires ADB enablement.",
  openGraph: {
    title: "App Library — Free Denza Apps | BAOLAB Lab",
    description:
      "Free third-party apps for Denza vehicles. Sentry mode, dashcam recording, wireless CarPlay, and more.",
    url: "https://baolab.au/lab",
  },
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
