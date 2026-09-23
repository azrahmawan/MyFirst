import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section highlight
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => sections.forEach(s => s && obs.unobserve(s))
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-warm-white/85 backdrop-blur-md shadow-warm border-b border-warm-linen/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 no-underline"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-lg bg-honey flex items-center justify-center shadow-honey group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif font-bold text-warm-white text-lg leading-none">A</span>
            </div>
            <span className="font-serif font-semibold text-mocha text-lg tracking-wide">
              azrahmawan
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`relative px-4 py-2 font-sans text-sm font-medium rounded-lg transition-all duration-200
                  ${active === href
                    ? 'text-caramel'
                    : 'text-ink-soft hover:text-caramel'
                  }`}
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-honey/12 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="ml-3 btn-primary text-xs py-2 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-ink-soft hover:text-caramel hover:bg-honey/10 transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{  opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-warm-white/95 backdrop-blur-xl
                       border-l border-warm-linen shadow-warm-xl flex flex-col pt-24 px-8 pb-10"
          >
            {/* decorative line */}
            <div className="divider-warm mb-8" />
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`text-left px-4 py-3 rounded-cozy font-body text-lg font-medium
                    transition-all duration-200
                    ${active === href
                      ? 'bg-honey/15 text-caramel'
                      : 'text-ink-soft hover:bg-honey/10 hover:text-caramel'
                    }`}
                >
                  {label}
                </button>
              ))}
            </nav>
            <div className="mt-auto">
              <a href="/resume.pdf" className="btn-primary w-full justify-center text-sm" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-mocha/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
