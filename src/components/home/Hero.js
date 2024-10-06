import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';

const heroImages = require.context('../../assets/hero', false, /\.(png|jpe?g|svg)$/).keys().map(require.context('../../assets/hero', false, /\.(png|jpe?g|svg)$/));

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleShopCollection = () => {
    navigate('/collections');
  };

  return (
    <div className={css(styles.heroContainer)}>
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={css(
            styles.heroImage,
            index === currentImageIndex && styles.activeImage
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className={css(styles.heroContent)}>
        <h1 className={css(styles.heroTitle)}>
          <span className={css(styles.heroTitleMain)}>Crafted Elegance</span>
          <span className={css(styles.heroTitleSub)}>Handmade jewels from Galle Fort's heart</span>
        </h1>
        <button className={css(styles.ctaButton)} onClick={handleShopCollection}>Shop Collection</button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    position: 'relative',
    height: '60%',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0,
    transition: 'opacity 1s ease-in-out',
  },
  activeImage: {
    opacity: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(74, 55, 40, 0.6)', // Dark brown with opacity
    color: theme.colors.background,
    padding: '2rem',
  },
  heroTitle: {
    fontFamily: theme.fonts.title,
    marginBottom: '1rem',
    fontWeight: '400',
    letterSpacing: '1px',
  },
  heroTitleMain: {
    display: 'block',
    fontSize: '3rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  heroTitleSub: {
    display: 'block',
    fontSize: '1.5rem',
    marginTop: '0.5rem',
    fontWeight: '300',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  ctaButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: theme.colors.accent,
    },
  },
});

export default Hero;