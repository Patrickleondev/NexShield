import { Link } from 'react-router-dom'
import { Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock, ArrowRight } from 'lucide-react'
import { services } from '../data'
import { useLanguage } from '../contexts/LanguageContext'

const iconMap: Record<string, React.ElementType> = {
  Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock,
}

export default function Services() {
  const { t } = useLanguage()
  const ps = t.pages.services
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">{ps.label}</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            {ps.title}
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            {ps.desc}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            const st = t.services[i]
            return (
              <div key={s.id} className="card group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-600 group-hover:bg-cyan-neon/10 transition-colors shrink-0">
                    <Icon className="w-6 h-6 text-cyan-neon" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold text-lg">{st.title}</h3>
                      {s.available && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                          {st.available}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{st.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {s.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-navy-600 text-slate-400">{tag}</span>
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
          <p className="text-slate-400 mb-4">{ps.ctaText}</p>
          <Link to="/contact" className="btn-primary">
            {ps.ctaBtn} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
