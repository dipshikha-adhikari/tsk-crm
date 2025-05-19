import { useAuth } from "@/context/AuthContext";
import { X } from "lucide-react";
import Icon from "../ui/Icon";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

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
        className={`fixed top-0 left-0 w-3/4 md:w-1/2 bg-background p-6 h-screen shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between mb-6">
          MyCRM
          <button className=" rounded-full cursor-pointer ">
            <X size={24} onClick={onClose} />
          </button>
        </div>

        <div className="space-y-4 w-fit">
          <Icon
            id="dashboard"
            title="Dashboard"
            onClick={() => {
              navigate(ROUTES.DASHBOARD);
              onClose();
            }}
            size={24}
            className="text-blue-600"
          />
          {/* Add more links as needed */}
          <div>
            {user && (
              <Icon
                id="logout"
                title="Logout"
                size={20}
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="text-warning"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
