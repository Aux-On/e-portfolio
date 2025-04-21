import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-3 py-2 rounded-lg transition ${
      location.pathname === path
        ? 'bg-blue-500 text-white'
        : 'text-blue-700 hover:bg-blue-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-center space-x-6 text-lg font-medium">
        <Link to="/" className={linkClasses('/')}>Achievements</Link>
        <Link to="/experience" className={linkClasses('/experience')}>Experience</Link>
        <Link to="/skills" className={linkClasses('/skills')}>Skills</Link>
        <Link to="/about" className={linkClasses('/about')}>About Me</Link>
      </div>
    </nav>
  );
}
