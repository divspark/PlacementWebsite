import React from 'react';
import { Outlet } from 'react-router-dom';
import OfficerSidebar from './OfficerSidebar';
import OfficerHeader from './OfficerHeader';

const OfficerLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <OfficerSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <OfficerHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OfficerLayout;