// components/Testimonials.jsx
import { FaQuoteLeft } from "react-icons/fa"
import "../styles/testimonials.css"

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Working with Sabastine was an absolute pleasure. His attention to detail and creative approach to problem solving resulted in a product that exceeded our expectations. The user engagement metrics improved by 40% after implementing his designs.",
            author: "Martha Sandoval",
            position: "Product Designer at GoldHost",
            avatar: "MS",
        },
        {
            id: 2,
            quote: "Sabastine's ability to understand complex user needs and translate them into intuitive interfaces is remarkable. He delivered our project ahead of schedule while maintaining the highest quality standards throughout the process.",
            author: "Mildred Meyer",
            position: "UX Lead at TechCorp",
            avatar: "MM",
        },
        {
            id: 3,
            quote: "Sabastine transformed our outdated interface into a modern, user-friendly experience. His expertise in both UI and UX was evident in every stage of the project, and the results speak for themselves.",
            author: "John Doe",
            position: "CEO at Innovate Corp",
            avatar: "JD",
        },
    ]

    return (
        <section id="testimonials" className="testimonials section" aria-labelledby="testimonials-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="testimonials-title" className="section-title">Client Testimonials</h2>
                    <p className="section-subtitle">What people say about my work</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.author}</h4>
                                    <p className="author-position">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials