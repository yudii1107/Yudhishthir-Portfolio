
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundVFX from './components/BackgroundVFX'
import CursorVFX from './components/CursorVFX'
import ScrollReveal from './components/ScrollReveal'
import './App.css'

function App() {
  return (
    <>
      <BackgroundVFX />
      <CursorVFX />
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        <ScrollReveal>
          <Education />
        </ScrollReveal>

        <ScrollReveal>
          <Certifications />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  )
}

export default App
