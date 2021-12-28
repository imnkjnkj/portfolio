import Header from './Header/Header'
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Project';
import Footer from './Footer/Footer';
import '../index.css';
function Homepage() {
  return (
    <div className="portfolio">
      <Header/>
      <About />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}

export default Homepage;