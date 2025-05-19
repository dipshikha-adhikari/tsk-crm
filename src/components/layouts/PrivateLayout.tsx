import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      {/* You can add Navbar, Sidebar etc. here */}
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
