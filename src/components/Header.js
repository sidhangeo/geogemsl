import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/geo_gem_logo.png';
import { theme } from '../styles/theme';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={css(styles.header)}>
      <div className={css(styles.logoContainer)}>
        <Link to="/">
          <img src={logo} alt="Geo Gems Logo" className={css(styles.logo)} />
        </Link>
      </div>
      <nav className={css(styles.desktopNav)}>
        <Link to="/" className={css(styles.navLink, isActive('/') && styles.activeLink)}>Home</Link>
        <Link to="/collections" className={css(styles.navLink, isActive('/collections') && styles.activeLink)}>Collections</Link>
        <Link to="/about" className={css(styles.navLink, isActive('/about') && styles.activeLink)}>About</Link>
        <Link to="/contact" className={css(styles.navLink, isActive('/contact') && styles.activeLink)}>Contact</Link>
      </nav>
      <Link to="/" className={css(styles.mobileTitle)}>Geo Gems</Link>
      <div className={css(styles.mobileMenuIcon)} onClick={toggleMenu}>
        ☰
      </div>
      {isMenuOpen && (
        <div className={css(styles.mobileMenu)}>
          <div className={css(styles.closeIcon)} onClick={toggleMenu}>✕</div>
          <Link to="/" className={css(styles.mobileNavLink, isActive('/') && styles.activeMobileLink)} onClick={toggleMenu}>Home</Link>
          <Link to="/collections" className={css(styles.mobileNavLink, isActive('/collections') && styles.activeMobileLink)} onClick={toggleMenu}>Collections</Link>
          <Link to="/about" className={css(styles.mobileNavLink, isActive('/about') && styles.activeMobileLink)} onClick={toggleMenu}>About</Link>
          <Link to="/contact" className={css(styles.mobileNavLink, isActive('/contact') && styles.activeMobileLink)} onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: theme.sizes.headerHeight,
    backgroundColor: theme.colors.headerBackground,
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    borderBottom: `1px solid ${theme.colors.accent}`,
    zIndex: 1000,
  },
  logoContainer: {
    flex: 0,
    marginRight: 'auto',
    [theme.breakpoints.mobile]: {
      flex: 'none',
    },
  },
  logo: {
    height: '40px',
    width: 'auto',
    [theme.breakpoints.mobile]: {
      height: '30px',
    },
  },
  mobileTitle: {
    display: 'none',
    [theme.breakpoints.mobile]: {
      display: 'block',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: theme.colors.primary,
      textDecoration: 'none',
    },
  },
  desktopNav: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    [theme.breakpoints.mobile]: {
      display: 'none',
    },
  },
  navLink: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: theme.colors.text,
    fontWeight: '500',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    ':hover': {
      color: theme.colors.primary,
    },
  },
  activeLink: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  mobileMenuIcon: {
    display: 'none',
    [theme.breakpoints.mobile]: {
      display: 'block',
      fontSize: '1.5rem',
      cursor: 'pointer',
      marginLeft: 'auto',
    },
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    fontSize: '1.5rem',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  mobileNavLink: {
    textDecoration: 'none',
    color: theme.colors.text,
    fontSize: '1.2rem',
    padding: '1rem 0',
    borderBottom: `1px solid ${theme.colors.accent}`,
  },
  activeMobileLink: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
});

export default Header;