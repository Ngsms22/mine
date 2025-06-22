// components/Header.jsx
"use client"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa" // Using react-icons for the arrow
import "../styles/header.css"

const Header = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        // Set loaded to true after a short delay to trigger CSS animations
        const timer = setTimeout(() => {
            setLoaded(true)
        }, 100); // Small delay for effect

        return () => clearTimeout(timer)
    }, [])

    return (
        <section id="home" className={`header ${loaded ? 'loaded' : ''}`} aria-label="Hero Section - Sabastine Ngam">
            <div className="header-content">
                <div className="header-text">
                    <p className="header-subtitle">Hello, I'm</p>
                    <h1 className="header-title">
                        <span>Sabastine</span>
                        <span>Ngam</span>
                    </h1>
                    <p className="header-description">
                        **Product Designer** with a passion for creating beautiful and functional digital experiences.
                        I specialize in user interface design, user experience research, and front-end development.
                    </p>
                    <div className="header-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <FaArrowRight className="arrow-icon" />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                            <FaArrowRight className="arrow-icon" />
                        </a>
                    </div>
                </div>

                <div className="header-image">
                    <div className="profile-image-container">
                        <div className="profile-image" role="img" aria-label="Sabastine Ngam profile picture"></div>
                        <div className="image-border"></div>
                        <div className="image-dots"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header