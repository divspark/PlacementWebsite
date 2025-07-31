import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  FileText, 
  LogOut,
  Crown
} from 'lucide-react';
import clsx from 'clsx';

const CoordinatorSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { to: '/coordinator', icon: BarChart3, label: 'Dashboard' },
    { to: '/coordinator/officers', icon: Users, label: 'Manage Officers' },
    { to: '/coordinator/requests', icon: FileText, label: 'Drive Requests' },
  ];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm shadow-lg border-r border-white/20">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Crown className="h-8 w-8 text-purple-600" />
          <div>
            <h2 className="text-lg font-bold text-gray-800">Coordinator</h2>
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
                  ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-700'
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

export default CoordinatorSidebar;