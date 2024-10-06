import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { theme } from '../../styles/theme';

function ProductCard({ product }) {
  return (
    <div className={css(styles.card)}>
      <img src={product.image} alt="Product" className={css(styles.image)} />
    </div>
  );
}

const styles = StyleSheet.create({
  card: {
    flexShrink: 0,
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: theme.colors.background,
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export default ProductCard;