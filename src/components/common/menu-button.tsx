interface MenuButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      className="relative flex h-8 w-8 items-center justify-center rounded-(--radius) border border-line md:hidden"
      onClick={onClick}
      aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      aria-expanded={isOpen ?? false}
      aria-controls="mobile-nav"
    >
      <span
        className={`menu-bar ${isOpen ? "transform-[translateY(0)_rotate(45deg)]" : "transform-[translateY(-4px)]"}`}
      />
      <span className={`menu-bar ${isOpen ? "opacity-0" : ""}`} />
      <span
        className={`menu-bar ${isOpen ? "transform-[translateY(0)_rotate(-45deg)]" : "transform-[translateY(4px)]"}`}
      />
    </button>
  );
}

export default MenuButton;
