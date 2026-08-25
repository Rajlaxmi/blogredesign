import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Research from './components/Research';
import Footer from './components/Footer';
import useActiveSection from './hooks/useActiveSection';
import useReveal from './hooks/useReveal';

const SECTION_IDS = ['hero', 'about', 'publications', 'research', 'contact'];

function App() {
  const activeSection = useActiveSection(SECTION_IDS);
  useReveal();

  return (
    <div className="min-h-screen bg-bg">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Publications />
        <Research />
      </main>
      <Footer />
    </div>
  );
}

export default App;
