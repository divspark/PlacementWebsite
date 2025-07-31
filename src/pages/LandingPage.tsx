import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Building2, 
  Award, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const achievements = [
    { label: 'Highest Package', value: '₹45 LPA', company: 'Microsoft' },
    { label: 'Average Package', value: '₹8.5 LPA', year: '2024' },
    { label: 'Placement Rate', value: '92%', year: '2024' },
    { label: 'Companies Visited', value: '125+', year: '2024' }
  ];

  const topCompanies = [
    'Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro', 
    'Accenture', 'IBM', 'Oracle', 'Adobe', 'Flipkart', 'Paytm'
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      batch: 'CSE 2024',
      company: 'Microsoft',
      package: '₹42 LPA',
      image: '👨‍💻',
      quote: 'The placement cell at IET Lucknow provided excellent guidance and support throughout my placement journey.'
    },
    {
      name: 'Priya Singh',
      batch: 'IT 2024',
      company: 'Google',
      package: '₹38 LPA',
      image: '👩‍💻',
      quote: 'Thanks to the comprehensive training and mock interviews, I was well-prepared for my dream job at Google.'
    },
    {
      name: 'Amit Kumar',
      batch: 'ECE 2024',
      company: 'Amazon',
      package: '₹35 LPA',
      image: '👨‍💼',
      quote: 'The placement team helped me identify my strengths and guided me towards the right career path.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">IET Lucknow</h1>
                <p className="text-xs text-gray-500">Training & Placement Cell</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Shaping Careers, Building Futures
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Welcome to the Training & Placement Cell of Institute of Engineering & Technology, Lucknow. 
              We bridge the gap between academic excellence and industry requirements.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/student" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center transition-colors"
              >
                Student Portal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Celebrating excellence in placements year after year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.value}</div>
                <div className="text-gray-700 font-medium mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-500">
                  {achievement.company || achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from our successful alumni</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.batch}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{testimonial.company}</span>
                    <span className="text-sm font-bold text-green-600">{testimonial.package}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Placement Partners</h2>
            <p className="text-lg text-gray-600">Leading companies that trust our talent</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {topCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join our network of placement partners and discover exceptional talent from IET Lucknow. 
                Our students are industry-ready and eager to contribute to your organization's success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span className="text-blue-100">Pre-screened candidates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span className="text-blue-100">Industry-relevant curriculum</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                  <span className="text-blue-100">Dedicated placement support</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Campus Drive</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="company@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Role</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-bold">IET Lucknow</h3>
                  <p className="text-sm text-gray-400">T&P Cell</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students with industry-ready skills and connecting them with leading employers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/student" className="hover:text-white transition-colors">Student Portal</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/signup" className="hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91-522-2740651
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  placements@ietlucknow.ac.in
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <span>IET Campus, Sitapur Road, Lucknow, UP 226021</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">IET Lucknow Campus</div>
                <div className="text-xs text-gray-500">
                  Sitapur Road, Lucknow<br />
                  Uttar Pradesh 226021<br />
                  India
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Institute of Engineering & Technology, Lucknow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;