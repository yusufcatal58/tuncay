import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarısuat Doğal Ürünler",
  description:
    "Sivas'ın köyünden gelen günlük süt, peynir, yoğurt ve doğal ürünler için görsel ağırlıklı modern bir vitrin sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[color:var(--paper)] text-[color:var(--ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
