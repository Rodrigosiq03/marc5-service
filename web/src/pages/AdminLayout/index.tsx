import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminVideos from "../../components/Admin/AdminVideos";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import { AdminContainer, AdminContent } from "./styles";
import AdminEmployees from "../../components/Admin/AdminEmployees";

interface Props {
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AdminLayout: React.FC<Props> = ({ toggleTheme, isOpen, setIsOpen }) => {
  return (
    <AdminContainer>
      <AdminSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleTheme={toggleTheme}
      />
      <AdminContent $isLargeScreen={isOpen}>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="employees" element={<AdminEmployees />} />
          <Route path="videos" element={<AdminVideos />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </AdminContent>
    </AdminContainer>
  );
};

export default AdminLayout;
