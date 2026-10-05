import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KaazDaak | Local work marketplace for Bangladesh",
  description:
    "KaazDaak is a local work marketplace for Bangladesh. Post a task, compare offers from workers nearby, and hire the person you trust. Built by OceanEdge Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${hindSiliguri.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
