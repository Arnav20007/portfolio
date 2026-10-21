import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import KonamiEasterEgg from "@/components/global/KonamiEasterEgg";
import AIChatbot from "@/components/global/AIChatbot";
import MusicToggle from "@/components/global/MusicToggle";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnav Singh | CS Student, Full-Stack Developer & Builder",
  description:
    "I'm Arnav Singh, a B.Tech CSE student at BBDU, Lucknow. I solve DSA problems in C++ and build privacy-first web utilities.",
  keywords: ["Arnav Singh", "B.Tech CSE student", "BBDU", "web development", "portfolio", "C++", "DSA", "Next.js"],
  authors: [{ name: "Arnav Singh" }],
  openGraph: {
    title: "Arnav Singh | CS Student & Full-Stack Developer",
    description: "Projects, technical skills, and credentials for Arnav Singh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased bg-white text-[#141C3A]">
        <KonamiEasterEgg />
        {children}
        <AIChatbot />
        <MusicToggle />
      </body>
    </html>
  );
}
