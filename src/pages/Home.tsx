import { Link } from 'react-router-dom'
import {
  ArrowRight, Brain, MonitorDot, ShieldAlert,
  FileCode2, GraduationCap, Lock, ChevronRight,
  Zap, Eye, Target, Github
} from 'lucide-react'
import { services, process_steps, stats, team, values } from '../data'

const iconMap: Record<string, React.ElementType> = {
  Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock,
}

// ── Threat scanner widget ──────────────────────────────────────────────────
function ThreatScanner() {
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
    <div className="bg-navy-800 border border-navy-500 rounded-xl p-5 font-mono text-xs select-none">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-slate-600">nexshield --assess</span>
      </div>
      <div className="text-slate-500 mb-1">$ scanning target-infrastructure.io</div>
      <div className="text-cyan-neon mb-3">  [+] 6 attack vectors identified.</div>
      <div className="space-y-2.5">
        {entries.map((e) => (
          <div key={e.label}>
            <div className="flex justify-between mb-0.5">
              <span className="text-slate-300">{e.label}</span>
              <span className={`font-semibold ${rc[e.risk]}`}>{e.risk}</span>
            </div>
            <div className="h-1.5 bg-navy-600 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${e.color} opacity-70`} style={{ width: `${e.w}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-navy-600 text-slate-500">
        <span className="text-cyan-neon">→ </span>14 actionable findings. Report ready.
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full bg-cyan-neon/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/4 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-neon/20 bg-cyan-neon/5 text-cyan-neon text-xs font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon animate-pulse" />
                AI RedTeaming · Pentest · DevSecOps
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-white">Next threat.</span>
                <br />
                <span className="text-cyan-neon glow-text">Next shield.</span>
              </h1>

              <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-lg">
                We test your systems the way real adversaries do — before they get the chance.
                AI RedTeaming, Penetration Testing, and Security Engineering
                for the threats that matter <em className="text-slate-300 not-italic">today</em>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Free Assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 flex-wrap">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">
                      {s.value}<span className="text-cyan-neon">{s.suffix}</span>
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

      {/* ── REALITY ───────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">The Reality</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              The threat landscape evolved.<br className="hidden sm:block" /> Most defenses didn't.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Organizations are breached not because attackers are invincible —
              but because defenders are reactive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'AI Changes the Game',
                desc: 'Attackers use AI to automate reconnaissance, generate convincing phishing, and bypass traditional defenses at scale. Your AI systems are also new attack vectors — untested and exposed.',
              },
              {
                icon: Eye,
                title: "You Can't Defend the Unknown",
                desc: 'Shadow APIs, forgotten assets, misconfigured cloud services, exposed internal tools — your real attack surface is always larger than your team knows. We find it all.',
              },
              {
                icon: Target,
                title: 'Reactive Is Too Late',
                desc: "The average dwell time before a breach is detected is still measured in months. Proactive testing and red teaming are no longer optional — they're survival.",
              },
            ].map((c) => (
              <div key={c.title} className="card group">
                <div className="w-10 h-10 rounded-xl bg-cyan-neon/10 flex items-center justify-center mb-4 group-hover:bg-cyan-neon/20 transition-colors">
                  <c.icon className="w-5 h-5 text-cyan-neon" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Services</h2>
            </div>
            <Link to="/services" className="text-cyan-neon text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <Link
                  key={s.id}
                  to="/services"
                  className="card group cursor-pointer hover:border-cyan-neon/30 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-navy-600 group-hover:bg-cyan-neon/10 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-cyan-neon" />
                    </div>
                    <h3 className="text-white font-semibold leading-snug pt-1">{s.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.short}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-navy-600 text-slate-500">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-cyan-neon text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">Our Process</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">How We Work</h2>
          </div>

          <p className="text-center text-slate-400 max-w-md mx-auto mb-14">
            Three phases. No shortcuts. Repeat until you're actually secure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-600 rounded-2xl overflow-hidden">
            {process_steps.map((step, i) => (
              <div key={step.step} className="bg-navy-800 p-8 relative">
                <div className="text-6xl font-bold text-cyan-neon/10 font-mono absolute top-4 right-6 select-none">{step.step}</div>
                <div className="w-8 h-8 rounded-lg bg-cyan-neon/10 flex items-center justify-center mb-4">
                  <span className="text-cyan-neon font-bold text-sm font-mono">{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ──────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="section-label">The People</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Our Team</h2>
            </div>
            <Link to="/about#team" className="text-cyan-neon text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Meet everyone <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {team.map((member) => (
              <div key={member.name} className="card group flex flex-col gap-3 hover:border-cyan-neon/30 transition-all">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: `${member.color}22`, border: `1px solid ${member.color}44` }}
                >
                  <span style={{ color: member.color }}>{member.shortName[0]}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{member.shortName}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{member.role}</div>
                </div>
                {member.github && (
                  <a href={member.github} target="_blank" rel="noreferrer"
                    className="text-slate-600 hover:text-cyan-neon transition-colors mt-auto"
                    onClick={e => e.stopPropagation()}>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES / MANIFESTO ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">What We Stand For</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                Security done right has no shortcuts.
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We started NexShield because we saw too many organizations treated as
                product targets rather than security partners. Our approach is different:
                honest, offensive-first, and built around real-world threats — not compliance checklists.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-cyan-neon text-sm mt-6 hover:gap-3 transition-all">
                Our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="card">
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon shrink-0" />
                    {v.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl border border-cyan-neon/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-700" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-neon/5 blur-3xl" />
            <div className="relative p-10 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <span className="section-label">Ready to stress-test your security?</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                  Know your weaknesses<br />before attackers do.
                </h2>
                <p className="mt-4 text-slate-400 max-w-md">
                  First assessment is free. We'll give you an honest picture
                  of where you stand — no sales pitch.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Request Assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline whitespace-nowrap justify-center">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
