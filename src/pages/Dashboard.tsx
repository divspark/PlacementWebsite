import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, Building2, Award, FileText, Calendar, Target, Briefcase } from 'lucide-react';

const Dashboard: React.FC = () => {
  const placementData = [
    { year: '2020', placed: 85, total: 100, percentage: 85 },
    { year: '2021', placed: 92, total: 110, percentage: 84 },
    { year: '2022', placed: 78, total: 95, percentage: 82 },
    { year: '2023', placed: 105, total: 120, percentage: 88 },
    { year: '2024', placed: 88, total: 100, percentage: 88 },
  ];

  const studentData = [
    { name: 'Placed', value: 280, color: '#10B981' },
    { name: 'Higher Studies', value: 45, color: '#3B82F6' },
    { name: 'Not Placed', value: 25, color: '#EF4444' },
    { name: 'Not Interested', value: 15, color: '#6B7280' },
  ];

  const packageData = [
    { range: '3-5 LPA', count: 85, color: '#8B5CF6' },
    { range: '5-8 LPA', count: 120, color: '#06B6D4' },
    { range: '8-12 LPA', count: 75, color: '#10B981' },
    { range: '12-18 LPA', count: 45, color: '#F59E0B' },
    { range: '18+ LPA', count: 25, color: '#EF4444' },
  ];

  const monthlyTrend = [
    { month: 'Jan', applications: 45, interviews: 32, offers: 18 },
    { month: 'Feb', applications: 52, interviews: 38, offers: 22 },
    { month: 'Mar', applications: 68, interviews: 45, offers: 28 },
    { month: 'Apr', applications: 75, interviews: 52, offers: 35 },
    { month: 'May', applications: 42, interviews: 28, offers: 15 },
    { month: 'Jun', applications: 38, interviews: 25, offers: 12 },
  ];

  const stats = [
    {
      title: 'Highest Package',
      value: '₹45 LPA',
      change: '+12%',
      icon: Award,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Average Package',
      value: '₹8.5 LPA',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Placement Rate',
      value: '88%',
      change: '+3%',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Companies Visited',
      value: '125',
      change: '+15%',
      icon: Building2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const notices = [
    {
      title: 'Microsoft Campus Drive - Pre-Placement Talk',
      date: '2024-03-15',
      type: 'Important',
      priority: 'high'
    },
    {
      title: 'Final Year Students - Resume Submission Deadline',
      date: '2024-03-12',
      type: 'Urgent',
      priority: 'urgent'
    },
    {
      title: 'Google SDE Intern Applications Open',
      date: '2024-03-10',
      type: 'Opportunity',
      priority: 'medium'
    },
    {
      title: 'Mock Interview Session - Tomorrow 2 PM',
      date: '2024-03-08',
      type: 'Event',
      priority: 'low'
    }
  ];

  const upcomingEvents = [
    { company: 'Microsoft', date: '15 Mar', type: 'Pre-Placement Talk', time: '10:00 AM' },
    { company: 'Google', date: '18 Mar', type: 'Technical Round', time: '9:00 AM' },
    { company: 'Amazon', date: '20 Mar', type: 'Online Test', time: '2:00 PM' },
    { company: 'TCS', date: '22 Mar', type: 'Campus Drive', time: '9:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome to Placement Dashboard</h1>
              <p className="text-blue-100 text-lg">Track your placement journey and stay updated with latest opportunities</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Calendar className="h-12 w-12 text-white/80" />
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
                  <p className={`text-sm ${stat.color} mt-2 font-medium`}>{stat.change} from last year</p>
                </div>
                <div className={`p-4 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Placement Trend */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Placement Trends</h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Placed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-gray-600">Total</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={placementData}>
                <defs>
                  <linearGradient id="colorPlaced" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Area type="monotone" dataKey="placed" stroke="#3B82F6" fillOpacity={1} fill="url(#colorPlaced)" strokeWidth={3} />
                <Bar dataKey="total" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Student Status Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Student Status Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent=85 }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Package Distribution & Monthly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Package Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Package Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={packageData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="range" type="category" stroke="#6b7280" width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar dataKey="count" fill="#10B981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Monthly Activity Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="interviews" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="offers" stroke="#F59E0B" strokeWidth={3} dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Important Notices */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">Important Notices</h3>
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {notices.map((notice, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{notice.title}</h4>
                      <p className="text-sm text-gray-500">{notice.date}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      notice.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                      notice.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      notice.priority === 'medium' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {notice.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
            </div>
            <div className="p-6 space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{event.company}</p>
                    <p className="text-xs text-gray-500">{event.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-900">{event.date}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
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

export default Dashboard;