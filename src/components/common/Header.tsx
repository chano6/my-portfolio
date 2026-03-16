import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4">
      <Link href="/" className="text-2xl font-logo text-text-primary">
        CHAN<span className="text-blue-primary">O</span>
      </Link>

      <nav>
        <ul className="flex gap-6 text-base md:flex-row md:gap-7 md:text-xl font-nav">
          <li>
            <Link href="#" className="text-text-muted hover:text-blue-hover">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-text-muted hover:text-blue-hover">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#" className="text-text-muted hover:text-blue-hover">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="text-text-muted hover:text-blue-hover">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
