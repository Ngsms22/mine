import "../styles/header.css"

const Header = () => {
  return (
    <section id="home" className="header">
      <div className="header-content">
        <div className="header-text">
          <p className="header-subtitle">Hello, I'm</p>
          <h1 className="header-title">
            Sabastine
            <br />
            Ngam
          </h1>
          <p className="header-description">
            Product Designer with a passion for creating beautiful and functional digital experiences. I specialize in
            user interface design, user experience research, and front-end development.
          </p>
          <div className="header-buttons">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="header-image">
          <div className="profile-image">Your Photo Here</div>
        </div>
      </div>

      <div className="header-bg-element"></div>
    </section>
  )
}

export default Header
