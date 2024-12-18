import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHomePage from "./pages/dashboard-home-page";
import FindTherapistsPage from "./pages/find-therapists-page";
import HealthReportsPage from "./pages/health-reports-page";
import EVisitPage from "./pages/e-visit-page";
import SettingsPage from "./pages/settings-page";
import ScheduleAppointmentsPage from "./pages/schedule-appointments-page";
import JournalEntry from "./pages/journals-page";
import SideNav from "../../components/SideNav";

const Dashboard = () => {
  return (
    <div className="dashboard-container flex">
      <SideNav />
      <div className="dashboard-content flex-grow">
        <Routes>
          <Route path="dashboard-home-page" element={<DashboardHomePage />} />
          <Route path="e-visit-page" element={<EVisitPage />} />
          <Route path="find-therapists-page" element={<FindTherapistsPage />} />
          <Route path="health-reports-page" element={<HealthReportsPage />} />
          <Route path="journals-page" element={<JournalEntry />} />
          <Route
            path="schedule-appointments-page"
            element={<ScheduleAppointmentsPage />}
          />
          <Route path="settings-page" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
