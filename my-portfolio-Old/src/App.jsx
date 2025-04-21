// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AchievementsPage from './pages/AchievementsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="bg-white shadow p-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            <Link to="/" className="font-bold text-lg">My ePortfolio</Link>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Achievements</Link>
              {/* Future links for Experiences, Skills, About Me */}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<AchievementsPage />} />
        </Routes>
      </div>
    </Router>
  );
}