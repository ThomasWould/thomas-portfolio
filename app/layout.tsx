import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = localFont({
  src: "../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2",
  display: "swap",
  variable: "--font-instrument",
  weight: "400 700",
});

const ibmPlexMono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Thomas Wood — Design + Engineering",
  description:
    "Thomas Wood is a software engineer, web designer, and AI product builder creating useful digital experiences around real problems.",
  openGraph: {
    title: "Thomas Wood — Design + Engineering",
    description:
      "Thomas Wood is a software engineer, web designer, and AI product builder creating useful digital experiences around real problems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Wood — Design + Engineering",
    description:
      "Thomas Wood is a software engineer, web designer, and AI product builder creating useful digital experiences around real problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
