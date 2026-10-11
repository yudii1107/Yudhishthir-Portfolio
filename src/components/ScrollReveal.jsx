
import { useEffect, useRef, useState } from 'react'
import './ScrollReveal.css'

function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${visible ? 'scroll-reveal-visible' : ''} reveal-${direction} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
