import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// pages
import Dashboard from './pages/dashboard';
import Courses from './pages/courses';
import Payments from './pages/payments';
import Certificates from './pages/certificates';
import Resources from './pages/resources';
import Settings from './pages/settings';
import Logout from './pages/logout';
import Coins from './pages/coins';


function App() {
  return (
    
    <Router>
        <div className='flex h-screen w-full'>
          <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='courses' element={<Courses />} />
          <Route path='resources' element={<Resources />} />
          <Route path='certificates' element={<Certificates />} />
          <Route path='payments' element={<Payments />} />
          <Route path='settings' element={<Settings />} />
          <Route path="coins" element={<Coins />} />
          <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
        </div>
    </Router>

    
  );
}

export default App
