import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unired | Search and Book Hotels",
  description:
    "Find and book hotels anywhere in the world. Exclusive prices, verified reviews, and incredible deals.",
  keywords: "hotels, bookings, accommodations, hotel deals, hotel search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
