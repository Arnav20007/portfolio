import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/ThemeProvider";

import KonamiEasterEgg from "@/components/global/KonamiEasterEgg";
import AIChatbot from "@/components/global/AIChatbot";
import MusicToggle from "@/components/global/MusicToggle";

export const metadata: Metadata = {
  title: "Arnav Singh | B.Tech CSE Student & Developer",
  description:
    "I am Arnav Singh, a B.Tech CSE student at BBDU, Lucknow. Here are some of the projects I have built and the technologies I am learning.",
  keywords: ["Arnav Singh", "B.Tech CSE student", "BBDU", "web development", "portfolio"],
  authors: [{ name: "Arnav Singh" }],
  openGraph: {
    title: "Arnav Singh | B.Tech CSE Student & Developer",
    description: "Projects, skills, and contact details for Arnav Singh, a B.Tech CSE student at BBDU, Lucknow.",
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
      <body className="font-sans antialiased bg-[#faf8f9] text-[#0f172a]">
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
