import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/ThemeProvider";
import CustomCursor from "@/components/global/CustomCursor";
import KonamiEasterEgg from "@/components/global/KonamiEasterEgg";
import AIChatbot from "@/components/global/AIChatbot";
import MusicToggle from "@/components/global/MusicToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arnav Singh — Software Engineer & Builder",
  description:
    "Portfolio of Arnav Singh — Software Engineer, AI Developer, and Builder. Explore my work, projects, and story through three unique experiences.",
  keywords: ["Arnav Singh", "software engineer", "AI developer", "portfolio", "full stack"],
  authors: [{ name: "Arnav Singh" }],
  openGraph: {
    title: "Arnav Singh — Software Engineer & Builder",
    description: "An interactive personal OS — three paths, one person, infinite possibilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased`}>
        <ThemeProvider>
          <CustomCursor />
          <KonamiEasterEgg />
          <AIChatbot />
          <MusicToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
