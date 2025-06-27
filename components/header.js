import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isSmallScreen = windowWidth < 768;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      if (searchTerm.trim()) {
        router.push(`/?q=${encodeURIComponent(searchTerm.trim())}`);
        setSearchTerm('');
      } else {
        router.push('/');
      }
    }
  };


  const headerStyles = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    justifyContent: isSmallScreen ? 'center' : 'space-between',
    alignItems: 'center',
    padding: isSmallScreen ? '10px 20px' : '15px 40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    borderBottom: '1px solid #e0e0e0',
    flexWrap: 'wrap', 
    gap: '20px', 
  };

  const logoContainerStyles = {
    marginBottom: isSmallScreen ? '15px' : '0', 
  };

  const navMenuStyles = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    alignItems: isSmallScreen ? 'center' : 'stretch',
    gap: isSmallScreen ? '10px' : '25px',
    width: isSmallScreen ? '100%' : 'auto',
    marginBottom: isSmallScreen ? '15px' : '0', 
  };

  const navLinkBaseStyle = {
    textDecoration: 'none',
    color: '#2e86de',
    fontWeight: '600',
    fontSize: '1.05rem',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    textAlign: isSmallScreen ? 'center' : 'left',
    width: isSmallScreen ? '100%' : 'auto',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#eef4ff';
    e.target.style.color = '#1a5bb4';
    e.target.style.cursor = 'pointer';
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#2e86de';
  };

  const searchBarContainerStyles = {
    display: 'flex',
    alignItems: 'center',

    width: isSmallScreen ? '100%' : '300px', 
    maxWidth: '400px', 
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',

    margin: isSmallScreen ? '0' : '0 20px', 
    order: isSmallScreen ? 3 : 2, 
  };

  const searchInputStyles = {
    flexGrow: 1,
    padding: '8px 12px',
    border: 'none',
    outline: 'none',
    fontSize: '0.95rem',
    backgroundColor: '#f8f8f8',
    color: '#333',
  };

  const searchButtonStyles = {
    backgroundColor: '#2e86de',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'background-color 0.3s ease',
  };

  const searchButtonHoverStyles = {
    backgroundColor: '#1a5bb4',
  };

  const handleSearchButtonMouseEnter = (e) => {
    Object.assign(e.target.style, searchButtonHoverStyles);
  };
  const handleSearchButtonMouseLeave = (e) => {
    Object.assign(e.target.style, searchButtonStyles);
  };

  return (
    <header style={headerStyles}>
      <div style={logoContainerStyles}>
        <Image src="/images/logo.png" alt="Logo Glow Care" width={120} height={30} />
      </div>

      {/* Search Bar - Moved here to be between Logo and Nav */}
      <div style={searchBarContainerStyles}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleSearchSubmit}
          style={searchInputStyles}
        />
        <button
          onClick={handleSearchSubmit}
          style={searchButtonStyles}
          onMouseEnter={handleSearchButtonMouseEnter}
          onMouseLeave={handleSearchButtonMouseLeave}
        >
          🔍
        </button>
      </div>

      <nav style={navMenuStyles}>
        <Link href="/" legacyBehavior>
          <a
            style={navLinkBaseStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Accueil
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a
            style={navLinkBaseStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            À propos
          </a>
        </Link>
      </nav>
    </header>
  );
}