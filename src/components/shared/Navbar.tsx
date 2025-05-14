import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className=" shadow  sticky top-0">
      <div className="max-w-[1500px] px-sm p-2 md:px-md mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-accent">MyCRM</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Add your nav links here if needed */}
          <ThemeToggle />
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
