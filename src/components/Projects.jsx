import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const PROJECTS = [
  {
    id: 'repairhub',
    title: 'Repair Hub',
    subtitle: 'Appliance Repair Service Marketplace',
    category: 'Full Stack',
    featured: true,
    emoji: '🔧',
    accentColor: '#3b82f6',
    github: 'https://github.com/koppineeedi/repairhub',
    description:
      'A MERN-stack marketplace connecting customers with appliance repair technicians. Covers the complete service lifecycle — from discovery and booking to payments, reviews and admin oversight.',
    techStack: [
      'React 18', 'Vite', 'Tailwind CSS', 'React Router',
      'Node.js', 'Express.js', 'MongoDB', 'Mongoose',
      'JWT', 'Socket.io', 'Cloudinary', 'bcryptjs', 'Axios',
    ],
    features: [
      'Customer registration and JWT-based authentication',
      'Search and filter technicians by service, city, rating and experience',
      'Booking management with status tracking and technician location',
      'Customer ratings, reviews, favourites and booking history',
      'Admin dashboard — user management, technician verification and analytics',
      'Spare parts marketplace module',
      'Technician dashboard with availability and booking management',
    ],
  },
  {
    id: 'gridpulse',
    title: 'GridPulse',
    subtitle: 'Smart Grid Monitoring & AI Incident Dispatch',
    category: 'Full Stack',
    featured: true,
    emoji: '⚡',
    accentColor: '#8b5cf6',
    github: 'https://github.com/koppineeedi/gridpulse',
    description:
      'An enterprise-grade smart grid monitoring and automated incident dispatch platform. Monitors substation telemetry in real time, uses AI to diagnose faults, and dispatches qualified technicians — with full role-based access control.',
    techStack: [
      'React 18', 'Vite', 'Tailwind CSS', 'Recharts',
      'Java 17/21', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA',
      'AWS RDS MySQL', 'LangChain4j', 'Groq API',
      'Maven', 'GitHub Actions', 'SonarQube',
    ],
    features: [
      'Real-time monitoring of voltage, current and temperature across substations',
      'AI-assisted incident diagnosis and repair recommendations via LangChain4j',
      'Technician dispatch by specialization and workload',
      'Role-based workflows for administrators, operators and technicians',
      'JWT authentication with OTP-based password reset',
      'REST API backend with database-backed repair tickets',
    ],
    note: 'Java / Spring Boot backend — stack distinct from personal skills list.',
  },
  {
    id: 'projecthub',
    title: 'ProjectHub',
    subtitle: 'Project Management & Collaboration App',
    category: 'Applications',
    featured: false,
    emoji: '📋',
    accentColor: '#06b6d4',
    github: 'https://github.com/koppineeedi/projecthub',
    description:
      'A project-management and collaboration application inspired by tools like Jira, Asana and ClickUp. Supports planning, task assignment, progress tracking, file sharing, notifications and reporting.',
    techStack: ['See GitHub repository for verified stack details'],
    features: [
      'Project planning and task assignment',
      'Progress tracking and status updates',
      'File sharing and collaboration features',
      'Notifications and user management',
      'Reporting and analytics views',
    ],
  },
  {
    id: 'crypta',
    title: 'Crypta',
    subtitle: 'Secure File Encryption & Decryption Tool',
    category: 'Frontend',
    featured: false,
    emoji: '🔐',
    accentColor: '#10b981',
    github: 'https://github.com/koppineeedi/crypta',
    description:
      'A browser-based file encryption and decryption tool that runs entirely client-side. No files are uploaded — all cryptographic operations happen locally using the Web Crypto API.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Web Crypto API'],
    features: [
      'AES-GCM 256-bit encryption — industry standard',
      'PBKDF2 password-based key derivation',
      'Drag-and-drop file selection',
      'Real-time password strength indicator',
      'Local-only processing — zero server uploads',
      'Responsive interface across devices',
    ],
  },
  {
    id: 'exploit2detect',
    title: 'Exploit2Detect',
    subtitle: 'Cybersecurity Attack Simulation Platform',
    category: 'Applications',
    featured: false,
    emoji: '🛡️',
    accentColor: '#f59e0b',
    github: 'https://github.com/koppineeedi/exploit2Detect',
    description:
      'A cybersecurity platform for simulating web attack scenarios, replaying attack sequences and validating SIEM detection logic. Supporting project — not the main focus of this full-stack portfolio.',
    techStack: ['See GitHub repository for verified stack details'],
    features: [
      'Web attack scenario simulation',
      'Attack sequence replay',
      'SIEM detection validation',
    ],
    isSupporting: true,
  },
]

const FILTERS = ['All', 'Full Stack', 'Frontend', 'Applications']

function TechBadge({ tech, accent }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{
        background: `${accent}15`,
        border: `1px solid ${accent}30`,
        color: accent,
      }}
    >
      {tech}
    </span>
  )
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const { title, subtitle, category, featured, emoji, accentColor, github, description, techStack, features, note, isSupporting } = project

  const displayFeatures = expanded ? features : features.slice(0, 4)

  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 group flex flex-col ${
        featured ? 'ring-1 ring-accent-blue/20' : ''
      }`}
      style={{
        background: '#13131f',
        border: `1px solid rgba(255,255,255,0.07)`,
        boxShadow: featured ? `0 0 40px ${accentColor}10` : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${accentColor}40`
        e.currentTarget.style.boxShadow = `0 8px 40px ${accentColor}15`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = featured ? `0 0 40px ${accentColor}10` : 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}25` }}
            >
              {emoji}
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-lg leading-tight">{title}</h3>
              <p className="text-text-muted text-xs mt-0.5">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            {featured && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}30` }}
              >
                Featured
              </span>
            )}
            {isSupporting && (
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-text-muted border border-white/10">
                Supporting
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-text-muted border border-white/10">
              {category}
            </span>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      <div className="px-6 pb-4 flex-1">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Key Features</p>
        <ul className="space-y-1.5">
          {displayFeatures.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
              {f}
            </li>
          ))}
        </ul>
        {features.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-xs font-medium transition-colors"
            style={{ color: accentColor }}
            aria-expanded={expanded}
          >
            {expanded ? (
              <><ChevronUp size={12} /> Show less</>
            ) : (
              <><ChevronDown size={12} /> +{features.length - 4} more features</>
            )}
          </button>
        )}
      </div>

      {/* Tech stack */}
      <div className="px-6 pb-4">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map(t => (
            <TechBadge key={t} tech={t} accent={accentColor} />
          ))}
        </div>
        {note && (
          <p className="mt-2 text-xs text-text-muted italic">{note}</p>
        )}
      </div>

      {/* Links */}
      <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-white/5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: `${accentColor}10`,
            border: `1px solid ${accentColor}25`,
            color: accentColor,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = `${accentColor}20` }}
          onMouseLeave={e => { e.currentTarget.style.background = `${accentColor}10` }}
          aria-label={`View ${title} on GitHub`}
        >
          <Github size={15} />
          View on GitHub
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <div className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h2 className="section-heading">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subheading">
            A collection of full-stack applications, tools and experiments.
            All repositories are on GitHub.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Project filters">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              role="tab"
              aria-selected={activeFilter === f}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={
                activeFilter === f
                  ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#fff', boxShadow: '0 4px 15px rgba(59,130,246,0.3)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/koppineeedi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See All Repositories on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
