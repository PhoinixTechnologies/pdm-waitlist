// This page ensures that the sidebar and topbar always appear, and only the 
// main content changes

import React from "react";
import { FaUser, FaClock, FaBookmark, FaChartBar } from 'react-icons/fa';
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
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Horizontal Navigation */}
        <Topbar />

        {/* Page Content */}
          <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
          </div>
      </div>



    </div>
  );
};


export default MainLayout;