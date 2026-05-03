import { useState } from 'react'
import { ArrowRight, Rss } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Blog() {
  const { t } = useLanguage()
  const pb = t.pages.blog

  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label">{pb.label}</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-950 leading-tight">
            {pb.title}
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl">
            {pb.desc}
          </p>
        </div>

        {/* Coming soon banner */}
        <div className="card border-brand-900/20 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-transparent pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                <Rss className="w-5 h-5 text-brand-900" />
              </div>
              <div>
                <h2 className="text-slate-950 font-semibold text-lg">{pb.comingTitle}</h2>
                <p className="text-slate-600 text-sm mt-1">{pb.comingDesc}</p>
              </div>
            </div>

            {subscribed ? (
              <div className="text-brand-900 text-sm font-medium shrink-0">{pb.subscribed}</div>
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
                  placeholder={pb.subscribePlaceholder}
                  className="flex-1 sm:w-52 bg-white shadow-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-950 text-sm placeholder-slate-500 focus:outline-none focus:border-brand-900/50"
                />
                <button type="submit" className="btn-primary text-xs py-2 px-4 whitespace-nowrap">
                  {pb.subscribeCta} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Upcoming articles */}
        <div>
          <h2 className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
            {pb.upcomingTitle}
          </h2>
          <div className="space-y-3">
            {pb.articles.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-slate-200 opacity-60"
              >
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                  <span className="text-slate-600 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-700 text-sm font-medium truncate">{a.title}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-white shadow-sm text-slate-500 shrink-0">{a.tag}</span>
                <span className="text-xs text-slate-600 shrink-0 hidden sm:block">{pb.comingSoon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

