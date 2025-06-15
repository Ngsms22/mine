import "../styles/projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Dashboard, Admin",
      title: "Project Management Admin Panel",
      description: "I made one prototypes to understand family needs",
      link: "#",
    },
    {
      id: 2,
      category: "Website",
      title: "Architecture Company Website",
      description: "I made one prototypes to understand family needs",
      link: "#",
    },
    {
      id: 3,
      category: "Mobile App, iOS App",
      title: "To Do Task List App",
      description: "I made one prototypes to understand family needs",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">Project Image {project.id}</div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">
                  Read Process →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
