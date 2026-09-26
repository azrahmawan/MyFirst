import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode, FiLayers, FiTool, FiBox, FiGitBranch,
  FiMonitor, FiZap, FiPackage,
} from 'react-icons/fi'

// Using text labels + color dots instead of brand icons to avoid import issues
const SKILL_GROUPS = [
  {
    category: 'Solar PV & Power Systems',
    icon: FiCode,
    emoji: '⚡',
    skills: [
      { name: 'PLST System Design',       level: 92, color: '#61dafb', dot: '#61dafb' },
      { name: 'Cable Configuration & Sizing',  level: 82, color: '#3178c6', dot: '#3178c6' },
      { name: 'PLTS System Calculation',  level: 95, color: '#e8a020', dot: '#f7df1e' },
      { name: 'Quality Control PLTS System',     level: 78, color: '#666',    dot: '#888'    },
      { name: 'Document Control Support',      level: 90, color: '#42b883', dot: '#42b883' },
    ],
  },
  {
    category: 'Bioenergy Sector',
    icon: FiLayers,
    emoji: '✨',
    skills: [
      { name: 'Automated Biogass Purifier',  level: 96, color: '#38bdf8', dot: '#38bdf8' },
      { name: 'Flow Control - Biogass',          level: 94, color: '#2965f1', dot: '#2965f1' },
      { name: 'Pressure Sensor Implementation',         level: 97, color: '#e34f26', dot: '#e34f26' },
      { name: 'Temperature Sensor Implementation', level: 80, color: '#a020e8', dot: '#a020e8' },
      { name: 'pH Metre Sensor Implementation',         level: 85, color: '#f24e1e', dot: '#f24e1e' },
    ],
  },
  {
    category: 'Automation & IoT',
    icon: FiTool,
    emoji: '🛠️',
    skills: [
      { name: 'Arduino Development -ESP32', level: 70, color: '#68a063', dot: '#68a063' },
      { name: 'IoT Integration',     level: 90, color: '#f1502f', dot: '#f1502f' },
      { name: 'Dashboard Monitoring & Control', level: 70, color: '#68a063', dot: '#cb691e' },
      { name: 'Controll System',     level: 90, color: '#f1502f', dot: '#af0909' },
    ],
  },
]

function SkillBar({ name, level, color, dot, delay }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: dot }}
          />
          <span className="font-sans text-sm font-medium text-ink-soft">{name}</span>
        </div>
        <span className="font-mono text-xs text-ink-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-cream-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, #e8a020, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-28 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(250,243,224,0.8) 0%, rgba(240,232,214,0.4) 100%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="divider-warm" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-honey-dark font-medium">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title mb-4"
        >
          Experience On
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle max-w-xl mb-14"
        >
          Experienced in using the following software :
        </motion.p>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map(({ category, icon: Icon, emoji, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * gi }}
              className="card-cozy p-7 hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-honey/15 flex items-center justify-center">
                  <Icon size={17} className="text-honey-dark" />
                </div>
                <h3 className="font-serif font-semibold text-mocha text-xl">{category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} delay={0.2 + gi * 0.1 + si * 0.07} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-2 justify-center"
        >
          {['ArduinoIDE', 'Visual Studio', 'KIRO AI', 'Autocad2D', 'Oracle Primavera P6', 'Microsoft Office', 'Fritzing', 'Github Dekstop', 'Google Workspace', 'MQTT', 'Blynk IoT', 'Gemini'].map(tech => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
