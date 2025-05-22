import { navbarLinks } from "@/config/navbar-links";
import { useNavbar } from "@/hooks/useNavbar";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import AdminMenu from "./AdminMenu";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { isDropdownOpen, dropdownRef, setIsDropdownOpen, isOpen, toggleMenu } =
    useNavbar();

  return (
    <nav className=" shadow bg-muted sticky top-0">
      <div className="max-w-[1600px] px-sm py-2 md:px-md mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navbarLinks.map((link) => (
            <Link
              to={link.href}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
          {/* Add more links here */}
        </div>

        {/* RIGHT  */}
        <div className="hidden md:flex items-center justify-end">
          <ThemeToggle />

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-sm cursor-pointer border-default"
              aria-label="Settings"
            >
              Admin
            </button>

            {/* Dropdown Modal */}
            {isDropdownOpen && <AdminMenu />}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className=" cursor-pointer   focus:outline-none"
          >
            {isOpen ? (
              <X size={24} className="cursor-pointer" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <Sidebar isOpen={isOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navbar;
