import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devexcellence - Software Development Solutions",
  description: "The complete IT solutions | agency",
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
      {children}
      <Footer />
      </body>
    </html>
  );
}
