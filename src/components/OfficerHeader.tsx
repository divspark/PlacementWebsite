import React from 'react';
import { Bell, User } from 'lucide-react';

const OfficerHeader: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Placement Officer Dashboard</h1>
          <p className="text-sm text-gray-500">Manage placement drives and company relationships</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default OfficerHeader;