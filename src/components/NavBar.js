"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-2 md:px-6 py-4 mx-auto">
        <Link href="/">
          <div className="flex md:space-x-2 items-center justify-center">
            <Image src="/favicon.png" alt="" className="w-11 h-11" />
            <h1 className="text-sm md:text-xl font-bold">Aayush's Blog</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-[var(--primary)] flex flex-col px-6 py-4 space-y-3 shadow-lg z-40">
          <li>
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
