// Navbar.tsx
import { useAuth } from "@/context/AuthContext";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../../ui/ThemeToggle";
import AdminMenu from "../AdminMenu";
import Logo from "../Logo";
import Search from "../Search";
import Sidebar from "../Sidebar";
import NavbarMenu from "./NavbarMenu";
import { useUI } from "@/context";

const Navbar = () => {
  const {
    isDropdownOpen,
    dropdownRef,
    setIsDropdownOpen,
    isMenuOpen,
    toggleMenu,
  } = useUI();
  const { user } = useAuth();

  return (
    <nav className="shadow bg-muted sticky top-0">
      <div className="max-w-[1600px]  px-xs sm:px-sm py-2 mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleMenu}
              className="cursor-pointer focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} className="cursor-pointer" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Logo */}
          <Logo />
          <NavbarMenu />
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center gap-xs justify-end">
          <Search />
          <ThemeToggle />

          <div className="flex gap-2 items-center" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="rounded-full font-bold text-xl p-2 border-default cursor-pointer"
              aria-label="Settings"
            >
              {user?.email?.charAt(0).toUpperCase()}
            </button>
            <p className="text-muted-foreground hidden sm:block">
              {user?.email}
            </p>
          </div>
          {/* Dropdown Modal */}
          {isDropdownOpen && <AdminMenu />}
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
