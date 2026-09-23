import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCoffee, FiBook, FiMusic, FiCamera } from 'react-icons/fi'

const INTERESTS = [
  { icon: FiCoffee, label: 'Coffee',      desc: 'Oat latte, always'   },
  { icon: FiBook,   label: 'Reading',     desc: 'Design & philosophy'  },
  { icon: FiMusic,  label: 'Music',       desc: 'Lo-fi & indie folk'   },
  { icon: FiCamera, label: 'Photography', desc: 'Warm tones & texture' },
]

const STATS = [
  { value: '3+',  label: 'Years of experience' },
  { value: '20+', label: 'Projects completed'  },
  { value: '15+', label: 'Happy clients'        },
  { value: '∞',   label: 'Cups of coffee'       },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background warm band */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/60 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="divider-warm" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-honey-dark font-medium">About me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title mb-6"
            >
              An engineer who<br />
              <em className="font-serif font-normal text-honey-dark not-italic">wants to learn new things</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-ink-soft font-body text-base leading-relaxed mb-10"
            >
              <p>
                Renewable Energy Engineering graduate from Polije, deeply focused on precision engineering, system efficiency, and practical problem-solving.
              </p>
              <p>
                I thrive on bridging solid <span className="text-caramel font-medium italic">engineering fundamentals</span> with an active curiosity for the ever-evolving tech landscape, constantly staying up to date with the latest industry innovations.
              </p>
              <p>
                Above all, I am a lifelong learner at heart, always eager to dive into new challenges and expand my knowledge across the broader engineering spectrum.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-2 gap-3"
            >
              {INTERESTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-cozy bg-warm-white border border-warm-linen
                             hover:border-honey/40 hover:shadow-warm-sm transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-honey/12 flex items-center justify-center flex-shrink-0
                                  group-hover:bg-honey/20 transition-colors duration-200">
                    <Icon size={15} className="text-honey-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-mocha">{label}</p>
                    <p className="font-sans text-[11px] text-ink-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + reading-nook visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-cozy-lg bg-warm-white border border-warm-linen shadow-warm-sm
                             hover:shadow-warm hover:border-honey/30 transition-all duration-300 text-center"
                >
                  <p className="font-serif font-bold text-4xl text-shimmer mb-1">{value}</p>
                  <p className="font-sans text-xs text-ink-muted leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Reading nook card */}
            <div className="relative rounded-cozy-lg overflow-hidden border border-cream-200 shadow-warm grain-overlay"
                 style={{ background: 'linear-gradient(135deg, #f5e6c4 0%, #edd9a3 100%)' }}>
              <div className="p-8">
                {/* Steam animation */}
                <div className="flex justify-center gap-3 mb-6" aria-hidden="true">
                  {[0, 0.6, 1.2].map((delay, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full bg-caramel/30 animate-steam"
                      style={{ height: `${20 + i * 5}px`, animationDelay: `${delay}s` }}
                    />
                  ))}
                </div>
                {/* Coffee cup emoji representation */}
                <div className="text-center mb-4">
                  <span className="text-5xl" role="img" aria-label="coffee and books">☕</span>
                </div>
                <blockquote className="font-body italic text-mocha text-center text-sm leading-relaxed">
                  "Good code, like good prose, should read like it was always meant to be that way."
                </blockquote>
                <p className="font-sans text-[11px] text-ink-muted text-center mt-3 tracking-wide">— my design philosophy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
