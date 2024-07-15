"use client";

import AdminDashboardPage from "../../components/dashboard/Admin/AdminDashboardPage";
import ProvidersDashboardPage from "../../components/dashboard/Providers/ProvidersDashboardPage";
import UserDashboardPage from "../../components/dashboard/User/UserDashboardPage";

type UserRole = "admin" | "user" | "provider";
const DashboardPage = () => {
  const userRole = "provider" as UserRole;
  return (
    <>
      {userRole === "admin" && <AdminDashboardPage />}
      {userRole === "user" && <UserDashboardPage />}
      {userRole === "provider" && <ProvidersDashboardPage />}
    </>
  );
};

export default DashboardPage;
