import { navbarLinks } from "@/config/navbar-links";
import { useActivePath } from "@/hooks/useActivePath";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const { isActive } = useActivePath();

  return (
    <div className="hidden lg:ml-20 md:flex gap-6">
      {navbarLinks.map((link) => (
        <Link
          to={link.href}
          key={link.href}
          className={`flex items-center gap-2 text-sm font-medium hover:text-primary  ${
            isActive(link.href) ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {link.label}
        </Link>
      ))}
      {/* Add more links here */}
    </div>
  );
};

export default NavbarMenu;
