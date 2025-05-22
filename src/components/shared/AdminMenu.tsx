import { adminLinks } from "@/config/navbar-links";
import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="absolute right-0 top-12 grid gap-4 p-xs bg-muted rounded-md min-w-40 z-50">
      {adminLinks.map((link) => (
        <Link
          to={link.href}
          className="flex items-center gap-2 text-sm font-medium text-foreground "
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default AdminMenu;
