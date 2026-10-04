import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeDropdownTimeout = useRef(null);
  const { pathname } = useLocation();

  const isActivePath = (paths) => paths.some((path) => (
    pathname === path || pathname.startsWith(`${path}/`)
  ));

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 968) {
      clearTimeout(closeDropdownTimeout.current);
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 968) {
      closeDropdownTimeout.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 180);
    }
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
            <a href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</a>
          </li>

          {/* About Robofest Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'about' ? 'active' : ''} ${isActivePath(['/association', '/vision', '/about/partner']) ? 'current' : ''}`}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#about" 
              className={`nav-link ${isActivePath(['/association', '/vision', '/about/partner']) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); toggleDropdown('about'); }}
            >
              About Robofest <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a className={pathname === '/association' ? 'active' : ''} href="/association">Association</a></li>
              <li><a className={pathname === '/vision' ? 'active' : ''} href="/vision">Vision</a></li>
              <li><a className={pathname === '/about/partner' ? 'active' : ''} href="/about/partner">Partner</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="/join" className={`nav-link ${pathname === '/join' ? 'active' : ''}`}>Join & Support</a>
          </li>

          {/* Past Events Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'past' ? 'active' : ''} ${isActivePath(['/past-events', '/events']) ? 'current' : ''}`}
            onMouseEnter={() => handleMouseEnter('past')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#past-events" 
              className={`nav-link ${isActivePath(['/past-events', '/events']) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); toggleDropdown('past'); }}
            >
              Past Events <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a className={pathname === '/events/2025' ? 'active' : ''} href="/events/2025">Season 2025</a></li>
              <li><a className={pathname === '/events/2024' ? 'active' : ''} href="/events/2024">Season 2024</a></li>
              <li><a className={pathname === '/events/2023' ? 'active' : ''} href="/events/2023">Season 2023</a></li>
              <li><a className={pathname === '/events/2022' ? 'active' : ''} href="/events/2022">Season 2022</a></li>
            </ul>
          </li>

          {/* Competition Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'competition' ? 'active' : ''} ${isActivePath(['/competition']) ? 'current' : ''}`}
            onMouseEnter={() => handleMouseEnter('competition')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#competition" 
              className={`nav-link ${isActivePath(['/competition']) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); toggleDropdown('competition'); }}
            >
              Competition <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a className={pathname === '/competition/2026' ? 'active' : ''} href="/competition/2026">Season 2026</a></li>
              <li><a className={pathname === '/competition/faq' ? 'active' : ''} href="/competition/faq">Questions and Answers</a></li>
            </ul>
          </li>

          {/* Newsroom Dropdown */}
          <li 
            className={`nav-item dropdown ${activeDropdown === 'newsroom' ? 'active' : ''} ${isActivePath(['/newsroom']) ? 'current' : ''}`}
            onMouseEnter={() => handleMouseEnter('newsroom')}
            onMouseLeave={handleMouseLeave}
          >
            <a 
              href="#newsroom" 
              className={`nav-link ${isActivePath(['/newsroom']) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); toggleDropdown('newsroom'); }}
            >
              Newsroom <span className="arrow">▾</span>
            </a>
            <ul className="dropdown-menu">
              <li><a className={pathname === '/newsroom/story' ? 'active' : ''} href="/newsroom/story">Robofest Story</a></li>
              <li><a className={pathname === '/newsroom/archive' ? 'active' : ''} href="/newsroom/archive">Media Archive</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;