import React from "react";

const AdminMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-muted rounded-md shadow-lg py-1 z-50">
      <a href="#profile" className="block px-4 py-2 text-sm ">
        Profile
      </a>
      <a href="#settings" className="block px-4 py-2 text-sm ">
        Settings
      </a>
      <a href="#help" className="block px-4 py-2 text-sm ">
        Help
      </a>
      <div className="border-t border-gray-200"></div>
      <a href="#logout" className="block px-4 py-2 text-sm ">
        Sign out
      </a>
    </div>
  );
};

export default AdminMenu;
