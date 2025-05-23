import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../pages/Dashboard';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;