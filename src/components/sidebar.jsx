import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Resources", path: "/resources" },
    { label: "Certificates", path: "/certificates" },
    { label: "Payments", path: "/payments" },
    { label: "Coins", path: "/coins" },
    { label: "Settings", path: "/settings" },
    { label: "Logout", path: "/logout" },
  ];


    return (
        <aside>
            <h1>My PDM Tutor</h1>

            <nav>
                {navItems.map((item) => (
                    <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                    `block px-4 py-2 rounded mb-2 ${
                        isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`
                }
                >
                    {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;