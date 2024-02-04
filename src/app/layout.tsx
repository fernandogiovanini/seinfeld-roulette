import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seinfeld Roulette",
  description: "A random episode of Seinfeld at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
