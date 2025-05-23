import React from 'react';
import { Bell, Search, User, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-9 pr-4 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 w-64"
          />
        </div>
        
        <div className="relative">
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
            <Bell size={20} className="text-gray-600" />
          </button>
          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-600"></div>
        </div>
        
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-md bg-cyan-400 flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
            <Plus size={16} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;