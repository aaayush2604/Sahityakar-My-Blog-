import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import Link from "next/link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-white shadow">
          <nav className="flex items-center justify-between px-6 py-4 border-b  mx-auto">
            <Link href="/">
              <h1 className="text-xl font-bold">My Blog</h1>
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-4 text-center text-gray-500 border-t bg-white">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
