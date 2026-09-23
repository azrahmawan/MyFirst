import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const PROJECTS = [
  {
    id:       1,
    title:    'Brewed — Coffee Subscription',
    category: 'Web App',
    tags:     ['React', 'Tailwind CSS', 'Framer Motion'],
    desc:     'A subscription e-commerce experience for artisan coffee roasters. Built with warm, editorial design and silky micro-interactions.',
    color:    '#e8a020',
    emoji:    '☕',
    live:     '#',
    repo:     '#',
    featured: true,
  },
  {
    id:       2,
    title:    'Folio CMS',
    category: 'Dashboard',
    tags:     ['Next.js', 'TypeScript', 'Prisma'],
    desc:     'A minimal content management dashboard with a focus on clarity and speed. Clean typography, zero clutter.',
    color:    '#a0522d',
    emoji:    '📋',
    live:     '#',
    repo:     '#',
    featured: true,
  },
  {
    id:       3,
    title:    'Nook — Reading Tracker',
    category: 'Mobile-first',
    tags:     ['React', 'Zustand', 'CSS Modules'],
    desc:     'Track your reading list with gentle animations and a tactile, book-like interface designed to feel like home.',
    color:    '#c9895a',
    emoji:    '📚',
    live:     '#',
    repo:     '#',
    featured: true,
  },
  {
    id:       4,
    title:    'Palette Studio',
    category: 'Design Tool',
    tags:     ['Vue.js', 'Canvas API'],
    desc:     'An in-browser colour palette generator built for designers who care about harmony and warmth.',
    color:    '#5c3d2e',
    emoji:    '🎨',
    live:     '#',
    repo:     '#',
    featured: false,
  },
  {
    id:       5,
    title:    'Whisper Blog',
    category: 'CMS / Blog',
    tags:     ['Next.js', 'MDX', 'Tailwind'],
    desc:     'A personal blog template with beautiful typography, dark mode, and a cosy reading experience.',
    color:    '#e8a020',
    emoji:    '✍️',
    live:     '#',
    repo:     '#',
    featured: false,
  },
  {
    id:       6,
    title:    'Serene UI Kit',
    category: 'Component Library',
    tags:     ['React', 'Storybook', 'TypeScript'],
    desc:     'A warm, accessible component library built on the philosophy that UI should feel effortless.',
    color:    '#c4790f',
    emoji:    '🧩',
    live:     '#',
    repo:     '#',
    featured: false,
  },
]

const FILTERS = ['All', 'Web App', 'Dashboard', 'Mobile-first', 'Design Tool', 'CMS / Blog', 'Component Library']

export default function Projects() {
  const [filter,   setFilter]   = useState('All')
  const [hovered,  setHovered]  = useState(null)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const visible = PROJECTS.filter(p => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-sand/30 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="divider-warm" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-honey-dark font-medium">Work</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title"
          >
            Selected projects
          </motion.h2>
          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs font-medium transition-all duration-200
                  ${filter === f
                    ? 'bg-honey text-warm-white shadow-honey'
                    : 'bg-cream-100 text-ink-muted border border-cream-200 hover:border-honey/40 hover:text-caramel'
                  }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0,  scale: 1 }}
                exit={{    opacity: 0, y: -16, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="card-cozy group overflow-hidden relative flex flex-col"
                style={{ minHeight: '280px' }}
                data-hover
              >
                {/* Top colour band */}
                <div
                  className="h-2 w-full flex-shrink-0 transition-all duration-300 group-hover:h-3"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
                />

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Icon + category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" role="img" aria-hidden="true">{project.emoji}</span>
                    <span
                      className="font-sans text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium"
                      style={{ background: `${project.color}18`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-xl text-mocha mb-2 group-hover:text-caramel transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Desc */}
                  <p className="font-body text-sm text-ink-muted leading-relaxed flex-1 mb-5">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 font-sans text-xs font-medium text-caramel
                                 hover:text-honey transition-colors duration-200"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <FiExternalLink size={13} />
                      Live demo
                    </a>
                    <span className="text-cream-300">·</span>
                    <a
                      href={project.repo}
                      className="flex items-center gap-1.5 font-sans text-xs font-medium text-ink-muted
                                 hover:text-mocha transition-colors duration-200"
                      aria-label={`Source code for ${project.title}`}
                    >
                      <FiGithub size={13} />
                      Source
                    </a>
                    {/* Featured dot */}
                    {project.featured && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-honey animate-pulse" title="Featured project" />
                    )}
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-cozy-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                  style={{ boxShadow: `inset 0 0 40px ${project.color}10` }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub size={15} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
