import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "An-Naafi",
  description: "Playing Games with An-Naafi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="px-2 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
