import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span>🎯</span>
        CaBa
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/tricks" className={isActive('/tricks') ? 'active' : ''}>
            ⚡ Tricks
          </Link>
        </li>
        <li>
          <Link to="/pyqs" className={isActive('/pyqs') ? 'active' : ''}>
            📚 PYQs
          </Link>
        </li>
        <li>
          <Link to="/mock-test" className={isActive('/mock-test') ? 'active' : ''}>
            📝 Mock Test
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className={isActive('/leaderboard') ? 'active' : ''}>
            🏆 Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/auth" className={isActive('/auth') ? 'active' : ''}>
            👤 Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
