import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type UIContextType = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  isDropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  setIsDropdownOpen: (value: boolean) => void;
  isCurrentPage: (href: string) => boolean;
};

export const UIContext = createContext<UIContextType>({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {},
  isDropdownOpen: false,
  dropdownRef: null,
  setIsDropdownOpen: () => {},
  isCurrentPage: () => false,
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); // Use React Router's useLocation

  const isCurrentPage = (href: string) => {
    return location.pathname === href;
  };

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

  const value = {
    isMenuOpen,
    openMenu: () => setIsMenuOpen(true),
    closeMenu: () => setIsMenuOpen(false),
    toggleMenu: () => setIsMenuOpen((prev) => !prev),
    isDropdownOpen,
    setIsDropdownOpen,
    dropdownRef,
    isCurrentPage,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
