import React from "react";
import {
  Calendar,
  MessageSquare,
  FileText,
  Clock,
  Users,
  BookOpen,
} from "lucide-react";

const DashboardCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-[rgb(26,55,91)] mt-2">
          {value}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
      <Icon className="text-[rgb(26,55,91)] opacity-80" size={24} />
    </div>
  </div>
);

const UpcomingSession = ({ title, therapist, time, type }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-[rgb(26,55,91)]">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">with {therapist}</p>
        <p className="text-gray-500 text-sm mt-2">{type}</p>
      </div>
      <div className="flex items-center text-gray-500 text-sm">
        <Clock size={14} className="mr-1" />
        {time}
      </div>
    </div>
  </div>
);

const DashboardHomePage = () => {
  const dashboardStats = [
    {
      icon: Calendar,
      title: "Upcoming Sessions",
      value: "3",
      description: "Next session tomorrow",
    },
    {
      icon: FileText,
      title: "Journal Entries",
      value: "12",
      description: "2 entries this week",
    },
    {
      icon: MessageSquare,
      title: "Messages",
      value: "5",
      description: "3 unread messages",
    },
    {
      icon: Users,
      title: "Support Group",
      value: "2",
      description: "Active group sessions",
    },
  ];

  const upcomingSessions = [
    {
      title: "Weekly Check-in",
      therapist: "Dr. Sarah Smith",
      time: "Tomorrow at 2:00 PM",
      type: "Individual Session",
    },
    {
      title: "Anxiety Management",
      therapist: "Dr. Michael Chen",
      time: "Thursday at 3:00 PM",
      type: "Group Session",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <button className="bg-[rgb(26,55,91)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
          Schedule Session
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Sessions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingSessions.map((session, index) => (
            <UpcomingSession key={index} {...session} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-[rgb(26,55,91)]">
            <FileText size={20} />
            <span>Write Journal Entry</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-[rgb(26,55,91)]">
            <Calendar size={20} />
            <span>Schedule Appointment</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-[rgb(26,55,91)]">
            <BookOpen size={20} />
            <span>View Resources</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
