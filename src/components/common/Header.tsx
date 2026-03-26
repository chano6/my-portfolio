"use client";

import Link from "next/link";
import { useState } from "react";
import MenuButton from "./MenuButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="relative w-full flex justify-between items-center px-8 py-4">
      <Link href="/" className="text-2xl font-logo text-dark-primary">
        CHAN<span className="text-blue-primary">O</span>
      </Link>

      <MenuButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* --- PC용 내비게이션 --- */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-base md:flex-row md:gap-7 md:text-xl font-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-dark-muted hover:text-blue-hover"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- 모바일용 내비게이션 --- */}
      <nav
        className={`absolute top-full left-0 w-full bg-blue-background shadow-md transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMenuOpen
            ? "max-h-[400px] py-4 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-dark-muted hover:text-blue-hover block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
