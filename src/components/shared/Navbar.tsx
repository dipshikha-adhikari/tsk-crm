import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/routes/routes";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import Sidebar from "./Sidebar";
import Icon from "../ui/Icon";
import Logo from "./Logo";
import AdminMenu from "./AdminMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" shadow bg-muted sticky top-0">
      <div className="max-w-[1600px] px-sm py-2 md:px-md mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />
        {/* Desktop Menu */}
        {user && (
          <div className="hidden md:flex gap-6">
            <Link
              to={ROUTES.STUDENTS}
              className={`  ${
                location.pathname === ROUTES.STUDENTS
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Students
            </Link>
            <Link
              to={ROUTES.TEACHERS}
              className={`  ${
                location.pathname === ROUTES.TEACHERS
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Teachers
            </Link>
            {/* Add more links here */}
          </div>
        )}

        {/* RIGHT  */}
        <div className="hidden md:flex items-center justify-end">
          {/* Add your nav links here if needed */}
          <ThemeToggle />
          <Icon id="logout" title="Logout" size={40} className="text-warning" />

          <div className="relative" ref={dropdownRef}>
            {/* Settings Icon Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-full cursor-pointer border-default"
              aria-label="Settings"
            >
              Admin
            </button>

            {/* Dropdown Modal */}
            {isDropdownOpen && <AdminMenu />}
          </div>
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
      {/* Sidebar (Mobile Menu) */}
      <Sidebar isOpen={isOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navbar;
