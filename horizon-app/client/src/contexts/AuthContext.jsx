import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await axios.get("/api/auth/me");
          setUser(response.data.user);
          setError(null);
        } catch (error) {
          console.error("Error during authentication:", error);
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
          setUser(null);
          setError(error);
        }
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const register = async (email, password, fullName, userType = "user") => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        fullName,
        userType,
      });

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      setError(null);

      return response.data.user;
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      setError(null);

      return response.data.user;
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    isLoading,
    error,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
