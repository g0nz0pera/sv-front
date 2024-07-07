import type { Metadata } from "next";
import "@/app/globals.css";

import { Sen, Syne } from "next/font/google";
const syneFont = Syne({ subsets: ["latin"], variable: "--font-syne" });
const senFont = Sen({ subsets: ["latin"], variable: "--font-sen" });

export const metadata: Metadata = {
  title: "SV",
  description: "FrontEnd Tech Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syneFont.variable} ${senFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
