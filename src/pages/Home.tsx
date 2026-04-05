import { Link } from 'react-router-dom'
import {
  ArrowRight, Brain, MonitorDot, ShieldAlert,
  FileCode2, GraduationCap, Lock, ChevronRight,
  Zap, Eye, Target
} from 'lucide-react'
import { services, process_steps, stats, team } from '../data'

const iconMap: Record<string, React.ElementType> = {
  Brain, MonitorDot, ShieldAlert, FileCode2, GraduationCap, Lock,
}

// ── Counter component ──────────────────────────────────────────────────────
function StatCard({ value, label, suffix }: { value: string; label: string; suffix: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-cyan-neon glow-text">
        {value}<span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="text-slate-400 text-sm mt-1">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-neon/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-neon/3 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <span className="section-label">Cybersecurity · AI RedTeaming · DevSecOps</span>

            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white">Next threat.</span>
              <br />
              <span className="text-cyan-neon glow-text">Next shield.</span>
            </h1>

            <p className="mt-6 text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl">
              We test your systems the way real adversaries do — before they get the chance.
              AI RedTeaming, Penetration Testing, and Security Engineering for the next generation of threats.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get an Assessment
              </Link>
            </div>

            {/* Terminal decoration */}
            <div className="mt-12 bg-navy-800 border border-navy-500 rounded-lg p-4 max-w-lg font-mono text-sm">
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="text-slate-500">$ nexshield --scan --target your-infra</div>
              <div className="text-cyan-neon mt-1">  [+] AI surface detected</div>
              <div className="text-green-400">  [+] Vulnerabilities mapped</div>
              <div className="text-white mt-1">  [*] Report ready. You're safer now.</div>
              <div className="text-slate-500 animate-pulse">▊</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="border-y border-navy-500 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">Why It Matters</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              The threat landscape evolved.<br />Most defenses didn't.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'AI Changes Everything',
                desc: 'Attackers now weaponize AI to automate reconnaissance, generate phishing, and bypass traditional defenses at scale. Your AI systems are also new attack vectors.',
              },
              {
                icon: Eye,
                title: 'You Can\'t Defend What You Don\'t See',
                desc: 'Shadow APIs, forgotten assets, exposed internal tools — your attack surface is larger than your security team knows. We find it all.',
              },
              {
                icon: Target,
                title: 'Reactive Is Obsolete',
                desc: 'Waiting for a breach to act is not a strategy. Proactive testing, red teaming, and continuous monitoring are the standard now.',
              },
            ].map((c) => (
              <div key={c.title} className="card group">
                <c.icon className="w-8 h-8 text-cyan-neon mb-4 group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.neon)] transition-all" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <div key={s.id} className="card group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-navy-600 group-hover:bg-cyan-neon/10 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-neon" />
                    </div>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.short}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-navy-600 text-slate-400">{t}</span>
                    ))}
                  </div>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-cyan-neon/30 to-transparent" />

            {process_steps.map((step) => (
              <div key={step.step} className="card text-center relative">
                <div className="text-5xl font-bold text-cyan-neon/20 font-mono mb-3">{step.step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
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
              <div key={member.name} className="card group text-center">
                <div className="w-12 h-12 rounded-full bg-navy-600 border border-cyan-neon/20 flex items-center justify-center mx-auto mb-3 text-cyan-neon font-bold text-lg group-hover:border-cyan-neon/60 transition-colors">
                  {member.name[0]}
                </div>
                <div className="text-white font-semibold text-sm">{member.name.split(' ')[0]}</div>
                <div className="text-slate-500 text-xs mt-1 leading-snug">{member.role.split('—')[0].trim()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl bg-navy-700 border border-cyan-neon/20 p-10 sm:p-16 text-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-neon/5 via-transparent to-cyan-neon/5 pointer-events-none" />
            <span className="section-label">Ready?</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Know your weaknesses<br />before attackers do.
            </h2>
            <p className="mt-4 text-slate-400 max-w-lg mx-auto">
              Request a free initial assessment. We'll tell you exactly where you stand and what needs to change.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
