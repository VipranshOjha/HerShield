import React from 'react';
import { Shield, LogIn, Users, AlertTriangle, Scale, Swords } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import EmergencyContacts from './components/EmergencyContacts';
import SmsAlert from './components/SmsAlert';
import WomenLaws from './components/WomenLaws';
import SelfDefense from './components/SelfDefense';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/sms-alert" element={<SmsAlert />} />
          <Route path="/women-laws" element={<WomenLaws />} />
          <Route path="/self-defense" element={<SelfDefense />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <Shield className="w-12 h-12 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">HerShield</h1>
        <p className="text-gray-600">Empowering women with safety and knowledge</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard
          to="/login"
          icon={<LogIn className="w-6 h-6" />}
          title="Login"
          description="Secure access to your personal safety dashboard"
          color="bg-blue-500"
        />
        
        <FeatureCard
          to="/emergency-contacts"
          icon={<Users className="w-6 h-6" />}
          title="Emergency Contacts"
          description="Add and manage your trusted emergency contacts"
          color="bg-purple-500"
        />

        <FeatureCard
          to="/sms-alert"
          icon={<AlertTriangle className="w-6 h-6" />}
          title="SMS Alert"
          description="Quick emergency alerts with your location"
          color="bg-red-500"
        />

        <FeatureCard
          to="/women-laws"
          icon={<Scale className="w-6 h-6" />}
          title="Women Laws"
          description="Know your rights and legal protections"
          color="bg-green-500"
        />

        <FeatureCard
          to="/self-defense"
          icon={<Swords className="w-6 h-6" />}
          title="Self Defense"
          description="Learn essential self-defense techniques"
          color="bg-orange-500"
        />
      </div>

      <footer className="mt-16 text-center text-gray-600">
        <p>© 2024 HerShield. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, to, color }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  to: string; 
  color: string; 
}) {
  return (
    <Link to={to} className="transform transition-transform hover:-translate-y-1">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`${color} p-4 flex justify-center items-center text-white`}>
          {icon}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default App;