import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 968) setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 968) setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/">
            <img src="/Logo.png" alt="Robofest Logo" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={`hamburger ${isMobileOpen ? 'active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>

          {/* About Robofest Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'about' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); toggleDropdown('about'); }}
            >
              About Robofest <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/about/association">Association</a></li>
              <li><a href="/about/vision">Vision</a></li>
              <li><a href="/about/partner">Partner</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="/join" className="nav-link">Join & Support</a>
          </li>

          {/* Past Events Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'past' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('past')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#past-events" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); toggleDropdown('past'); }}
            >
              Past Events <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/events/2025">Season 2025</a></li>
              <li><a href="/events/2024">Season 2024</a></li>
              <li><a href="/events/2023">Season 2023</a></li>
              <li><a href="/events/2022">Season 2022</a></li>
            </ul>
          </li>

          {/* Competition Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'competition' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('competition')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#competition" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); toggleDropdown('competition'); }}
            >
              Competition <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/competition/2025">Season 2025</a></li>
              <li><a href="/competition/faq">Questions and Answers</a></li>
            </ul>
          </li>

          {/* Newsroom Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'newsroom' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('newsroom')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#newsroom" 
              className="nav-link"
              onClick={(e) => { e.preventDefault(); toggleDropdown('newsroom'); }}
            >
              Newsroom <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/newsroom/story">Robofest Story</a></li>
              <li><a href="/newsroom/archive">Media Archive</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;