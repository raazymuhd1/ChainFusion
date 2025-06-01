import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  "./globals.css";
import { Header } from "@/components";

// client id from Civic
// const civicClientId = 'f3465579-401a-4d88-825d-225446db439e'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChainFusion",
  description: "ChainFusion Dapps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
