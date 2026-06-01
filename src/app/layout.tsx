import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Crew of Builders",
  description: "A curated community for builders and experts.",
  icons: {
    icon: "/assets/crew-logo-black.png",
    apple: "/assets/crew-logo-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-06D537XN8S" />
      </body>
    </html>
  );
}
