
import { useEffect, useRef } from 'react'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let width = 0
    let height = 0
    let animationFrame = 0
    let particles = []
    let lastFrame = 0

    const mouse = { x: -1000, y: -1000 }
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

    const createParticles = () => {
      const count = Math.min(100, Math.floor((width * height) / 14000))

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.45 + 0.2,
      }))
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createParticles()
      draw()
    }

    const draw = (timestamp = 0) => {
      if (timestamp - lastFrame < 30) {
        animationFrame = requestAnimationFrame(draw)
        return
      }

      lastFrame = timestamp
      context.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > width) particle.vx *= -1
          if (particle.y < 0 || particle.y > height) particle.vy *= -1

          const dx = particle.x - mouse.x
          const dy = particle.y - mouse.y
          const distance = Math.hypot(dx, dy)

          if (distance < 120 && distance > 0) {
            particle.x += (dx / distance) * 0.45
            particle.y += (dy / distance) * 0.45
          }
        }

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(178, 145, 255, ${particle.alpha})`
        context.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const distance = Math.hypot(a.x - b.x, a.y - b.y)

          if (distance < 105) {
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.strokeStyle = `rgba(130, 105, 220, ${(1 - distance / 105) * 0.2})`
            context.lineWidth = 0.6
            context.stroke()
          }
        }
      }

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw)
      }
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()

    if (!reducedMotion) {
      animationFrame = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}

export default Particles
