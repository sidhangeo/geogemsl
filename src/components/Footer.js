import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { theme } from '../styles/theme';

function Footer() {
  return (
    <footer className={css(styles.footer)}>
      <p className={css(styles.footerText)}>&copy; 2024 Geo Gems. All rights reserved.</p>
    </footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: theme.sizes.footerHeight,
    backgroundColor: theme.colors.footerBackground,
    color: theme.colors.text,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: `1px solid ${theme.colors.accent}`,
  },
  footerText: {
    margin: 0,
    fontSize: '0.8rem',
  },
});

export default Footer;