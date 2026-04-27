interface MenuButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  const spanBaseClass =
    "block absolute h-0.5 bg-foreground rounded-full transition-all duration-250 ease-in-out";

  return (
    <button
      className="relative block md:hidden h-3 w-5 rotate-0 transition-all duration-500 ease-in-out"
      onClick={onClick}
      aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      aria-expanded={isOpen ?? false}
      aria-controls="mobile-nav"
    >
      <span
        className={`${spanBaseClass} ${
          isOpen ? "left-1/2 top-1.5 w-0" : "top-0 w-full left-0 rotate-0"
        }`}
      ></span>
      <span
        className={`${spanBaseClass} ${
          isOpen ? "rotate-45 w-full" : "top-1.5 w-full left-0 rotate-0"
        }`}
      ></span>
      <span
        className={`${spanBaseClass} ${
          isOpen ? "-rotate-45 w-full" : "top-1.5 w-full left-0 rotate-0"
        }`}
      ></span>
      <span
        className={`${spanBaseClass} ${
          isOpen ? "left-1/2 top-3 w-0" : "top-3 w-full left-0 rotate-0"
        }`}
      ></span>
    </button>
  );
}

export default MenuButton;
