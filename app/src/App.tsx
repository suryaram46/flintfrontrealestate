import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </main>
  );
}

export default App;
