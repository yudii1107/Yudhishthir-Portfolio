import './About.css'

const highlights = [
  { number: '05+', label: 'Full-Stack Projects' },
  { number: '03', label: 'CodeAlpha Projects' },
  { number: '01', label: 'Completed Internship' },
]

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-label">
          <span>01</span> ABOUT ME
        </div>

        <div className="about-layout">
          <div className="about-heading">
            <h2 className="section-title">
              Building ideas into
              <span className="gradient-text"> digital experiences.</span>
            </h2>

            <p className="about-intro">
              I'm a Computer Science Engineering student and aspiring Full Stack
              Developer who enjoys turning ideas into useful, well-designed web
              applications.
            </p>
          </div>

          <div className="about-details">
            <p>
              My focus is on creating responsive interfaces, developing backend
              functionality, and connecting applications to databases. I enjoy
              learning by building projects that solve practical problems.
            </p>

            <p>
              I've worked on e-commerce platforms, social media features, task
              management, and job application tracking. I'm also developing my
              skills through hands-on projects and ongoing MERN Stack training.
            </p>

            <div className="about-tags">
              <span>Problem Solving</span>
              <span>Full Stack Development</span>
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.label}>
              <strong>{item.number}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About