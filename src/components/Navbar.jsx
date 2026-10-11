
import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <nav className="nav-inner container" aria-label="Main navigation">
        <a className="nav-logo" href="#home" onClick={closeMenu}>
          Y<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            className="nav-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span>↗</span>
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'nav-toggle-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
