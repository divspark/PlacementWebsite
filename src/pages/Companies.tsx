import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Search, Filter, Calendar, MapPin, Users } from 'lucide-react';

const Companies: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');

  const companies = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '🏢',
      position: 'Software Engineer',
      branches: ['CSE', 'IT', 'ECE'],
      package: '₹25-45 LPA',
      date: '2024-03-15',
      location: 'Bangalore',
      type: 'Full-time',
      status: 'Upcoming'
    },
    {
      id: 2,
      name: 'Google',
      logo: '🏢',
      position: 'SDE Intern',
      branches: ['CSE', 'IT'],
      package: '₹8 LPA',
      date: '2024-03-18',
      location: 'Hyderabad',
      type: 'Internship',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Amazon',
      logo: '🏢',
      position: 'Software Developer',
      branches: ['CSE', 'IT', 'ECE'],
      package: '₹20-35 LPA',
      date: '2024-03-20',
      location: 'Chennai',
      type: 'Full-time',
      status: 'Registration Open'
    },
    {
      id: 4,
      name: 'TCS',
      logo: '🏢',
      position: 'System Engineer',
      branches: ['CSE', 'IT', 'ECE', 'EEE'],
      package: '₹3.5-7 LPA',
      date: '2024-03-22',
      location: 'Multiple Cities',
      type: 'Full-time',
      status: 'Completed'
    },
    {
      id: 5,
      name: 'Infosys',
      logo: '🏢',
      position: 'Power Programmer',
      branches: ['CSE', 'IT'],
      package: '₹4.5-9 LPA',
      date: '2024-03-25',
      location: 'Pune',
      type: 'Full-time',
      status: 'Upcoming'
    },
    {
      id: 6,
      name: 'Wipro',
      logo: '🏢',
      position: 'Project Engineer',
      branches: ['CSE', 'IT', 'ECE'],
      package: '₹3.5-6 LPA',
      date: '2024-03-28',
      location: 'Noida',
      type: 'Full-time',
      status: 'Open'
    }
  ];

  const branches = ['All', 'CSE', 'IT', 'ECE', 'EEE'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === 'All' || company.branches.includes(selectedBranch);
    return matchesSearch && matchesBranch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
      case 'Registration Open':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Building2 className="h-6 w-6 mr-2" />
          Companies
        </h1>
        <p className="text-gray-600 mt-1">View all companies visiting for placements</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies or positions..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                {branches.map(branch => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Branches
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Package
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCompanies.map((company) => (
                <tr 
                  key={company.id} 
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/student/companies/${company.id}`)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{company.logo}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{company.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {company.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{company.position}</div>
                    <div className="text-sm text-gray-500">{company.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {company.branches.map((branch, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {branch}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {company.package}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 mr-1" />
                      {company.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(company.status)}`}>
                      {company.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No companies found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Companies;