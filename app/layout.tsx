import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = { title: "Garden Watch — A small garden experiment", description: "A camera, a curious bush turkey, and a project to understand garden wildlife.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>; }
