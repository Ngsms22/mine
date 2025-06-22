// components/Navbar.jsx
"use client"

import { useState, useEffect, useCallback } from "react"
import { FaBars, FaTimes } from "react-icons/fa" // Using react-icons for burger/close
import "../styles/navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    // Memoize the handleScroll function to prevent unnecessary re-renders
    const handleScroll = useCallback(() => {
        const isScrolled = window.scrollY > 50 // Increased scroll threshold
        setScrolled(isScrolled)

        // Optimized active section detection
        const sections = ['home', 'projects', 'testimonials', 'contact']
        let currentActive = "home"
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i]
            const element = document.getElementById(section)
            if (element) {
                const rect = element.getBoundingClientRect()
                // Consider a section active if its top is within 150px from the top
                // and it's still visible
                if (rect.top <= 150 && rect.bottom >= 150) {
                    currentActive = section
                    break
                }
            }
        }
        setActiveSection(currentActive)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    const toggleMenu = () => setIsOpen(prev => !prev)
    const closeMenu = () => setIsOpen(false)

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={closeMenu} aria-label="Sabastine Ngam Home">
                    <span className="logo-icon">SN</span>
                    <span className="logo-text">Sabastine</span>
                </a>

                <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="nav-menu">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={closeMenu}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="nav-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="nav-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar