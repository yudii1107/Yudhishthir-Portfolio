import "./Projects.css";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    number: "01",
    name: "AnshaMart",
    category: "E-COMMERCE PLATFORM",
    description:
      "A full-stack shopping experience featuring product search, category filters, sorting, cart management, checkout, authentication, wishlist, and reviews.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    repo: "https://github.com/yudii1107/ANSHAMART",
    featured: true,
  },
  {
    number: "02",
    name: "Job Application Tracker",
    category: "PRODUCTIVITY TOOL",
    description:
      "A job tracking application for managing applications and monitoring progress through Applied, Interview, Selected, and Rejected stages.",
    technologies: ["React", "Spring Boot", "MySQL", "REST API"],
    repo: "https://github.com/yudii1107/JobApplicationTracker",
  },
  {
    number: "03",
    name: "Social Media Platform",
    category: "SOCIAL APPLICATION",
    description:
      "A social application with user authentication, posts, likes, comments, following functionality, profiles, and a personalized feed.",
    technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/yudii1107/CodeAlpha_SocialMediaPlatform",
  },
  {
    number: "04",
    name: "Task Diary",
    category: "PROJECT MANAGEMENT",
    description:
      "A project and task management tool with user accounts, project organization, task tracking, comments, and team member functionality.",
    technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/yudii1107/CodeAlpha_ProjectManagementTool",
  },
  {
    number: "05",
    name: "AuraMart",
    category: "E-COMMERCE APPLICATION",
    description:
      "A full-stack shopping application with product browsing, authentication, cart functionality, and order creation.",
    technologies: ["HTML", "CSS", "JavaScript", "Express", "PostgreSQL"],
    repo: "https://github.com/yudii1107/CodeAlpha_AuraMart",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-label">
          <span>03</span> SELECTED WORK
        </div>

        <div className="projects-heading">
          <div>
            <h2 className="section-title">
              Projects built with
              <span className="gradient-text"> purpose.</span>
            </h2>
            <p className="section-description">
              Practical applications where I explore new technologies,
              strengthen my skills, and turn concepts into working software.
            </p>
          </div>

          <a
            className="projects-github-link"
            href="https://github.com/yudii1107"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <span>↗</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollReveal delay={index * 100} key={project.title}>
              <article
                className={`project-card ${project.featured ? "project-featured" : ""}`}
                key={project.number}
                onMouseMove={(event) => {
                  const card = event.currentTarget;

                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                  ) {
                    return;
                  }

                  const rect = card.getBoundingClientRect();
                  const x = event.clientX - rect.left;
                  const y = event.clientY - rect.top;

                  const rotateY = (x / rect.width - 0.5) * 8;
                  const rotateX = (0.5 - y / rect.height) * 6;

                  card.style.setProperty("--spotlight-x", `${x}px`);
                  card.style.setProperty("--spotlight-y", `${y}px`);
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "";
                }}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-corner-arrow">↗</span>
                </div>

                <div className="project-art" aria-hidden="true">
                  <div className="project-art-orbit orbit-one" />
                  <div className="project-art-orbit orbit-two" />
                  <div className="project-art-core">
                    <span>
                      {project.name === "Job Application Tracker"
                        ? "JT"
                        : project.name === "Social Media Platform"
                          ? "SM"
                          : project.name === "Task Diary"
                            ? "TD"
                            : project.name === "AuraMart"
                              ? "AM"
                              : "AN"}
                    </span>
                  </div>
                  <span className="project-art-label">
                    BUILD / {project.number}
                  </span>
                </div>

                <div className="project-card-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="project-repo-link"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source code <span>↗</span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
