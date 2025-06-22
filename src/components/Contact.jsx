// components/Contact.jsx
"use client"
import { useState } from "react"
import { FiMail, FiPhone, FiMapPin, FiCheckCircle } from "react-icons/fi" // Added FiCheckCircle for success
import "../styles/contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null) // Reset status on new submission

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Here you would typically send formData to your backend API
            console.log("Form submitted:", formData)

            setSubmitStatus("success")
            setFormData({ name: "", email: "", message: "" }) // Clear form
        } catch (error) {
            console.error("Form submission error:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)

            // Reset status after a few seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <section id="contact" className="contact section" aria-labelledby="contact-title">
            <div className="container">
                <div className="section-header">
                    <h2 id="contact-title" className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Have a project in mind? Let's talk</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3 className="info-title">Why work with me?</h3>
                        <p className="info-description">
                            I'm a passionate **Product Designer** with over 5 years of experience creating digital solutions that users love.
                            I believe in the power of good design to solve complex problems and create meaningful experiences.
                        </p>

                        <ul className="contact-details">
                            <li>
                                <FiMail className="icon" aria-hidden="true" />
                                <span><a href="mailto:ngamsebastien@gmail.com">ngamsebastien@gmail.com</a></span>
                            </li>
                            <li>
                                <FiPhone className="icon" aria-hidden="true" />
                                <span><a href="tel:+237123456789">+237 123-456 789</a></span>
                            </li>
                            <li>
                                <FiMapPin className="icon" aria-hidden="true" />
                                <span>Cameroon, Bamenda</span>
                            </li>
                        </ul>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                aria-required="true"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                aria-required="true"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project..."
                                rows="5"
                                aria-required="true"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {submitStatus === "success" && (
                            <div className="form-status-message success" role="status">
                                <FiCheckCircle className="status-icon" />
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="form-status-message error" role="alert">
                                Failed to send message. Please try again later.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact