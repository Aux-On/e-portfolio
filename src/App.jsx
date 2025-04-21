import { Routes, Route } from 'react-router-dom';
import Achievements from "./pages/Achievements";
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import About from './pages/About';
import Navbar from './components/Navbar';
import background from './assets/bg.jpg';

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-gray-800"
      style={{ backgroundImage: "url('public/bg.jpg')" }}
    >
      {/* White tint overlay */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Site content */}
      <div className="relative z-10">
        <Navbar />
        <main className="w-full flex justify-center">
          <div className="w-full max-w-4xl px-4 py-6">
            <Routes>
              <Route path="/" element={<Achievements />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
