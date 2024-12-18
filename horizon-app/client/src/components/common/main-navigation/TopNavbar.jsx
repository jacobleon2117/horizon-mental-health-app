import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, User } from "lucide-react";
import Modal from "../Modal";
import LoginForm from "../../auth-forms/login-form/LoginForm";
import SignupForm from "../../auth-forms/signup-form/SignupForm";
import { useAuth } from "@/contexts/AuthContext";

const TopNavbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav
        className="absolute top-0 left-0 w-full text-white p-4 z-50"
        style={{ backgroundColor: "rgb(26, 55, 91)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link
              to="/"
              className="inline-flex items-center text-white hover:text-[rgb(129,136,151)] transition-colors duration-300 ease-out tracking-wide"
            >
              HORIZ
              <span className="inline-flex items-center justify-center w-7 h-7 -ml-1">
                <Sun className="w-5 h-5" />
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 -ml-2.5">
                N
              </span>
            </Link>
          </div>

          {/* Navlinks Section */}
          <div className="flex space-x-8 items-center">
            <Link
              to="/"
              className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Resources
            </Link>
          </div>

          <div className="flex items-center space-x-5">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer transform"
              >
                <User className="w-5 h-5 text-white hover:text-[rgb(129,136,151)] transition-colors duration-300 ease-out transform translate-y-1" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/help"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Help
                      </Link>

                      <div className="border-t border-gray-100 my-1"></div>

                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-amber-600 hover:bg-gray-100"
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsLoginOpen(true);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-amber-600 hover:bg-gray-100"
                      >
                        Log in
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {!user && (
              <button
                onClick={() => setIsSignupOpen(true)}
                className="bg-white/30 backdrop-blur-sm text-white px-8 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-base font-medium border border-white/30"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onClose={() => setIsLoginOpen(false)} />
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}>
        <SignupForm onClose={() => setIsSignupOpen(false)} />
      </Modal>
    </>
  );
};

export default TopNavbar;
