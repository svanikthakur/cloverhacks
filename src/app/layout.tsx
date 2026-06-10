import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloverhacks.org"),
  title: "Clover Hacks: Get Lucky. Build Something.",
  description:
    "Clover Hacks is a one-day high school hackathon where builders, designers, and dreamers come together to ship something worth bragging about.",
  openGraph: {
    title: "Clover Hacks",
    description:
      "A one-day hackathon for builders who want to get a little lucky.",
    url: "https://cloverhacks.org",
    siteName: "Clover Hacks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clover Hacks",
    description:
      "A one-day hackathon for builders who want to get a little lucky.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
