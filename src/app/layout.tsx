import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crew of Builders",
  description: "A curated community for builders and experts.",
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
      </body>
    </html>
  );
}
