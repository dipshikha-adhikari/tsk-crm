import { navbarLinks } from "@/config/navbar-links";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = window.location.pathname;

  const isActive = (href: string) => {
    return location === href;
  };

  return (
    <>
      {/* Blurry Overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 w-3/4 md:w-1/2 bg-background h-screen shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 px-xs sm:px-sm py-xs`}
      >
        <div className="flex justify-between mb-6">
          <Logo />
          <button className="rounded-full cursor-pointer">
            <X size={24} onClick={onClose} />
          </button>
        </div>
        <div className="grid gap-xs">
          {navbarLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={`flex items-center gap-4 text-sm font-medium hover:text-primary ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
