import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

// Self-hosted at build time by next/font: no request to Google at runtime,
// and the home finally ships its real typefaces instead of system fallbacks.
export const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--home-display", display: "swap" });
export const sansFont = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--home-sans", display: "swap" });
export const monoFont = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--home-mono", display: "swap" });

export const HOME_FONT_CLASSES = `${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`;
