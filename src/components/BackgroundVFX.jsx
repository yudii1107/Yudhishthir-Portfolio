
import './BackgroundVFX.css'

function BackgroundVFX() {
  return (
    <div className="ambient-vfx" aria-hidden="true">
      <div className="ambient-vfx-grid" />
      <div className="ambient-vfx-orb ambient-orb-purple" />
      <div className="ambient-vfx-orb ambient-orb-blue" />
      <div className="ambient-vfx-orb ambient-orb-violet" />
      <div className="ambient-vfx-beam" />
      <div className="ambient-vfx-grain" />
    </div>
  )
}

export default BackgroundVFX
