import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexatools-tau.vercel.app"),

  title: {
    default: "NexaTools | Free Online Tools",
    template: "%s | NexaTools",
  },

  description:
    "Free online tools for developers, students, creators and businesses. Password Generator, QR Generator, JSON Formatter, Image Tools and much more.",

  keywords: [
    "online tools",
    "password generator",
    "qr code generator",
    "json formatter",
    "word counter",
    "base64 encoder",
    "uuid generator",
    "image compressor",
    "free tools",
    "developer tools",
  ],

  authors: [
    {
      name: "NexaTools",
    },
  ],

  creator: "NexaTools",

  openGraph: {
    title: "NexaTools",
    description:
      "Beautiful, fast and free online tools for everyone.",

    url: "https://nexatools-tau.vercel.app",

    siteName: "NexaTools",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NexaTools",

    description:
      "Beautiful, fast and free online tools.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}