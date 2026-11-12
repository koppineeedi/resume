import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react'

const CONTACT_ITEMS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'vamsilakshmisatyakoppineedi@gmail.com',
    href: 'mailto:vamsilakshmisatyakoppineedi@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 9347596398',
    href: 'tel:+919347596398',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/koppineeedi',
    href: 'https://github.com/koppineeedi',
    color: '#06b6d4',
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'satya-kumari-koppineedi',
    href: 'https://www.linkedin.com/in/satya-kumari-koppineedi/',
    color: '#10b981',
    external: true,
  },
]

export default function Contact() {
  return (
    <div className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subheading">
            I am open to internship opportunities, full-stack roles and collaborations.
            Reach out and let's have a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left — Info */}
          <div className="space-y-5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-text-primary">Get In Touch</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Whether you have an internship opportunity, a project idea, or just want to connect —
                feel free to reach out. I will get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-3">
              {CONTACT_ITEMS.map(({ icon, label, value, href, color, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${color}08`
                    e.currentTarget.style.borderColor = `${color}30`
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                  aria-label={`Contact via ${label}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}25`, color }}
                  >
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted font-medium mb-0.5">{label}</p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate font-medium">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location note */}
            <div
              className="flex items-center gap-2 p-4 rounded-xl text-sm text-text-muted"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <MapPin size={15} className="text-accent-blue flex-shrink-0" />
              Based in Andhra Pradesh, India — open to remote and hybrid roles.
            </div>
          </div>

          {/* Right — Quick action card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between space-y-6"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(6,182,212,0.04) 100%)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <div className="space-y-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 8px 25px rgba(59,130,246,0.3)' }}
              >
                <Send size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Send a Quick Message</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                The fastest way to reach me is by email. Click below to open a pre-filled message in your email client.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:vamsilakshmisatyakoppineedi@gmail.com?subject=Internship%20Opportunity&body=Hi%20Satya%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20about%20an%20opportunity.%0A%0ARegards%2C"
                className="btn-primary w-full justify-center text-center"
                aria-label="Send email to Satya Kumari"
              >
                <Mail size={16} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/satya-kumari-koppineedi/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center text-center"
                aria-label="Connect on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <p className="text-xs text-text-muted text-center">
              Typically responds within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
