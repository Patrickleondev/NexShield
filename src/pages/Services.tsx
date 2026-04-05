import { Link } from 'react-router-dom'
import { Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock, ArrowRight } from 'lucide-react'
import { services } from '../data'

const iconMap: Record<string, React.ElementType> = {
  Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock,
}

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">What We Offer</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Services
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            We're a hands-on team. Every service involves real expertise, real findings,
            and real remediation — not just automated reports.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.id} className="card group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-600 group-hover:bg-cyan-neon/10 transition-colors shrink-0">
                    <Icon className="w-6 h-6 text-cyan-neon" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                      {s.available && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                          Available
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {s.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-navy-600 text-slate-400">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 mb-4">Not sure which service fits your needs?</p>
          <Link to="/contact" className="btn-primary">
            Talk to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
