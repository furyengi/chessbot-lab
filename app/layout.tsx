import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chessbot Lab — Teach your bot how you think",
  description: "An imitation-first chess lab where Nova learns your style through play.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
