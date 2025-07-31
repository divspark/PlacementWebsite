import React, { useState } from 'react';
import { BookOpen, Search, Tag, Eye, Download, Clock, User } from 'lucide-react';

const StudyMaterials: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Interview Experiences', 'Coding Problems', 'HR Questions', 'Technical Guides', 'Company Specific'];

  const materials = [
    {
      id: 1,
      title: 'Microsoft SDE Interview Experience 2024',
      category: 'Interview Experiences',
      company: 'Microsoft',
      author: 'Rahul Sharma (CSE 2024)',
      date: '2024-02-15',
      views: 1250,
      description: 'Complete interview experience including technical rounds, coding problems asked, and HR questions. Got selected with 42 LPA package.',
      tags: ['Microsoft', 'SDE', 'Interview', 'High Package'],
      type: 'article'
    },
    {
      id: 2,
      title: 'Google Coding Questions - Data Structures',
      category: 'Coding Problems',
      company: 'Google',
      author: 'Priya Singh (IT 2023)',
      date: '2024-02-10',
      views: 890,
      description: 'Collection of 50+ coding problems asked in Google interviews with detailed solutions and explanations.',
      tags: ['Google', 'Coding', 'Data Structures', 'Algorithms'],
      type: 'document'
    },
    {
      id: 3,
      title: 'Amazon Leadership Principles & HR Questions',
      category: 'HR Questions',
      company: 'Amazon',
      author: 'Amit Kumar (CSE 2024)',
      date: '2024-02-08',
      views: 675,
      description: 'Comprehensive guide to Amazon\'s leadership principles with sample HR questions and STAR method examples.',
      tags: ['Amazon', 'HR', 'Leadership Principles', 'STAR Method'],
      type: 'guide'
    },
    {
      id: 4,
      title: 'System Design for Tech Interviews',
      category: 'Technical Guides',
      company: 'Generic',
      author: 'Dr. Suresh Patel (Faculty)',
      date: '2024-02-05',
      views: 1420,
      description: 'Complete guide to system design concepts frequently asked in senior software engineer interviews.',
      tags: ['System Design', 'Architecture', 'Scalability', 'Senior Roles'],
      type: 'guide'
    },
    {
      id: 5,
      title: 'TCS NQT Preparation Material',
      category: 'Company Specific',
      company: 'TCS',
      author: 'Placement Cell',
      date: '2024-02-01',
      views: 2100,
      description: 'Complete preparation material for TCS National Qualifier Test including aptitude, coding, and English sections.',
      tags: ['TCS', 'NQT', 'Aptitude', 'English'],
      type: 'document'
    },
    {
      id: 6,
      title: 'Startup Interview Experience - Razorpay',
      category: 'Interview Experiences',
      company: 'Razorpay',
      author: 'Neha Gupta (ECE 2024)',
      date: '2024-01-28',
      views: 430,
      description: 'Interview experience at Razorpay for Software Engineer role, including technical assessment and cultural fit rounds.',
      tags: ['Razorpay', 'Startup', 'Fintech', 'Cultural Fit'],
      type: 'article'
    }
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <Download className="h-4 w-4" />;
      case 'guide':
        return <BookOpen className="h-4 w-4" />;
      default:
        return <Eye className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'document':
        return 'bg-green-100 text-green-800';
      case 'guide':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <BookOpen className="h-6 w-6 mr-2" />
          Study Materials
        </h1>
        <p className="text-gray-600 mt-1">Interview experiences, coding problems, and study resources</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search materials, companies, or topics..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-64">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 text-xs rounded-full flex items-center ${getTypeColor(material.type)}`}>
                  {getTypeIcon(material.type)}
                  <span className="ml-1 capitalize">{material.type}</span>
                </span>
                <span className="text-xs text-gray-500 flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {material.views}
                </span>
              </div>

              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{material.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{material.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {material.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {material.date}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {material.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {material.tags.length > 3 && (
                    <span className="text-xs text-gray-500">+{material.tags.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-6 py-3 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-700">{material.company}</span>
                <span className="text-xs text-blue-600 font-medium hover:text-blue-800">
                  Read More →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No materials found matching your search criteria.</p>
        </div>
      )}

      {/* Add Material Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors">
          <BookOpen className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default StudyMaterials;