import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollIndicator from './components/ScrollIndicator';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Elements */}
      <ParticlesBackground />
      
      {/* Navigation & UI Elements */}
      <Navbar />
      <ScrollIndicator />

      {/* Main Content Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
