import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bn",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="bn" data-theme="light" className={`${inter.variable} ${hindSiliguri.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
