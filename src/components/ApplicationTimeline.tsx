import { Send, Calendar, Video, Trophy, X, CheckCircle, Clock, Mail } from 'lucide-react';

const applications = [
  {
    id: 1,
    company: 'TechCorp',
    logo: '🚀',
    role: 'Senior Full Stack Developer',
    dateApplied: 'Jan 15, 2024',
    status: 'offer',
    completionScore: 95,
    stages: [
      { name: 'Applied', date: 'Jan 15', status: 'completed', icon: Send },
      { name: 'Assessment', date: 'Jan 18', status: 'completed', icon: CheckCircle },
      { name: 'Interview', date: 'Jan 22', status: 'completed', icon: Video },
      { name: 'Offer', date: 'Jan 28', status: 'completed', icon: Trophy },
    ],
    emailCount: 8,
  },
  {
    id: 2,
    company: 'DataSystems',
    logo: '📊',
    role: 'Data Engineer',
    dateApplied: 'Jan 20, 2024',
    status: 'interview',
    completionScore: 60,
    stages: [
      { name: 'Applied', date: 'Jan 20', status: 'completed', icon: Send },
      { name: 'Assessment', date: 'Jan 23', status: 'completed', icon: CheckCircle },
      { name: 'Interview', date: 'Jan 30', status: 'in-progress', icon: Video },
      { name: 'Offer', date: '-', status: 'pending', icon: Trophy },
    ],
    emailCount: 4,
  },
  {
    id: 3,
    company: 'CloudWorks',
    logo: '☁️',
    role: 'DevOps Engineer',
    dateApplied: 'Jan 25, 2024',
    status: 'applied',
    completionScore: 40,
    stages: [
      { name: 'Applied', date: 'Jan 25', status: 'completed', icon: Send },
      { name: 'Assessment', date: 'Jan 28', status: 'in-progress', icon: CheckCircle },
      { name: 'Interview', date: '-', status: 'pending', icon: Video },
      { name: 'Offer', date: '-', status: 'pending', icon: Trophy },
    ],
    emailCount: 2,
  },
  {
    id: 4,
    company: 'AI Solutions',
    logo: '🤖',
    role: 'Machine Learning Engineer',
    dateApplied: 'Feb 1, 2024',
    status: 'rejected',
    completionScore: 25,
    stages: [
      { name: 'Applied', date: 'Feb 1', status: 'completed', icon: Send },
      { name: 'Rejected', date: 'Feb 5', status: 'rejected', icon: X },
    ],
    emailCount: 3,
  },
  {
    id: 5,
    company: 'FinTech Inc',
    logo: '💰',
    role: 'Backend Developer',
    dateApplied: 'Feb 3, 2024',
    status: 'applied',
    completionScore: 20,
    stages: [
      { name: 'Applied', date: 'Feb 3', status: 'completed', icon: Send },
      { name: 'Assessment', date: '-', status: 'pending', icon: CheckCircle },
      { name: 'Interview', date: '-', status: 'pending', icon: Video },
      { name: 'Offer', date: '-', status: 'pending', icon: Trophy },
    ],
    emailCount: 1,
  },
];

const statusColors = {
  completed: 'bg-teal-500',
  'in-progress': 'bg-violet-500',
  pending: 'bg-gray-300',
  rejected: 'bg-rose-500',
};

const statusBadges = {
  offer: { label: 'Offer Received', color: 'bg-teal-100 text-teal-700' },
  interview: { label: 'Interview Stage', color: 'bg-violet-100 text-violet-700' },
  applied: { label: 'Applied', color: 'bg-blue-100 text-blue-700' },
  rejected: { label: 'Rejected', color: 'bg-rose-100 text-rose-700' },
};

export function ApplicationTimeline() {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900">Application Timeline</h1>
        <p className="text-gray-500 mt-1">Track the progress of all your job applications</p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Overall Job Search Progress</h3>
          <span className="text-sm text-gray-600">47 Total Applications</span>
        </div>
        <div className="relative">
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="flex h-full">
              <div className="bg-teal-500 h-full" style={{ width: '25%' }} />
              <div className="bg-violet-500 h-full" style={{ width: '20%' }} />
              <div className="bg-blue-500 h-full" style={{ width: '30%' }} />
              <div className="bg-rose-500 h-full" style={{ width: '10%' }} />
            </div>
          </div>
          <div className="flex justify-between mt-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-gray-600">Offers (6%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-gray-600">Interviews (17%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-gray-600">Applied (51%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="text-gray-600">Rejected (26%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {applications.map((app) => {
          const badge = statusBadges[app.status as keyof typeof statusBadges];
          return (
            <div
              key={app.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-6">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center text-3xl flex-shrink-0">
                  {app.logo}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-gray-900">{app.role}</h3>
                        <span className={`px-3 py-1 rounded-lg text-xs ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{app.company}</span>
                        <span>•</span>
                        <span>Applied {app.dateApplied}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="w-4 h-4 text-violet-500" />
                        <span className="text-sm text-gray-900">Journey Completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                            style={{ width: `${app.completionScore}%` }}
                          />
                        </div>
                        <span className="text-sm text-violet-600">{app.completionScore}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Stages */}
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      {app.stages.map((stage, idx) => {
                        const Icon = stage.icon;
                        const isLast = idx === app.stages.length - 1;
                        return (
                          <div key={idx} className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                              {/* Icon */}
                              <div
                                className={`w-12 h-12 rounded-xl ${
                                  statusColors[stage.status as keyof typeof statusColors]
                                } flex items-center justify-center mb-2 transition-all group-hover:scale-110`}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              {/* Label */}
                              <p className="text-xs text-gray-900 mb-1">{stage.name}</p>
                              <p className="text-xs text-gray-500">{stage.date}</p>
                            </div>
                            {/* Connecting Line */}
                            {!isLast && (
                              <div className="flex-1 h-1 mx-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${
                                    stage.status === 'completed' ? 'bg-teal-500' : 'bg-gray-300'
                                  }`}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Email History Indicator */}
                  <div className="mt-4 flex items-center justify-between">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all text-sm text-gray-700">
                      <Mail className="w-4 h-4" />
                      <span>{app.emailCount} email{app.emailCount !== 1 ? 's' : ''} in thread</span>
                    </button>
                    <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all text-sm text-gray-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Card - Email History Preview */}
              <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-gray-500 mb-2">Recent Email Activity</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 rounded-lg p-2 text-xs">
                    <p className="text-blue-900">Application Received</p>
                    <p className="text-blue-600">{app.dateApplied}</p>
                  </div>
                  {app.status !== 'rejected' && app.stages.length > 1 && (
                    <div className="bg-violet-50 rounded-lg p-2 text-xs">
                      <p className="text-violet-900">{app.stages[1].name} Update</p>
                      <p className="text-violet-600">{app.stages[1].date}</p>
                    </div>
                  )}
                  {app.status === 'offer' && (
                    <div className="bg-teal-50 rounded-lg p-2 text-xs">
                      <p className="text-teal-900">Offer Letter</p>
                      <p className="text-teal-600">{app.stages[app.stages.length - 1].date}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all text-sm">
          Load More Applications
        </button>
      </div>
    </div>
  );
}
