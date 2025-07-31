import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Building2, 
  Database, 
  LogOut,
  Shield
} from 'lucide-react';
import clsx from 'clsx';

const OfficerSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { to: '/officer', icon: BarChart3, label: 'Dashboard' },
    { to: '/officer/companies', icon: Building2, label: 'Manage Drives' },
    { to: '/officer/database', icon: Database, label: 'Company Database' },
  ];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm shadow-lg border-r border-white/20">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-indigo-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">Officer Portal</h2>
            <p className="text-sm text-gray-500">Placement Management</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                'flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200',
                isActive
                  ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 w-64 p-6 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default OfficerSidebar;