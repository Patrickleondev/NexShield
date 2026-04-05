import { Github, Linkedin, Shield } from 'lucide-react'
import { team } from '../data'

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Who We Are</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            About NexShield
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            We're a team of 5 security researchers, developers, and analysts — united by
            one goal: help organizations stay ahead of real-world threats through offensive thinking
            and proactive defense.
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: 'Mission',
              text: 'Make advanced cybersecurity accessible to organizations that can\'t afford to be compromised — by thinking and acting like attackers.',
            },
            {
              title: 'Vision',
              text: 'A world where AI-powered threats meet AI-hardened defenses, and every organization — large or small — has the tools to stay protected.',
            },
            {
              title: 'Philosophy',
              text: 'Security is not a product you buy, it\'s a discipline you build. We believe in continuous testing, honest reporting, and real fixes.',
            },
          ].map((b) => (
            <div key={b.title} className="card">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-cyan-neon" />
                <h3 className="text-cyan-neon font-semibold text-sm uppercase tracking-wider">{b.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div id="team">
          <div className="mb-10">
            <span className="section-label">The Team</span>
            <h2 className="mt-2 text-3xl font-bold text-white">5 experts. One mission.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card group flex gap-5">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl shrink-0 transition-all"
                  style={{ backgroundColor: `${member.color}22`, border: `1.5px solid ${member.color}44` }}
                >
                  <span style={{ color: member.color }}>{member.shortName[0]}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="text-white font-semibold">{member.shortName}</h3>
                    <span className="text-xs text-slate-500 font-mono">@{member.handle}</span>
                  </div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-slate-500 text-xs mb-2 font-mono">{member.specialty}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {member.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-navy-600 text-slate-400">{t}</span>
                    ))}
                  </div>

                  {(member.github || member.linkedin) && (
                    <div className="flex gap-3 mt-3">
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noreferrer"
                          className="text-slate-500 hover:text-cyan-neon transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noreferrer"
                          className="text-slate-500 hover:text-cyan-neon transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
