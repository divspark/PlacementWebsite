import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Calendar as CalendarIcon, Building2, Clock, MapPin, Users, Filter, Search } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import '../index.css';

const PlacementCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [filterCompany, setFilterCompany] = useState('All');

  const events = [
    {
      id: 1,
      date: new Date(2024, 2, 15),
      company: 'Microsoft',
      type: 'Pre-Placement Talk',
      time: '10:00 AM - 12:00 PM',
      venue: 'Main Auditorium',
      branches: ['CSE', 'IT', 'ECE'],
      status: 'confirmed',
      description: 'Introduction to Microsoft culture and available positions'
    },
    {
      id: 2,
      date: new Date(2024, 2, 18),
      company: 'Google',
      type: 'Technical Interview',
      time: '9:00 AM - 6:00 PM',
      venue: 'Computer Center',
      branches: ['CSE', 'IT'],
      status: 'confirmed',
      description: 'Technical interviews for SDE positions'
    },
    {
      id: 3,
      date: new Date(2024, 2, 20),
      company: 'Amazon',
      type: 'Online Assessment',
      time: '2:00 PM - 4:00 PM',
      venue: 'Online Platform',
      branches: ['CSE', 'IT', 'ECE'],
      status: 'scheduled',
      description: 'Coding assessment and logical reasoning test'
    },
    {
      id: 4,
      date: new Date(2024, 2, 22),
      company: 'TCS',
      type: 'Campus Drive',
      time: '9:00 AM - 5:00 PM',
      venue: 'Main Campus',
      branches: ['CSE', 'IT', 'ECE', 'EEE'],
      status: 'confirmed',
      description: 'Complete recruitment process including aptitude, technical, and HR rounds'
    },
    {
      id: 5,
      date: new Date(2024, 2, 25),
      company: 'Infosys',
      type: 'HR Interview',
      time: '11:00 AM - 4:00 PM',
      venue: 'Conference Room A',
      branches: ['CSE', 'IT'],
      status: 'tentative',
      description: 'Final HR interviews for selected candidates'
    },
    {
      id: 6,
      date: new Date(2024, 2, 28),
      company: 'Wipro',
      type: 'Pre-Placement Talk',
      time: '3:00 PM - 5:00 PM',
      venue: 'Seminar Hall',
      branches: ['CSE', 'IT', 'ECE'],
      status: 'confirmed',
      description: 'Company presentation and Q&A session'
    }
  ];

  const companies = ['All', ...Array.from(new Set(events.map(event => event.company)))];

  const filteredEvents = filterCompany === 'All' 
    ? events 
    : events.filter(event => event.company === filterCompany);

  const getTileContent = ({ date, view }: any) => {
    if (view === 'month') {
      const dayEvents = filteredEvents.filter(event => 
        event.date.toDateString() === date.toDateString()
      );
      
      if (dayEvents.length > 0) {
        return (
          <div className="flex flex-col items-center mt-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            {dayEvents.length > 1 && (
              <span className="text-xs text-blue-600 font-medium">{dayEvents.length}</span>
            )}
          </div>
        );
      }
    }
    return null;
  };

  const getTileClassName = ({ date, view }: any) => {
    if (view === 'month') {
      const hasEvent = filteredEvents.some(event => 
        event.date.toDateString() === date.toDateString()
      );
      return hasEvent ? 'has-event' : '';
    }
    return '';
  };

  const selectedDateEvents = filteredEvents.filter(event => 
    event.date.toDateString() === date.toDateString()
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tentative':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Pre-Placement Talk':
        return 'bg-purple-100 text-purple-800';
      case 'Technical Interview':
        return 'bg-blue-100 text-blue-800';
      case 'HR Interview':
        return 'bg-green-100 text-green-800';
      case 'Campus Drive':
        return 'bg-orange-100 text-orange-800';
      case 'Online Assessment':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handler for calendar onChange
  const handleDateChange = (
    value: Date | Date[] | [Date | null, Date | null] | null,
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                <CalendarIcon className="h-8 w-8 mr-3 text-blue-600" />
                Placement Calendar
              </h1>
              <p className="text-gray-600 mt-2">Stay updated with upcoming company visits and placement events</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-white rounded-lg p-1 shadow-sm border">
                <button
                  onClick={() => setView('calendar')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    view === 'calendar' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Calendar
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    view === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="md:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filterCompany}
                  onChange={(e) => setFilterCompany(e.target.value)}
                >
                  {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {view === 'calendar' ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border p-6">
              <Calendar
                onChange={handleDateChange}
                value={date}
                tileContent={getTileContent}
                tileClassName={getTileClassName}
                className="w-full react-calendar"
              />
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800">
                  {date.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </h3>
              </div>
              
              <div className="p-6">
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-medium text-gray-900">{event.company}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <span className={`px-2 py-1 rounded-full text-xs mr-2 ${getEventTypeColor(event.type)}`}>
                              {event.type}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.venue}
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {event.branches.join(', ')}
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-3">{event.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No events scheduled for this date.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">All Events</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {filteredEvents.map((event, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{event.company}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {event.date.toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.venue}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {event.branches.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementCalendar;