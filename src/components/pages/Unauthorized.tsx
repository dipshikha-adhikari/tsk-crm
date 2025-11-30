import { ROUTES } from "@/routes/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
const navigate = useNavigate();

return ( <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800"> <h1 className="text-5xl font-bold mb-4">403</h1> <p className="text-xl mb-6">You do not have permission to access this page.</p>
<button
className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
onClick={() => navigate(ROUTES.DASHBOARD)}
>
Go to Dashboard </button> </div>
);
};

export default UnauthorizedPage;
