import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiDribbble, FiHeart } from 'react-icons/fi'

const SOCIALS = [
  { icon: FiGithub,   href: 'https://github.com/',   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://linkedin.com/',  label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com/',   label: 'Twitter'  },
  { icon: FiDribbble, href: 'https://dribbble.com/',  label: 'Dribbble' },
]

const NAV = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-warm-linen bg-cream-100/60 overflow-hidden">
      {/* Warm divider glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #e8a020, #f5c842, #e8a020, transparent)' }}
        aria-hidden="true"
      />

      <div className="section-container py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-honey flex items-center justify-center shadow-honey">
                <span className="font-serif font-bold text-warm-white leading-none">A</span>
              </div>
              <span className="font-serif font-semibold text-mocha text-lg">azrahmawan</span>
            </div>
            <p className="font-body text-sm text-ink-muted leading-relaxed max-w-xs">
              Building warm, intentional digital experiences — one thoughtful interface at a time.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-ink-muted mb-4">Navigate</p>
            <nav className="flex flex-col gap-2.5">
              {NAV.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-body text-sm text-ink-soft hover:text-caramel transition-colors duration-200 w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials + CTA */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-ink-muted mb-4">Connect</p>
            <div className="flex gap-3 mb-6">
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
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href="mailto:azizrahmawan84@gmail.com"
              className="font-body text-sm text-caramel hover:text-honey transition-colors duration-200 underline underline-offset-4 decoration-honey/40"
            >
              azizrahmawan84@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-warm-linen flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ink-muted">
            © {year} Azrahmawan. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ink-muted flex items-center gap-1.5">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-flex"
            >
              <FiHeart size={12} className="text-honey" />
            </motion.span>
            React, Tailwind CSS &amp; warm coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
