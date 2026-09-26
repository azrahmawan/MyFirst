import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiSend, FiMapPin, FiClock } from 'react-icons/fi'

const INFO = [
  { icon: FiMapPin, label: 'Location', value: 'Indonesia 🇮🇩',      href: null },
  { icon: FiClock,  label: 'Response', value: 'Within 24 hours',   href: null },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [status,  setStatus]  = useState('idle') // idle | sending | sent | error
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputBase = (name) =>
    `w-full px-4 py-3 rounded-cozy bg-warm-white border text-ink font-body text-sm
     placeholder:text-ink-muted/60 outline-none transition-all duration-300
     ${focused === name
       ? 'border-honey shadow-warm shadow-md'
       : 'border-warm-linen hover:border-caramel/30'
     }`

  return (
    <section id="contact" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100/60 via-transparent to-cream-200/40 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="divider-warm" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-honey-dark font-medium">Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text + info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title mb-5"
            >
              Let's build something<br />
              <em className="text-honey-dark not-italic">worth remembering</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle mb-10 max-w-md"
            >
              Whether it's a new project, a collaboration, or just a conversation about design — I'd love to hear from you. Pull up a chair.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-cozy bg-honey/12 flex items-center justify-center flex-shrink-0
                                  group-hover:bg-honey/20 transition-colors duration-200">
                    <Icon size={16} className="text-honey-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-[11px] text-ink-muted tracking-wide uppercase mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="font-body text-mocha font-medium hover:text-honey transition-colors">{value}</a>
                      : <p className="font-body text-mocha font-medium">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Warm quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 p-6 rounded-cozy-lg border border-honey/20 bg-honey/10"
            >
              <p className="font-body italic text-mocha/80 text-sm leading-relaxed">
                "The best collaborations start with a good conversation and end with something neither party could have made alone."
              </p>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-cozy p-8 space-y-5"
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-sans text-xs font-medium text-ink-soft mb-1.5">
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Ada Lovelace"
                    className={inputBase('name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-xs font-medium text-ink-soft mb-1.5">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="ada@example.com"
                    className={inputBase('email')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-sans text-xs font-medium text-ink-soft mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  placeholder="Let's collaborate on..."
                  className={inputBase('subject')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs font-medium text-ink-soft mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className={`${inputBase('message')} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-cozy
                  font-sans font-medium text-sm transition-all duration-300
                  ${status === 'sent'
                    ? 'bg-green-500/20 text-green-700 border border-green-300 cursor-default'
                    : 'btn-primary'
                  }`}
              >
                {status === 'idle' && (
                  <><FiSend size={14} /> Send message</>
                )}
                {status === 'sending' && (
                  <><span className="w-4 h-4 border-2 border-warm-white/40 border-t-warm-white rounded-full animate-spin" /> Sending...</>
                )}
                {status === 'sent' && (
                  <>✓ Message sent! I'll be in touch soon.</>
                )}
              </button>

              <p className="font-sans text-[11px] text-ink-muted text-center">
                No spam, no cold emails — just genuine conversation. ☕
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
