import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const useNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
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

    return {
        toggleMenu,
        isDropdownOpen,
        setIsDropdownOpen,
        dropdownRef,
        isOpen,
        isCurrentPage
    }
}