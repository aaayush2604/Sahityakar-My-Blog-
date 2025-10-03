import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import Link from "next/link";
import Navbar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Blog",
  description:
    "A blog built with Next.js, for Bookish Reviews and Fiction Musings",
  openGraph: {
    type: "website",
    siteName: "My Blog",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--primary)]`}
      >
        <header className="sticky top-0 z-50 bg-[var(--primary)] text-white shadow">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="py-4 text-center text-gray-500 border-t bg-white">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
