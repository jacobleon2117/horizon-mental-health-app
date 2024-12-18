import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  // If still loading, you might want to show a loading spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-[rgb(26,55,91)]"></div>
      </div>
    );
  }

  // If no user, redirect to login
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
