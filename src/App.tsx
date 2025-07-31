import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PlacementCalendar from './pages/PlacementCalendar';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import StudyMaterials from './pages/StudyMaterials';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Placement Officer Pages
import OfficerLayout from './components/OfficerLayout';
import OfficerDashboard from './pages/officer/OfficerDashboard';
import ManageCompanies from './pages/officer/ManageCompanies';
import CompanyDatabase from './pages/officer/CompanyDatabase';

// Placement Coordinator Pages
import CoordinatorLayout from './components/CoordinatorLayout';
import CoordinatorDashboard from './pages/coordinator/CoordinatorDashboard';
import ManageOfficers from './pages/coordinator/ManageOfficers';
import DriveRequests from './pages/coordinator/DriveRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Student Portal */}
        <Route path="/student" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<PlacementCalendar />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:id" element={<CompanyDetail />} />
          <Route path="materials" element={<StudyMaterials />} />
        </Route>

        {/* Placement Officer Portal */}
        <Route path="/officer" element={<OfficerLayout />}>
          <Route index element={<OfficerDashboard />} />
          <Route path="companies" element={<ManageCompanies />} />
          <Route path="database" element={<CompanyDatabase />} />
        </Route>

        {/* Placement Coordinator Portal */}
        <Route path="/coordinator" element={<CoordinatorLayout />}>
          <Route index element={<CoordinatorDashboard />} />
          <Route path="officers" element={<ManageOfficers />} />
          <Route path="requests" element={<DriveRequests />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;