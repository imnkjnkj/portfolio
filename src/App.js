import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Footer from './components/Footer';
import './index.css'
function App() {
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

export default App;
