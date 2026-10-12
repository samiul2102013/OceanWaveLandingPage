import type { Metadata } from "next";
import { Inter, Hind_Siliguri, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-en",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bn",
  subsets: ["bengali"],
  weight: ["500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oceanedgetech.com"),
  title: "OceanEdge Technologies — Digital products for Bangladesh",
  description:
    "OceanEdge Technologies is a small product team in Dhaka building KaazDaak, a local work marketplace for Bangladesh.",
  openGraph: {
    type: "website",
    title: "OceanEdge Technologies — Digital products for Bangladesh",
    description:
      "Building KaazDaak, a local work marketplace for Bangladesh. Post a task. Hire nearby.",
    images: ["/images/hero-bg.png"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("oe-theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light");}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${hindSiliguri.variable} ${mono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
