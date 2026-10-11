
import './Experience.css'

const experiences = [
  {
    number: '01',
    type: 'INTERNSHIP',
    title: 'Full Stack Development Intern',
    organization: 'CodeAlpha',
    period: '10 Sep 2026 – 10 Oct 2026',
    status: 'Completed',
    description:
      'Completed a hands-on internship focused on developing functional web applications and strengthening full-stack development skills.',
    points: [
      'Built an e-commerce application with product browsing, authentication, cart, and order functionality.',
      'Developed a social media platform with posts, likes, comments, and user connections.',
      'Created a project management tool with project organization and task tracking.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    number: '02',
    type: 'PROFESSIONAL DEVELOPMENT',
    title: 'MERN Stack Training',
    organization: 'College Training Program',
    period: 'Started 10 Oct 2026',
    status: 'Ongoing',
    description:
      'Currently undertaking offline training to strengthen full-stack development skills and build a solid foundation in the MERN ecosystem.',
    points: [
      'Learning modern full-stack development concepts through structured training.',
      'Strengthening practical skills in frontend, backend, and database integration.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
]

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-label">
          <span>04</span> EXPERIENCE & LEARNING
        </div>

        <div className="experience-heading">
          <h2 className="section-title">
            Growing through
            <span className="gradient-text"> real experience.</span>
          </h2>
          <p className="section-description">
            My journey so far, from hands-on development experience to
            continuously expanding my technical skills.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item) => (
            <article className="experience-card" key={item.number}>
              <div className="experience-marker">
                <span>{item.number}</span>
              </div>

              <div className="experience-content">
                <div className="experience-topline">
                  <span className="experience-type">{item.type}</span>
                  <span
                    className={`experience-status ${
                      item.status === 'Ongoing' ? 'status-ongoing' : ''
                    }`}
                  >
                    <span />
                    {item.status}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <div className="experience-meta">
                  <span>{item.organization}</span>
                  <span className="experience-meta-divider">/</span>
                  <span>{item.period}</span>
                </div>

                <p className="experience-description">{item.description}</p>

                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
