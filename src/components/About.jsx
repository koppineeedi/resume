import { Shield, Code2, Database, Globe, ArrowRight } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: <Code2 size={18} />,
    label: 'Full Stack Projects',
    desc: 'Built end-to-end applications using React, Node.js, and Java Spring Boot.',
  },
  {
    icon: <Shield size={18} />,
    label: 'Secure Development',
    desc: 'CSE Cybersecurity specialization with practical exposure to JWT, AES encryption and secure APIs.',
  },
  {
    icon: <Database size={18} />,
    label: 'Database Integration',
    desc: 'Connected applications to SQL databases, MongoDB and AWS RDS.',
  },
  {
    icon: <Globe size={18} />,
    label: 'API-Driven Systems',
    desc: 'Designed and consumed REST APIs for user authentication, bookings and real-time data.',
  },
]

export default function About() {
  return (
    <div className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Text */}
          <div className="space-y-6">
            <div>
              <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
              <h2 className="section-heading">
                Building software that<br />
                <span className="gradient-text">makes a difference</span>
              </h2>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I am a Computer Science and Engineering student specializing in Cybersecurity at
                Godavari Institute of Engineering and Technology, with an interest in full-stack
                web development.
              </p>
              <p>
                I enjoy building practical applications, exploring modern web technologies, and
                solving real-world problems through software. My projects have helped me explore
                frontend development, backend integration, databases, APIs, and secure application
                design.
              </p>
              <p>
                I am actively looking for internship and placement opportunities where I can contribute,
                learn, and grow as a developer — particularly in full-stack roles.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/koppineeedi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                GitHub Profile
                <ArrowRight size={14} />
              </a>
              <a
                href="https://satya-cybersecurity-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-text-secondary hover:text-text-primary"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
              >
                <Shield size={14} />
                Cybersecurity Portfolio
              </a>
            </div>
          </div>

          {/* Right — Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="card group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-accent-blue transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  {icon}
                </div>
                <h3 className="font-semibold text-text-primary text-sm mb-1.5">{label}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '8.86', label: 'Current CGPA' },
            { value: '4+', label: 'Projects Built' },
            { value: '10+', label: 'Technologies Used' },
            { value: '2027', label: 'Graduation Year' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-5 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-3xl font-bold gradient-text">{value}</div>
              <div className="text-text-muted text-xs mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
