import React from "react";
import { Link } from "react-router-dom";
import { Calendar, FileText, MessageSquare, Users } from "lucide-react";

const SideNav = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-[rgb(26,55,91)] text-white min-h-screen p-4">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/pages/dashboard-home-page">
              <Calendar size={20} className="mr-2 inline" />
              Dashboard
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/dashboard/e-visit-page">
              <Calendar size={20} className="mr-2 inline" />
              E-Visit
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/journals">
              <FileText size={20} className="mr-2 inline" />
              Journal Entries
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/messages">
              <MessageSquare size={20} className="mr-2 inline" />
              Messages
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/support-group">
              <Users size={20} className="mr-2 inline" />
              Support Group
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/find-therapists">
              <Users size={20} className="mr-2 inline" />
              Find Therapists
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/health-reports">
              <FileText size={20} className="mr-2 inline" />
              Health Reports
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/schedule">
              <Calendar size={20} className="mr-2 inline" />
              Schedule Appointment
            </Link>
          </li>
          <li className="hover:bg-opacity-80 p-2 rounded cursor-pointer">
            <Link to="/settings">
              <FileText size={20} className="mr-2 inline" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
