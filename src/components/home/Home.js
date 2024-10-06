import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import TitleSetter from '../TitleSetter';
import { theme } from '../../styles/theme';

function Home() {
  return (
    <>
      <TitleSetter title="Geo Gems - Exquisite Jewelry" />
      <div className={css(styles.homeContainer)}>
        <Hero />
        <ProductGrid />
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: `calc(100vh - ${theme.sizes.headerHeight} - ${theme.sizes.footerHeight})`,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});

export default Home;