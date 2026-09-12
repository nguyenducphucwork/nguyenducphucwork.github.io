import type { Metadata } from "next";
import { publicAsset } from "@/lib/public-asset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Duc Phuc | Digital Marketing Portfolio",
  description:
    "Digital Marketing portfolio of Nguyen Duc Phuc, focused on SEO, AI Search, Paid Media and Growth.",
  icons: {
    icon: publicAsset("/favicon.svg"),
    shortcut: publicAsset("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
