import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const PrivateLayout = () => {
  return (
    <div>
      <Navbar />
      {/* You can add Navbar, Sidebar etc. here */}
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
