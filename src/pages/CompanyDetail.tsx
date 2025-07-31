import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  FileText, 
  Download,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

const CompanyDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock company data - in real app, fetch based on id
  const company = {
    id: 1,
    name: 'Microsoft',
    logo: '🏢',
    description: 'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    position: 'Software Engineer',
    branches: ['CSE', 'IT', 'ECE'],
    package: '₹25-45 LPA',
    date: '2024-03-15',
    location: 'Bangalore',
    type: 'Full-time',
    status: 'Registration Open',
    eligibility: {
      cgpa: '7.5+',
      backlogs: 'No active backlogs',
      branches: ['Computer Science', 'Information Technology', 'Electronics & Communication']
    },
    requirements: [
      'Strong programming skills in C++, Java, or Python',
      'Understanding of data structures and algorithms',
      'Problem-solving and analytical thinking',
      'Good communication skills',
      'Knowledge of software development lifecycle'
    ],
    selectionProcess: [
      'Online Application',
      'Online Coding Test',
      'Technical Interview (2 rounds)',
      'HR Interview',
      'Final Selection'
    ],
    contactInfo: {
      email: 'placements@ietlucknow.ac.in',
      phone: '+91-522-2740651',
      coordinator: 'Dr. Rajesh Sharma'
    },
    documents: [
      { name: 'Job Description', type: 'PDF', size: '2.5 MB' },
      { name: 'Application Form', type: 'DOC', size: '1.2 MB' },
      { name: 'Selection Process', type: 'PDF', size: '800 KB' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/student/companies')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Company Details</h1>
          <p className="text-gray-600">Complete information about the company and role</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Company Overview */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className="text-4xl mr-4">{company.logo}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{company.name}</h2>
                  <p className="text-lg text-gray-600">{company.position}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {company.location}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {company.type}
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-lg border text-sm font-medium ${getStatusColor(company.status)}`}>
                {company.status}
              </span>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About the Company</h3>
              <p className="text-gray-600 leading-relaxed">{company.description}</p>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Eligibility Criteria
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Academic Requirements</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• CGPA: {company.eligibility.cgpa}</li>
                  <li>• Backlogs: {company.eligibility.backlogs}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Eligible Branches</h4>
                <div className="flex flex-wrap gap-2">
                  {company.branches.map((branch, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {branch}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Requirements</h3>
            <ul className="space-y-2">
              {company.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Selection Process */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Selection Process</h3>
            <div className="space-y-3">
              {company.selectionProcess.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mr-3">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Package
                </span>
                <span className="font-medium">{company.package}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Drive Date
                </span>
                <span className="font-medium">{company.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Location
                </span>
                <span className="font-medium">{company.location}</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-sm">{company.contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-sm">{company.contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Coordinator</p>
                  <p className="font-medium text-sm">{company.contactInfo.coordinator}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Documents
            </h3>
            <div className="space-y-3">
              {company.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Download className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;