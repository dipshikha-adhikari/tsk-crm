import { ROUTES } from "@/routes/routes";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={ROUTES.DASHBOARD} className=" text-xl font-bold text-warning">
      <span className="text-blue-400"> Bluebird</span> CRM
    </Link>
  );
};

export default Logo;
