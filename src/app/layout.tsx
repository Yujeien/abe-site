import type { Metadata } from "next";
import { Anton, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Free stand-ins for the reference style's Die Grotesk B / ABC Gravity / IBM Plex Mono.
const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const grotesk = Inter({ weight: "500", subsets: ["latin"], variable: "--font-grotesk" });
const mono = IBM_Plex_Mono({ weight: ["500", "600"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "ABE — Sleeveless Quarterzip",
  description:
    "ABE is a sleeveless quarter-zip with a stand collar and a ribbed hem band. Black and maroon. Designed as a project, built to be worn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
