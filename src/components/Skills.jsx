const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.2)',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
    ],
  },
  {
    title: 'Backend',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.2)',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Spring Boot', icon: '🍃' },
    ],
  },
  {
    title: 'Database',
    color: '#06b6d4',
    bgColor: 'rgba(6,182,212,0.08)',
    borderColor: 'rgba(6,182,212,0.2)',
    skills: [
      { name: 'SQL', icon: '🗄️' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    title: 'Programming Languages',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
    borderColor: 'rgba(245,158,11,0.2)',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '💻' },
      { name: 'Python', icon: '🐍' },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.2)',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📮' },
      { name: 'AWS Basics', icon: '☁️' },
    ],
  },
]

function SkillCard({ name, icon }) {
  return (
    <div
      className="group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(59,130,246,0.07)'
        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <span className="text-xl" role="img" aria-hidden="true">{icon}</span>
      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
        {name}
      </span>
    </div>
  )
}

function CategoryBlock({ title, color, bgColor, borderColor, skills }) {
  return (
    <div
      className="rounded-xl p-6 h-full"
      style={{ background: bgColor, border: `1px solid ${borderColor}` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        />
        <h3 className="font-semibold text-text-primary text-base" style={{ color }}>
          {title}
        </h3>
      </div>
      <div className="grid gap-2.5">
        {skills.map(s => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="section-subheading">
            Technologies I work with across the full development stack.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SKILL_CATEGORIES.map(cat => (
            <CategoryBlock key={cat.title} {...cat} />
          ))}
        </div>

        {/* Note on project stacks */}
        <div
          className="mt-10 p-4 rounded-xl text-sm text-text-muted text-center"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="text-accent-blue font-medium">Note:</span> Additional tools such as Express.js, MongoDB, Spring Boot, Tailwind CSS,
          JWT, and more appear in individual project stacks. See the Projects section for per-project technology details.
        </div>
      </div>
    </div>
  )
}
