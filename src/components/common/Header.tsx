"use client";

import { NavItem } from "@/types/content";
import { User, FolderKanban, Code, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const navLinks: NavItem[] = [
    { label: "About", href: "#about", sectionId: "about", icon: User },
    {
      label: "Projects",
      href: "#projects",
      sectionId: "projects",
      icon: FolderKanban,
    },
    { label: "Skills", href: "#skills", sectionId: "skills", icon: Code },
    { label: "Contact", href: "#contact", sectionId: "contact", icon: Mail },
  ];

  return (
    <header className="fixed top-8 left-1/2 z-10 w-[calc(100%-4rem)] max-w-80 min-w-72 -translate-x-1/2 md:max-w-none md:w-[560px]">
      <div className="flex items-center justify-between rounded-[200px] border border-white bg-white/60 px-1.5 py-3 shadow-[0_5px_20px_rgba(158,172,207,0.2)] backdrop-blur-[10px]">
        <Link href="/" className="pl-4 text-2xl font-logo text-dark-primary">
          CHAN<span className="text-blue-primary">O</span>
        </Link>

        {/* --- 모바일용 내비게이션 --- */}
        <nav className="flex md:hidden pr-3">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.sectionId}>
                  <Link
                    href={link.href}
                    className="text-dark-muted hover:text-blue-hover transition-colors"
                    aria-label={link.label}
                  >
                    {Icon && <Icon size={24} strokeWidth={2} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --- PC용 내비게이션 --- */}
        <nav className="hidden md:block pr-4">
          <ul className="flex gap-6 text-base md:flex-row md:gap-7 md:text-xl font-nav">
            {navLinks.map((link) => (
              <li key={link.sectionId}>
                <Link
                  href={link.href}
                  className="text-dark-muted hover:text-blue-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
