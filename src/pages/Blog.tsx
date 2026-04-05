import { useState } from 'react'
import { ArrowRight, Rss } from 'lucide-react'

export default function Blog() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setSubscribed(true)
  }

  const upcoming = [
    { title: 'How we jailbreak LLMs in red team engagements', tag: 'AI RedTeaming', date: 'Coming soon' },
    { title: 'The anatomy of a real phishing campaign — step by step', tag: 'Awareness', date: 'Coming soon' },
    { title: 'DevSecOps in small teams: what to automate first', tag: 'DevSecOps', date: 'Coming soon' },
    { title: 'CTF writeup: Breaking an API with no documentation', tag: 'Pentest', date: 'Coming soon' },
    { title: 'GRC for non-enterprise: a practical framework', tag: 'GRC', date: 'Coming soon' },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label">Knowledge Base</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            NexShield Blog
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-xl">
            Research, writeups, and field notes from the team —
            published when we have something genuinely worth saying.
          </p>
        </div>

        {/* Coming soon banner */}
        <div className="card border-cyan-neon/20 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-neon/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-neon/10 flex items-center justify-center shrink-0">
                <Rss className="w-5 h-5 text-cyan-neon" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg">First articles in progress.</h2>
                <p className="text-slate-400 text-sm mt-1">
                  We're writing. Subscribe to get notified when we publish.
                </p>
              </div>
            </div>

            {subscribed ? (
              <div className="text-cyan-neon text-sm font-medium shrink-0">✓ You're on the list.</div>
            ) : (
              <form
                name="newsletter" method="POST" data-netlify="true"
                className="flex gap-2 w-full sm:w-auto shrink-0"
                onSubmit={handleSubscribe}
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <input
                  type="email" name="email" required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 sm:w-52 bg-navy-700 border border-navy-500 rounded-lg px-3 py-2 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-neon/50"
                />
                <button type="submit" className="btn-primary text-xs py-2 px-4 whitespace-nowrap">
                  Notify me <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Upcoming articles */}
        <div>
          <h2 className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
            Upcoming Articles
          </h2>
          <div className="space-y-3">
            {upcoming.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/50 border border-navy-600 opacity-60"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-700 flex items-center justify-center shrink-0">
                  <span className="text-slate-600 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-300 text-sm font-medium truncate">{a.title}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-navy-600 text-slate-500 shrink-0">{a.tag}</span>
                <span className="text-xs text-slate-600 shrink-0 hidden sm:block">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
