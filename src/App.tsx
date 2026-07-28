import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import NeuralAnimation from './components/NeuralAnimation/NeuralAnimation';
import { CircuitAnimation, FloatingCube, DataBeam } from './components/TechAnimations/TechAnimations';
import './styles/global.css';

function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="App">
      {/* Elementos de fundo (Blobs) */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* Background Tech Decorations (Total 10) */}
      <div className="neural-background">
        <NeuralAnimation isGlobal={true} />

        {/* Circuit Lines (3) */}
        <CircuitAnimation style={{ position: 'absolute', top: '25%', right: '20%' }} />
        <CircuitAnimation style={{ position: 'absolute', top: '70%', left: '15%', transform: 'rotate(180deg)' }} />
        <CircuitAnimation style={{ position: 'absolute', bottom: '10%', left: '40%', transform: 'rotate(90deg)' }} />

        {/* Floating Cubes (2) */}
        <FloatingCube style={{ position: 'absolute', top: '10%', right: '30%' }} />
        <FloatingCube style={{ position: 'absolute', bottom: '40%', right: '25%' }} />

        {/* Data Beam (1) */}
        <DataBeam style={{ position: 'absolute', top: '40%', left: '50%' }} />
      </div>

      <Navbar isCvActive={isCVOpen} />

      <main className="container">
        <Hero isCVOpen={isCVOpen} setIsCVOpen={setIsCVOpen} />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
export default App;