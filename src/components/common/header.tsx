"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuButton from "./menu-button";

const links = [
  { id: "about", n: "01", label: "about" },
  { id: "skills", n: "02", label: "skills" },
  { id: "projects", n: "03", label: "projects" },
  { id: "contact", n: "04", label: "contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-line border-b bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-[10px]">
        <div className="mx-auto flex w-full max-w-[calc(var(--maxw)+var(--gutter-w)+22px)] items-center justify-between gap-4 py-2.5 pr-3.5 pl-[calc(var(--gutter-w)+22px)] md:max-w-[calc(var(--maxw)+var(--gutter-w)+32px)] md:py-3 md:pr-4 md:pl-[calc(var(--gutter-w)+32px)]">
          <Link
            href="#top"
            className="inline-flex items-center gap-2.5 font-semibold text-[13px] tracking-tight"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent)_25%,transparent)]" />
            <span>~/portfolio</span>
          </Link>

          <nav className="hidden items-center gap-5.5 md:flex">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="text-fg-dim text-xs tracking-wide transition-colors duration-(--t-fast) hover:text-fg"
              >
                <span className="mr-1 text-fg-muted opacity-50">{link.n}.</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <MenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-13 bottom-0 z-49 animate-[fadeIn_160ms_ease-out] overflow-y-auto bg-bg md:hidden">
          <div className="mx-auto flex max-w-150 flex-col gap-1 px-6 pt-6 pb-8">
            <span className="mb-3 text-[11px] text-fg-muted tracking-wider">
              {"// menu"}
            </span>
            {links.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="flex items-center gap-3 border-line border-b px-1 py-3.5 font-medium text-fg text-lg tracking-tight"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="font-normal text-[12px] text-accent">
                  {link.n}
                </span>
                <span>{link.label}</span>
                <ArrowRight
                  className="ml-auto h-3 w-3 text-fg-muted transition-transform duration-(--t-fast)"
                  strokeWidth={2}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
