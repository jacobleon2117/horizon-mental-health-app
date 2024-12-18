import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHomePage from "./pages/dashboard-home-page";
import EVisitPage from "./pages/e_visit-page";
import FindTherapistsPage from "./pages/find-therapists-page";
import HealthReportsPage from "./pages/health-reports-page";
import JournalsPage from "./pages/journals-page";
import ScheduleAppointmentsPage from "./pages/schedule-appointments-page";
import SettingsPage from "./pages/settings-page";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHomePage />} />
        <Route path="/e-visit" element={<EVisitPage />} />
        <Route path="/find-therapists" element={<FindTherapistsPage />} />
        <Route path="/health-reports" element={<HealthReportsPage />} />
        <Route path="/journals" element={<JournalsPage />} />
        <Route path="/schedule" element={<ScheduleAppointmentsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
