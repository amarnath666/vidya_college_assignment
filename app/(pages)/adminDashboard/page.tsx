import AdminHeader from "@/app/_components/AdminHeader";
import AdminSidebar from "@/app/_components/AdminSidebar";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar-wrapper">
        <AdminSidebar />
      </div>
      <div className="header-wrapper">
        <AdminHeader />
      </div>
    </div>
  );
};

export default AdminDashboard;