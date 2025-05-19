import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/routes/routes";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import Sidebar from "./Sidebar";
import Icon from "../ui/Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className=" shadow  sticky top-0">
      <div className="max-w-[1500px] px-xs  md:px-md mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={ROUTES.DASHBOARD} className="text-xl font-bold text-accent">
          MyCRM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Add your nav links here if needed */}
          <ThemeToggle />
          {user && (
            <Icon
              id="logout"
              title="Logout"
              size={20}
              className="text-yellow-600"
            />
          )}
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
