"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="arnav-theme-mode"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
