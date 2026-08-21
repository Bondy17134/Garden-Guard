import type { Metadata } from "next";
import { Anton, Barlow, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./hero-override.css";
import "./hero-mobile.css";
import "./story-override.css";
import "./logo-override.css";
import "./hero-color-override.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://gardenguard.org"),
  title: "Garden Guard — AI-powered wildlife observation",
  description: "Meet the neighbours who visit after dark. Garden Guard uses computer vision to observe backyard wildlife.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Garden Guard — AI-powered wildlife observation",
    description: "Meet the neighbours who visit after dark.",
    url: "/",
    siteName: "Garden Guard",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Garden Guard night-time wildlife observation" }],
  },
  twitter: { card: "summary_large_image", title: "Garden Guard", description: "Meet the neighbours who visit after dark.", images: ["/og.png"] },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${barlow.variable}`}>{children}</body></html>; }
