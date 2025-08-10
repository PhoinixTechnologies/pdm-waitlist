// This page ensures that the sidebar and topbar always appear, and only the 
// main content changes

import React from "react";
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import { Outlet } from "react-router-dom";
// import './MainLayout';


const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Vertical Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Horizontal Navigation */}
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default MainLayout;