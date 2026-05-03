import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import BrandLogo from './BrandLogo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const handleNavClick = (path: string) => {
    setOpen(false)
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-white/45 backdrop-blur-md border-b border-white/40'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick('/')}
          className="group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2"
        >
          <BrandLogo />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => handleNavClick(l.to)}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
              aria-label={`Navigate to ${l.label}`}
            >
              <span className="nav-link__label">{l.label}</span>
            </NavLink>
          ))}
        </div>

        {/* CTA + Lang toggle */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Language toggle */}
          <div className="flex items-center border border-slate-200 bg-white/70 rounded-lg overflow-hidden text-xs font-mono shadow-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-accent-50 text-brand-900' : 'text-slate-500 hover:text-brand-900'}`}
            >EN</button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 transition-colors ${lang === 'fr' ? 'bg-accent-50 text-brand-900' : 'text-slate-500 hover:text-brand-900'}`}
            >FR</button>
          </div>
          <Link to="/contact" onClick={() => handleNavClick('/contact')} className="nav-cta btn-primary text-xs py-2 px-4 whitespace-nowrap">
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700 hover:text-brand-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-4 pb-4 shadow-lg">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => handleNavClick(l.to)}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
            >
              <span>{l.label}</span>
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => handleNavClick('/contact')} className="btn-primary mt-4 w-full justify-center text-xs py-2">
            {t.nav.cta}
          </Link>
          {/* Mobile language toggle */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-slate-600 text-xs font-mono">Lang:</span>
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden text-xs font-mono">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-accent-50 text-brand-900' : 'text-slate-500'}`}
              >EN</button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 transition-colors ${lang === 'fr' ? 'bg-accent-50 text-brand-900' : 'text-slate-500'}`}
              >FR</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

