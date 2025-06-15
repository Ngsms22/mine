import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Christian Lopez</h3>
            <p>Product Designer passionate about creating beautiful and functional digital experiences.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i>Git</i>
              </a>
              <a href="#" className="social-link">
                Twt
              </a>
              <a href="#" className="social-link">
                Ig
              </a>
              <a href="#" className="social-link">
                whp
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#projects">Projects</a>
            </p>
            <p>
              <a href="#testimonials">Testimonials</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>ngamsebastien@gmail.com</p>
            <p>+237 123-456 789</p>
            <p>North West, Bamenda</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Ngam Sabastine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
