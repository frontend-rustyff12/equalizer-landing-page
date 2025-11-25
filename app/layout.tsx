import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "equalizer landing page",
  description: "equalizer landing page for frontend mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
