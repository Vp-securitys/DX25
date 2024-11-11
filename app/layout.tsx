import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { headers } from "next/headers"; // added
import ContextProvider from "./context";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "DX25 - A powerful DeFi universe",
  description: "Earn, swap, and leverage on the most innovative platform to yield the best returns.", 
  openGraph: {
    title: "DX25 - A powerful DeFi universe", 
    description: "Earn, swap, and leverage on the most innovative platform to yield the best returns.",
    images: [
      {
        url: "https://uploads-ssl.webflow.com/6362079190ba0160faca7b3f/6362687e4b004da532c381d3_the-new-defi-universe-dx25.png",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      {/* ToastContainer for Toastify */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </body>

    </html>
  );
}
