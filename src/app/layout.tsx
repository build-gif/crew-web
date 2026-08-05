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
  openGraph: {
    title: "Crew of Builders",
    description: "Builders build with investors.",
    url: "https://www.crewofbuilders.com",
    siteName: "Crew of Builders",
    images: [
      {
        url: "https://www.crewofbuilders.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crew of Builders",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crew of Builders",
    description: "Builders build with investors.",
    images: ["https://www.crewofbuilders.com/assets/og-image.jpg"],
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
