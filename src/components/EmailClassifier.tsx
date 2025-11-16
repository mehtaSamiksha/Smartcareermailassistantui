import { useState } from 'react';
import { Mail, Clock, CheckCircle, XCircle, AlertCircle, Sparkles, TrendingUp, Send, Bell } from 'lucide-react';
import { Badge } from './ui/badge';

const emails = [
  {
    id: 1,
    from: 'Sarah Johnson',
    company: 'TechCorp',
    subject: 'Interview Invitation - Senior Developer Position',
    time: '2 hours ago',
    status: 'interview',
    confidence: 94,
    sentiment: 'positive',
    probability: 92,
  },
  {
    id: 2,
    from: 'Recruitment Team',
    company: 'DataSystems',
    subject: 'Your Application Status',
    time: '5 hours ago',
    status: 'applied',
    confidence: 78,
    sentiment: 'neutral',
    probability: 65,
  },
  {
    id: 3,
    from: 'Mike Chen',
    company: 'CloudWorks',
    subject: 'Technical Assessment - Next Steps',
    time: '1 day ago',
    status: 'applied',
    confidence: 88,
    sentiment: 'positive',
    probability: 78,
  },
  {
    id: 4,
    from: 'HR Department',
    company: 'AI Solutions',
    subject: 'Offer Letter - Data Scientist Role',
    time: '2 days ago',
    status: 'offer',
    confidence: 98,
    sentiment: 'positive',
    probability: 95,
  },
  {
    id: 5,
    from: 'Talent Acquisition',
    company: 'FinTech Inc',
    subject: 'Thank you for your application',
    time: '3 days ago',
    status: 'rejected',
    confidence: 85,
    sentiment: 'negative',
    probability: 15,
  },
];

const statusConfig = {
  applied: { label: 'Applied', color: 'bg-blue-100 text-blue-700', icon: Mail },
  interview: { label: 'Interview', color: 'bg-violet-100 text-violet-700', icon: CheckCircle },
  offer: { label: 'Offer', color: 'bg-teal-100 text-teal-700', icon: CheckCircle },
  rejected: { label: 'Rejected', color: 'bg-rose-100 text-rose-700', icon: XCircle },
  pending: { label: 'Pending', color: 'bg-amber-100 text-amber-700', icon: Clock },
};

export function EmailClassifier() {
  const [selectedEmail, setSelectedEmail] = useState(emails[0]);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEmails = activeFilter === 'all' 
    ? emails 
    : emails.filter(e => e.status === activeFilter);

  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900">AI Email Classifier</h1>
        <p className="text-gray-500 mt-1">Automatically categorize and extract insights from recruiter emails</p>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Left Pane - Email List */}
        <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Filters */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Emails
              </button>
              {Object.entries(statusConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    activeFilter === key
                      ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>
          </div>

          {/* Email List */}
          <div className="overflow-y-auto max-h-[700px]">
            {filteredEmails.map((email) => {
              const config = statusConfig[email.status as keyof typeof statusConfig];
              return (
                <div
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-all ${
                    selectedEmail.id === email.id
                      ? 'bg-blue-50 border-l-4 border-l-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm text-gray-900">{email.company}</p>
                        <span className={`px-2 py-0.5 rounded-md text-xs ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-1">{email.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{email.from}</span>
                    <span className="text-gray-400">{email.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Pane - Email Viewer */}
        <div className="col-span-3 space-y-4">
          {/* Email Header */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-gray-900">{selectedEmail.subject}</h2>
                  <Badge className={statusConfig[selectedEmail.status as keyof typeof statusConfig].color}>
                    {statusConfig[selectedEmail.status as keyof typeof statusConfig].label}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>From: {selectedEmail.from}</span>
                  <span>•</span>
                  <span>{selectedEmail.company}</span>
                  <span>•</span>
                  <span>{selectedEmail.time}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-all">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* AI Classification Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 border border-violet-100">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-sm text-violet-900">AI Classified with {selectedEmail.confidence}% confidence</span>
              </div>
            </div>

            {/* Email Body */}
            <div className="prose prose-sm max-w-none text-gray-700 bg-gray-50 rounded-xl p-4 mb-4">
              <p>Dear Candidate,</p>
              <p className="mt-3">
                We were impressed with your application for the Senior Developer position at {selectedEmail.company}. 
                Your experience in full-stack development and cloud technologies aligns perfectly with what we're looking for.
              </p>
              <p className="mt-3">
                We would like to invite you to the next stage of our hiring process. Please let us know your availability 
                for a technical interview in the coming week.
              </p>
              <p className="mt-3">Best regards,<br />{selectedEmail.from}</p>
            </div>

            {/* AI Auto-Summary */}
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-teal-900">AI Summary</span>
              </div>
              <p className="text-sm text-teal-800">
                Interview invitation for Senior Developer role. Positive feedback on application. Action required: Provide availability for technical interview next week.
              </p>
            </div>
          </div>

          {/* Extracted Details */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-4">Extracted Structured Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Company</label>
                <p className="text-sm text-gray-900">{selectedEmail.company}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Role</label>
                <p className="text-sm text-gray-900">Senior Developer</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Recruiter Name</label>
                <p className="text-sm text-gray-900">{selectedEmail.from}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Next Action</label>
                <p className="text-sm text-gray-900">Provide interview availability</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Deadline</label>
                <p className="text-sm text-gray-900">Within 1 week</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Email Thread</label>
                <p className="text-sm text-gray-900">3 messages</p>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="grid grid-cols-3 gap-4">
            {/* AI Tone Analyzer */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  selectedEmail.sentiment === 'positive' ? 'bg-teal-100' :
                  selectedEmail.sentiment === 'negative' ? 'bg-rose-100' :
                  'bg-gray-100'
                }`}>
                  <Sparkles className={`w-5 h-5 ${
                    selectedEmail.sentiment === 'positive' ? 'text-teal-600' :
                    selectedEmail.sentiment === 'negative' ? 'text-rose-600' :
                    'text-gray-600'
                  }`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">AI Tone Analyzer</p>
                  <p className="text-sm text-gray-900 capitalize">{selectedEmail.sentiment}</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    selectedEmail.sentiment === 'positive' ? 'bg-teal-500' :
                    selectedEmail.sentiment === 'negative' ? 'bg-rose-500' :
                    'bg-gray-400'
                  }`}
                  style={{ width: '85%' }}
                />
              </div>
            </div>

            {/* Response Probability */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Response Probability</p>
                  <p className="text-sm text-gray-900">{selectedEmail.probability}%</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
                  style={{ width: `${selectedEmail.probability}%` }}
                />
              </div>
            </div>

            {/* Classification Confidence */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Confidence Meter</p>
                  <p className="text-sm text-gray-900">{selectedEmail.confidence}%</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                  style={{ width: `${selectedEmail.confidence}%` }}
                />
              </div>
            </div>
          </div>

          {/* Smart Action Buttons */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-4">Smart Actions</h3>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Generate Reply
              </button>
              <button className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Add to Tracker
              </button>
              <button className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all text-sm flex items-center justify-center gap-2">
                <Bell className="w-4 h-4" />
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
