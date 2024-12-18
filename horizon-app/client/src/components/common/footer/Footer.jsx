import React from "react";
import { Sun, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(26,55,91)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center text-white font-bold text-xl mb-4">
              <span className="inline-flex items-center tracking-wide">
                HORIZ
                <span className="inline-flex items-center justify-center w-7 h-7 -ml-1">
                  <Sun className="w-5 h-5" />
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 -ml-2.5">
                  N
                </span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering individuals on their mental health journey through
              accessible, personalized support and resources.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a
                href="#"
                className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Tulsa, OK</li>
              <li>
                <a
                  href="mailto:info@horizon.com"
                  className="text-gray-300 hover:text-[rgb(129,136,151)] transition-colors duration-300 inline-flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@horizon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgb(26,55,91)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Horizon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-[rgb(129,136,151)] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[rgb(129,136,151)] text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
