import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Materials from './components/Materials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Materials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
