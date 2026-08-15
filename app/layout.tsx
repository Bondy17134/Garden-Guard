import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
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
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>; }
