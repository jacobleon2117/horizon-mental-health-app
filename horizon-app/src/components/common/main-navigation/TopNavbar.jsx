import React from "react";
import { Sun, User } from "lucide-react";

const TopNavbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-amber-600 font-bold text-xl">
          <span className="inline-flex items-center hover:text-amber-500 transition-colors duration-300 ease-out tracking-wide">
            HORIZ
            <span className="inline-flex items-center justify-center w-7 h-7 -ml-1">
              <Sun className="w-5 h-5" />
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 -ml-2.5">
              N
            </span>
          </span>
        </div>
        <div className="flex space-x-8">
          <a
            href="#"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            About
          </a>
          <a
            href="#"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Resources
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <User className="w-6 h-6 text-white hover:text-amber-500 transition-colors duration-300 ease-out" />
          <button className="bg-amber-600 text-white py-2 px-6 rounded-xl hover:bg-amber-500 transition-colors duration-300 ease-out">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
