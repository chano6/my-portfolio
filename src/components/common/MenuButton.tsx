interface MenuButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  const spanBaseClass =
    "block absolute h-1 bg-dark-primary rounded-lg transition-all duration-250 ease-in-out";

  return (
    <button
      className="relative block md:hidden h-5 w-7 rotate-0 transition-all duration-500 ease-in-out"
      onClick={onClick}
    >
      <span
        className={`${spanBaseClass} ${
          isOpen ? "left-1/2 top-2 w-0" : "top-0 w-full left-0 rotate-0"
        }`}
      ></span>
      <span
        className={`${spanBaseClass} ${
          isOpen ? "rotate-45 w-full" : "top-2 w-full left-0 rotate-0"
        }`}
      ></span>
      <span
        className={`${spanBaseClass} ${
          isOpen ? "-rotate-45 w-full" : "top-2 w-full left-0 rotate-0"
        }`}
      ></span>
      <span
        className={`${spanBaseClass} ${
          isOpen ? "left-1/2 top-4 w-0" : "top-4 w-full left-0 rotate-0"
        }`}
      ></span>
    </button>
  );
}
