import { useState } from "react";
import Particles from "./Particles";
import "./Hero.css";
import DeveloperTerminal from "./DeveloperTerminal";
import HeroOrb from './HeroOrb'

function Hero() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section className="hero" id="home">
      <Particles />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content container">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="status-dot" />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          <p className="hero-eyebrow">HAY! , I'M</p>

          <h1 className="hero-title">
            YUDHISHTHIR<span className="hero-period">.</span>
          </h1>

          <h2 className="hero-role">
            Full Stack <span className="gradient-text">Developer</span>
          </h2>

          <p className="hero-description">
            I build modern web experiences by combining clean interfaces,
            practical engineering, and a passion for turning ideas into
            functional products.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>

            <a className="button-secondary" href="#contact">
              Let's connect <span>→</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/yudii1107"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
            <span className="social-separator" />

            <a
              href="https://www.linkedin.com/in/yudii/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>

            <span className="social-separator" />

            <a
              href="https://www.instagram.com/theanmolahir/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />

          <div className="portrait-card">
            <div className="portrait-topline">
              <span>CREATIVE DEVELOPER</span>
              <span className="portrait-live">
                <i /> ONLINE
              </span>
            </div>

            <div className="portrait-frame">
              {imageAvailable ? (
                <img
                  className="profile-photo"
                  src="/images/profile.png"
                  alt="Yudhishthir — Full Stack Developer"
                  onError={() => setImageAvailable(false)}
                />
              ) : (
                <div className="portrait-placeholder">
                  <span>Y.</span>
                  <p>Add your photo to</p>
                  <code>public/images/profile.png</code>
                </div>
              )}

              <div className="portrait-image-shade" />
              <span className="portrait-corner portrait-corner-tl" />
              <span className="portrait-corner portrait-corner-br" />
            </div>

            <div className="portrait-bottomline">
              <div>
                <span className="portrait-label">BASED IN</span>
                <p>India</p>
              </div>
              <div className="portrait-mark">
                Y<span>.</span>
              </div>
              <div className="portrait-right">
                <span className="portrait-label">FOCUS</span>
                <p>Software Development</p>
              </div>
            </div>
          </div>
          <HeroOrb />

          <div className="floating-chip chip-top">
            <span className="chip-icon">✳</span>
            <div>
              <strong>Creative Mindset</strong>
              <span>Design meets code</span>
            </div>
          </div>

          <div className="floating-chip chip-bottom">
            <span className="chip-icon chip-icon-blue">⌘</span>
            <div>
              <strong>Full Stack</strong>
              <span>Frontend + Backend</span>
            </div>
          </div>
          <div className="hero-terminal-wrap">
            <DeveloperTerminal />
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span className="scroll-line" />
        MORE ABOUT ME
        <span className="scroll-arrow">↓</span>
      </a>

      <div className="hero-index" aria-hidden="true">
        01 / INTRODUCTION
      </div>
    </section>
  );
}

export default Hero;
