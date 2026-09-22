import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Fatma Betül Sare — Software Engineer",
  description: "Software Engineer focused on UAV systems, autonomous software, real-time control systems and multi-platform application development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
