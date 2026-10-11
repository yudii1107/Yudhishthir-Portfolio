import './Contact.css'

const socials = [
  {
    name: 'GitHub',
    detail: 'Explore my code',
    url: 'https://github.com/yudii1107',
    symbol: '🐙',
  },
  {
    name: 'LinkedIn',
    detail: 'Connect professionally',
    url: 'https://www.linkedin.com/in/yudii/',
    symbol: 'in',
  },
  {
    name: 'Instagram',
    detail: 'Follow my journey',
    url: 'https://www.instagram.com/theanmolahir/',
    symbol: 'IG',
  },
  {
    name: 'Email',
    detail: 'Send me a message',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=yudi110705@gmail.com',
    symbol: '@',
  },
]

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-label">
          <span>08</span> CONTACT
        </div>

        <div className="contact-card">
          <div className="contact-glow" />

          <div className="contact-content">
            <p className="contact-eyebrow">
              HAVE A PROJECT OR OPPORTUNITY?
            </p>

            <h2 className="contact-title">
              Let's build something
              <span className="gradient-text"> meaningful.</span>
            </h2>

            <p className="contact-description">
              I'm interested in connecting with developers, recruiters,
              and people building exciting things. Have an opportunity
              or an idea? Let's talk.
            </p>

            <a
              className="button-primary contact-email-button"
              href="mailto:yudi110705@gmail.com?subject=Portfolio%20Inquiry"
            >
              <span>Let's talk</span>
              <span>↗</span>
            </a>

          </div>

          <div className="contact-socials">
            <p className="contact-socials-heading">FIND ME ONLINE</p>

            {socials.map((social) => (
              <a
                className="contact-social-link"
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-social-symbol">
                  {social.symbol}
                </span>

                <span className="contact-social-info">
                  <strong>{social.name}</strong>
                  <span>{social.detail}</span>
                </span>

                <span className="contact-social-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact