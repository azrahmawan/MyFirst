import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import AmbientOrbs from './components/AmbientOrbs'

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => observer.observe(el))

    return () => reveals.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <div className="relative min-h-screen bg-warm-gradient overflow-x-hidden">
      <CustomCursor />
      <AmbientOrbs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
