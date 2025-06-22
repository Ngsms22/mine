import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles/global.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 
