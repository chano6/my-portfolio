"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "./menu-button";

interface HeaderProps {
  navItems: NavItem[];
}

function Header({ navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-12 flex items-center bg-background border-b border-foreground justify-between px-2 md:px-4">
      <Link href="/" className="text-xl font-grotesk text-foreground font-bold">
        CHAN<span className="text-primary">O</span>
      </Link>

      <MenuButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* --- PC용 내비게이션 --- */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-base">
          {navItems.map((link) => (
            <li key={link.sectionId}>
              <Link
                href={link.href}
                className="font-grotesk text-muted-foreground hover:text-foreground hover:font-bold transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- 모바일용 네비게이션 --- */}
      <nav
        id="mobile-nav"
        aria-hidden={!isMenuOpen}
        className={`absolute top-full left-0 w-full bg-background shadow-md transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isMenuOpen
            ? "max-h-100 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 px-6">
          {navItems.map((link) => (
            <li key={link.sectionId}>
              <Link
                href={link.href}
                className="font-grotesk font-bold text-foreground text-base"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
