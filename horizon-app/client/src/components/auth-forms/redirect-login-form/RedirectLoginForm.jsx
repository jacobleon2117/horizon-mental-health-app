import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RedirectLoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const returnUrl = location.state?.from?.pathname || "/dashboard";

    const isAuthenticated = false;

    if (isAuthenticated) {
      navigate(returnUrl);
    } else {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    }
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
        </div>
        <h2 className="mt-6 text-center text-xl text-gray-900">
          Redirecting to login...
        </h2>
      </div>
    </div>
  );
};

export default RedirectLoginForm;
