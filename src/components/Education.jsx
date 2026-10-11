
import './Education.css'

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-label">
          <span>05</span> EDUCATION
        </div>

        <div className="education-heading">
          <h2 className="section-title">
            Learning today.
            <span className="gradient-text"> Building tomorrow.</span>
          </h2>
          <p className="section-description">
            My academic foundation in computer science and engineering.
          </p>
        </div>

        <article className="education-card">
          <div className="education-card-top">
            <div className="education-icon">🎓</div>
            <span className="education-status">
              <span />
              In Progress
            </span>
          </div>

          <div className="education-content">
            <span className="education-period">2023 — 2027</span>
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science and Engineering</h4>
            <p className="education-institution">
              Dr. A.P.J. Abdul Kalam Technical University
            </p>
            <p className="education-location">Lucknow, Uttar Pradesh, India</p>

            <div className="education-divider" />

            <p className="education-description">
              Developing a foundation in computer science, programming,
              software development, data structures, and problem-solving
              while building practical web development projects.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Software Development</span>
              <span>Web Technologies</span>
            </div>
          </div>

          <div className="education-watermark">B.TECH</div>
        </article>
      </div>
    </section>
  )
}

export default Education
