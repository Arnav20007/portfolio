import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/ThemeProvider";

import KonamiEasterEgg from "@/components/global/KonamiEasterEgg";
import AIChatbot from "@/components/global/AIChatbot";
import MusicToggle from "@/components/global/MusicToggle";

export const metadata: Metadata = {
  title: "Arnav Singh | Software Engineer",
  description:
    "Portfolio of Arnav Singh, software engineer focused on practical AI and full-stack products.",
  keywords: ["Arnav Singh", "software engineer", "AI developer", "portfolio", "full stack"],
  authors: [{ name: "Arnav Singh" }],
  openGraph: {
    title: "Arnav Singh | Software Engineer",
    description: "Practical AI and full-stack products.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#060606] text-[#f4efea]">
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

