import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown, ChevronRight } from 'lucide-react'

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'Problem Solver',
  'API Builder',
]

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pause | erasing

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1800)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 300)
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, roleIndex])

  return (
    <span className="inline-block min-w-[2ch]">
      <span className="gradient-text font-bold">{displayed}</span>
      <span className="text-accent-blue animate-pulse">|</span>
    </span>
  )
}

function FloatingOrb({ className, style }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-float pointer-events-none ${className}`}
      style={style}
    />
  )
}

function InitialsAvatar() {
  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
          padding: '3px',
          borderRadius: '50%',
          animation: 'spin 8s linear infinite',
        }}
      >
        <div className="w-full h-full rounded-full bg-bg-primary" />
      </div>

      {/* Inner avatar */}
      <div
        className="absolute inset-3 rounded-full flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #13131f 0%, #1a1a2e 100%)',
          border: '1px solid rgba(59,130,246,0.2)',
        }}
      >
        {/* Code-inspired graphic */}
        <div className="text-center space-y-1 font-mono">
          <div className="text-text-muted text-xs">&lt;dev&gt;</div>
          <div
            className="text-5xl md:text-6xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SK
          </div>
          <div className="text-text-muted text-xs">&lt;/dev&gt;</div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 4px 15px rgba(59,130,246,0.4)' }}
      >
        Open to Opportunities
      </div>
    </div>
  )
}

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      {/* Floating orbs */}
      <FloatingOrb
        className="w-96 h-96 bg-accent-blue"
        style={{ top: '10%', left: '-5%', animationDelay: '0s' }}
      />
      <FloatingOrb
        className="w-72 h-72 bg-accent-violet"
        style={{ top: '20%', right: '-5%', animationDelay: '2s' }}
      />
      <FloatingOrb
        className="w-64 h-64 bg-accent-cyan"
        style={{ bottom: '15%', left: '30%', animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-accent-blue/30 bg-accent-blue/5 text-accent-blue">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Internships &amp; Placements
            </div>

            {/* Name */}
            <div className="space-y-2">
              <p className="text-text-secondary text-base font-medium tracking-wide">
                Hi, I&apos;m
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-text-primary leading-tight text-balance">
                Koppineedi Vamsi<br />
                <span className="gradient-text">Lakshmi Satya Kumari</span>
              </h1>
            </div>

            {/* Role */}
            <div className="text-xl sm:text-2xl font-semibold text-text-secondary min-h-[2rem]">
              Aspiring <TypingRole />
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
              CSE (Cybersecurity) student passionate about building responsive web applications,
              full-stack systems, and practical software solutions that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
              >
                Explore My Projects
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-outline"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/koppineeedi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all duration-200"
                aria-label="GitHub profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/satya-kumari-koppineedi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all duration-200"
                aria-label="LinkedIn profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:vamsilakshmisatyakoppineedi@gmail.com"
                className="p-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all duration-200"
                aria-label="Send email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="flex justify-center lg:justify-end">
            <InitialsAvatar />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
