import { X } from "lucide-react";
import React from "react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
        className={`fixed top-0 left-0 w-3/4 md:w-1/2 bg-background p-6 h-screen shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          MyCRM
          <button className="p-2 rounded-full mb-6">
            <X size={24} onClick={onClose} />
          </button>
        </div>

        <div className="space-y-4">
          <a
            href="#"
            className="block text-gray-800 dark:text-white"
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-800 dark:text-white"
            onClick={onClose}
          >
            Dashboard
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
