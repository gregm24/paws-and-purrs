"use client";

interface NavLink {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: NavLink[];
  activeSection: string;
  orientation: "horizontal" | "vertical";
  onLinkClick?: () => void;
}

export default function NavLinks({
  links,
  activeSection,
  orientation,
  onLinkClick,
}: NavLinksProps) {
  const isActive = (href: string) => activeSection === href.slice(1);

  const baseClass =
    "text-sm font-medium transition-colors duration-150 hover:text-orange-light";
  const activeClass = "text-orange border-b-2 border-orange";
  const inactiveClass = "text-navy-text opacity-80 hover:opacity-100";

  return (
    <ul
      className={
        orientation === "horizontal"
          ? "flex items-center gap-6"
          : "flex flex-col gap-1"
      }
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onLinkClick}
            className={`${baseClass} ${isActive(link.href) ? activeClass : inactiveClass} ${
              orientation === "vertical"
                ? "block px-4 py-3 text-base rounded-lg hover:bg-navy-light"
                : ""
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
