"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Investor", href: "/investor" },
  { label: "Community", href: "/community" },
  { label: "Engineer", href: "/engineer" },
  { label: "Student", href: "/student" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-white">
              AI Capex
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  &bull;&bull;&bull;
                </button>
                {moreOpen && (
                  <div className="absolute top-8 left-0 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 min-w-[200px]">
                    <Link
                      href="/tools"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                      onClick={() => setMoreOpen(false)}
                    >
                      Online Tools from Capex Signal
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signin"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/subscribe"
              className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors"
            >
              Subscribe
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-sm text-gray-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/tools"
            className="block text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Tools
          </Link>
          <hr className="border-gray-800" />
          <Link
            href="/signin"
            className="block text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>
          <Link
            href="/subscribe"
            className="block text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      )}
    </nav>
  );
}
