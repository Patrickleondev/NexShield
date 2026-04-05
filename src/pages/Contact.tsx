import { useState } from 'react'
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react'
import { services } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`[NexShield] Assessment request from ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\n${form.message}`
    )
    window.location.href = `mailto:contact@nexshield.io?subject=${subject}&body=${body}`
    setSent(true)
  }

  const contacts = [
    { icon: Mail, label: 'Email', value: 'contact@nexshield.io', href: 'mailto:contact@nexshield.io' },
    { icon: Github, label: 'GitHub', value: 'github.com/Patrickleondev', href: 'https://github.com/Patrickleondev' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/company/nexshield', href: 'https://linkedin.com/company/nexshield' },
    { icon: Twitter, label: 'X / Twitter', value: 'x.com/nexshield_sec', href: 'https://x.com/nexshield_sec' },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Get In Touch</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Request an Assessment
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Tell us about your infrastructure. We'll identify your exposure and give you
            an honest report — no fluff, no upsell.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="card flex flex-col items-center justify-center text-center py-16 gap-4">
                <CheckCircle className="w-12 h-12 text-cyan-neon" />
                <h2 className="text-white text-xl font-semibold">Message sent!</h2>
                <p className="text-slate-400">Your email client should have opened. We'll get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="btn-outline mt-2">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5" htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-navy-700 border border-navy-500 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-neon/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5" htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-navy-700 border border-navy-500 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-neon/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5" htmlFor="company">Company / Organization</label>
                  <input
                    id="company" name="company" type="text"
                    value={form.company} onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-navy-700 border border-navy-500 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-neon/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5" htmlFor="service">Service of Interest</label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={handleChange}
                    className="w-full bg-navy-700 border border-navy-500 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-neon/50 transition-colors"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5" htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your infrastructure, current security situation, or any specific concerns…"
                    className="w-full bg-navy-700 border border-navy-500 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-neon/50 transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                {contacts.map((c) => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-neon transition-colors group">
                    <span className="w-8 h-8 rounded-lg bg-navy-600 border border-navy-500 flex items-center justify-center group-hover:border-cyan-neon/40 transition-colors">
                      <c.icon className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs text-slate-600">{c.label}</div>
                      <div className="text-sm">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We typically respond within <span className="text-cyan-neon">24–48 hours</span>.
                For urgent incidents, mention it in your message — we'll prioritize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
