import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import TitleSetter from '../TitleSetter';
import { theme } from '../../styles/theme';

function About() {
  return (
    <>
      <TitleSetter title="Geo Gems - About Us" />
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>
          <p className={css(styles.paragraph)}>
            Geo Gems is a premier jewelry boutique nestled in the heart of Galle Fort, Sri Lanka. 
            Founded in 2023, we have been crafting exquisite, handmade jewelry that captures the 
            essence of Sri Lankan artistry and the timeless beauty of precious gems.
          </p>
          <h2 className={css(styles.subtitle)}>Our Vision</h2>
          <p className={css(styles.paragraph)}>
            At Geo Gems, we strive to create unique pieces that not only adorn but also tell a story. 
            Each creation is a testament to the rich cultural heritage of Sri Lanka and the skilled 
            craftsmanship of our artisans.
          </p>
          <h2 className={css(styles.subtitle)}>Our Team</h2>
          <p className={css(styles.paragraph)}>
            Led by our Managing Director, M. Sidhan Nilawfer, our team of skilled artisans and 
            designers work tirelessly to bring you jewelry that is both beautiful and meaningful. 
            With decades of combined experience, we take pride in our attention to detail and 
            commitment to quality.
          </p>
          <h2 className={css(styles.subtitle)}>Our Commitment</h2>
          <p className={css(styles.paragraph)}>
            We are committed to ethical sourcing and sustainable practices. All our gems are 
            responsibly sourced, and we use recycled precious metals wherever possible. Our goal 
            is to create stunning jewelry that you can wear with pride, knowing it's been crafted 
            with care for both people and the planet.
          </p>
          <h2 className={css(styles.subtitle)}>Visit Us</h2>
          <p className={css(styles.paragraph)}>
            We invite you to visit our boutique in Galle Fort to experience the magic of Geo Gems 
            firsthand. Our knowledgeable staff will be delighted to guide you through our collections 
            and help you find the perfect piece to treasure for a lifetime.
          </p>
        </div>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    color: theme.colors.text,
    fontFamily: theme.fonts.main,
  },
  title: {
    fontSize: '2.5rem',
    color: theme.colors.primary,
    marginBottom: '1.5rem',
    textAlign: 'center',
    fontFamily: theme.fonts.title,
  },
  subtitle: {
    fontSize: '1.8rem',
    color: theme.colors.secondary,
    marginTop: '1.5rem',
    marginBottom: '1rem',
    fontFamily: theme.fonts.title,
  },
  content: {
    lineHeight: '1.6',
  },
  paragraph: {
    marginBottom: '1rem',
    fontSize: '1rem',
    textAlign: 'justify',
  },
});

export default About;
