// components/Projects.jsx
import { FiExternalLink } from "react-icons/fi"
import "../styles/projects.css"

const Projects = () => {
    const projects = [
        {
            id: 1,
            category: "Dashboard, Admin",
            title: "Project Management Admin Panel",
            description: "Designed and developed a comprehensive admin dashboard with real-time analytics, user management, and project tracking features.",
            link: "#",
            tags: ["UI Design", "UX Research", "React"],
            image: "/assets/profile.jpg"
        },
        {
            id: 2,
            category: "Website",
            title: "Discover Books",
            description: "Created a modern, responsive website showcasing a real interesting catalogue of books with interactive galleries and client testimonials.",
            link: "#",
            tags: ["Web Design", "Responsive", "Animation","Books"],
            image: "/assets/books.png"
        },
        {
            id: 3,
            category: "Mobile App, iOS App",
            title: "To Do Task List App",
            description: "Designed a productivity app with intuitive task management, reminders, and cross-device synchronization.",
            link: "#",
            image: "/assets/todo.jpg",
            tags: ["Mobile UI", "User Testing", "iOS"]
        },
        {
            id: 4,
            category: "E-commerce",
            title: "Online Store Redesign",
            description: "Revamped an existing e-commerce platform, enhancing user flow, checkout process, and overall visual appeal, leading to increased conversions.",
            link: "#",
            tags: ["UI/UX", "E-commerce", "Conversion Optimization"]
        }
    ]

    return (
        <section id="projects" className="projects section" aria-labelledby="projects-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="projects-title" className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Selected works from my portfolio</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <div className="project-image">
                                    <img 
                                    src={project.image}
                                    alt = {'project.title'}
                                    className ="project-image"
                                    
                                    />
                                </div>
                                <div className="project-number">0{project.id}</div>
                            </div>
                            <div className="project-content">
                                <p className="project-category">{project.category}</p>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`}>
                                    View Project <FiExternalLink className="project-link-icon" />
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