import React, { useState } from 'react';
import { Search, Building2, Phone, Mail, Calendar, Users, TrendingUp, Eye } from 'lucide-react';

const CompanyDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const companies = [
    {
      id: 1,
      name: 'Microsoft',
      industry: 'Technology',
      contact: {
        person: 'John Smith',
        email: 'john.smith@microsoft.com',
        phone: '+1-425-882-8080'
      },
      lastVisit: '2024-02-15',
      totalHired: 45,
      avgPackage: '₹35 LPA',
      status: 'Active Partner',
      history: [
        { year: '2024', hired: 12, package: '₹35 LPA' },
        { year: '2023', hired: 15, package: '₹32 LPA' },
        { year: '2022', hired: 18, package: '₹28 LPA' }
      ],
      notes: 'Excellent partnership. Prefers candidates with strong algorithmic skills.'
    },
    {
      id: 2,
      name: 'Google',
      industry: 'Technology',
      contact: {
        person: 'Sarah Johnson',
        email: 'sarah.j@google.com',
        phone: '+1-650-253-0000'
      },
      lastVisit: '2024-01-20',
      totalHired: 32,
      avgPackage: '₹38 LPA',
      status: 'Active Partner',
      history: [
        { year: '2024', hired: 8, package: '₹38 LPA' },
        { year: '2023', hired: 12, package: '₹35 LPA' },
        { year: '2022', hired: 12, package: '₹32 LPA' }
      ],
      notes: 'Focuses on innovation and problem-solving skills. Conducts rigorous technical interviews.'
    },
    {
      id: 3,
      name: 'Amazon',
      industry: 'E-commerce/Cloud',
      contact: {
        person: 'Mike Davis',
        email: 'mike.davis@amazon.com',
        phone: '+1-206-266-1000'
      },
      lastVisit: '2023-12-10',
      totalHired: 28,
      avgPackage: '₹25 LPA',
      status: 'Regular Partner',
      history: [
        { year: '2024', hired: 6, package: '₹25 LPA' },
        { year: '2023', hired: 10, package: '₹22 LPA' },
        { year: '2022', hired: 12, package: '₹20 LPA' }
      ],
      notes: 'Values leadership principles. Good for students interested in cloud technologies.'
    },
    {
      id: 4,
      name: 'TCS',
      industry: 'IT Services',
      contact: {
        person: 'Rajesh Kumar',
        email: 'rajesh.kumar@tcs.com',
        phone: '+91-22-6778-9999'
      },
      lastVisit: '2024-03-01',
      totalHired: 85,
      avgPackage: '₹4.5 LPA',
      status: 'Mass Recruiter',
      history: [
        { year: '2024', hired: 25, package: '₹4.5 LPA' },
        { year: '2023', hired: 30, package: '₹4.2 LPA' },
        { year: '2022', hired: 30, package: '₹3.8 LPA' }
      ],
      notes: 'Reliable mass recruiter. Good training programs for fresh graduates.'
    }
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active Partner':
        return 'bg-green-100 text-green-800';
      case 'Regular Partner':
        return 'bg-blue-100 text-blue-800';
      case 'Mass Recruiter':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Company Database</h1>
        <p className="text-gray-600 mt-2">Manage company relationships and track placement history</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Companies List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Companies ({filteredCompanies.length})</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedCompany?.id === company.id ? 'bg-indigo-50 border-r-4 border-indigo-500' : ''
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{company.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(company.status)}`}>
                          {company.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{company.industry}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {company.totalHired} hired
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {company.avgPackage} avg
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {company.lastVisit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Eye className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-white rounded-xl shadow-sm border">
          {selectedCompany ? (
            <div>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{selectedCompany.name}</h3>
                    <p className="text-sm text-gray-500">{selectedCompany.industry}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedCompany.status)}`}>
                  {selectedCompany.status}
                </span>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Information */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {selectedCompany.contact.person}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {selectedCompany.contact.email}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedCompany.contact.phone}
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{selectedCompany.totalHired}</div>
                      <div className="text-xs text-gray-500">Total Hired</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{selectedCompany.avgPackage}</div>
                      <div className="text-xs text-gray-500">Avg Package</div>
                    </div>
                  </div>
                </div>

                {/* Placement History */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Placement History</h4>
                  <div className="space-y-2">
                    {selectedCompany.history.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{record.year}</div>
                          <div className="text-sm text-gray-500">{record.hired} students</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">{record.package}</div>
                          <div className="text-sm text-gray-500">Package</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Notes</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {selectedCompany.notes}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Select a company to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDatabase;