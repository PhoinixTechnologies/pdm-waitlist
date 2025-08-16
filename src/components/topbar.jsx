import React from 'react';
import { FaUser, FaClock, FaBookmark, FaChartBar } from 'react-icons/fa';
import image from '../assets/mail.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Topbar = () => {
  return (
    <header className="flex items-center px-6 py-4">
      {/* Full-width search container */}
      <div className="flex-1 max-w-4xl mr-6">
        <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search here"
            className="outline-none flex-1 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-6">
        <button
          aria-label="Notifications"
          className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition"
        >
          🔔
        </button>
        <button
          aria-label="Messages"
          className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition"
        >
          📥
        </button>
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
          <span className="text-sm font-medium text-gray-700">Ruben Amorim</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
