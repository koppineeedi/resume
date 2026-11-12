import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react'

const EDUCATION = [
  {
    degree: 'B.Tech — CSE (Cybersecurity)',
    institution: 'Godavari Institute of Engineering and Technology',
    period: '2024 – 2027',
    grade: 'CGPA: 8.86',
    gradeType: 'CGPA',
    location: null,
    isLatest: true,
    color: '#3b82f6',
  },
  {
    degree: 'Diploma — CME',
    institution: 'Bonam Venkata Chalamayya Institute of Engineering and Technology, Amalapuram',
    period: '2021 – 2024',
    grade: 'Percentage: 84%',
    gradeType: 'Percentage',
    location: 'Amalapuram',
    isLatest: false,
    color: '#8b5cf6',
  },
  {
    degree: '10th Class (SSC)',
    institution: 'Mahatma Gandhi Municipal High School',
    period: '2020 – 2021',
    grade: 'GPA: 8.4',
    gradeType: 'GPA',
    location: 'Amalapuram',
    isLatest: false,
    color: '#06b6d4',
  },
]

export default function Education() {
  return (
    <div className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent-blue text-sm font-semibold tracking-widest uppercase mb-3">Education</p>
          <h2 className="section-heading">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subheading">
            My educational journey in Computer Science Engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background: 'linear-gradient(to bottom, rgba(59,130,246,0.6), rgba(139,92,246,0.4), rgba(6,182,212,0.3), transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-bg-primary"
                    style={{ background: edu.color, boxShadow: `0 0 12px ${edu.color}` }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`w-full sm:pl-10 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div
                    className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: '#13131f',
                      border: `1px solid ${edu.color}25`,
                      boxShadow: edu.isLatest ? `0 4px 30px ${edu.color}10` : 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${edu.color}50`; e.currentTarget.style.boxShadow = `0 8px 40px ${edu.color}15` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = `${edu.color}25`; e.currentTarget.style.boxShadow = edu.isLatest ? `0 4px 30px ${edu.color}10` : 'none' }}
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                      >
                        <GraduationCap size={18} style={{ color: edu.color }} />
                      </div>
                      {edu.isLatest && (
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                          style={{ background: `${edu.color}20`, color: edu.color, border: `1px solid ${edu.color}30` }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-text-primary text-base mb-1">{edu.degree}</h3>
                    <p className="text-text-secondary text-sm mb-3 leading-relaxed">{edu.institution}</p>

                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={12} style={{ color: edu.color }} />
                        {edu.period}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}25` }}
                      >
                        <Award size={11} />
                        {edu.grade}
                      </span>
                      {edu.location && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                          <MapPin size={12} />
                          {edu.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
