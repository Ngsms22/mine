"use client"

import { useState, useEffect } from "react"
import "../styles/navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          Portfolio
        </a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav-link" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className={`nav-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
