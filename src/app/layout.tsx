import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/ThemeProvider";

import KonamiEasterEgg from "@/components/global/KonamiEasterEgg";
import AIChatbot from "@/components/global/AIChatbot";
import MusicToggle from "@/components/global/MusicToggle";

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#141C3A]">
        <ThemeProvider>
          <KonamiEasterEgg />
          {children}
          <AIChatbot />
          <MusicToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
