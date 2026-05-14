import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WasteLess — Predict Food Waste, Optimize Ordering",
  description: "AI-powered ingredient demand predictions for restaurants. Reduce food waste and cut costs with smart ordering."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="967144b9-b2d0-48db-9d5d-d11d1976da4e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
