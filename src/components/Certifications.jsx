
import './Certifications.css'

const certifications = [
  {
    number: 'I',
    name: 'Getting Started with Artificial Intelligence',
    provider: 'IBM SkillsBuild',
    category: 'AI',
    description:
      'Learning foundational concepts and applications of artificial intelligence.',
  },
  {
    number: 'II',
    name: 'Data Structures & Algorithms with Java',
    provider: 'Apna College',
    category: 'DSA',
    description:
      'Building programming and problem-solving foundations using Java.',
  },
  {
    number: 'III',
    name: 'Web Development',
    provider: 'Apna College',
    category: 'WEB',
    description:
      'Learning the fundamentals of web development and building web projects.',
  },
]

function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-label">
          <span>06</span> CERTIFICATIONS
        </div>

        <div className="certifications-heading">
          <h2 className="section-title">
            Learning beyond
            <span className="gradient-text"> the classroom.</span>
          </h2>
          <p className="section-description">
            Courses and programs that support my technical growth and
            professional development.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((item) => (
            <article className="certification-card" key={item.number}>
              <div className="certification-top">
                <span className="certification-number">{item.number}</span>
                <span className="certification-category">{item.category}</span>
              </div>

              <div className="certification-symbol" aria-hidden="true">
                <span>📜</span>
              </div>

              <div className="certification-content">
                <span className="certification-provider">{item.provider}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <div className="certification-bottom">
                <span>COMPLETED LEARNING</span>
                <span className="certification-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
