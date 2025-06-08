import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  "./globals.css";
import { Header } from "@/components";
import { Web3Provider } from "@/components"

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
        {/* <Web3Provider> */}
            {/* <Header /> */}
            {children}
        {/* </Web3Provider> */}
      </body>
    </html>
  );
}
