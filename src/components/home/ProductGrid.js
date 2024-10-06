import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ProductCard from './ProductCard';

// Import all images from the collections folder
const collectionImages = require.context('../../assets/collections', false, /\.(png|jpe?g|svg)$/)
  .keys()
  .map(require.context('../../assets/collections', false, /\.(png|jpe?g|svg)$/));

// Generate product data from the images
const products = collectionImages.map((image, index) => ({
  id: index + 1,
  image: image,
}));

function ProductGrid() {
  return (
    <div className={css(styles.productGridContainer)}>
      <div className={css(styles.productGrid)}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  productGridContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    height: '100%',
    padding: '1rem',
    gap: '1rem',
    '::-webkit-scrollbar': {
      display: 'none'
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
});

export default ProductGrid;