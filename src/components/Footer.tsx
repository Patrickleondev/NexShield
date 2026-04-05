import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
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
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Next threat. Next shield.<br />
              Offensive-first cybersecurity — AI RedTeaming, Penetration Testing,
              and Security Engineering.
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
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['AI RedTeaming', 'SOC AI Tools', 'Penetration Testing', 'Code Audit', 'Awareness', 'X-Privacy'].map(s => (
                <li key={s}><Link to="/services" className="hover:text-cyan-neon transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[['About', '/about'], ['Team', '/about#team'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={label}><Link to={href} className="hover:text-cyan-neon transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-600 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">© 2026 NexShield. All rights reserved.</p>
          <p className="text-slate-600 text-xs font-mono">Break it before they do.</p>
        </div>
      </div>
    </footer>
  )
}
