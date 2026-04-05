import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-500' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={`${import.meta.env.BASE_URL}logo1.png`}
            alt="NexShield"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === l.to
                  ? 'text-cyan-neon'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + Lang toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-navy-500 rounded-lg overflow-hidden text-xs font-mono">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-cyan-neon/20 text-cyan-neon' : 'text-slate-500 hover:text-white'}`}
            >EN</button>
            <span className="text-navy-400">|</span>
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 transition-colors ${lang === 'fr' ? 'bg-cyan-neon/20 text-cyan-neon' : 'text-slate-500 hover:text-white'}`}
            >FR</button>
          </div>
          <Link to="/contact" className="btn-primary text-xs py-2 px-4">
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-navy-500 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-3 text-sm font-medium border-b border-navy-600 ${
                location.pathname === l.to ? 'text-cyan-neon' : 'text-slate-300'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4 w-full justify-center text-xs py-2">
            {t.nav.cta}
          </Link>
          {/* Mobile language toggle */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-slate-600 text-xs font-mono">Lang:</span>
            <div className="flex items-center border border-navy-500 rounded-lg overflow-hidden text-xs font-mono">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-cyan-neon/20 text-cyan-neon' : 'text-slate-500'}`}
              >EN</button>
              <span className="text-navy-400">|</span>
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 transition-colors ${lang === 'fr' ? 'bg-cyan-neon/20 text-cyan-neon' : 'text-slate-500'}`}
              >FR</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
