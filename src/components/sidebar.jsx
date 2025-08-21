import React from 'react';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../assets/img/logo.png';
// import dashb from '../assets/dashboard.png';
import { FaTh, FaBook, FaFileAlt, FaCertificate, FaCreditCard, FaCoins, FaCogs, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", path: "/", icon: FaTh},
    { label: "Courses", path: "/courses", icon: FaBook },
    { label: "Resources", path: "/resources", icon: FaFileAlt },
    { label: "Certificates", path: "/certificates", icon: FaCertificate },
    { label: "Payments", path: "/payments", icon: FaCreditCard },
    { label: "Coins", path: "/coins", icon: FaCoins },
    { label: "Settings", path: "/settings", icon: FaCogs },
    { label: "Logout", path: "/logout", icon: FaSignOutAlt },
  ];


  return (
    <aside className="w-64 bg-white text-blue-400 flex flex-col p-5 border border-gray-300">

      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <LazyLoadImage
        src={logo}
          alt="Logo"
          className="w-8 h-8 rounded-full flex items-center justify-center"
           />
        <span className="text-xl font-bold text-black">My PDM Tutor</span>
      </div>

            <div className='relative left-1/2 -ml-[10vw] w-screen border-t border-gray-300'></div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 rounded transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-700"
              }`
            }
          >
            <span className="text-lg">{React.createElement(item.icon)}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;