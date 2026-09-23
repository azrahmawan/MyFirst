import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi'

const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/@azrahmawan',   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://linkedin.com/',  label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com/',   label: 'Twitter'  },
  { icon: FiDribbble, href: 'https://dribbble.com/',  label: 'Dribbble' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
      aria-label="Hero"
    >
      {/* Decorative book-spine lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px opacity-[0.04]"
            style={{
              left: `${15 + i * 18}%`,
              background: 'linear-gradient(to bottom, transparent, #a0522d 30%, #a0522d 70%, transparent)',
            }}
          />
        ))}
        {/* warm circle accent */}
        <div
          className="absolute right-10 top-1/4 w-64 h-64 rounded-full border border-honey/20 animate-float-slow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute right-20 top-1/4 w-40 h-40 rounded-full border border-honey/12 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      <div className="section-container w-full pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Greeting badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/25 text-caramel font-sans text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-honey animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 variants={item} className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-mocha leading-[1.1] mb-2">
              Hello, I'm
            </motion.h1>
            <motion.h1 variants={item} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-shimmer">Aziz</span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={item} className="font-body text-xl md:text-2xl text-ink-soft italic mb-6">
                Renewable Energy Engineer & IoT Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p variants={item} className="font-body text-base md:text-lg text-ink-muted leading-relaxed mb-10 max-w-lg">
              Passionate engineering graduate specialized in Renewable Energy | Leveraging strong problem-solving and efficiency-driven approaches to empower corporate success.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View my work
                <span className="ml-1">→</span>
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Get in touch
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="font-sans text-xs text-ink-muted tracking-widest uppercase">Find me</span>
              <div className="w-8 h-px bg-warm-linen" />
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-muted
                             border border-warm-linen hover:border-honey hover:text-honey
                             hover:-translate-y-0.5 hover:shadow-honey
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Portrait / visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-honey/30 to-caramel/20 blur-2xl scale-110 animate-glow-pulse" />

              {/* Avatar card */}
              <div className="relative w-80 h-96 rounded-[40px] overflow-hidden shadow-warm-xl
                              bg-gradient-to-br from-cream-200 to-cream-300 border border-cream-300
                              flex flex-col items-center justify-end pb-10 grain-overlay">
                {/* silhouette illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 320 380" className="w-full h-full opacity-60" aria-hidden="true">
                    <defs>
                      <radialGradient id="sg" cx="50%" cy="60%" r="50%">
                        <stop offset="0%" stopColor="#c9895a" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#a0522d" stopOpacity="0.1" />
                      </radialGradient>
                    </defs>
                    {/* body */}
                    <ellipse cx="160" cy="300" rx="90" ry="100" fill="url(#sg)" />
                    {/* head */}
                    <circle cx="160" cy="155" r="68" fill="#c9895a" opacity="0.35" />
                    {/* hair */}
                    <ellipse cx="160" cy="108" rx="66" ry="40" fill="#7a3b1e" opacity="0.55" />
                    <ellipse cx="100" cy="148" rx="22" ry="38" fill="#7a3b1e" opacity="0.45" />
                    <ellipse cx="220" cy="148" rx="22" ry="38" fill="#7a3b1e" opacity="0.45" />
                  </svg>
                </div>

                {/* name tag */}
                <div className="relative z-10 px-6 py-3 rounded-2xl bg-warm-white/80 backdrop-blur-sm border border-cream-200 shadow-warm text-center">
                  <p className="font-serif font-semibold text-mocha text-lg">Abdul Aziz Muji Rahmawan</p>
                  <p className="font-sans text-xs text-ink-muted mt-0.5">Engineer · Junior · Creative</p>
                </div>
              </div>

              {/* Floating badge — years exp */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 px-4 py-2 rounded-2xl bg-warm-white shadow-warm border border-cream-200"
              >
                <p className="font-serif font-bold text-honey text-2xl leading-none">3+</p>
                <p className="font-sans text-[10px] text-ink-muted leading-tight mt-0.5">years exp.</p>
              </motion.div>

              {/* Floating badge — projects */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 px-4 py-2 rounded-2xl bg-warm-white shadow-warm border border-cream-200"
              >
                <p className="font-serif font-bold text-caramel text-2xl leading-none">20+</p>
                <p className="font-sans text-[10px] text-ink-muted leading-tight mt-0.5">projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-muted">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-ink-muted" size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
