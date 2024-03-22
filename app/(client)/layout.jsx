import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s",
    default: "BITL Blog",
  },
  description:
    "BITL Blog - Before It's Too Late Blog - Erasmus+ Project - a joint effort driven by partner schools in Romania, Türkiye, Poland, and Italy to raise awareness about climate change and global warming.",
};

import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
