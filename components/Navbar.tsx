"use client";

import Link from "next/link";
import { Menu, Wrench } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold text-white">
            NexaTools
          </span>
        </Link>
        <Link
  href="/contact"
  className="text-gray-300 transition hover:text-white"
>
  Contact
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/tools"
            className="text-gray-300 transition hover:text-white"
          >
            Tools
          </Link>

          <Link
            href="/tools/password-generator"
            className="text-gray-300 transition hover:text-white"
          >
            Password Generator
          </Link>

        </nav>

        {/* Launch Button */}
        <Link
          href="/tools"
          className="hidden rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500 md:block"
        >
          Launch App
        </Link>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>

      </div>
    </header>
  );
}