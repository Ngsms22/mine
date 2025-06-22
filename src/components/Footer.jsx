// components/Footer.jsx
import {
    FiGithub,
    FiTwitter,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiPhone,
    FiMapPin
} from "react-icons/fi"
import "../styles/footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section footer-about">
                        <div className="footer-logo">
                            <span className="logo-icon">SN</span>
                            <span className="logo-text">Sabastine Ngam</span>
                        </div>
                        <p className="footer-description">
                            Product Designer passionate about creating beautiful and functional digital experiences.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
                                <FiGithub />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter profile" target="_blank" rel="noopener noreferrer">
                                <FiTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer">
                                <FiInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section footer-links-nav">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section footer-contact-info">
                        <h3 className="footer-heading">Contact Info</h3>
                        <ul className="footer-contact">
                            <li>
                                <FiMail className="contact-icon" aria-hidden="true" />
                                <span><a href="mailto:ngamsebastien@gmail.com">ngamsebastien@gmail.com</a></span>
                            </li>
                            <li>
                                <FiPhone className="contact-icon" aria-hidden="true" />
                                <span><a href="tel:+237123456789">+237 123-456 789</a></span>
                            </li>
                            <li>
                                <FiMapPin className="contact-icon" aria-hidden="true" />
                                <span>North West, Bamenda</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {currentYear} Sabastine Ngam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer