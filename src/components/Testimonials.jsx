import "../styles/testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial.",
      author: "Martha Sandoval",
      position: "Product Designer at GoldHost",
      initial: "M",
    },
    {
      id: 2,
      quote:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial.",
      author: "Mildred Meyer",
      position: "Product Designer at GoldHost",
      initial: "M",
    },
  ]

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Happy Clients Says</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.initial}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
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
