import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
