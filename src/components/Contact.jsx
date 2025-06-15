"use client"

import { useState } from "react"
import "../styles/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Talk</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Why hire me for your next project?</h3>
            <p>
              I'm a passionate product designer with over 5 years of experience creating digital solutions that users
              love. I believe in the power of good design to solve complex problems and create meaningful experiences.
            </p>

            <ul className="contact-details">
              <li>📧 ngamsebastien@gmail.com</li>
              <li>📱 +237 123-456 789</li>
              <li>📍 Cameroon, Bamenda</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
