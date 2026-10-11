
import './HeroOrb.css'

function HeroOrb() {
  return (
    <div className="hero-orb-scene" aria-hidden="true">
      <div className="hero-orb-glow" />

      <div className="hero-orb">
        <div className="hero-orb-core" />
        <div className="hero-orb-ring hero-orb-ring-one" />
        <div className="hero-orb-ring hero-orb-ring-two" />
        <div className="hero-orb-ring hero-orb-ring-three" />
        <div className="hero-orb-latitude" />

        <span className="hero-orb-node hero-orb-node-one" />
        <span className="hero-orb-node hero-orb-node-two" />
        <span className="hero-orb-node hero-orb-node-three" />
        <span className="hero-orb-node hero-orb-node-four" />
      </div>

      <div className="hero-orb-caption">
        <span className="hero-orb-caption-dot" />
        DIGITAL UNIVERSE
      </div>
    </div>
  )
}

export default HeroOrb
