import React, { useState } from 'react';
import { Users, Search, Plus, Edit, Trash2, Shield, ShieldCheck, ShieldX } from 'lucide-react';

const ManageOfficers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOfficer, setSelectedOfficer] = useState<any>(null);

  const officers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@ietlucknow.ac.in',
      phone: '+91-9876543210',
      department: 'CSE',
      joinDate: '2022-01-15',
      status: 'Active',
      companiesAssigned: ['Microsoft', 'Google', 'Amazon'],
      totalDrives: 25,
      successRate: '88%'
    },
    {
      id: 2,
      name: 'Priya Singh',
      email: 'priya.singh@ietlucknow.ac.in',
      phone: '+91-9876543211',
      department: 'IT',
      joinDate: '2021-08-20',
      status: 'Active',
      companiesAssigned: ['TCS', 'Infosys', 'Wipro'],
      totalDrives: 32,
      successRate: '92%'
    },
    {
      id: 3,
      name: 'Amit Sharma',
      email: 'amit.sharma@ietlucknow.ac.in',
      phone: '+91-9876543212',
      department: 'ECE',
      joinDate: '2023-03-10',
      status: 'Active',
      companiesAssigned: ['Adobe', 'Oracle'],
      totalDrives: 12,
      successRate: '75%'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      email: 'neha.gupta@ietlucknow.ac.in',
      phone: '+91-9876543213',
      department: 'EEE',
      joinDate: '2022-11-05',
      status: 'Inactive',
      companiesAssigned: [],
      totalDrives: 8,
      successRate: '70%'
    }
  ];

  const companies = ['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Adobe', 'Oracle', 'IBM', 'Accenture'];

  const filteredOfficers = officers.filter(officer =>
    officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    officer.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getStatusIcon = (status: string) => {
    return status === 'Active' ? <ShieldCheck className="h-4 w-4" /> : <ShieldX className="h-4 w-4" />;
  };

  const handleAssignCompany = (officerId: number, company: string) => {
    // Handle company assignment logic
    console.log(`Assigning ${company} to officer ${officerId}`);
  };

  const handleRevokeAccess = (officerId: number, company: string) => {
    // Handle access revocation logic
    console.log(`Revoking ${company} access from officer ${officerId}`);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Manage Placement Officers</h1>
            <p className="text-gray-600 mt-2">Assign companies and manage officer permissions</p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors shadow-lg">
            <Plus className="h-5 w-5 mr-2" />
            Add Officer
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search officers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Officers List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Placement Officers ({filteredOfficers.length})</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {filteredOfficers.map((officer) => (
              <div
                key={officer.id}
                className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedOfficer?.id === officer.id ? 'bg-purple-50 border-r-4 border-purple-500' : ''
                }`}
                onClick={() => setSelectedOfficer(officer)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{officer.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full flex items-center ${getStatusColor(officer.status)}`}>
                          {getStatusIcon(officer.status)}
                          <span className="ml-1">{officer.status}</span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{officer.department} Department</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{officer.totalDrives} drives</span>
                        <span>{officer.successRate} success</span>
                        <span>{officer.companiesAssigned.length} companies</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <Edit className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Officer Details & Company Assignment */}
        <div className="bg-white rounded-xl shadow-sm border">
          {selectedOfficer ? (
            <div>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{selectedOfficer.name}</h3>
                    <p className="text-sm text-gray-500">{selectedOfficer.department} Department</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full flex items-center w-fit ${getStatusColor(selectedOfficer.status)}`}>
                  {getStatusIcon(selectedOfficer.status)}
                  <span className="ml-1">{selectedOfficer.status}</span>
                </span>
              </div>

              <div className="p-6 space-y-6">
                {/* Officer Info */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{selectedOfficer.email}</p>
                    <p>{selectedOfficer.phone}</p>
                    <p>Joined: {selectedOfficer.joinDate}</p>
                  </div>
                </div>

                {/* Performance Stats */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{selectedOfficer.totalDrives}</div>
                      <div className="text-xs text-gray-500">Total Drives</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{selectedOfficer.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Assigned Companies */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Assigned Companies</h4>
                  <div className="space-y-2">
                    {selectedOfficer.companiesAssigned.map((company, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">{company}</span>
                        <button
                          onClick={() => handleRevokeAccess(selectedOfficer.id, company)}
                          className="text-red-600 hover:text-red-800 text-xs"
                        >
                          Revoke
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assign New Company */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Assign New Company</h4>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    onChange={(e) => {
                      if (e.target.value) {
                        handleAssignCompany(selectedOfficer.id, e.target.value);
                        e.target.value = '';
                      }
                    }}
                  >
                    <option value="">Select company...</option>
                    {companies
                      .filter(company => !selectedOfficer.companiesAssigned.includes(company))
                      .map(company => (
                        <option key={company} value={company}>{company}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Select an officer to manage assignments</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOfficers;