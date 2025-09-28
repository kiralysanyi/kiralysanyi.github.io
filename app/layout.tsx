import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./global.css"

export const metadata: Metadata = {
  title: "Király Sándor - Webfejlesztő",
  description: "Sándor Király portfólió weboldala - Webfejlesztés, programozás, projektek és tapasztalatok.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
