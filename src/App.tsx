import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { EmailClassifier } from './components/EmailClassifier';
import { ApplicationTimeline } from './components/ApplicationTimeline';
import { CareerInsights } from './components/CareerInsights';
import { LayoutDashboard, Mail, CalendarDays, TrendingUp } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classifier', label: 'Email Classifier', icon: Mail },
    { id: 'timeline', label: 'Application Timeline', icon: CalendarDays },
    { id: 'insights', label: 'Career Insights', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-teal-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-gray-900">Smart Career</h1>
              <p className="text-xs text-gray-500">Mail Assistant</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeScreen === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-violet-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {activeScreen === 'dashboard' && <Dashboard />}
        {activeScreen === 'classifier' && <EmailClassifier />}
        {activeScreen === 'timeline' && <ApplicationTimeline />}
        {activeScreen === 'insights' && <CareerInsights />}
      </div>
    </div>
  );
}