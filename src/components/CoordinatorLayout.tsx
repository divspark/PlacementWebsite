import React from 'react';
import { Outlet } from 'react-router-dom';
import CoordinatorSidebar from './CoordinatorSidebar';
import CoordinatorHeader from './CoordinatorHeader';

const CoordinatorLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <CoordinatorSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <CoordinatorHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CoordinatorLayout;