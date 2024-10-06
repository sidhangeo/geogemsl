import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import TitleSetter from '../TitleSetter';

// Import all images from the collections folder
const collectionImages = require.context('../../assets/collections', false, /\.(png|jpe?g|svg)$/).keys().map(require.context('../../assets/collections', false, /\.(png|jpe?g|svg)$/));

function Collections() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <TitleSetter title="Geo Gems - Our Collections" />
      <div className={css(styles.container)}>
        <div className={css(styles.gallery)}>
          {collectionImages.map((image, index) => (
            <div key={index} className={css(styles.imageContainer)} onClick={() => openModal(image)}>
              <img src={image} alt={`Collection item ${index + 1}`} className={css(styles.image)} />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className={css(styles.modal)} onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged view" className={css(styles.modalImage)} />
        </div>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gridGap: '0.5rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gridGap: '1rem',
    },
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalImage: {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
  },
});

export default Collections;