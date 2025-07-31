import React, { useState } from 'react';
import { FileText, Search, Filter, Eye, Check, X, Calendar, Building2, Mail, Phone } from 'lucide-react';

const DriveRequests: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const requests = [
    {
      id: 1,
      companyName: 'Razorpay',
      contactPerson: 'Arjun Mehta',
      email: 'arjun.mehta@razorpay.com',
      phone: '+91-9876543210',
      position: 'Software Engineer',
      package: '₹15-25 LPA',
      branches: ['CSE', 'IT'],
      preferredDate: '2024-04-15',
      submittedDate: '2024-03-01',
      status: 'Pending',
      message: 'We are looking for talented software engineers to join our fintech team. We prefer candidates with strong problem-solving skills and experience in backend development.',
      requirements: 'Strong programming skills in Java/Python, Understanding of databases, Good communication skills'
    },
    {
      id: 2,
      companyName: 'Zomato',
      contactPerson: 'Priya Sharma',
      email: 'priya.sharma@zomato.com',
      phone: '+91-9876543211',
      position: 'Product Manager',
      package: '₹20-30 LPA',
      branches: ['CSE', 'IT', 'MBA'],
      preferredDate: '2024-04-20',
      submittedDate: '2024-02-28',
      status: 'Approved',
      message: 'Looking for product managers who can drive innovation in food-tech industry. Candidates should have analytical mindset and customer-first approach.',
      requirements: 'Product management experience, Analytical skills, Customer focus, Leadership qualities'
    },
    {
      id: 3,
      companyName: 'Swiggy',
      contactPerson: 'Rohit Kumar',
      email: 'rohit.kumar@swiggy.com',
      phone: '+91-9876543212',
      position: 'Data Scientist',
      package: '₹18-28 LPA',
      branches: ['CSE', 'IT', 'ECE'],
      preferredDate: '2024-04-25',
      submittedDate: '2024-03-05',
      status: 'Under Review',
      message: 'We need data scientists to work on recommendation systems and demand forecasting. Looking for candidates with strong mathematical background.',
      requirements: 'Machine Learning expertise, Python/R programming, Statistics knowledge, Problem-solving skills'
    },
    {
      id: 4,
      companyName: 'Paytm',
      contactPerson: 'Neha Singh',
      email: 'neha.singh@paytm.com',
      phone: '+91-9876543213',
      position: 'Frontend Developer',
      package: '₹12-18 LPA',
      branches: ['CSE', 'IT'],
      preferredDate: '2024-05-01',
      submittedDate: '2024-03-10',
      status: 'Rejected',
      message: 'Looking for frontend developers to work on our mobile and web applications. Candidates should have experience with React and modern JavaScript.',
      requirements: 'React.js expertise, JavaScript proficiency, UI/UX understanding, Mobile-first approach'
    }
  ];

  const statuses = ['All', 'Pending', 'Under Review', 'Approved', 'Rejected'];

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || request.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (requestId: number) => {
    console.log(`Approving request ${requestId}`);
    // Handle approval logic
  };

  const handleReject = (requestId: number) => {
    console.log(`Rejecting request ${requestId}`);
    // Handle rejection logic
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Drive Requests</h1>
        <p className="text-gray-600 mt-2">Review and manage company placement drive requests</p>
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Requests List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Drive Requests ({filteredRequests.length})</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedRequest?.id === request.id ? 'bg-purple-50 border-r-4 border-purple-500' : ''
                }`}
                onClick={() => setSelectedRequest(request)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{request.companyName}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{request.position} • {request.package}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {request.preferredDate}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {request.branches.slice(0, 2).map((branch, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {branch}
                            </span>
                          ))}
                          {request.branches.length > 2 && (
                            <span className="text-xs text-gray-500">+{request.branches.length - 2}</span>
                          )}
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

        {/* Request Details */}
        <div className="bg-white rounded-xl shadow-sm border">
          {selectedRequest ? (
            <div>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{selectedRequest.companyName}</h3>
                    <p className="text-sm text-gray-500">{selectedRequest.position}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedRequest.status)}`}>
                  {selectedRequest.status}
                </span>
              </div>

              <div className="p-6 space-y-6">
                {/* Contact Information */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {selectedRequest.email}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedRequest.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Preferred: {selectedRequest.preferredDate}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Job Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Package:</span> {selectedRequest.package}</p>
                    <p><span className="font-medium">Branches:</span> {selectedRequest.branches.join(', ')}</p>
                    <p><span className="font-medium">Submitted:</span> {selectedRequest.submittedDate}</p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Company Message</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {selectedRequest.message}
                  </p>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Requirements</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    {selectedRequest.requirements}
                  </p>
                </div>

                {/* Actions */}
                {selectedRequest.status === 'Pending' && (
                  <div className="flex space-x-3 pt-4 border-t">
                    <button
                      onClick={() => handleApprove(selectedRequest.id)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(selectedRequest.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Select a request to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriveRequests;