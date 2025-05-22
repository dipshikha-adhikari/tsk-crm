import { navbarLinks } from "@/config/navbar-links";
import { useAuth } from "@/context/AuthContext";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* Blurry Overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-10 md:hidden"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 w-3/4 md:w-1/2 bg-background p-xs h-screen shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between mb-6">
          <Logo />
          <button className=" rounded-full cursor-pointer ">
            <X size={24} onClick={onClose} />
          </button>
        </div>
        <div className="grid gap-xs">
          {navbarLinks.map((link) => (
            <Link
              to={link.href}
              className="flex items-center gap-4 text-sm font-medium hover:text-primary text-muted-foreground"
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
