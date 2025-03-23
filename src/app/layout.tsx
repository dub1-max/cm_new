import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";  // ✅ Alternative to Geist

import "./globals.css";
import App from "./page";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connecting Minds",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <App />
      </body>
    </html>
  );
}