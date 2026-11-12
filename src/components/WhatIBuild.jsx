import { Monitor, Server, Database, Shield, Layers, Zap } from 'lucide-react'

const INTERESTS = [
  {
    icon: <Monitor size={22} />,
    title: 'Responsive Web Applications',
    desc: 'Building interfaces that work beautifully across mobile, tablet and desktop — with clean UX and accessible design.',
    color: '#3b82f6',
  },
  {
    icon: <Layers size={22} />,
    title: 'Frontend & Backend Integration',
    desc: 'Connecting React frontends to Node.js or Java backends — bridging the gap between UI and server-side logic.',
    color: '#8b5cf6',
  },
  {
    icon: <Zap size={22} />,
    title: 'REST API-Driven Applications',
    desc: 'Designing clean, well-structured REST APIs and consuming them in frontend applications for dynamic user experiences.',
    color: '#06b6d4',
  },
  {
    icon: <Database size={22} />,
    title: 'Database-Connected Systems',
    desc: 'Integrating SQL and NoSQL databases to store, query and manage application data reliably.',
    color: '#10b981',
  },
  {
    icon: <Shield size={22} />,
    title: 'Secure & User-Friendly Software',
    desc: 'Applying secure development practices — JWT auth, encryption, input validation — without sacrificing usability.',
    color: '#f59e0b',
  },
  {
    icon: <Server size={22} />,
    title: 'Scalable Application Architecture',
    desc: 'Thinking about how systems grow — structuring code with maintainability, modularity and future teams in mind.',
    color: '#ec4899',
  },
]

export default function WhatIBuild() {
  return (
    <div className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">What I Build</p>
          <h2 className="section-heading">
            Career <span className="gradient-text">Interests</span>
          </h2>
          <p className="section-subheading">
            Areas I am passionate about and actively developing my skills in.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTERESTS.map(({ icon, title, desc, color }) => (
            <div
              key={title}
              className="group p-6 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}08`
                e.currentTarget.style.borderColor = `${color}30`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 8px 30px ${color}10`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-200"
                style={{ background: `${color}15`, border: `1px solid ${color}25`, color }}
              >
                {icon}
              </div>
              <h3 className="font-semibold text-text-primary text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
