import { TrendingUp, Target, Calendar, Award, Users, Zap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const responseTrends = [
  { month: 'Week 1', startup: 2.5, midsize: 3.2, enterprise: 5.8 },
  { month: 'Week 2', startup: 2.8, midsize: 3.0, enterprise: 6.2 },
  { month: 'Week 3', startup: 2.3, midsize: 2.8, enterprise: 5.5 },
  { month: 'Week 4', startup: 2.6, midsize: 3.1, enterprise: 6.0 },
];

const applicationOutcomes = [
  { category: 'Applications', count: 47 },
  { category: 'Interviews', count: 8 },
  { category: 'Offers', count: 3 },
];

const heatmapData = [
  { day: 'Mon', times: [12, 18, 25, 30, 22, 15, 8] },
  { day: 'Tue', times: [15, 22, 28, 35, 28, 18, 10] },
  { day: 'Wed', times: [10, 15, 20, 25, 20, 12, 5] },
  { day: 'Thu', times: [18, 25, 32, 38, 30, 20, 12] },
  { day: 'Fri', times: [14, 20, 26, 32, 24, 16, 8] },
  { day: 'Sat', times: [5, 8, 12, 15, 10, 6, 3] },
  { day: 'Sun', times: [3, 5, 8, 10, 7, 4, 2] },
];

const timeLabels = ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'];

const recruiterInsights = [
  { icon: '🚀', insight: 'Tech startups respond 30% faster', detail: 'Average response time: 2.4 days' },
  { icon: '📈', insight: 'Highest success rate in Data Analyst roles', detail: '42% interview rate' },
  { icon: '🎯', insight: 'Mid-size companies show best offer conversion', detail: '18% offer rate' },
];

const predictions = [
  { label: 'Expected Interviews Next Week', value: '2-3', icon: Calendar, color: 'from-blue-500 to-violet-500' },
  { label: 'Response Probability', value: '68%', icon: TrendingUp, color: 'from-violet-500 to-purple-500' },
  { label: 'Weekly Productivity Score', value: '87/100', icon: Award, color: 'from-teal-500 to-cyan-500' },
];

const topCompanies = [
  { company: 'TechCorp', probability: 85, logo: '🚀' },
  { company: 'DataSystems', probability: 72, logo: '📊' },
  { company: 'CloudWorks', probability: 68, logo: '☁️' },
];

export function CareerInsights() {
  const getHeatmapColor = (value: number) => {
    if (value < 10) return 'bg-blue-100';
    if (value < 20) return 'bg-blue-200';
    if (value < 30) return 'bg-blue-400';
    return 'bg-blue-600';
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Career Insights & Analytics</h1>
          <p className="text-gray-500 mt-1">Data-driven insights to optimize your job search strategy</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-lg transition-all text-sm">
          Download Report
        </button>
      </div>

      {/* Prediction Widgets */}
      <div className="grid grid-cols-3 gap-4">
        {predictions.map((pred, idx) => {
          const Icon = pred.icon;
          return (
            <div
              key={idx}
              className={`bg-gradient-to-br ${pred.color} rounded-2xl p-6 shadow-lg text-white`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-white/90 text-sm mb-2">{pred.label}</p>
              <p className="text-3xl text-white">{pred.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Response Time Trends */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 mb-4">Response Time Trends by Company Type</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={responseTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} label={{ value: 'Days', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#64748b' } }} />
              <Tooltip
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Line type="monotone" dataKey="startup" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6', r: 4 }} />
              <Line type="monotone" dataKey="midsize" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} />
              <Line type="monotone" dataKey="enterprise" stroke="#14b8a6" strokeWidth={2} dot={{ fill: '#14b8a6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-xs text-gray-600">Startup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-600">Mid-size</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-xs text-gray-600">Enterprise</span>
            </div>
          </div>
        </div>

        {/* Applications vs Outcomes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 mb-4">Applications vs Outcomes</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={applicationOutcomes}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="category" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                }}
              />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {applicationOutcomes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#14b8a6'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-900 mb-4">Best Days/Times to Apply</h3>
        <p className="text-sm text-gray-500 mb-4">Response rate heatmap based on application timing</p>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="flex gap-2 mb-2 ml-16">
              {timeLabels.map((time, idx) => (
                <div key={idx} className="w-16 text-center text-xs text-gray-500">
                  {time}
                </div>
              ))}
            </div>
            {heatmapData.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-2 mb-2 items-center">
                <div className="w-12 text-xs text-gray-600">{row.day}</div>
                {row.times.map((value, colIdx) => (
                  <div
                    key={colIdx}
                    className={`w-16 h-12 rounded-lg ${getHeatmapColor(value)} flex items-center justify-center text-xs ${
                      value >= 30 ? 'text-white' : 'text-gray-700'
                    } cursor-pointer hover:scale-105 transition-transform`}
                    title={`${value}% response rate`}
                  >
                    {value}%
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-600">
          <span>Low</span>
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded bg-blue-100" />
            <div className="w-6 h-6 rounded bg-blue-200" />
            <div className="w-6 h-6 rounded bg-blue-400" />
            <div className="w-6 h-6 rounded bg-blue-600" />
          </div>
          <span>High</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Recruiter Behavior Insights */}
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-violet-500" />
            <h3 className="text-gray-900">Recruiter Behavior Insights</h3>
          </div>
          <div className="space-y-3">
            {recruiterInsights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 border border-violet-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-900 mb-1">{item.insight}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Companies Likely to Respond */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-teal-500" />
            <h3 className="text-sm text-gray-900">Top 3 Companies Likely to Respond</h3>
          </div>
          <div className="space-y-3">
            {topCompanies.map((company, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{company.logo}</span>
                    <span className="text-sm text-gray-900">{company.company}</span>
                  </div>
                  <span className="text-sm text-violet-600">{company.probability}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                    style={{ width: `${company.probability}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benchmark & AI Recommendation */}
      <div className="grid grid-cols-2 gap-6">
        {/* Competitor Benchmark */}
        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white">Competitor Benchmark</h3>
          </div>
          <p className="text-4xl mb-2">87%</p>
          <p className="text-white/90 text-sm">Your activity is higher than 87% of job seekers in your category</p>
          <div className="mt-4 w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '87%' }} />
          </div>
        </div>

        {/* AI Career Recommendation */}
        <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white">AI Career Recommendation</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-white/90 text-sm">🎯 Focus on mid-size tech companies for better response rates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <p className="text-white/90 text-sm">⏰ Apply between 9-11 AM on Tuesdays and Thursdays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
