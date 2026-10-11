import './Skills.css'


const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    description: 'Languages for problem-solving and application development.',
    skills: ['Java', 'JavaScript', 'C', 'C++'],
  },
  {
    number: '02',
    title: 'Frontend Development',
    description: 'Building responsive and engaging user interfaces.',
    skills: ['HTML', 'CSS', 'React.js', 'Next.js'],
  },
  {
    number: '03',
    title: 'Backend Development',
    description: 'Building server-side applications and API integrations.',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    number: '04',
    title: 'Databases',
    description: 'Working with relational and NoSQL databases.',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '05',
    title: 'Tools & Platforms',
    description: 'Tools for development and version control.',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    number: '06',
    title: 'Core Competencies & Practices',
    description: 'Engineering fundamentals and practical development workflows.',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Design',
      'System Design Fundamentals',
      'API Integration',
      'Database Connectivity',
      'Debugging',
      'Application Testing',
    ],
  },
]


function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-label">
          <span>02</span> MY TOOLKIT
        </div>

        <div className="skills-heading">
          <h2 className="section-title">
            Technologies I use to
            <span className="gradient-text"> build things.</span>
          </h2>
          <p className="section-description">
            A growing toolkit for building complete web applications, from
            interfaces to databases and APIs.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-symbol">↗</span>
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="learning-strip">
          <span className="learning-indicator" />
          <div>
            <strong>Currently Learning</strong>
            <p>MERN Stack development through ongoing offline college training.</p>
          </div>
          <span className="learning-arrow">↗</span>
        </div>
      </div>
    </section>
  )
}

export default Skills