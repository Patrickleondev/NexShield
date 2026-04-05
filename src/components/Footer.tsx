import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  return (
    <footer className="bg-navy-900 border-t border-navy-500 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-cyan-neon" />
              <span className="font-bold text-base tracking-tight">
                <span className="text-cyan-neon">NEX</span>
                <span className="text-white">SHIELD</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs whitespace-pre-line">
              {f.brandDesc}
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Patrickleondev/NexShield" target="_blank" rel="noreferrer"
                className="text-slate-500 hover:text-cyan-neon transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="text-slate-500 hover:text-cyan-neon transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer"
                className="text-slate-500 hover:text-cyan-neon transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:contact@nexshield.io"
                className="text-slate-500 hover:text-cyan-neon transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">{f.servicesTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {f.services.map(s => (
                <li key={s}><Link to="/services" className="hover:text-cyan-neon transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">{f.resourcesTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {f.resources.map(({ label, href }) => (
                <li key={label}><Link to={href} className="hover:text-cyan-neon transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-8 p-5 rounded-xl bg-navy-800 border border-navy-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">{f.newsletterTitle}</p>
              <p className="text-slate-500 text-xs mt-0.5">{f.newsletterDesc}</p>
            </div>
            <form
              name="newsletter" method="POST" data-netlify="true"
              className="flex gap-2 w-full sm:w-auto"
              onSubmit={e => e.preventDefault()}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email" name="email" required
                placeholder={f.newsletterPlaceholder}
                className="flex-1 sm:w-52 bg-navy-700 border border-navy-500 rounded-lg px-3 py-2 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-neon/50"
              />
              <button type="submit" className="btn-primary text-xs py-2 px-4 whitespace-nowrap">
                {f.newsletterCta}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-600 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">{f.copyright}</p>
          <p className="text-slate-600 text-xs font-mono">{f.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
