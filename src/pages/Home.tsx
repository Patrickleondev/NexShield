import { Link } from 'react-router-dom'
import {
  ArrowRight, Brain, MonitorDot, ShieldAlert,
  FileCode2, GraduationCap, Lock, ChevronRight,
  Zap, Eye, Target, Github
} from 'lucide-react'
import { services, team } from '../data'
import { useLanguage } from '../contexts/LanguageContext'

const iconMap: Record<string, React.ElementType> = {
  Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock,
}
const realityIcons = [Zap, Eye, Target]

// â”€â”€ Threat scanner widget â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ThreatScanner() {
  const { t } = useLanguage()
  const sc = t.scanner
  const entries = [
    { label: 'AI Surface',    risk: 'CRITICAL', w: 90, color: 'bg-red-500' },
    { label: 'API Endpoints', risk: 'HIGH',     w: 70, color: 'bg-orange-400' },
    { label: 'Auth Logic',    risk: 'HIGH',     w: 65, color: 'bg-orange-400' },
    { label: 'Cloud Config',  risk: 'MEDIUM',   w: 40, color: 'bg-yellow-400' },
    { label: 'Dependencies',  risk: 'MEDIUM',   w: 45, color: 'bg-yellow-400' },
    { label: 'Data Exposure', risk: 'LOW',      w: 20, color: 'bg-green-400' },
  ]
  const rc: Record<string, string> = {
    CRITICAL: 'text-red-400', HIGH: 'text-orange-400', MEDIUM: 'text-yellow-400', LOW: 'text-green-400',
  }
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-xl p-5 font-mono text-xs select-none shadow-xl shadow-slate-200/70">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-slate-600">{sc.title}</span>
      </div>
      <div className="text-slate-500 mb-1">{sc.scanning}</div>
      <div className="text-brand-900 mb-3">{sc.found}</div>
      <div className="space-y-2.5">
        {entries.map((e) => (
          <div key={e.label}>
            <div className="flex justify-between mb-0.5">
              <span className="text-slate-600">{e.label}</span>
              <span className={`font-semibold ${rc[e.risk]}`}>{e.risk}</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${e.color} opacity-70`} style={{ width: `${e.w}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-slate-200 text-slate-500">
        <span className="text-brand-900">â†’ </span>{sc.footer}
      </div>
    </div>
  )
}

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-white/70 text-brand-900 text-xs font-mono mb-6 shadow-sm backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                {t.hero.badge}
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-slate-950">
                <span>{t.hero.title1}</span>
                <br />
                <span className="text-brand-900">{t.hero.title2}</span>
              </h1>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
                {t.hero.desc}<em className="text-slate-800 not-italic">{t.hero.descEm}</em>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  {t.hero.cta1} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline">
                  {t.hero.cta2}
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 flex-wrap">
                {t.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-slate-950">
                      {s.value}<span className="text-brand-900">{s.suffix}</span>
                    </div>
                    <div className="text-slate-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: scanner widget */}
            <div className="hidden lg:block">
              <ThreatScanner />
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ REALITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">{t.reality.label}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">
              {t.reality.titleLine1}<br className="hidden sm:block" /> {t.reality.titleLine2}
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              {t.reality.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.reality.cards.map((c, i) => {
              const Icon = realityIcons[i]
              return (
                <div key={c.title} className="card group">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors">
                    <Icon className="w-5 h-5 text-brand-900" />
                  </div>
                  <h3 className="text-slate-950 font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ SERVICES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="section-label">{t.servicesSection.label}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">{t.servicesSection.title}</h2>
            </div>
            <Link to="/services" className="text-brand-900 text-sm flex items-center gap-1 hover:gap-2 transition-all">
              {t.servicesSection.viewAll} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon]
              const st = t.services[i]
              return (
                <Link
                  key={s.id}
                  to="/services"
                  className="card group cursor-pointer hover:border-brand-900/30 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent-50 shadow-sm group-hover:bg-sky-100 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-brand-900" />
                    </div>
                    <h3 className="text-slate-950 font-semibold leading-snug pt-1">{st.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{st.short}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white shadow-sm text-slate-500">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-brand-900 text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.servicesSection.learnMore} <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ HOW WE WORK â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">{t.processSection.label}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">{t.processSection.title}</h2>
          </div>

          <p className="text-center text-slate-600 max-w-md mx-auto mb-14">
            {t.processSection.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white shadow-sm rounded-2xl overflow-hidden">
            {t.process_steps.map((step, i) => (
              <div key={step.title} className="bg-white p-8 relative">
                <div className="text-6xl font-bold text-brand-900/10 font-mono absolute top-4 right-6 select-none">0{i+1}</div>
                <div className="w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center mb-4">
                  <span className="text-brand-900 font-bold text-sm font-mono">{i + 1}</span>
                </div>
                <h3 className="text-slate-950 font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ TEAM PREVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="section-label">{t.teamSection.label}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">{t.teamSection.title}</h2>
            </div>
            <Link to="/about#team" className="text-brand-900 text-sm flex items-center gap-1 hover:gap-2 transition-all">
              {t.teamSection.meetEveryone} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {team.map((member, i) => {
              const tt = t.team[i]
              return (
                <div key={member.name} className="card group flex flex-col gap-3 hover:border-brand-900/30 transition-all">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg"
                    style={{ backgroundColor: `${member.color}22`, border: `1px solid ${member.color}44` }}
                  >
                    <span style={{ color: member.color }}>{member.shortName[0]}</span>
                  </div>
                  <div>
                    <div className="text-slate-950 font-semibold text-sm">{member.shortName}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{tt.role}</div>
                  </div>
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noreferrer"
                      className="text-slate-600 hover:text-brand-900 transition-colors mt-auto"
                      onClick={e => e.stopPropagation()}>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ VALUES / MANIFESTO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">{t.valuesSection.label}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">
                {t.valuesSection.title}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {t.valuesSection.desc}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-brand-900 text-sm mt-6 hover:gap-3 transition-all">
                {t.valuesSection.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.values.map((v) => (
                <div key={v.title} className="card">
                  <h3 className="text-slate-950 font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                    {v.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA BANNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl border border-brand-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="relative p-10 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <span className="section-label">{t.ctaBanner.label}</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                  {t.ctaBanner.titleLine1}<br />{t.ctaBanner.titleLine2}
                </h2>
                <p className="mt-4 text-slate-400 max-w-md">
                  {t.ctaBanner.desc}
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  {t.ctaBanner.cta1} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline whitespace-nowrap justify-center">
                  {t.ctaBanner.cta2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

