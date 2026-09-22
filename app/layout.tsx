import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Fatma Betül Sare — Software Engineer",
  description: "Software Engineer working across the full stack — from UAV software, autonomous systems and real-time control to backend, desktop and mobile application development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
