import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

// Re-rendered at most hourly, so past dates leave the agenda and the
// Pitch Day bar comes down on their own, without a deploy.
export const revalidate = 3600;

export const metadata: Metadata = {
  description: "The community that supports the new generation of builders. Builders, experts and investors, meeting every week. Free to join.",
};

export default function RootPage() {
  return <HomePage />;
}
