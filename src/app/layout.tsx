import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Capex — Semiconductor Investment Insights",
  description:
    "Analyze trends, track key semiconductor stocks, and learn from industry experts. AI-powered capex analysis for investors and engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen bg-gray-950 text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
