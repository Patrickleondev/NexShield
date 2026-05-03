import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  return (
    <footer className="bg-white/75 backdrop-blur-xl border-t border-slate-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <BrandLogo />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs whitespace-pre-line">
              {f.brandDesc}
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/Patrickleondev/NexShield" target="_blank" rel="noreferrer"
                className="footer-icon-link" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="footer-icon-link" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer"
                className="footer-icon-link" aria-label="X / Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:contact@nexshield.io"
                className="footer-icon-link" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-950 text-xs font-semibold uppercase tracking-widest mb-4">{f.servicesTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {f.services.map(s => (
                <li key={s}><Link to="/services" className="footer-text-link">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-950 text-xs font-semibold uppercase tracking-widest mb-4">{f.resourcesTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {f.resources.map(({ label, href }) => (
                <li key={label}><Link to={href} className="footer-text-link">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-8 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-slate-950 font-semibold text-sm">{f.newsletterTitle}</p>
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
                className="flex-1 sm:w-52 bg-white shadow-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-950 text-xs placeholder-slate-500 focus:outline-none focus:border-brand-900/50"
              />
              <button type="submit" className="btn-primary text-xs py-2 px-4 whitespace-nowrap">
                {f.newsletterCta}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">{f.copyright}</p>
          <p className="text-slate-600 text-xs font-mono">{f.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

