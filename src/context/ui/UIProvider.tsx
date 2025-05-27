import { createContext, useEffect, useRef, useState } from "react";

// context/providers/UIProvider.tsx
type UIContextType = {
  isMenuOpen: boolean; // Changed from isSidebarOpen
  openMenu: () => void; // Changed from openSidebar
  closeMenu: () => void;
  toggleMenu: () => void;
  isDropdownOpen;
  dropdownRef;
  setIsDropdownOpen;
  // Other UI states...
};

export const UIContext = createContext<UIContextType>({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {},
  isDropdownOpen: () => {},
  dropdownRef: null,
  setIsDropdownOpen: () => {},
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const value = {
    isMenuOpen,
    openMenu: () => setIsMenuOpen(true),
    closeMenu: () => setIsMenuOpen(false),
    toggleMenu: () => setIsMenuOpen((prev) => !prev),
    isDropdownOpen,
    setIsDropdownOpen,
    dropdownRef,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
