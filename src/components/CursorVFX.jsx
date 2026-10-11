
import { useEffect, useRef } from 'react'
import './CursorVFX.css'

function CursorVFX() {
  const dotRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    )
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (!finePointer.matches || reducedMotion.matches) return

    const dot = dotRef.current
    const trail = trailRef.current

    let frameId
    let mouseX = -100
    let mouseY = -100
    let trailX = mouseX
    let trailY = mouseY
    let visible = false

    const updateCursor = () => {
      trailX += (mouseX - trailX) * 0.16
      trailY += (mouseY - trailY) * 0.16

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`

      frameId = requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY

      if (!visible) {
        trailX = mouseX
        trailY = mouseY
        dot.classList.add('cursor-vfx-visible')
        trail.classList.add('cursor-vfx-visible')
        visible = true
      }
    }

    const handleMouseLeave = () => {
      dot.classList.remove('cursor-vfx-visible')
      trail.classList.remove('cursor-vfx-visible')
      visible = false
    }

    const handleMouseEnter = () => {
      if (visible) return
      dot.classList.add('cursor-vfx-visible')
      trail.classList.add('cursor-vfx-visible')
      visible = true
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    frameId = requestAnimationFrame(updateCursor)

    return () => {
      cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div className="cursor-vfx" aria-hidden="true">
      <span className="cursor-vfx-trail" ref={trailRef} />
      <span className="cursor-vfx-dot" ref={dotRef} />
    </div>
  )
}

export default CursorVFX
