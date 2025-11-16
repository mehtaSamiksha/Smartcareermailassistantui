import { TrendingUp, TrendingDown, Calendar, FileText, CheckCircle, XCircle, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const kpiData = [
  { label: 'Total Applications', value: 47, change: '+12%', trend: 'up', color: 'from-blue-500 to-blue-600', sparkline: [20, 25, 30, 35, 40, 47] },
  { label: 'Interviews Scheduled', value: 8, change: '+3', trend: 'up', color: 'from-violet-500 to-violet-600', sparkline: [3, 4, 5, 6, 7, 8] },
  { label: 'Offers Received', value: 3, change: '+2', trend: 'up', color: 'from-teal-500 to-teal-600', sparkline: [0, 0, 1, 1, 2, 3] },
  { label: 'Rejections', value: 12, change: '+4', trend: 'neutral', color: 'from-rose-500 to-rose-600', sparkline: [5, 7, 8, 9, 11, 12] },
  { label: 'Pending Responses', value: 24, change: '-3', trend: 'down', color: 'from-amber-500 to-amber-600', sparkline: [30, 28, 27, 26, 25, 24] },
];

const applicationStages = [
  { stage: 'Applied', count: 47 },
  { stage: 'Assessment', count: 18 },
  { stage: 'Interview', count: 8 },
  { stage: 'Offer', count: 3 },
  { stage: 'Rejected', count: 12 },
];

const responseRatio = [
  { name: 'Responded', value: 23, color: '#8b5cf6' },
  { name: 'Pending', value: 24, color: '#e0e7ff' },
];

const recentEmails = [
  { company: 'TechCorp', logo: '🚀', subject: 'Interview Invitation - Senior Developer', time: '2 hours ago', score: 92 },
  { company: 'DataSystems', logo: '📊', subject: 'Application Received Confirmation', time: '5 hours ago', score: 78 },
  { company: 'CloudWorks', logo: '☁️', subject: 'Technical Assessment Link', time: '1 day ago', score: 88 },
  { company: 'AI Solutions', logo: '🤖', subject: 'Next Steps - Phone Screen', time: '2 days ago', score: 95 },
];

const followUpItems = [
  { company: 'ABC Company', days: 4, message: 'Follow-up suggested' },
  { company: 'XYZ Tech', days: 7, message: 'No response - consider moving on' },
];

const dailyTasks = [
  { task: 'Complete coding challenge', company: 'TechCorp', deadline: 'Today, 5:00 PM' },
  { task: 'Prepare for phone screen', company: 'AI Solutions', deadline: 'Tomorrow, 2:00 PM' },
  { task: 'Follow up with recruiter', company: 'ABC Company', deadline: 'In 2 days' },
];

export function Dashboard() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Career Dashboard</h1>
          <p className="text-gray-500 mt-1">Track your job search progress and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-all text-sm">
            Export Report
          </button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-lg transition-all text-sm">
            Add Application
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-4">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                <span className="text-white text-xl">{kpi.value}</span>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs ${
                kpi.trend === 'up' ? 'bg-teal-50 text-teal-600' : 
                kpi.trend === 'down' ? 'bg-rose-50 text-rose-600' : 
                'bg-gray-50 text-gray-600'
              }`}>
                {kpi.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                {kpi.trend === 'down' && <TrendingDown className="w-3 h-3" />}
                <span>{kpi.change}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-2">{kpi.label}</p>
            {/* Mini Sparkline */}
            <div className="h-8 flex items-end gap-0.5">
              {kpi.sparkline.map((val, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-gradient-to-t ${kpi.color} opacity-30 rounded-sm`}
                  style={{ height: `${(val / Math.max(...kpi.sparkline)) * 100}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts and AI Recommendations */}
      <div className="grid grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 mb-4">Applications by Stage</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={applicationStages}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="stage" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="count" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 mb-4">Response Ratio</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={responseRatio}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {responseRatio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {responseRatio.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-600">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Recent Job Emails */}
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Recent Job Emails</h3>
            <button className="text-xs text-violet-600 hover:text-violet-700">View All</button>
          </div>
          <div className="space-y-3">
            {recentEmails.map((email, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center text-2xl">
                  {email.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-900">{email.subject}</p>
                    <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-600 text-xs">
                      {email.score}% Score
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-500">{email.company}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-xs text-gray-400">{email.time}</p>
                  </div>
                </div>
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* AI Follow-Up Recommendations & Daily Tasks */}
        <div className="space-y-4">
          {/* AI Follow-Up */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-white text-sm">🔔</span>
              </div>
              <h3 className="text-sm text-gray-900">AI Follow-Up Alerts</h3>
            </div>
            <div className="space-y-2">
              {followUpItems.map((item, idx) => (
                <div key={idx} className="bg-white/60 rounded-xl p-3 text-xs">
                  <p className="text-gray-900 mb-1">{item.company}</p>
                  <p className="text-gray-600">{item.days} days since last reply</p>
                  <p className="text-amber-700 mt-1">✨ {item.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Task Assistant */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-violet-500" />
              <h3 className="text-sm text-gray-900">Daily Task Assistant</h3>
            </div>
            <div className="space-y-2">
              {dailyTasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-gray-300 mt-0.5" />
                  <div>
                    <p className="text-gray-900">{task.task}</p>
                    <p className="text-gray-500">{task.company} • {task.deadline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smart Insights */}
      <div className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white">Smart Insights</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/90 text-sm">💡 You get fastest replies from mid-size companies</p>
            <p className="text-white/70 text-xs mt-2">Average response time: 3.2 days</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/90 text-sm">🌅 Morning applications have higher success rate</p>
            <p className="text-white/70 text-xs mt-2">8-10 AM shows 34% better response</p>
          </div>
        </div>
      </div>
    </div>
  );
}
