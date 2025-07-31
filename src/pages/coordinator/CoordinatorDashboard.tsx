import React from 'react';
import { Building2, Users, TrendingUp, Calendar, Award, Target, UserCheck, Clock } from 'lucide-react';

const CoordinatorDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Companies This Year',
      value: '125',
      change: '+15 from last year',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Students Sitting',
      value: '450',
      change: '85% of eligible',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Already Placed',
      value: '280',
      change: '62% placement rate',
      icon: UserCheck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Average Package',
      value: '₹8.5 LPA',
      change: '+12% from last year',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const recentActivities = [
    {
      type: 'drive_added',
      message: 'Microsoft placement drive scheduled for March 15',
      time: '2 hours ago',
      officer: 'Rajesh Kumar'
    },
    {
      type: 'request_received',
      message: 'New placement request from Amazon',
      time: '4 hours ago',
      officer: 'System'
    },
    {
      type: 'officer_assigned',
      message: 'Priya Singh assigned to Google drive',
      time: '6 hours ago',
      officer: 'Admin'
    },
    {
      type: 'drive_completed',
      message: 'TCS campus drive completed - 25 students selected',
      time: '1 day ago',
      officer: 'Amit Sharma'
    }
  ];

  const upcomingDrives = [
    { company: 'Microsoft', date: '15 Mar', officer: 'Rajesh Kumar', status: 'Confirmed' },
    { company: 'Google', date: '18 Mar', officer: 'Priya Singh', status: 'Pending' },
    { company: 'Amazon', date: '20 Mar', officer: 'Amit Sharma', status: 'Confirmed' },
    { company: 'Wipro', date: '25 Mar', officer: 'Neha Gupta', status: 'Tentative' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'drive_added':
        return <Calendar className="h-4 w-4 text-blue-500" />;
      case 'request_received':
        return <Building2 className="h-4 w-4 text-green-500" />;
      case 'officer_assigned':
        return <Users className="h-4 w-4 text-purple-500" />;
      case 'drive_completed':
        return <Target className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Tentative':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Coordinator Dashboard</h1>
            <p className="text-purple-100 text-lg">Oversee placement operations and manage your team</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <TrendingUp className="h-12 w-12 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-white p-6 rounded-xl shadow-sm border-2 ${stat.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className={`text-sm ${stat.color} mt-2 font-medium`}>{stat.change}</p>
              </div>
              <div className={`p-4 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">by {activity.officer}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Drives */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Upcoming Drives</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingDrives.map((drive, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{drive.company}</p>
                    <p className="text-sm text-gray-500">{drive.officer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{drive.date}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(drive.status)}`}>
                      {drive.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorDashboard;