import { navbarLinks } from "@/config/navbar-links";
import { useNavbar } from "@/hooks/useNavbar";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import AdminMenu from "./AdminMenu";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { isDropdownOpen, dropdownRef, setIsDropdownOpen, isOpen, toggleMenu } =
    useNavbar();
  const { user } = useAuth();

  return (
    <nav className=" shadow bg-muted sticky top-0">
      <div className="max-w-[1600px] px-sm py-2 md:px-md mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
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

          {/* Logo */}
          <Logo />
          <div className="hidden ml-20 md:flex gap-6">
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
        </div>

        {/* RIGHT  */}
        <div className=" relative  flex items-center gap-xs justify-end">
          <ThemeToggle />

          <div className="flex gap-2 items-center" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className=" rounded-full font-bold text-xl p-2 border-default cursor-pointer "
              aria-label="Settings"
            >
              {user?.email?.charAt(0).toUpperCase()}
            </button>
            <p className="text-muted-foreground ">{user?.email}</p>
          </div>
          {/* Dropdown Modal */}
          {isDropdownOpen && <AdminMenu />}
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <Sidebar isOpen={isOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navbar;
