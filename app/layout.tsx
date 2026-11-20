import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joey Munez | Web Developer",
  description:
    "Joey Munez is a Web Developer crafting fast, accessible, and scalable web experiences.",
  keywords: [
    "Joey Munez",
    "Web Developer",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Portfolio",
  ],
  authors: [{ name: "Joey Munez" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
  {children}
</body>
    </html>
  );
}
